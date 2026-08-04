const labs = [
  {
    id: 'ecosystem-map', short: 'Экосистема', tag: 'INDUSTRY · VALUE CHAIN', level: '★☆☆', kind: 'СХЕМА',
    title: 'Собери цепочку ценности',
    story: 'Junior-менеджеру важно видеть не отдельную ссылку, а весь путь: от аудитории партнёра до результата оператора и опыта игрока.',
    task: 'Запиши цепочку из пяти элементов: аудитория → affiliate/партнёр → tracking → оператор → игрок.',
    hint: 'Можно использовать русские или английские термины. Сохрани порядок и не пропускай tracking.',
    solution: 'аудитория → affiliate → tracking → оператор → игрок\n\nМенеджер отвечает за качество перехода между звеньями: fit аудитории, разрешённый источник, корректную атрибуцию, согласованные условия и ответственную коммуникацию.',
    checks: [
      [/аудитори|audience/i, 'добавь аудиторию'],
      [/affiliate|партн[её]р/i, 'добавь affiliate/партнёра'],
      [/track|трекинг|атрибуц/i, 'добавь tracking'],
      [/оператор|brand|бренд/i, 'добавь оператора'],
      [/игрок|player/i, 'добавь игрока']
    ]
  },
  {
    id: 'partner-scorecard', short: 'Qualification', tag: 'RECRUITMENT · SCORECARD', level: '★★☆', kind: 'SCORECARD',
    title: 'Квалифицируй партнёра до outreach',
    story: 'Большой трафик без прозрачности может быть хуже маленького качественного канала. Решение должно опираться на критерии, а не на впечатление.',
    task: 'Назови минимум пять блоков scorecard: GEO/audience fit, traffic source, proof of quality, compliance/reputation и operating readiness.',
    hint: 'Для каждого блока полезно иметь evidence: URL, screenshot, analytics sample, reference или документ.',
    solution: '1. GEO + audience fit\n2. Traffic source transparency\n3. Quality proof: conversion/retention sample\n4. Compliance + reputation\n5. Operating readiness: contacts, reporting, invoicing\n\nДобавь вес, оценку, evidence и красные флаги. Scorecard помогает сравнивать партнёров одинаково.',
    checks: [
      [/GEO|гео|аудитори/i, 'оцени GEO и аудиторию'],
      [/traffic|трафик|источник/i, 'зафиксируй источник трафика'],
      [/proof|evidence|доказ|аналитик|conversion|конвер/i, 'запроси доказательство качества'],
      [/compliance|репутац|нарушен|risk|риск/i, 'проверь compliance и репутацию'],
      [/operat|контакт|report|отч[её]т|invoice|инвойс/i, 'оцени операционную готовность']
    ]
  },
  {
    id: 'outreach', short: 'Outreach', tag: 'RECRUITMENT · MESSAGE', level: '★★☆', kind: 'ПИСЬМО',
    title: 'Напиши не массовый outreach',
    story: 'Сильный первый контакт показывает, почему выбран именно этот партнёр, какую ценность можно проверить и какой следующий шаг предлагается.',
    task: 'Напиши 4–6 предложений: персональный факт о партнёре, fit по UK casino, ценность, вопрос об источнике трафика и CTA на 15-минутный звонок.',
    hint: 'Не обещай ставку до qualification. Один CTA лучше списка из пяти просьб.',
    solution: 'Привет, Anna! Увидел ваш свежий обзор UK casino и отдельный блок про прозрачные bonus terms. Мы готовим лицензированный UK casino launch и ищем SEO-партнёров с похожей аудиторией. Могу поделиться landing pack и прогнозом по funnel после короткой qualification. Подскажите, какой объём UK SEO traffic и placements вы готовы подтвердить? Удобен 15-минутный звонок в четверг?\n\nПочему работает: персонализация → fit → взаимная ценность → qualification question → один CTA.',
    checks: [
      [/увидел|заметил|прочитал|обзор|контент|сайт/i, 'добавь персональный факт'],
      [/\bUK\b|Великобритани/i, 'свяжи сообщение с UK'],
      [/casino|казино/i, 'укажи продукт'],
      [/traffic|трафик|SEO|источник/i, 'спроси об источнике/объёме трафика'],
      [/15.{0,8}мин|звон|call|встреч/i, 'добавь один понятный CTA']
    ],
    rejects: [
      [/гарантированн\w*\s+(доход|заработ)|быстр\w*\s+деньг/i, 'не обещай гарантированный доход'],
      [/уважаем\w*\s+(вебмастер|партн[её]р),?\s*мы\s+лучш/i, 'убери массовый шаблон без персонализации']
    ]
  },
  {
    id: 'cpa-math', short: 'CPA', tag: 'COMMERCIALS · CPA', level: '★☆☆', kind: 'РАСЧЁТ',
    title: 'Посчитай стоимость CPA-сделки',
    story: 'Партнёр прогнозирует 60 qualifying FTD по CPA €120. До переговоров нужно видеть полный cost exposure.',
    task: 'Посчитай комиссию: 60 FTD × €120. Укажи формулу и итог.',
    hint: 'Количество qualifying events умножается на ставку.',
    solution: '60 × €120 = €7 200\n\nЭто верхняя стоимость при выполнении всех qualifying criteria. Отдельно проверь cap, hold period, rejected/duplicate FTD и approval budget.',
    checks: [
      [/60\s*(×|x|\*)\s*€?\s*120|120\s*(×|x|\*)\s*60/i, 'покажи формулу 60 × 120'],
      [/(€\s*)?7[\s,.]?200|7200\s*€/i, 'итог должен быть €7 200']
    ]
  },
  {
    id: 'revshare-math', short: 'RevShare', tag: 'COMMERCIALS · REVSHARE', level: '★☆☆', kind: 'РАСЧЁТ',
    title: 'Посчитай Revenue Share',
    story: 'Согласован RevShare 35%, а NGR за закрытый период равен €18 000 по договорной формуле.',
    task: 'Посчитай комиссию: €18 000 × 35%. Укажи формулу и итог.',
    hint: '35% = 0.35.',
    solution: '€18 000 × 35% = €6 300\n\nДо подтверждения выплаты сверяются currency, period, NGR definition, negative carryover и корректировки.',
    checks: [
      [/18[\s,.]?000\s*(×|x|\*)\s*(35\s*%|0[.,]35)/i, 'покажи формулу 18 000 × 35%'],
      [/(€\s*)?6[\s,.]?300|6300\s*€/i, 'итог должен быть €6 300']
    ]
  },
  {
    id: 'ngr-math', short: 'NGR', tag: 'COMMERCIALS · NGR', level: '★★☆', kind: 'РАСЧЁТ',
    title: 'Не перепутай GGR и NGR',
    story: 'В учебных terms указано: NGR = GGR − bonuses − payment fees − gaming taxes. GGR €25 000, bonuses €4 000, fees €2 000, taxes €1 500; RevShare 30%.',
    task: 'Посчитай NGR и комиссию партнёра. Покажи обе формулы.',
    hint: 'Сначала вычти три категории из GGR, затем примени 30%.',
    solution: 'NGR = €25 000 − €4 000 − €2 000 − €1 500 = €17 500\nCommission = €17 500 × 30% = €5 250\n\nВ реальной работе не используй эту формулу как универсальную: deductions и определения берутся только из конкретных terms.',
    checks: [
      [/25[\s,.]?000[\s\S]*(4[\s,.]?000)[\s\S]*(2[\s,.]?000)[\s\S]*(1[\s,.]?500)/i, 'покажи исходные deductions'],
      [/(€\s*)?17[\s,.]?500|17500\s*€/i, 'NGR должен быть €17 500'],
      [/(€\s*)?5[\s,.]?250|5250\s*€/i, 'комиссия должна быть €5 250'],
      [/30\s*%|0[.,]3/i, 'примени RevShare 30%']
    ]
  },
  {
    id: 'tracking-url', short: 'Tracking URL', tag: 'TRACKING · LINK', level: '★★☆', kind: 'URL',
    title: 'Собери отслеживаемую ссылку',
    story: 'Без дисциплины параметров отчёт распадается на “partnerAlpha”, “Partneralpha” и десятки неизвестных placements.',
    task: 'Собери URL https://brand.example/register с aff_id=842, subid=seo_review_july и UTM: source partneralpha, medium affiliate, campaign casino_uk_launch.',
    hint: 'Первый параметр начинается с ?, остальные — с &. Используй lowercase.',
    solution: 'https://brand.example/register?aff_id=842&subid=seo_review_july&utm_source=partneralpha&utm_medium=affiliate&utm_campaign=casino_uk_launch\n\nПеред отправкой открой URL, проверь redirect, landing, сохранение SubID и появление test click в платформе.',
    checks: [
      [/^https:\/\/brand\.example\/register\?/i, 'начни с полного HTTPS URL'],
      [/[?&]aff_id=842(?:&|$)/i, 'добавь aff_id=842'],
      [/[?&]subid=seo_review_july(?:&|$)/i, 'добавь subid=seo_review_july'],
      [/[?&]utm_source=partneralpha(?:&|$)/i, 'добавь utm_source=partneralpha'],
      [/[?&]utm_medium=affiliate(?:&|$)/i, 'добавь utm_medium=affiliate'],
      [/[?&]utm_campaign=casino_uk_launch(?:&|\s|$)/i, 'добавь utm_campaign=casino_uk_launch']
    ]
  },
  {
    id: 'postback-map', short: 'Postback', tag: 'TRACKING · S2S', level: '★★★', kind: 'URL',
    title: 'Передай conversion через postback',
    story: 'Партнёрский tracker должен связать conversion с исходным кликом и получить статус, сумму и валюту без ручной догадки.',
    task: 'Собери postback URL на https://tracker.partner.example/postback с macros {click_id}, {status}, {payout}, {currency}.',
    hint: 'Названия параметров сделай однозначными: click_id, status, payout, currency.',
    solution: 'https://tracker.partner.example/postback?click_id={click_id}&status={status}&payout={payout}&currency={currency}\n\nТочная syntax macros зависит от платформы. Тестируй approved и rejected status, проверяй encoding, retry/logs и защиту от duplicate events.',
    checks: [
      [/^https:\/\/tracker\.partner\.example\/postback\?/i, 'используй указанный HTTPS endpoint'],
      [/[?&]click_id=\{click_id\}/i, 'передай click_id'],
      [/[?&]status=\{status\}/i, 'передай status'],
      [/[?&]payout=\{payout\}/i, 'передай payout'],
      [/[?&]currency=\{currency\}/i, 'передай currency']
    ]
  },
  {
    id: 'funnel-math', short: 'Funnel', tag: 'ANALYTICS · CONVERSION', level: '★★☆', kind: 'РАСЧЁТ',
    title: 'Разложи funnel по конверсиям',
    story: 'Кампания дала 5 000 clicks, 500 registrations и 100 FTD. Комиссия составила €7 200.',
    task: 'Посчитай click→reg CR, reg→FTD CR, click→FTD CR и EPC.',
    hint: 'CR = следующий этап / предыдущий × 100%. EPC = commission / clicks.',
    solution: 'Click→Reg = 500 / 5 000 = 10%\nReg→FTD = 100 / 500 = 20%\nClick→FTD = 100 / 5 000 = 2%\nEPC = €7 200 / 5 000 = €1.44\n\nТеперь сравнивай эти показатели по GEO, placement, device и зрелому cohort.',
    checks: [
      [/click.{0,12}(reg|registration)[\s\S]{0,30}10\s*%/i, 'click→reg должен быть 10%'],
      [/(reg|registration).{0,12}FTD[\s\S]{0,30}20\s*%/i, 'reg→FTD должен быть 20%'],
      [/click.{0,12}FTD[\s\S]{0,30}2\s*%/i, 'click→FTD должен быть 2%'],
      [/EPC[\s\S]{0,25}(€\s*)?1[.,]44/i, 'EPC должен быть €1.44']
    ]
  },
  {
    id: 'discrepancy-triage', short: 'Discrepancy', tag: 'TRACKING · TRIAGE', level: '★★★', kind: 'ЧЕК-ЛИСТ',
    title: 'Найди причину расхождения',
    story: 'У партнёра 42 FTD, в operator report — 35. Нельзя сразу обвинять платформу или партнёра: сначала нужно сравнить определения и IDs.',
    task: 'Составь triage checklist: period/timezone, filters/GEO, click IDs, event statuses, duplicates, logs/test conversion и escalation pack.',
    hint: 'Иди от одинакового scope к конкретным событиям. Сохраняй read-only evidence.',
    solution: '1. Зафиксировать одинаковые period + timezone\n2. Сверить GEO, campaign, partner и qualifying definition\n3. Выгрузить click/conversion IDs\n4. Разделить approved, pending, rejected и late events\n5. Проверить duplicates и currency\n6. Сверить postback/logs и сделать test conversion\n7. Эскалировать evidence pack с sample IDs и timestamps\n\nНе пересчитывай вручную production-данные без audit trail.',
    checks: [
      [/period|период|date|дата/i, 'сверь период'],
      [/timezone|часов\w*\s+пояс|UTC/i, 'сверь timezone'],
      [/click.{0,5}id|conversion.{0,5}id|идентификатор/i, 'сверь IDs'],
      [/approved|pending|rejected|status|статус/i, 'раздели статусы'],
      [/duplicate|дубл/i, 'проверь duplicates'],
      [/log|postback|test conversion|тестов\w*\s+конверс/i, 'проверь logs/postback тестом'],
      [/escalat|эскал|evidence|доказ/i, 'подготовь escalation evidence']
    ]
  },
  {
    id: 'launch-checklist', short: 'Launch QA', tag: 'ONBOARDING · GO/NO-GO', level: '★★☆', kind: 'ЧЕК-ЛИСТ',
    title: 'Поставь кампании GO или NO-GO',
    story: 'Партнёр готов публиковать через час. Скорость не отменяет договор, ограничения, tracking и approval.',
    task: 'Напиши go-live checklist из минимум шести пунктов: terms, GEO/source, account/deal, creative/promo approval, tracking test, owner/monitoring.',
    hint: 'Пункт считается выполненным только с evidence или ссылкой на источник истины.',
    solution: '□ Signed terms and approved deal\n□ GEO, product and traffic source match scope\n□ Partner account + commission plan verified\n□ Current creative and promo terms approved\n□ Tracking URL + test conversion verified\n□ Launch owner, monitoring window and rollback contact named\n\nЛюбой критический незакрытый пункт = NO-GO.',
    checks: [
      [/term|договор|контракт/i, 'проверь terms/договор'],
      [/GEO|гео/i, 'проверь GEO'],
      [/source|источник|SEO|PPC|traffic|трафик/i, 'проверь источник трафика'],
      [/account|аккаунт|deal|commission|комис/i, 'проверь account и deal'],
      [/creative|креатив|promo|offer|оффер/i, 'проверь creative/promo approval'],
      [/track|трекинг|test conversion|тестов\w*\s+конверс/i, 'проверь tracking'],
      [/owner|владел|monitor|наблюд|rollback|откат/i, 'назначь owner и monitoring']
    ]
  },
  {
    id: 'promo-brief', short: 'Promo terms', tag: 'LAUNCH · OFFER', level: '★★☆', kind: 'БРИФ',
    title: 'Опиши offer прозрачно',
    story: 'Affiliate не должен публиковать только крупную цифру бонуса. Существенные условия должны быть понятны до действия пользователя.',
    task: 'Подготовь promo brief для fictional offer “Deposit £10, get 20 casino free spins”: добавь 18+, GEO UK, eligibility, wagering/material terms, expiry и responsible gambling line.',
    hint: 'Не придумывай юридические условия: обозначь поля, которые должны прийти из approved terms.',
    solution: 'Offer: Deposit £10, get 20 casino free spins\nAudience/GEO: 18+, UK eligible new customers\nMaterial terms: wagering requirement, game eligibility, max conversion and exclusions — use approved terms\nExpiry: exact date/time + timezone\nResponsible gambling: Play responsibly + approved help link\n\nПубликовать можно только утверждённую формулировку с accessible full terms.',
    checks: [
      [/deposit\s*£?10|депозит\w*\s*£?10/i, 'укажи qualifying deposit £10'],
      [/20.{0,15}(free spins|фриспин|вращен)/i, 'укажи 20 free spins'],
      [/18\+/i, 'добавь 18+'],
      [/\bUK\b|Великобритани/i, 'укажи GEO UK'],
      [/eligib|доступ|нов\w*\s+клиент/i, 'укажи eligibility'],
      [/wager|вейджер|отыгрыш|material term|существенн\w*\s+услов/i, 'добавь material terms'],
      [/expir|срок|дат|timezone|UTC/i, 'добавь expiry'],
      [/responsible|ответственн\w*\s+игр|play responsibly/i, 'добавь responsible gambling line']
    ]
  },
  {
    id: 'ad-review', short: 'Ad review', tag: 'COMPLIANCE · ADVERTISING', level: '★★★', kind: 'РИСК-РЕВЬЮ',
    title: 'Останови опасное объявление',
    story: 'Черновик говорит: “Guaranteed income — quit your job!”, использует мультяшного героя и прячет bonus terms за кнопкой.',
    task: 'Назови минимум три причины STOP и предложи безопасное направление исправления.',
    hint: 'Проверь financial security/employment claims, strong appeal to under-18s и material terms.',
    solution: 'STOP:\n1. “Guaranteed income” обещает финансовый результат.\n2. “Quit your job” представляет gambling как альтернативу работе.\n3. Мультяшный герой может иметь strong appeal to under-18s.\n4. Material bonus terms недостаточно заметны.\n\nИсправление: нейтральное product message, adult targeting, approved creative, prominent material terms, 18+ и responsible gambling copy. Финальный текст проходит compliance approval.',
    checks: [
      [/guarantee|гарантир|финанс|доход|заработ/i, 'отметь финансовое обещание'],
      [/job|работ|employment|альтернатив/i, 'отметь представление gambling как альтернативы работе'],
      [/under.?18|несовершеннолет|child|дет|мульт|cartoon|strong appeal/i, 'отметь риск для under-18'],
      [/term|услов|скрыт|прозрач/i, 'отметь скрытые material terms'],
      [/STOP|останов|не публиков|запрет/i, 'дай однозначное решение STOP']
    ],
    rejects: [
      [/можно\s+публиковать|(?:^|\n)\s*(approve|одобрить)(?:\s|$)/im, 'такой черновик нельзя публиковать без полной переработки']
    ]
  },
  {
    id: 'suppression', short: 'Self-exclusion', tag: 'COMPLIANCE · SUPPRESSION', level: '★★★', kind: 'ИНЦИДЕНТ',
    title: 'Останови marketing для self-excluded',
    story: 'Self-excluded пользователь получил affiliate SMS. Это не обычная жалоба и не повод просить его “подтвердить отписку”.',
    task: 'Опиши немедленные действия: stop, suppression, уведомление operator/compliance, evidence, scope check и remediation.',
    hint: 'Сохрани минимум данных, нужных для расследования и предотвращения повторной отправки.',
    solution: '1. Немедленно остановить дальнейший marketing этому пользователю и при необходимости кампанию.\n2. Добавить минимальный identifier в suppression/do-not-contact list.\n3. Уведомить operator owner и compliance по incident process.\n4. Сохранить timestamp, message, source, campaign и delivery evidence.\n5. Проверить scope: другие recipients, channels и affiliate lists.\n6. Исправить процесс, подтвердить suppression и документировать closure.\n\nНе отправляй повторное marketing-сообщение с просьбой “подтвердить отказ”.',
    checks: [
      [/stop|останов|прекрат/i, 'немедленно останови marketing'],
      [/suppress|do.?not.?contact|исключ|стоп.?лист/i, 'добавь suppression'],
      [/operator|оператор|compliance|комплаенс/i, 'уведоми operator/compliance'],
      [/evidence|доказ|timestamp|время|сообщен/i, 'сохрани evidence'],
      [/scope|масштаб|друг\w*\s+(получател|канал|пользоват)|провер/i, 'проверь scope'],
      [/remedi|исправ|предотврат|closure|закрыт/i, 'зафиксируй remediation']
    ],
    rejects: [
      [/попросить.{0,20}(соглас|подтверд|отпис)/i, 'не проси self-excluded пользователя повторно подтверждать отказ']
    ]
  },
  {
    id: 'fraud-signal', short: 'Fraud signals', tag: 'RISK · TRAFFIC QUALITY', level: '★★★', kind: 'TRIAGE',
    title: 'Отдели слабый funnel от fraud',
    story: 'Партнёр дал 12 000 clicks, 1 000 registrations и 5 FTD; много повторяющихся device/IP patterns. Обвинение без расследования испортит отношения, а игнорирование — бюджет.',
    task: 'Составь безопасный план: pause/limit, segment data, sample IDs, fraud/KYC review, partner questions, evidence и decision owner.',
    hint: 'Используй нейтральный язык “anomaly”, пока расследование не завершено.',
    solution: '1. Ограничить масштабирование и сохранить текущую конфигурацию.\n2. Сегментировать по SubID, placement, GEO, device и time.\n3. Подготовить sample click/registration IDs и patterns.\n4. Передать fraud/KYC specialists по approved process.\n5. Запросить у партнёра source breakdown и объяснение placements.\n6. Собрать evidence и назначить owner решения: resume, cap, reject или terminate.\n\nНе называй партнёра мошенником до подтверждённых фактов.',
    checks: [
      [/pause|limit|огранич|приостанов/i, 'ограничи масштабирование'],
      [/segment|сегмент|SubID|placement|device|IP|GEO/i, 'сегментируй данные'],
      [/sample|пример|click.{0,5}id|registration.{0,5}id|идентификатор/i, 'подготовь sample IDs'],
      [/fraud|KYC|риск|специалист/i, 'подключи fraud/KYC review'],
      [/partner|партн[её]р[\s\S]{0,35}(source|источник|placement|размещен)/i, 'запроси объяснение источников'],
      [/evidence|доказ|owner|владел|решен/i, 'сохрани evidence и назначь owner']
    ],
    rejects: [
      [/партн[её]р\s*[-—:]?\s*мошенник|обвинить\s+в\s+мошенничестве/i, 'не обвиняй партнёра до завершения review']
    ]
  },
  {
    id: 'optimization-plan', short: 'Optimization', tag: 'PERFORMANCE · ACTION PLAN', level: '★★☆', kind: 'ПЛАН',
    title: 'Преврати отчёт в действие',
    story: 'Clicks выросли на 40%, но click→FTD упал с 2.4% до 1.3% после нового mobile placement.',
    task: 'Составь план: факт, гипотеза, одно изменение, primary KPI, guardrail, owner, deadline и правило stop/scale.',
    hint: 'Не меняй одновременно landing, offer и deal — потеряешь причинность.',
    solution: 'Fact: mobile placement increased clicks +40%, click→FTD fell 2.4% → 1.3%.\nHypothesis: placement audience/landing mismatch.\nAction: isolate placement and test one mobile landing variant.\nPrimary KPI: click→FTD.\nGuardrail: qualified FTD quality / compliance incidents.\nOwner: Affiliate Manager + CRO owner.\nDeadline: 14 days.\nDecision: scale if CR recovers without guardrail breach; stop if it stays below threshold.\n\nОдна гипотеза и одно изменение позволяют принять решение.',
    checks: [
      [/40\s*%|2[.,]4\s*%|1[.,]3\s*%/i, 'зафиксируй исходный факт'],
      [/hypothesis|гипотез/i, 'сформулируй гипотезу'],
      [/action|действ|test|тест/i, 'задай одно действие'],
      [/KPI|click.{0,8}FTD|конверс/i, 'назови primary KPI'],
      [/guardrail|огранич|quality|качеств|compliance/i, 'добавь guardrail'],
      [/owner|владел/i, 'назначь owner'],
      [/deadline|срок|дн|недел/i, 'задай deadline'],
      [/stop|scale|останов|масштаб/i, 'добавь правило stop/scale']
    ]
  },
  {
    id: 'reconciliation', short: 'Reconciliation', tag: 'OPERATIONS · PAYOUT', level: '★★★', kind: 'ЧЕК-ЛИСТ',
    title: 'Сверь комиссию перед invoice',
    story: 'Partner report и finance statement отличаются. Выплата подтверждается не сообщением в чате, а согласованными данными и terms.',
    task: 'Составь reconciliation checklist: period/timezone, currency/FX, deal version, event statuses, deductions, negative carryover, adjustments и sign-off.',
    hint: 'Сохрани версию отчёта и объяснение каждой ручной корректировки.',
    solution: '□ Same period + timezone\n□ Currency and approved FX source\n□ Correct deal/commission plan version\n□ Approved/pending/rejected/chargeback statuses\n□ NGR deductions per terms\n□ Negative carryover rule\n□ Manual adjustments with evidence\n□ Partner + finance sign-off and archived statement\n\nInvoice создаётся после зафиксированного reconciliation result.',
    checks: [
      [/period|период|timezone|UTC|часов/i, 'сверь period/timezone'],
      [/currency|валют|FX|курс/i, 'сверь currency/FX'],
      [/deal|commission plan|услов|ставк/i, 'сверь версию deal'],
      [/approved|pending|rejected|chargeback|статус/i, 'сверь event statuses'],
      [/deduct|вычет|NGR/i, 'сверь deductions'],
      [/negative carryover|отрицательн\w*\s+перенос/i, 'проверь negative carryover'],
      [/adjust|корректиров/i, 'проверь adjustments'],
      [/sign.?off|согласован|подтвержден|архив/i, 'получи sign-off и архивируй']
    ]
  },
  {
    id: 'capstone-plan', short: 'Capstone', tag: 'CAPSTONE · PARTNER LAUNCH', level: '★★★', kind: 'ПЛАН',
    title: 'Собери полный partner launch',
    story: 'Финальный кейс объединяет рынок, recruitment, deal, tracking, launch, compliance и performance — как на реальной junior-позиции.',
    task: 'Опиши fictional launch plan с полями: partner/GEO/source, deal guardrails, tracking QA, compliance approval, launch checklist, KPI, cadence, owner и stop rule.',
    hint: 'План должен быть проверяемым: у каждого критического шага есть evidence, owner и дата.',
    solution: 'Partner/GEO/source: PartnerAlpha, UK, SEO reviews\nDeal: Hybrid within approved CPA/RS cap; qualifying FTD defined in terms\nTracking: aff_id + SubID + UTM; test click/registration/FTD reconciled\nCompliance: approved copy, 18+, material terms, responsible gambling, source monitored\nLaunch: signed terms, account, assets, QA, go-live owner and monitoring window\nKPIs: click→reg, reg→FTD, qualified FTD, NGR, EPC, compliance incidents\nCadence: daily launch checks, weekly review, monthly reconciliation\nOwner: named per workstream\nStop rule: tracking break, unapproved source/creative or compliance breach\n\nCapstone защищается как decision log, а не как красивая презентация.',
    checks: [
      [/partner|партн[её]р/i, 'назови partner'],
      [/GEO|гео|\bUK\b/i, 'укажи GEO'],
      [/source|источник|SEO|PPC|traffic/i, 'укажи traffic source'],
      [/deal|CPA|RevShare|Hybrid|коммер/i, 'опиши deal guardrails'],
      [/track|SubID|UTM|test conversion|тестов\w*\s+конверс/i, 'опиши tracking QA'],
      [/compliance|approval|18\+|responsible/i, 'добавь compliance approval'],
      [/launch|go.?live|запуск/i, 'добавь launch checklist'],
      [/KPI|FTD|NGR|EPC|conversion|конверс/i, 'задай KPI'],
      [/cadence|weekly|monthly|еженед|ежемесяч/i, 'задай cadence'],
      [/owner|владел/i, 'назначь owner'],
      [/stop|останов|NO.?GO|breach|нарушен/i, 'задай stop rule']
    ]
  }
];

