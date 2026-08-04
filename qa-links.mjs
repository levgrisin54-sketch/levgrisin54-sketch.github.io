import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const ignoredDirectories = new Set(['.git', '.qa', 'node_modules']);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (ignoredDirectories.has(entry.name)) return [];
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function references(file) {
  const source = fs.readFileSync(file, 'utf8');
  const patterns = path.extname(file) === '.css'
    ? [/url\(\s*["']?([^"')]+)["']?\s*\)/gi]
    : [/(?:href|src)\s*=\s*["']([^"']+)["']/gi];
  return patterns.flatMap(pattern => [...source.matchAll(pattern)].map(match => match[1].trim()));
}

function resolveReference(file, reference) {
  if (!reference || reference.startsWith('#') || reference.startsWith('//')) return null;
  if (/^(?:https?:|tel:|mailto:|data:|blob:|javascript:)/i.test(reference)) return null;
  const pathname = decodeURIComponent(reference.split('#')[0].split('?')[0]);
  if (!pathname) return null;
  const target = pathname.startsWith('/') ? path.join(root, pathname.slice(1)) : path.resolve(path.dirname(file), pathname);
  return pathname.endsWith('/') ? path.join(target, 'index.html') : target;
}

const checkedFiles = walk(root).filter(file => ['.html', '.css'].includes(path.extname(file)));
const missing = checkedFiles.flatMap(file => references(file).flatMap(reference => {
  const target = resolveReference(file, reference);
  return target && !fs.existsSync(target) ? [{ file: path.relative(root, file), reference, target: path.relative(root, target) }] : [];
}));

console.log(JSON.stringify({ checkedFiles: checkedFiles.length, missingReferences: missing.length }, null, 2));
if (missing.length) {
  console.error(JSON.stringify(missing, null, 2));
  process.exitCode = 1;
}