const beginnerLabCopy = {
  'ecosystem-map': {
    short: 'Участники',
    tag: 'МОДУЛЬ 1 · КТО ЕСТЬ КТО',
    title: 'Покажи, кто с кем работает',
    story: 'Игрок видит сайт или приложение, но за результатом стоит цепочка участников. Сначала важно понять роли, а уже потом переходить к цифрам.',
    task: 'Запиши путь из пяти звеньев: аудитория → партнёр → система учёта → игровая компания → игрок.',
    hint: 'Сохрани порядок. Система учёта связывает переход по ссылке с дальнейшими действиями человека.'
  },
  'partner-scorecard': {
    short: 'Проверка',
    tag: 'МОДУЛЬ 2 · ВЫБОР ПАРТНЁРА',
    title: 'Проверь площадку до разговора',
    story: 'Большая аудитория ещё не означает хорошего партнёра. Нужны понятные факты: кто его читает, откуда приходят люди и соблюдает ли он правила.',
    task: 'Составь пять блоков проверки: страна и аудитория, источник посетителей, подтверждение качества, репутация и готовность к совместной работе.',
    hint: 'Для каждого вывода укажи подтверждение: ссылку, снимок экрана, пример отчёта, отзыв или документ.'
  },
  outreach: {
    short: 'Первое письмо',
    tag: 'МОДУЛЬ 2 · ПЕРВЫЙ КОНТАКТ',
    title: 'Напиши личное первое сообщение',
    story: 'Хорошее письмо показывает, почему вы выбрали именно эту площадку, чем можете быть полезны и какой небольшой следующий шаг предлагаете.',
    task: 'Напиши 4–6 предложений: личный факт о площадке, совпадение по рынку, польза для партнёра, вопрос об источнике посетителей и предложение короткого звонка.',
    hint: 'Не обещай деньги до проверки. Заверши письмо одним понятным вопросом.'
  },
  'cpa-math': {
    short: 'Оплата за клиента',
    tag: 'МОДУЛЬ 3 · ФИКСИРОВАННАЯ ОПЛАТА',
    title: 'Посчитай оплату за 60 клиентов',
    story: 'Партнёр ожидает 60 новых клиентов, которые выполнят согласованные условия. За каждого компания платит €120. Такая схема называется CPA — фиксированная оплата за результат.',
    task: 'Посчитай общую комиссию: 60 клиентов × €120. Покажи формулу и итог.',
    hint: 'Количество подтверждённых результатов умножается на ставку.'
  },
  'revshare-math': {
    short: 'Доля от дохода',
    tag: 'МОДУЛЬ 3 · ПРОЦЕНТНАЯ ОПЛАТА',
    title: 'Посчитай долю партнёра',
    story: 'Компания согласовала партнёру 35% от чистого игрового дохода за период. Этот способ оплаты называют Revenue Share, то есть долей от дохода.',
    task: 'Чистый доход равен €18 000. Посчитай комиссию: €18 000 × 35%.',
    hint: 'Для расчёта преврати 35% в 0,35.'
  },
  'ngr-math': {
    short: 'Доход после вычетов',
    tag: 'МОДУЛЬ 3 · ОСНОВА ДЛЯ РАСЧЁТА',
    title: 'Посчитай доход после вычетов',
    story: 'В договоре указано: валовой доход €25 000. Из него вычитают бонусы €4 000, платёжные расходы €2 000 и налог €1 500. Остаток называют NGR — чистым игровым доходом.',
    task: 'Сначала посчитай чистый доход, затем 30% комиссии партнёра. Покажи обе формулы.',
    hint: 'Вычти три суммы из €25 000, затем умножь результат на 0,30.'
  },
  'tracking-url': {
    short: 'Партнёрская ссылка',
    tag: 'МОДУЛЬ 4 · УЧЁТ ПЕРЕХОДОВ',
    title: 'Собери ссылку с метками',
    story: 'Метки в ссылке помогают понять, от какого партнёра и из какого размещения пришёл человек. Единые названия защищают отчёт от путаницы.',
    task: 'Собери адрес https://brand.example/register с полями aff_id=842, subid=seo_review_july и метками: source partneralpha, medium affiliate, campaign casino_uk_launch.',
    hint: 'Первое поле начинается со знака ?, следующие — со знака &. Служебные значения оставь в нижнем регистре.'
  },
  'postback-map': {
    short: 'Передача события',
    tag: 'МОДУЛЬ 4 · ОБМЕН ДАННЫМИ',
    title: 'Передай результат в систему партнёра',
    story: 'Иногда две системы обмениваются событиями напрямую между серверами. Такой запрос называют postback. Он связывает результат с исходным переходом.',
    task: 'Собери адрес https://tracker.partner.example/postback с полями {click_id}, {status}, {payout}, {currency}.',
    hint: 'Поля означают номер перехода, состояние результата, сумму и валюту. Их служебные имена не переводятся.'
  },
  'funnel-math': {
    short: 'Путь в цифрах',
    tag: 'МОДУЛЬ 4 · ПЕРЕХОДЫ МЕЖДУ ЭТАПАМИ',
    title: 'Посчитай долю переходов',
    story: 'Кампания дала 5 000 переходов, 500 регистраций и 100 первых пополнений. Комиссия составила €7 200.',
    task: 'Посчитай долю переходов: из клика в регистрацию, из регистрации в первое пополнение и из клика в первое пополнение. Затем посчитай доход на один клик.',
    hint: 'Доля перехода = следующий этап / предыдущий × 100%. Доход на клик = комиссия / клики.'
  },
  'discrepancy-triage': {
    short: 'Разные цифры',
    tag: 'МОДУЛЬ 4 · ПОИСК ПРИЧИНЫ',
    title: 'Найди причину расхождения',
    story: 'У партнёра 42 первых пополнения, а в отчёте компании — 35. Сначала сравнивают условия подсчёта и отдельные события, а не ищут виноватого.',
    task: 'Составь порядок проверки: период и часовой пояс, страна и фильтры, номера переходов, состояния событий, повторы, журналы системы, пробная операция и передача материалов специалисту.',
    hint: 'Начни с одинаковых границ отчёта, затем переходи к отдельным событиям. Не изменяй исходные данные.'
  },
  'launch-checklist': {
    short: 'Перед запуском',
    tag: 'МОДУЛЬ 5 · РЕШЕНИЕ О ЗАПУСКЕ',
    title: 'Реши: запускать или остановиться',
    story: 'Партнёр готов публиковать через час. Скорость не отменяет договор, ограничения, проверку ссылки и утверждение рекламы.',
    task: 'Составь список минимум из шести проверок: договор, страна и источник посетителей, кабинет и схема оплаты, рекламные материалы, пробная операция, ответственный и время наблюдения.',
    hint: 'Пункт считается закрытым только тогда, когда есть подтверждение или ссылка на него.'
  },
  'promo-brief': {
    short: 'Условия акции',
    tag: 'МОДУЛЬ 5 · ПОНЯТНОЕ ПРЕДЛОЖЕНИЕ',
    title: 'Опиши акцию без скрытых условий',
    story: 'Нельзя показывать только крупную цифру бонуса. Человек должен увидеть существенные условия до того, как примет решение.',
    task: 'Подготовь описание учебной акции: пополнение £10 и 20 бесплатных вращений. Добавь 18+, страну, кто может участвовать, основные ограничения, срок и предупреждение об ответственной игре.',
    hint: 'Не придумывай юридические условия. Отметь поля, которые нужно взять из утверждённых правил акции.'
  },
  'ad-review': {
    short: 'Проверка рекламы',
    tag: 'МОДУЛЬ 7 · БЕЗОПАСНАЯ РЕКЛАМА',
    title: 'Останови опасное объявление',
    story: 'Черновик обещает гарантированный доход, предлагает бросить работу, использует детского персонажа и прячет условия бонуса.',
    task: 'Назови минимум три причины остановить публикацию и предложи безопасное направление исправления.',
    hint: 'Проверь обещания дохода, привлекательность для несовершеннолетних и заметность существенных условий.'
  },
  suppression: {
    short: 'Остановка сообщений',
    tag: 'МОДУЛЬ 7 · ОТКАЗ ОТ ИГРЫ',
    title: 'Останови сообщения исключённому пользователю',
    story: 'Человек ранее попросил закрыть ему доступ к игре, но получил рекламное сообщение партнёра. Такой добровольный запрет называют самоисключением.',
    task: 'Опиши немедленные действия: остановить сообщения, добавить запрет на контакт, уведомить ответственных, сохранить факты, проверить масштаб и исправить процесс.',
    hint: 'Храни только те данные, которые нужны для расследования и предотвращения повторной отправки.'
  },
  'fraud-signal': {
    short: 'Подозрительные данные',
    tag: 'МОДУЛЬ 7 · КАЧЕСТВО ПОСЕТИТЕЛЕЙ',
    title: 'Проверь необычную картину без обвинений',
    story: 'Партнёр дал 12 000 переходов, 1 000 регистраций и только 5 первых пополнений. В данных повторяются устройства и сетевые адреса.',
    task: 'Составь безопасный план: ограничить объём, разделить данные, выбрать примеры, передать проверку специалистам, задать вопросы партнёру, собрать подтверждения и назначить принимающего решение.',
    hint: 'До завершения проверки говори о необычных данных, а не о мошенничестве.'
  },
  'optimization-plan': {
    short: 'Одно улучшение',
    tag: 'МОДУЛЬ 6 · РАБОТА С РЕЗУЛЬТАТОМ',
    title: 'Преврати отчёт в одно действие',
    story: 'После нового размещения на телефонах переходы выросли на 40%, но доля первых пополнений упала с 2,4% до 1,3%.',
    task: 'Запиши факт, одну возможную причину, одно изменение, главный показатель, ограничение безопасности, ответственного, срок и правило продолжить или остановить.',
    hint: 'Не меняй одновременно страницу, акцию и оплату: тогда нельзя понять причину результата.'
  },
  reconciliation: {
    short: 'Сверка выплаты',
    tag: 'МОДУЛЬ 8 · ЗАКРЫТИЕ ПЕРИОДА',
    title: 'Сверь комиссию до счёта',
    story: 'Отчёт партнёра и финансовая ведомость отличаются. Выплату подтверждают согласованными данными, а не сообщением в чате.',
    task: 'Проверь период и часовой пояс, валюту и курс, версию договора, состояния событий, вычеты, перенос отрицательного результата, ручные поправки и согласование сторон.',
    hint: 'Сохрани версию отчёта и объяснение каждой ручной поправки.'
  },
  'capstone-plan': {
    short: 'Итоговый проект',
    tag: 'ФИНАЛ · УЧЕБНЫЙ ЗАПУСК',
    title: 'Собери полный план запуска партнёра',
    story: 'Финальная работа объединяет поиск площадки, договорённость об оплате, учёт, запуск, безопасность и улучшение результата.',
    task: 'Опиши учебный запуск: партнёр, страна и источник посетителей; границы оплаты; проверка ссылки; утверждение рекламы; список перед запуском; показатели; график проверок; ответственные; причины остановки.',
    hint: 'У каждого важного шага должно быть подтверждение, имя ответственного и дата.'
  }
};

const beginnerLabSolutions = {
  'ecosystem-map': 'аудитория → партнёр → система учёта → игровая компания → игрок\n\nМенеджер проверяет каждый переход между звеньями: подходит ли аудитория, разрешён ли источник, работает ли учёт и согласованы ли условия.',
  'partner-scorecard': '1. Страна и совпадение аудитории\n2. Понятный источник посетителей\n3. Подтверждение качества\n4. Репутация и соблюдение правил\n5. Готовность к отчётам и выплатам\n\nПо каждому блоку нужны оценка, подтверждение и повод остановить переговоры.',
  outreach: 'Здравствуйте, Анна! Я прочитал ваш свежий обзор британских игровых сайтов и заметил подробный разбор условий бонусов. Мы готовим запуск лицензированного продукта для той же аудитории и хотим обсудить сотрудничество. Подскажите, какую долю посетителей из Великобритании и какие места размещения вы можете подтвердить? Если направление вам подходит, предлагаю короткий звонок в четверг.\n\nЗдесь есть личный факт, совпадение интересов, вопрос для проверки и один следующий шаг.',
  'cpa-math': '60 × €120 = €7 200.\n\nЭто максимальная сумма по прогнозу. До согласования также проверяют предел бюджета, срок подтверждения результата и причины возможного отклонения клиента.',
  'revshare-math': '€18 000 × 0,35 = €6 300.\n\nПеред выплатой нужно убедиться, что период, валюта и способ расчёта чистого дохода совпадают с договором.',
  'ngr-math': 'Чистый доход: €25 000 − €4 000 − €2 000 − €1 500 = €17 500.\nКомиссия: €17 500 × 0,30 = €5 250.\n\nСостав вычетов всегда берут из конкретного договора.',
  'tracking-url': 'https://brand.example/register?aff_id=842&subid=seo_review_july&utm_source=partneralpha&utm_medium=affiliate&utm_campaign=casino_uk_launch\n\nПеред отправкой открой ссылку, проверь конечную страницу и появление пробного перехода в отчёте.',
  'postback-map': 'https://tracker.partner.example/postback?click_id={click_id}&status={status}&payout={payout}&currency={currency}\n\nТочное написание полей зависит от системы. Перед запуском проверяют успешный и отклонённый результат, повторную отправку и журнал ошибок.',
  'funnel-math': 'Клик → регистрация: 500 / 5 000 = 10%.\nРегистрация → первое пополнение: 100 / 500 = 20%.\nКлик → первое пополнение: 100 / 5 000 = 2%.\nДоход на клик: €7 200 / 5 000 = €1,44.\n\nСравнивай одинаковые страны, места размещения, устройства и периоды.',
  'discrepancy-triage': '1. Выбрать один период и часовой пояс\n2. Сравнить страну, кампанию и правила подсчёта\n3. Выгрузить номера переходов и результатов\n4. Разделить подтверждённые, ожидающие и отклонённые события\n5. Проверить повторы\n6. Сверить журналы и провести пробную операцию\n7. Передать специалисту примеры с номерами и временем\n\nИсходные рабочие данные не исправляют вручную без записи изменений.',
  'launch-checklist': '□ Договор подписан, схема оплаты утверждена\n□ Страна, продукт и источник посетителей разрешены\n□ Кабинет партнёра настроен\n□ Реклама и условия акции утверждены\n□ Ссылка и пробная операция проверены\n□ Назначены ответственный, время наблюдения и контакт для остановки\n\nЛюбой незакрытый критический пункт означает: запуск пока нельзя начинать.',
  'promo-brief': 'Акция: пополнить счёт на £10 и получить 20 бесплатных вращений.\nУчастники: новые совершеннолетние пользователи из Великобритании, которые соответствуют утверждённым правилам.\nВажно показать: срок, доступные игры, требования к использованию, ограничения и ссылку на полные условия.\nБезопасность: отметка 18+ и утверждённая ссылка на помощь.\n\nПубликуется только версия, согласованная ответственным за соблюдение правил.',
  'ad-review': 'ОСТАНОВИТЬ ПУБЛИКАЦИЮ.\n1. Нельзя обещать гарантированный доход.\n2. Нельзя представлять игру заменой работе.\n3. Детский персонаж может привлекать несовершеннолетних.\n4. Существенные условия нельзя прятать.\n\nНужны нейтральное сообщение о продукте, взрослая аудитория, заметные условия, 18+ и проверка ответственным сотрудником.',
  suppression: '1. Немедленно остановить дальнейшие рекламные сообщения этому человеку.\n2. Добавить необходимый идентификатор в список запрета контактов.\n3. Сообщить ответственным за продукт и соблюдение правил.\n4. Сохранить время, сообщение, источник и сведения о доставке.\n5. Проверить другие каналы и получателей.\n6. Исправить процесс и зафиксировать закрытие случая.\n\nНельзя отправлять ещё одно рекламное сообщение с просьбой подтвердить отказ.',
  'fraud-signal': '1. Временно ограничить увеличение объёма.\n2. Разделить данные по размещению, стране, устройству и времени.\n3. Выбрать примеры переходов и регистраций.\n4. Передать их специалистам по риску и проверке клиента.\n5. Запросить у партнёра разбивку источников.\n6. Назначить человека, который решит: продолжить, ограничить, отклонить или прекратить работу.\n\nДо подтверждения фиксируют факты и не обвиняют партнёра.',
  'optimization-plan': 'Факт: переходы с телефонов выросли на 40%, а доля первых пополнений снизилась с 2,4% до 1,3%.\nПредположение: аудитория нового места размещения не совпадает со страницей.\nДействие: отделить это размещение и проверить одну версию страницы для телефонов.\nГлавный показатель: доля первых пополнений.\nСрок: 14 дней.\nРешение: расширять только при восстановлении показателя без нарушений правил; остановить при сохранении падения.',
  reconciliation: '□ Одинаковые период и часовой пояс\n□ Одна валюта и согласованный источник курса\n□ Нужная версия договора и схемы оплаты\n□ Разделены подтверждённые, ожидающие, отклонённые и отменённые результаты\n□ Вычеты соответствуют договору\n□ Учтено правило переноса отрицательного результата\n□ Каждая ручная поправка подтверждена\n□ Партнёр и финансовый сотрудник согласовали итог\n\nСчёт создают после зафиксированной сверки.',
  'capstone-plan': 'Партнёр, страна, источник: PartnerAlpha, Великобритания, поисковые обзоры.\nОплата: смешанная схема в согласованных пределах; результат определён в договоре.\nУчёт: идентификатор партнёра, метка размещения и метки кампании; пробные события сверены.\nБезопасность: утверждённый текст, 18+, заметные условия и наблюдение за источником.\nЗапуск: договор, кабинет, материалы, проверка и ответственный готовы.\nНаблюдение: ежедневно после запуска, затем еженедельно; выплата сверяется ежемесячно.\nОстановка: поломка учёта, запрещённый источник, несогласованная реклама или нарушение правил.'
};

labs.forEach((lab) => {
  Object.assign(lab, beginnerLabCopy[lab.id] || {});
  if (beginnerLabSolutions[lab.id]) lab.solution = beginnerLabSolutions[lab.id];
});

const curriculum = window.AFF0_CURRICULUM || [];
const primers = window.AFF0_PRIMERS || {};
const lessonDetails = window.AFF0_LESSON_DETAILS || {};

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem('aff0-progress') || '{}');
    return {
      courses: parsed.courses && typeof parsed.courses === 'object' ? parsed.courses : {},
      labs: parsed.labs && typeof parsed.labs === 'object' ? parsed.labs : {},
      lessons: parsed.lessons && typeof parsed.lessons === 'object' ? parsed.lessons : {}
    };
  } catch {
    return { courses: {}, labs: {}, lessons: {} };
  }
}

const state = loadState();
let activeLab = labs[0];
const $ = (id) => document.getElementById(id);
const reducedMotionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
const prefersReducedMotion = () => Boolean(reducedMotionQuery?.matches);
let dialogCloseTimer;
let draftStatusTimer;
let sectionScrollFrame = 0;

function loadStoredObject(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '{}');
    return value && typeof value === 'object' ? value : {};
  } catch {
    return {};
  }
}

const labDrafts = loadStoredObject('aff0-lab-drafts');
const capstoneChecklist = loadStoredObject('aff0-capstone-checklist');

function stopSectionScroll() {
  if (!sectionScrollFrame) return;
  window.cancelAnimationFrame(sectionScrollFrame);
  sectionScrollFrame = 0;
}

function scrollToSection(element) {
  if (!element) return;
  stopSectionScroll();
  const scrollMargin = Number.parseFloat(window.getComputedStyle(element).scrollMarginTop) || 0;
  const startY = window.scrollY;
  const targetY = Math.max(0, element.getBoundingClientRect().top + startY - scrollMargin);
  const distance = targetY - startY;

  if (prefersReducedMotion() || Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    return;
  }

  const startedAt = window.performance.now();
  const duration = 320;
  const tick = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = progress < .5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) sectionScrollFrame = window.requestAnimationFrame(tick);
    else sectionScrollFrame = 0;
  };
  sectionScrollFrame = window.requestAnimationFrame(tick);
}

window.addEventListener('wheel', stopSectionScroll, { passive: true });
window.addEventListener('touchstart', stopSectionScroll, { passive: true });

function syncCourseDialogUrl(courseId) {
  const url = new URL(window.location.href);
  if (courseId) url.searchParams.set('module', courseId);
  else url.searchParams.delete('module');
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

function closeCourseDialog() {
  const dialog = $('courseDialog');
  if (!dialog?.open) return;
  if (prefersReducedMotion()) {
    dialog.close();
    document.documentElement.classList.remove('course-dialog-open');
    dialog.classList.remove('is-closing');
    syncCourseDialogUrl('');
    return;
  }

  dialog.classList.add('is-closing');
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    window.clearTimeout(dialogCloseTimer);
    if (dialog.open) dialog.close();
    document.documentElement.classList.remove('course-dialog-open');
    dialog.classList.remove('is-closing');
    syncCourseDialogUrl('');
  };
  dialog.addEventListener('transitionend', finish, { once: true });
  dialogCloseTimer = window.setTimeout(finish, 240);
}

function save() { localStorage.setItem('aff0-progress', JSON.stringify(state)); }

function getModuleLessonProgress(course) {
  const completed = course.lessons.reduce((sum, _, lessonIndex) => {
    const lessonKey = `${course.id}-${String(lessonIndex + 1).padStart(2, '0')}`;
    return sum + (state.lessons[lessonKey] ? 1 : 0);
  }, 0);
  return { completed, total: course.lessons.length, done: completed === course.lessons.length };
}

function updateProgress() {
  const lessonTotal = curriculum.reduce((sum, course) => sum + course.lessons.length, 0);
  const lessonCompleted = curriculum.reduce((sum, course) => sum + getModuleLessonProgress(course).completed, 0);
  const labCompleted = labs.filter((lab) => state.labs[lab.id]).length;
  const total = labs.length + lessonTotal;
  const completed = labCompleted + lessonCompleted;
  const pct = Math.min(100, Math.round((completed / total) * 100));
  $('progressBar').style.width = `${pct}%`;
  $('progressPercent').textContent = pct;
  $('topProgressPercent').textContent = `${pct}%`;
  updateHeroAction();
  renderRouteProgress();
  updateLabProgress();
}

function updateHeroAction() {
  const action = $('heroPrimaryAction');
  if (!action) return;
  let nextLesson;
  curriculum.some((course) => {
    const details = lessonDetails[course.id] || [];
    const index = course.lessons.findIndex((_, lessonIndex) => !state.lessons[`${course.id}-${String(lessonIndex + 1).padStart(2, '0')}`]);
    if (index < 0) return false;
    nextLesson = { course, detail: details[index], index };
    return true;
  });

  if (!nextLesson) {
    action.href = 'lesson.html?module=industry&lesson=ecosystem';
    action.innerHTML = 'Повторить курс <span>→</span>';
    return;
  }

  action.href = `lesson.html?module=${encodeURIComponent(nextLesson.course.id)}&lesson=${encodeURIComponent(nextLesson.detail?.slug || String(nextLesson.index + 1))}`;
  const started = Object.keys(state.lessons).length > 0;
  action.innerHTML = `${started ? 'Продолжить обучение' : 'Начать первый урок'} <span>→</span>`;
}

function updateLabProgress() {
  const complete = labs.filter((lab) => state.labs[lab.id]).length;
  if ($('labProgressCount')) $('labProgressCount').textContent = `${complete} / ${labs.length}`;
}

function renderCapstoneChecklist() {
  const inputs = [...document.querySelectorAll('[data-capstone-item]')];
  inputs.forEach((input) => {
    input.checked = Boolean(capstoneChecklist[input.dataset.capstoneItem]);
  });
  const complete = inputs.filter((input) => input.checked).length;
  $('capstoneProgress').textContent = `${complete} из ${inputs.length} пунктов готово`;
}

function saveCapstoneItem(input) {
  if (input.checked) capstoneChecklist[input.dataset.capstoneItem] = true;
  else delete capstoneChecklist[input.dataset.capstoneItem];
  localStorage.setItem('aff0-capstone-checklist', JSON.stringify(capstoneChecklist));
  renderCapstoneChecklist();
}

function renderRouteProgress() {
  const list = $('routeProgressList');
  const count = $('routeProgressCount');
  if (!list) return;
  const completed = curriculum.filter((course) => getModuleLessonProgress(course).done).length;
  if (count) count.textContent = `${completed}/${curriculum.length}`;
  list.innerHTML = curriculum.map((course, index) => {
    const progress = getModuleLessonProgress(course);
    const status = progress.done ? '✓' : progress.completed ? `${progress.completed}/${progress.total}` : '›';
    return `<a class="route-progress-item ${progress.done ? 'done' : ''}" href="#syllabus" data-route-course="${course.id}">
      <span>${String(index + 1).padStart(2, '0')}</span>
      <b>${course.title}</b>
      <i>${status}</i>
    </a>`;
  }).join('');
  list.querySelectorAll('[data-route-course]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const courseId = link.dataset.routeCourse;
      scrollToSection(document.querySelector('#syllabus'));
      window.setTimeout(() => openCourse(courseId), 360);
    });
  });
}

function renderRoadmap() {
  document.querySelectorAll('.complete-toggle').forEach((button) => {
    const course = curriculum.find((item) => item.id === button.dataset.key);
    if (!course) return;
    const progress = getModuleLessonProgress(course);
    button.classList.toggle('done', progress.done);
    button.removeAttribute('aria-pressed');
    button.setAttribute('aria-label', `${course.title}: пройдено ${progress.completed} из ${progress.total} уроков`);
    button.textContent = progress.done
      ? 'Модуль завершён'
      : progress.completed
        ? `${progress.completed}/${progress.total} · Продолжить`
        : 'Открыть модуль';
    button.onclick = () => openCourse(course.id);
  });
}

function renderLabNav() {
  $('labNav').innerHTML = labs.map((lab, index) => {
    const done = Boolean(state.labs[lab.id]);
    return `<button class="lab-nav-item ${activeLab.id === lab.id ? 'active' : ''} ${done ? 'done' : ''}" data-lab-id="${lab.id}"><span>${done ? '✓' : String(index + 1).padStart(2, '0')}</span>${lab.short}</button>`;
  }).join('');
  document.querySelectorAll('[data-lab-id]').forEach((button) => {
    button.onclick = () => selectLab(button.dataset.labId);
  });
  updateLabProgress();
}

function selectLab(id) {
  activeLab = labs.find((lab) => lab.id === id) || labs[0];
  const labIndex = labs.findIndex((lab) => lab.id === activeLab.id);
  $('labTag').textContent = activeLab.tag;
  $('labLevel').textContent = activeLab.level;
  $('labPosition').textContent = `${String(labIndex + 1).padStart(2, '0')} / ${labs.length}`;
  $('labTitle').textContent = activeLab.title;
  $('labStory').textContent = activeLab.story;
  $('labTask').textContent = activeLab.task;
  $('labHint').textContent = activeLab.hint;
  $('answerKind').textContent = activeLab.kind;
  $('answer').value = labDrafts[activeLab.id] || '';
  $('answerStatus').textContent = labDrafts[activeLab.id] ? 'Черновик восстановлен' : 'Черновик сохраняется';
  const placeholders = {
    URL: 'https://...',
    'РАСЧЁТ': 'Формула → вычисление → итог',
    'ПИСЬМО': 'Тема и текст сообщения...',
    'ЧЕК-ЛИСТ': '□ шаг + evidence',
    'ПЛАН': 'Факт → гипотеза → действие → контроль'
  };
  $('answer').placeholder = placeholders[activeLab.kind] || 'Введи структурированный ответ здесь';
  $('feedback').className = 'feedback';
  $('feedback').textContent = '';
  $('solution').className = 'solution';
  $('solution').textContent = activeLab.solution;
  $('showSolution').disabled = true;
  $('showSolution').textContent = 'Разбор после попытки';
  document.querySelector('.hint-box').open = false;
  renderLabNav();
}

function normalizeAnswer(value) {
  return value
    .replace(/```[\w-]*/g, '')
    .replace(/```/g, '')
    .split('\n')
    .filter((line) => !line.trim().startsWith('<!--'))
    .join('\n')
    .trim();
}

function formatIssue(answer) {
  if (activeLab.kind === 'URL' && !/^https:\/\//i.test(answer.trim())) {
    return 'Tracking и postback URL должны начинаться с https://.';
  }
  if (activeLab.kind === 'URL' && /\s/.test(answer.trim())) {
    return 'В URL не должно быть пробелов.';
  }
  return '';
}

function checkAnswer() {
  const rawAnswer = $('answer').value.trim();
  const answer = normalizeAnswer(rawAnswer);
  const feedback = $('feedback');

  if (!answer) {
    feedback.className = 'feedback error visible';
    feedback.textContent = 'Сначала введи свой вариант. Ошибка — нормальная часть обучения.';
    return;
  }

  $('showSolution').disabled = false;
  $('showSolution').textContent = 'Показать разбор';
  const issue = formatIssue(rawAnswer);
  if (issue) {
    feedback.className = 'feedback error visible';
    feedback.innerHTML = `<b>Формат пока не пройдёт.</b> ${issue}`;
    return;
  }

  const rejected = (activeLab.rejects || [])
    .filter(([test]) => test.test(answer))
    .map(([, help]) => help);
  if (rejected.length) {
    feedback.className = 'feedback error visible';
    feedback.innerHTML = `<b>Рискованное решение.</b> ${rejected.join('; ')}.`;
    return;
  }

  const missing = activeLab.checks
    .filter(([test]) => !test.test(answer))
    .map(([, help]) => help);
  if (missing.length) {
    feedback.className = 'feedback error visible';
    feedback.innerHTML = `<b>Почти, но не всё.</b> Проверь: ${missing.join('; ')}.`;
    return;
  }

  state.labs[activeLab.id] = true;
  save();
  updateProgress();
  renderLabNav();
  $('answerStatus').textContent = 'Ответ проверен';
  feedback.className = 'feedback success visible';
  feedback.innerHTML = '<b>Проверка пройдена ✓</b> Структура решения на месте. Открой разбор и сравни логику, допущения и точки контроля.';
}

function renderSyllabus() {
  const grid = $('syllabusGrid');
  if (!grid) return;
  grid.innerHTML = curriculum.map((course, courseIndex) => {
    const complete = course.lessons.filter((_, lessonIndex) => state.lessons[`${course.id}-${String(lessonIndex + 1).padStart(2, '0')}`]).length;
    const percent = Math.round((complete / course.lessons.length) * 100);
    return `
    <button class="syllabus-card ${course.tone}" data-course-id="${course.id}">
      <span class="syllabus-card-top"><b>МОДУЛЬ ${String(courseIndex + 1).padStart(2, '0')}</b><span>НЕДЕЛИ ${course.weeks}</span></span>
      <h3>${course.title}</h3>
      <p>${course.outcome}</p>
      <span class="syllabus-progress">
        <span class="syllabus-progress-copy"><span>${complete} из ${course.lessons.length} уроков</span><b>${percent}%</b></span>
        <span class="syllabus-progress-track"><span style="width:${percent}%"></span></span>
      </span>
      <span class="syllabus-card-foot"><b>${complete ? 'Продолжить модуль' : 'Открыть программу модуля'}</b><i>→</i></span>
    </button>
  `;
  }).join('');
  grid.querySelectorAll('[data-course-id]').forEach((button) => {
    button.addEventListener('click', () => openCourse(button.dataset.courseId));
  });
}

function openCourse(id) {
  const course = curriculum.find((item) => item.id === id);
  if (!course) return;
  const primer = primers[id];
  const details = lessonDetails[id] || [];
  const courseIndex = curriculum.findIndex((item) => item.id === id);
  const complete = course.lessons.filter((_, lessonIndex) => state.lessons[`${course.id}-${String(lessonIndex + 1).padStart(2, '0')}`]).length;
  const progress = Math.round((complete / course.lessons.length) * 100);
  const nextIndex = Math.max(0, course.lessons.findIndex((_, lessonIndex) => !state.lessons[`${course.id}-${String(lessonIndex + 1).padStart(2, '0')}`]));
  const nextDetail = details[nextIndex];
  const nextHref = `lesson.html?module=${encodeURIComponent(course.id)}&lesson=${encodeURIComponent(nextDetail?.slug || String(nextIndex + 1))}`;
  const actionLabel = complete === course.lessons.length ? 'Повторить модуль' : complete ? 'Продолжить модуль' : 'Начать модуль';
  $('courseDialogContent').innerHTML = `
    <header class="dialog-head">
      <p class="eyebrow">МОДУЛЬ ${String(courseIndex + 1).padStart(2, '0')} ИЗ ${curriculum.length} · НЕДЕЛИ ${course.weeks}</p>
      <h2 id="dialogTitle">${course.title}</h2>
      <p id="dialogDescription">${course.outcome}</p>
      <div class="dialog-module-progress"><span><i style="width:${progress}%"></i></span><b>${complete} / ${course.lessons.length} уроков</b></div>
    </header>
    <div class="dialog-body">
      <section class="dialog-lessons">
        ${primer ? `<article class="dialog-primer"><h3>Ментальная модель</h3><p>${primer.model}</p><div class="primer-flow">${primer.scheme.map((step) => `<span>${step}</span>`).join('<b>→</b>')}</div><h3>Мини-демо</h3><pre><code>${primer.demo}</code></pre><div class="primer-experiment"><b>ЭКСПЕРИМЕНТ</b><p>${primer.experiment}</p></div></article>` : ''}
        <h3>Отдельные уроки модуля</h3>
        <ol class="dialog-lesson-list">${course.lessons.map((lessonTitle, index) => {
          const detail = details[index];
          const lessonId = `${course.id}-${String(index + 1).padStart(2, '0')}`;
          const href = `lesson.html?module=${encodeURIComponent(course.id)}&lesson=${encodeURIComponent(detail?.slug || String(index + 1))}`;
          return `<li class="${state.lessons[lessonId] ? 'done' : ''}"><a class="dialog-lesson-link" href="${href}"><span>${lessonTitle}</span><b>${detail?.minutes || 50} мин →</b></a></li>`;
        }).join('')}</ol>
      </section>
      <aside class="dialog-ready">
        <div class="dialog-artifact"><span>АРТЕФАКТ В ПОРТФОЛИО</span><b>${course.artifact}</b></div>
        <h3>Готов двигаться дальше, если:</h3>
        <ul>${course.ready.map((item) => `<li>${item}</li>`).join('')}</ul>
        <a class="dialog-primary-link" href="${nextHref}">${actionLabel} <span>→</span></a>
      </aside>
    </div>`;
  const dialog = $('courseDialog');
  dialog.classList.remove('is-closing');
  dialog.showModal();
  document.documentElement.classList.add('course-dialog-open');
  syncCourseDialogUrl(id);
}

function setupSectionNavigation() {
  const links = [...document.querySelectorAll('.side-nav a')];
  const nav = document.querySelector('.side-nav');
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}${link.hash}`);
      scrollToSection(target);
    });
  });
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    let activeLink;
    links.forEach((link) => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) activeLink = link;
    });
    if (activeLink && nav?.scrollWidth > nav?.clientWidth) {
      const left = activeLink.offsetLeft - (nav.clientWidth - activeLink.offsetWidth) / 2;
      nav.scrollTo({ left, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  }, { rootMargin: '-20% 0px -65%', threshold: [0, .2, .5] });
  sections.forEach((section) => observer.observe(section));
}

document.querySelectorAll('.open-lab').forEach((button) => {
  button.addEventListener('click', () => {
    selectLab(button.dataset.lab);
    scrollToSection(document.querySelector('#lab'));
  });
});

$('checkAnswer').addEventListener('click', checkAnswer);
$('answer').addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') checkAnswer();
});
$('answer').addEventListener('input', (event) => {
  const value = event.currentTarget.value;
  if (value) labDrafts[activeLab.id] = value;
  else delete labDrafts[activeLab.id];
  localStorage.setItem('aff0-lab-drafts', JSON.stringify(labDrafts));
  $('answerStatus').textContent = 'Черновик сохранён';
  window.clearTimeout(draftStatusTimer);
  draftStatusTimer = window.setTimeout(() => {
    $('answerStatus').textContent = 'Черновик сохраняется';
  }, 1500);
});
$('showSolution').addEventListener('click', () => {
  if ($('showSolution').disabled) return;
  $('solution').classList.toggle('visible');
  $('showSolution').textContent = $('solution').classList.contains('visible') ? 'Скрыть разбор' : 'Показать разбор';
});
$('dialogClose').addEventListener('click', closeCourseDialog);
$('courseDialog').addEventListener('click', (event) => {
  if (event.target === $('courseDialog')) closeCourseDialog();
});
$('courseDialog').addEventListener('cancel', (event) => {
  if (prefersReducedMotion()) return;
  event.preventDefault();
  closeCourseDialog();
});
$('courseDialog').addEventListener('close', () => {
  document.documentElement.classList.remove('course-dialog-open');
});
$('resetProgress').addEventListener('click', () => {
  if (!confirm('Сбросить отмеченные уроки, модули и практические кейсы?')) return;
  state.courses = {};
  state.labs = {};
  state.lessons = {};
  save();
  renderRoadmap();
  renderSyllabus();
  renderLabNav();
  updateProgress();
});
document.querySelector('.copy-prompt').addEventListener('click', async (event) => {
  const button = event.currentTarget;
  const defaultLabel = 'скопировать шаблон';
  try {
    await navigator.clipboard.writeText(button.dataset.prompt);
    button.textContent = 'скопировано ✓';
    button.classList.add('copied');
    setTimeout(() => {
      button.textContent = defaultLabel;
      button.classList.remove('copied');
    }, 1800);
  } catch {
    const helper = document.createElement('textarea');
    helper.value = button.dataset.prompt;
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    const copied = document.execCommand('copy');
    helper.remove();
    button.textContent = copied ? 'скопировано ✓' : 'выдели текст';
  }
});

document.querySelectorAll('[data-capstone-item]').forEach((input) => {
  input.addEventListener('change', () => saveCapstoneItem(input));
});

renderRoadmap();
renderSyllabus();
selectLab('ecosystem-map');
renderCapstoneChecklist();
updateProgress();
setupSectionNavigation();

const requestedCourse = new URLSearchParams(window.location.search).get('module');
if (curriculum.some((course) => course.id === requestedCourse)) openCourse(requestedCourse);
