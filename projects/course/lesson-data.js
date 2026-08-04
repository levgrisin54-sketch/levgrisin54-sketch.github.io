window.AFF0_SOURCE_LIBRARY = {
  ukgcThirdParties: {
    title: "UK Gambling Commission — Responsibility for third parties",
    url: "https://www.gamblingcommission.gov.uk/licensees-and-businesses/lccp/condition/1-1-2-responsibility-for-third-parties-all-licences",
    note: "Ответственность licensee, требования к договору, доступу к информации и прекращению отношений."
  },
  ukgcAffiliates: {
    title: "UK Gambling Commission — Affiliates or third parties",
    url: "https://www.gamblingcommission.gov.uk/licensees-and-businesses/guide/page/affiliates-or-third-parties",
    note: "Риски direct marketing, data handling и self-exclusion при работе через affiliates."
  },
  ukgcAdvertising: {
    title: "UK Gambling Commission — Advertising and marketing rules",
    url: "https://www.gamblingcommission.gov.uk/licensees-and-businesses/guide/advertising-marketing-rules-and-regulations",
    note: "Связь licence conditions с UK Advertising Codes и socially responsible marketing."
  },
  ukgcIncentives: {
    title: "UK Gambling Commission — Socially responsible incentives",
    url: "https://www.gamblingcommission.gov.uk/blog/post/socially-responsible-incentives-what-operators-need-to-know",
    note: "Принципы и примеры требований к gambling incentives."
  },
  asaCode: {
    title: "ASA / CAP Code — Section 16 Gambling",
    url: "https://www.asa.org.uk/type/non_broadcast/code_section/16.html",
    note: "Social responsibility, financial claims, targeting и защита under-18s."
  },
  asaUnder18: {
    title: "ASA — Gambling advertising and appeal to children",
    url: "https://www.asa.org.uk/advice-online/betting-and-gaming-appeal-to-children.html",
    note: "Практическое применение strong appeal rule для контента и персон."
  },
  icoPreferences: {
    title: "ICO — Respect people's preferences",
    url: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/direct-marketing-guidance/respect-peoples-preferences/",
    note: "Objections, opt-outs, consent withdrawal и suppression lists."
  },
  icoPecr: {
    title: "ICO — Guide to PECR",
    url: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/",
    note: "Правила electronic communications и direct marketing."
  },
  googleUtm: {
    title: "Google Analytics — Collect campaign data with custom URLs",
    url: "https://support.google.com/analytics/answer/10917952?hl=en",
    note: "UTM parameters, case sensitivity и campaign reporting."
  },
  googleTraffic: {
    title: "Google Analytics — Traffic-source dimensions and tagging",
    url: "https://support.google.com/analytics/answer/11242870?hl=en",
    note: "Source, medium, campaign и логика traffic acquisition dimensions."
  },
  scaleoPostback: {
    title: "Scaleo Help Center — Affiliate Postbacks",
    url: "https://help.scaleo.io/article/517-affiliate-postbacks",
    note: "Click ID, macros, conversion status, payout и проверка S2S postback."
  },
  track360: {
    title: "Track360 — Affiliate management reference",
    url: "https://track360.io/",
    note: "Отраслевой справочник по program operations, KPI и affiliate management."
  },
  affnookRole: {
    title: "Affnook — Online Casino Affiliate Manager role",
    url: "https://affnook.com/online-casino-affiliate-manager/",
    note: "Обзор задач, KPI и навыков operator-side affiliate manager."
  },
  voluumOverview: {
    title: "Voluum — iGaming affiliate marketing overview",
    url: "https://voluum.com/blog/igaming-affiliate-marketing/",
    note: "Отраслевой обзор commercial models, tracking и program types."
  },
  contractFirst: {
    title: "Approved partner terms + internal SOP",
    url: "SOURCES.md#правило-при-расхождении",
    note: "Рабочий источник истины для qualifying events, NGR, deductions, payments, permissions и escalation."
  }
};

const makeLesson = (
  slug,
  minutes,
  why,
  theory,
  workflow,
  example,
  practice,
  deliverable,
  pitfalls,
  checkpoint,
  sources = []
) => ({
  slug,
  minutes,
  why,
  theory,
  workflow,
  example,
  practice,
  deliverable,
  pitfalls,
  checkpoint: { question: checkpoint[0], answer: checkpoint[1] },
  sources
});

window.AFF0_LESSON_DETAILS = {};

window.AFF0_LESSON_DETAILS.industry = [
  makeLesson(
    "ecosystem",
    45,
    "Партнёрский менеджер принимает решения между несколькими компаниями и системами. Пока ты не видишь полную цепочку ценности, легко перепутать владельца продукта, трафика, данных и регуляторного риска.",
    [
      "Оператор — лицензированная B2C-компания или бренд, который принимает игрока, управляет продуктом, KYC, платежами и player account.",
      "Affiliate — независимый партнёр, который привлекает аудиторию через контент, рекламу, community или другой согласованный источник и получает commission.",
      "Провайдеры и платформы — game studios, payments, KYC, CRM и affiliate software; они обеспечивают продукт и измерение, но не заменяют договорные роли.",
      "Регулятор задаёт рамки лицензированной деятельности; program terms и internal SOP переводят эти рамки в ежедневные правила."
    ],
    [
      "Назови юридические и коммерческие стороны.",
      "Нарисуй путь пользователя, данных и денег.",
      "Подпиши владельца каждого решения и системы.",
      "Отметь точки approval, monitoring и escalation."
    ],
    "Fictional SEO-site публикует обзор casino brand. Пользователь переходит по tracking link, оператор создаёт click ID, затем registration и FTD. Affiliate platform атрибутирует событие, finance рассчитывает commission, compliance проверяет размещение. Один click проходит через пять владельцев — поэтому ошибка редко живёт только в одной системе.",
    "Нарисуй ecosystem map для fictional UK casino: audience, affiliate, tracking platform, operator, payment/KYC providers, regulator и finance flow. Для каждой стрелки подпиши, что передаётся.",
    "Одностраничная ecosystem map с legend и владельцами",
    [
      "Считать affiliate сотрудником оператора и обещать от его имени без полномочий.",
      "Смешивать game provider, platform provider и operator.",
      "Рисовать только traffic flow и забывать data, money и compliance flow."
    ],
    [
      "Кто остаётся ответственным за contracted affiliate в рамках UK LCCP 1.1.2?",
      "Licensee остаётся ответственным за действия contracted third party; договор должен требовать соблюдения применимых codes, предоставления информации и позволять prompt termination при breach."
    ],
    ["ukgcThirdParties", "affnookRole"]
  ),
  makeLesson(
    "products",
    50,
    "Casino, sportsbook и live casino отличаются player intent, сезонностью, промо, метриками и рекламными рисками. Одинаковый partner plan нельзя механически переносить между вертикалями.",
    [
      "Sportsbook зависит от событийного календаря, odds, in-play и локальной популярности спорта; acquisition и retention меняются по сезону.",
      "Casino строится вокруг slots, table games и bonus mechanics; контент часто сравнивает games, payments, trust и offer terms.",
      "Live casino добавляет real-time host experience и более высокий operational контекст; poker, bingo и lottery имеют собственные communities и product loops.",
      "Product mix влияет на allowed messaging, economics, cohort maturity и то, какие placements действительно релевантны."
    ],
    [
      "Определи product и player intent.",
      "Определи главный acquisition moment и retention loop.",
      "Сопоставь partner audience с продуктом.",
      "Проверь product-specific restrictions и approved offer."
    ],
    "Футбольный прогнозный сайт может иметь сильный sportsbook fit в сезон турнира, но слабый fit для live casino. Стример casino-контента может давать меньше clicks, зато более подготовленную аудиторию. Решение принимается по fit и качеству, а не по общей reach.",
    "Составь product card для sportsbook и casino: intent, seasonality, typical content, primary funnel risk, retention signal и compliance question. Сравни их в одной таблице.",
    "Сравнительная product card для двух вертикалей",
    [
      "Называть весь iGaming словом casino.",
      "Сравнивать conversion разных продуктов без учёта intent и maturity.",
      "Использовать один creative/offer для любого продукта и GEO."
    ],
    [
      "Почему высокий sportsbook traffic не гарантирует хороший casino result?",
      "У аудитории может быть другой intent, продуктовый fit и lifecycle. Нужно отдельно проверить source, message, landing, conversion и player quality для casino."
    ],
    ["ukgcAdvertising", "voluumOverview"]
  ),
  makeLesson(
    "operator-affiliate-sides",
    45,
    "Вакансия Affiliate Manager может находиться у оператора, affiliate, агентства или сети. Название одинаковое, но цели, данные и конфликт интересов различаются.",
    [
      "Operator-side manager рекрутирует и развивает publishers, контролирует deal cost, tracking, brand/compliance и качество приобретённых игроков.",
      "Affiliate-side manager выбирает operators/offers, управляет traffic monetization, placements и payment reconciliation со своей стороны.",
      "Network или agency может агрегировать несколько brands и publishers; здесь особенно важна прозрачность sub-affiliate chain.",
      "Partnerships Manager часто имеет более широкий scope: integrations, media, sponsorship, strategic alliances и cross-functional launch."
    ],
    [
      "Определи, кто твой работодатель и customer.",
      "Зафиксируй бизнес-цель и доступные данные.",
      "Раздели owned, influenced и escalated decisions.",
      "Проверь, где возникает конфликт интересов."
    ],
    "Operator-side junior видит FTD, NGR и compliance flags, но не должен раскрывать partner A данные partner B. Affiliate-side manager видит placement economics, но может не видеть полную player value. Обе стороны обсуждают один funnel с разной полнотой данных.",
    "Возьми две вымышленные вакансии — operator-side и affiliate-side. Для каждой выпиши customer, KPI, systems, decisions, sensitive data и пять вопросов на интервью.",
    "Role boundary matrix для двух сторон рынка",
    [
      "Предполагать одинаковый доступ к данным у обеих сторон.",
      "Обещать commercial terms, не зная approval level.",
      "Смешивать relationship success и безусловное согласие со всеми запросами партнёра."
    ],
    [
      "Что означает ownership в junior-роли?",
      "Junior владеет качеством подготовки, данными, follow-up и своевременной escalation, но не присваивает себе legal, compliance или budget approval."
    ],
    ["affnookRole", "track360"]
  ),
  makeLesson(
    "player-journey",
    55,
    "Комиссия возникает не из clicks, а из событий player journey. Чтобы находить bottleneck, нужно понимать смысл каждого перехода и его владельца.",
    [
      "Impression и click показывают reach и response, но ещё ничего не говорят о регистрации, eligibility или value.",
      "Registration создаёт account; KYC/verification подтверждает допустимость пользователя по правилам оператора и рынка.",
      "Deposit — финансовое событие, а FTD обычно означает first-time depositor; qualifying FTD может иметь дополнительные договорные критерии.",
      "Retention, repeat deposits, GGR/NGR и responsible gambling signals описывают дальнейшую ценность и качество cohort."
    ],
    [
      "Определи событие и точное business definition.",
      "Назови numerator, denominator и период.",
      "Найди систему-источник и owner этапа.",
      "Сегментируй drop-off до предложения исправления."
    ],
    "Из 5 000 clicks получено 500 registrations и 100 FTD. Click-to-reg = 10%, reg-to-FTD = 20%, click-to-FTD = 2%. Если registrations стабильны, а FTD падает, возможны KYC, payment, GEO или offer issues — не обязательно плохой affiliate traffic.",
    "Построй funnel для synthetic campaign: 12 000 impressions, 3 000 clicks, 360 registrations, 90 KYC completed, 60 FTD. Посчитай все переходы и подпиши возможного owner каждого drop-off.",
    "Funnel table с формулами и owner map",
    [
      "Использовать FTD без определения qualifying criteria.",
      "Складывать события из разных timezone или attribution windows.",
      "Обвинять один этап без сегментации и source data."
    ],
    [
      "Может ли click-to-reg вырасти, а бизнес-результат ухудшиться?",
      "Да. Более лёгкая регистрация или нерелевантный traffic могут увеличить registrations, но снизить KYC, FTD, retention или NGR. Нужен полный KPI tree."
    ],
    ["contractFirst", "track360"]
  ),
  makeLesson(
    "geo-license",
    55,
    "GEO — это не просто страна в отчёте. Оно определяет legal entity, лицензию, продукт, возраст, язык, валюту, payment methods, offer и допустимые каналы.",
    [
      "License matrix связывает GEO с legal entity, licence, product, channel, age threshold и required disclosures.",
      "Localization включает не только перевод, но и currency, dates, cultural context, payments, sport calendar и customer support.",
      "Geo-targeting должен подтверждаться настройками платформы и фактическим placement, а не только обещанием партнёра.",
      "Если GEO или source не подтверждены, менеджер не придумывает правило, а ставит launch на паузу и запрашивает owner approval."
    ],
    [
      "Зафиксируй GEO и legal entity.",
      "Проверь product/channel в актуальной matrix.",
      "Сверь landing, language, currency и offer.",
      "Сохрани approval/evidence до go-live."
    ],
    "UK SEO campaign не равна «англоязычной кампании». Трафик может приходить из других стран, а English creative не доказывает UK targeting. Перед launch проверяются analytics split, placement, redirects и account restrictions.",
    "Создай fictional GEO brief для UK casino SEO: legal/compliance owner, language, currency, product, channel, audience, landing, required copy, prohibited items и evidence.",
    "GEO launch brief с approval fields",
    [
      "Приравнивать язык к GEO.",
      "Копировать условия offer между рынками.",
      "Полагаться только на geo-report партнёра без operator-side validation."
    ],
    [
      "Что делать junior-менеджеру, если в matrix нет нужного channel?",
      "Не интерпретировать отсутствие как разрешение. Зафиксировать запрос, поставить действие на hold и получить письменное решение legal/compliance owner."
    ],
    ["ukgcAdvertising", "contractFirst"]
  ),
  makeLesson(
    "core-kpis",
    60,
    "KPI — это язык решений между acquisition, BI, finance и партнёром. Ошибка в denominator или определении меняет коммерческий вывод.",
    [
      "CR — отношение следующего события к предыдущему; всегда называй оба этапа: click-to-reg, reg-to-FTD или click-to-FTD.",
      "CPA — cost per agreed acquisition event; фактический payout зависит от qualifying criteria, statuses, caps и corrections.",
      "GGR и NGR — revenue measures; NGR formula и deductions не универсальны и читаются в approved terms.",
      "EPC, ROI, ARPU и LTV отвечают на разные вопросы: эффективность traffic, окупаемость, средняя ценность и долгосрочная ценность cohort."
    ],
    [
      "Запиши business question.",
      "Выбери KPI и точное определение.",
      "Укажи period, timezone, currency и cohort.",
      "Проверь источник и только затем сравнивай."
    ],
    "Commission €7 200 при 5 000 clicks даёт EPC €1.44. Но EPC без знания qualifying FTD и player quality не говорит, выгоден ли канал оператору. Для решения нужны cost, NGR, maturity и risk.",
    "Сделай KPI dictionary из 12 метрик курса: formula, unit, source system, refresh cadence, owner, limitations и пример неверной интерпретации.",
    "KPI dictionary для рабочего dashboard",
    [
      "Говорить «conversion» без названия этапов.",
      "Сравнивать NGR до maturation с полным прошлым cohort.",
      "Использовать разные currency или timezone в одном выводе."
    ],
    [
      "Почему NGR нельзя вычислять по универсальной интернет-формуле?",
      "Состав deductions, admin fees, taxes, bonuses, chargebacks и carryover определяется конкретными approved terms и системой расчёта."
    ],
    ["contractFirst", "affnookRole"]
  ),
  makeLesson(
    "partner-channels",
    55,
    "Источник трафика определяет намерение аудитории, скорость запуска, измеримость, fraud surface и compliance controls. Название партнёра не заменяет source-level transparency.",
    [
      "SEO/content ловит существующий search intent; качество зависит от queries, rankings, content accuracy и placement context.",
      "PPC/media buying масштабируется быстро, но требует source/keyword/creative controls, brand bidding rules и прозрачных SubIDs.",
      "Influencer/streamer строит доверие через личность; нужны audience evidence, platform rules, disclosure и under-18 risk review.",
      "Email, community и sub-affiliate traffic требуют особенно ясного consent, list provenance и visibility всей supply chain."
    ],
    [
      "Определи channel и конкретный placement.",
      "Запроси traffic proof и audience evidence.",
      "Сопоставь controls с channel risks.",
      "Зафиксируй allowed source в deal и monitoring."
    ],
    "Два партнёра обещают 10 000 clicks. У SEO-site есть top pages, query split и стабильная история. У network нет sub-affiliate list и placement URLs. Объём одинаковый, но controllability и risk радикально различаются.",
    "Составь channel risk matrix для SEO, PPC, influencer, email и sub-affiliate: intent, speed, evidence, tracking, compliance risk и monitoring signal.",
    "Channel risk matrix для qualification",
    [
      "Записывать source как «web» или «affiliate».",
      "Разрешать partner network без sub-source visibility.",
      "Считать большую reach доказательством adult audience и quality."
    ],
    [
      "Какой минимальный вопрос нужно задать до обсуждения ставки?",
      "Откуда именно придёт traffic: channel, placement, GEO, audience и способ доказать источник. Без этого невозможно оценить fit, economics и compliance."
    ],
    ["asaUnder18", "icoPecr", "track360"]
  ),
  makeLesson(
    "cross-functional",
    45,
    "Affiliate Manager соединяет команды, которые видят разные части одной кампании. Зрелость проявляется в качественном handoff, а не в попытке решить всё самостоятельно.",
    [
      "Acquisition владеет growth plan и portfolio; BI — definitions и reporting; product/CRO — landing и funnel experience.",
      "Compliance/legal интерпретируют правила и дают approvals; finance сверяет commission, invoice, FX и payment.",
      "CRM/retention управляет post-acquisition communication, но affiliate manager должен понимать влияние retention на partner value.",
      "RACI отделяет Responsible, Accountable, Consulted и Informed и предотвращает потерю решения между чатами."
    ],
    [
      "Сформулируй decision и требуемый output.",
      "Назначь accountable owner.",
      "Передай минимальный evidence pack.",
      "Запиши outcome, deadline и next review в CRM."
    ],
    "Tracking discrepancy нельзя просто «перекинуть в BI». Менеджер передаёт одинаковый period, timezone, partner/campaign IDs, sample events и ожидаемый результат. BI возвращает finding; AM переводит его в partner communication и action.",
    "Построй RACI для partner launch: deal, account setup, creative, compliance, tracking QA, go-live, monitoring, reconciliation и incident response.",
    "RACI + handoff template",
    [
      "Писать в общий чат без owner и вопроса.",
      "Передавать raw data без scope и ожидаемого результата.",
      "Считать escalation провалом вместо нормального управления риском."
    ],
    [
      "Что должно быть в хорошем handoff?",
      "Контекст, decision/question, scope, evidence, ограничения, owner, deadline и формат ожидаемого ответа."
    ],
    ["contractFirst", "track360"]
  ),
  makeLesson(
    "working-stack",
    50,
    "Инструменты нужны не ради интерфейса, а для единого source of truth. Junior должен понимать, какое решение живёт в CRM, affiliate platform, BI, task tracker и document repository.",
    [
      "Affiliate platform хранит partner account, tracking, campaign, commission plan, conversions и payout-related data.",
      "CRM хранит relationship context: contacts, qualification, commitments, next step, health и forecast.",
      "BI/dashboard агрегирует KPI; spreadsheet полезен для ad hoc анализа, но не должен становиться скрытой альтернативной бухгалтерией.",
      "Task tracker и document repository хранят implementation work, approvals, terms versions и evidence."
    ],
    [
      "Для каждого field выбери source of truth.",
      "Определи who can view/edit/approve.",
      "Свяжи IDs между системами.",
      "Установи cadence обновления и audit trail."
    ],
    "Ставка зафиксирована в чате, platform содержит старый plan, а spreadsheet — третью цифру. Правильное действие не выбрать удобное значение, а остановить запуск, найти signed/approved source и синхронизировать системы.",
    "Создай data ownership map: 20 рабочих полей — partner ID, legal name, GEO, source, deal version, tracking URL, contact, next step, KPI, invoice status — и их source of truth.",
    "System-of-record matrix",
    [
      "Дублировать критичное поле во многих местах без owner.",
      "Хранить approval только в disappearing chat.",
      "Экспортировать лишние player-level данные для удобства."
    ],
    [
      "Где хранить обещание партнёру о следующем действии?",
      "В CRM/action log с owner и deadline; важное commercial или compliance решение дополнительно связывается с approved document/source."
    ],
    ["contractFirst", "scaleoPostback"]
  ),
  makeLesson(
    "responsible-growth",
    55,
    "В iGaming рост неотделим от защиты пользователя и лицензии. Responsible growth означает, что revenue не оправдывает непрозрачный source, misleading message или обход suppression.",
    [
      "Commercial outcome оценивается вместе с traffic quality, user impact, complaints и compliance incidents.",
      "Approval — конкретное решение для версии creative, GEO, product, channel и периода; оно не переносится автоматически.",
      "Stop authority — обязанность остановить unapproved или harmful activity и немедленно включить нужного owner.",
      "Evidence создаёт воспроизводимость: URL, screenshot, timestamp, version, audience, source, decision и remediation."
    ],
    [
      "Проверь scope и approval.",
      "Оцени user harm и licensing risk.",
      "Прими GO, REVISE или STOP.",
      "Зафиксируй evidence и последующий контроль."
    ],
    "Партнёр приносит высокий NGR, но публикует unapproved claim. Правильный ответ — не «дать ещё неделю из-за revenue», а остановить нарушение, сохранить evidence, включить compliance и определить remediation/contract action.",
    "Составь decision tree для пяти ситуаций: missing terms, unknown traffic source, under-18 risk, tracking outage и self-excluded recipient. Для каждой задай stop condition и owner.",
    "Responsible growth decision tree",
    [
      "Считать compliance задачей только compliance-team.",
      "Откладывать остановку до следующего weekly call.",
      "Удалять evidence после исправления."
    ],
    [
      "Что важнее при конфликте KPI и подтверждённого compliance breach?",
      "Немедленное управление breach: stop/contain, evidence, escalation и remediation. Коммерческий KPI не отменяет применимые требования."
    ],
    ["ukgcThirdParties", "ukgcAdvertising", "asaCode"]
  )
];

window.AFF0_LESSON_DETAILS.recruitment = [
  makeLesson(
    "partner-icp",
    50,
    "ICP не описывает «идеальную компанию вообще». Он фиксирует партнёра, который может законно и повторяемо привести нужную аудиторию в конкретный product/GEO.",
    [
      "Fit состоит из GEO, языка, audience intent, product, channel, scale, quality evidence и operational readiness.",
      "Обязательные критерии отсекают неподходящие варианты; взвешенные критерии помогают сравнивать тех, кто прошёл базовый фильтр.",
      "Negative ICP нужен не меньше positive: запрещённые sources, непрозрачная цепочка, misaligned audience и история нарушений.",
      "ICP меняется по campaign objective: launch, scale, premium cohort, new GEO или reactivation требуют разных партнёров."
    ],
    [
      "Зафиксируй campaign objective.",
      "Раздели must-have, weighted и red flags.",
      "Назначь evidence для каждого критерия.",
      "Определи threshold qualification."
    ],
    "Для UK casino SEO launch must-have: UK audience, adult content context, transparent owned domains, approved SEO source и trackable placements. Большой global traffic без UK split не проходит gate.",
    "Создай ICP для fictional UK casino SEO и отдельный ICP для sportsbook influencer launch. Объясни, почему критерии и веса различаются.",
    "Два ICP-scorecard с evidence fields",
    [
      "Записывать ICP как «крупный качественный партнёр».",
      "Смешивать must-have и nice-to-have.",
      "Не определять evidence и принимать self-reported claim."
    ],
    [
      "Почему traffic volume не должен быть первым gate?",
      "Без GEO, audience, source transparency и compliance fit объём только увеличивает cost и risk; сначала проверяется допустимость и качество."
    ],
    ["track360", "ukgcThirdParties"]
  ),
  makeLesson(
    "discovery-channels",
    45,
    "Market map становится сильнее, когда discovery повторяем и охватывает разные источники, а не зависит от случайных входящих сообщений.",
    [
      "SERP research показывает игроков, реально присутствующих по commercial queries; фиксируй query, GEO, position и page type.",
      "Conference lists, directories и professional communities дают контакты, но не доказывают traffic quality.",
      "Competitor placement review помогает увидеть market structure, не копируя чужие условия или creative.",
      "Referral от известного партнёра повышает доверие, но не отменяет due diligence."
    ],
    [
      "Определи search universe и ключевые queries.",
      "Собери prospects с source URL.",
      "Дедуплицируй legal entity, brand и domain.",
      "Добавь первичную гипотезу fit."
    ],
    "Поиск «best online casino UK» даёт review sites, news/content pages и operator pages. Prospect list должен отличать affiliate от operator и фиксировать конкретную page/placement, а не только domain.",
    "Собери synthetic market map из 20 вымышленных prospects, используя пять discovery channel categories. Добавь source, hypothesis, confidence и next research step.",
    "Market map с происхождением каждого lead",
    [
      "Копировать email-лист без source provenance.",
      "Считать присутствие на конференции доказательством fit.",
      "Не объединять несколько брендов одной legal entity."
    ],
    [
      "Что отличает discovery от qualification?",
      "Discovery создаёт проверяемый список гипотез. Qualification подтверждает fit, source, quality, compliance и readiness по evidence."
    ],
    ["track360", "affnookRole"]
  ),
  makeLesson(
    "seo-affiliates",
    55,
    "SEO-affiliate может давать устойчивый high-intent traffic, но ranking, content accuracy и brand usage меняются. Qualification должна смотреть не только на monthly visits.",
    [
      "Commercial queries, informational content и review pages имеют разный intent и conversion path.",
      "Ranking evidence включает GEO/device, query set, date и landing; один screenshot без контекста слаб.",
      "Content quality оценивается по factual accuracy, update date, material terms, disclosure и responsible presentation.",
      "Brand/non-brand разделение важно для incrementality и brand bidding/keyword rules."
    ],
    [
      "Выбери sample queries и GEO.",
      "Проверь ranking и page context.",
      "Оцени content/compliance quality.",
      "Запроси analytics split и placement plan."
    ],
    "Сайт показывает 200k monthly visits, но UK casino pages получают 4k visits, половина — brand queries. Общий traffic впечатляет, но incremental opportunity определяется нужным segment.",
    "Проведи mock review трёх fictional SEO pages: query intent, rank evidence, traffic split, content freshness, disclosure, terms и proposed placement.",
    "SEO qualification memo",
    [
      "Использовать domain-level traffic как campaign forecast.",
      "Игнорировать brand query dependence.",
      "Оценивать контент только по дизайну."
    ],
    [
      "Какой вопрос превращает SEO traffic claim в проверяемый факт?",
      "Какой объём и conversion относятся именно к нужным GEO, queries и proposed pages за сопоставимый период, и каким analytics evidence это подтверждено?"
    ],
    ["ukgcAdvertising", "asaCode", "googleTraffic"]
  ),
  makeLesson(
    "paid-traffic",
    55,
    "Paid traffic масштабируется быстро, поэтому ошибка в source, keyword, creative или targeting тоже масштабируется быстро. Controls должны существовать до budget.",
    [
      "Source hierarchy включает platform, account, campaign, ad set, creative, keyword/placement и SubID.",
      "Brand bidding, restricted keywords, audience exclusions и GEO rules должны быть письменными и технически наблюдаемыми.",
      "Media buying требует прозрачности supply: собственный account, agency, network, DSP или sub-buyer создают разные control levels.",
      "Forecast строится на spend, CPC/CPM, funnel conversion, qualifying rate и cap, а не только на promised clicks."
    ],
    [
      "Запроси source map и account ownership.",
      "Зафиксируй allowed/prohibited targeting.",
      "Настрой SubID и creative versioning.",
      "Запусти capped test с stop rules."
    ],
    "Партнёр предлагает 50k clicks без keyword list и placements. Вместо большой CPA-сделки менеджер запрашивает source breakdown, создаёт capped test, SubID taxonomy и daily anomaly monitoring.",
    "Составь paid traffic test brief: budget cap, GEO, product, sources, negative keywords, creative approval, SubIDs, KPI, fraud signals и stop rules.",
    "Controlled paid traffic test brief",
    [
      "Разрешать unspecified paid traffic.",
      "Проверять creative только до запуска и не отслеживать замену.",
      "Считать cap достаточной защитой без compliance stop."
    ],
    [
      "Зачем SubID на уровне placement/creative?",
      "Чтобы связать clicks и conversions с конкретным источником, локализовать quality/risk и остановить отдельный segment вместо всей кампании."
    ],
    ["asaCode", "googleUtm", "contractFirst"]
  ),
  makeLesson(
    "influencer-streamer",
    55,
    "В influencer partnership личность одновременно является media channel и частью creative. Нужно оценивать аудиторию, platform context, live behavior и disclosure.",
    [
      "Audience evidence включает age/GEO split, platform analytics, content themes и overlap с target product.",
      "Strong appeal to under-18s оценивается не только по stated audience, но и по persona, cultural associations и context.",
      "Live content требует moderation, approved talking points, prohibited claims, delay/escalation plan и recording evidence.",
      "Disclosure должно ясно показывать commercial relationship; promo terms и responsible gambling copy остаются обязательными."
    ],
    [
      "Проверь audience и persona risk.",
      "Согласуй platform, format и script boundaries.",
      "Утверди assets, disclosure и terms.",
      "Настрой live monitoring и incident contact."
    ],
    "Streamer имеет 82% adult audience, но популярен благодаря игре с сильной youth culture. Процент 18+ не завершает review: compliance оценивает strong appeal, platform targeting и creative context.",
    "Создай influencer due diligence pack: audience evidence, persona/content review, platform, disclosure, script, prohibited claims, moderator, recording и stop signal.",
    "Influencer launch safety pack",
    [
      "Считать self-reported age split достаточным.",
      "Разрешать импровизацию вокруг bonus/financial claims.",
      "Не сохранять запись live placement."
    ],
    [
      "Почему adult targeting не всегда разрешает любой creative?",
      "Content может всё равно иметь strong appeal to under-18s или нарушать другие advertising rules; targeting и content review — отдельные controls."
    ],
    ["asaCode", "asaUnder18", "ukgcAdvertising"]
  ),
  makeLesson(
    "sub-affiliate-networks",
    50,
    "Network расширяет reach, но добавляет слой между оператором и фактическим publisher. Без visibility нельзя управлять source, creative, consent и remediation.",
    [
      "Direct affiliate имеет понятную contractual связь; sub-affiliate chain может включать несколько посредников и разных traffic owners.",
      "Transparency fields: sub-partner ID, domain/app, channel, GEO, placement, creative, data source и contact for remediation.",
      "Contract flow-down должен переносить applicable rules и information duties по цепочке.",
      "Monitoring должен позволять isolate/pause конкретный sub-source и сохранить audit trail."
    ],
    [
      "Нарисуй supply chain до конечного placement.",
      "Запроси source-level identifiers.",
      "Проверь flow-down terms и monitoring.",
      "Определи termination/isolation mechanics."
    ],
    "Network сообщает только aggregate FTD. При complaint невозможно найти publisher. Такая модель не проходит qualification, пока не появятся SubIDs, placement disclosure, creative controls и быстрый takedown process.",
    "Подготовь network questionnaire: ownership, sub-affiliate onboarding, source visibility, consent, creative approval, monitoring, fraud, complaints, data sharing и takedown SLA.",
    "Sub-affiliate transparency questionnaire",
    [
      "Принимать aggregate report без source IDs.",
      "Считать contract с network автоматическим контролем всей цепочки.",
      "Не тестировать takedown/escalation contact."
    ],
    [
      "Какой практический критерий показывает controllability сети?",
      "Способность быстро связать event/placement с конкретным sub-source, получить evidence и остановить его без отключения непричастных источников."
    ],
    ["ukgcThirdParties", "ukgcAffiliates"]
  ),
  makeLesson(
    "due-diligence",
    60,
    "Due diligence защищает бренд, бюджет и пользователей до подписания deal. Это документированная проверка, а не поиск компромата.",
    [
      "Identity review связывает legal entity, owners, brands, domains, contacts, payment details и jurisdiction.",
      "Reputation review ищет credible history: regulator/ASA decisions, complaints patterns, domain changes и unresolved disputes.",
      "Traffic review проверяет source provenance, analytics evidence, placements, data collection и sub-affiliate use.",
      "Risk-based depth означает: чем выше scale, непрозрачность и regulatory exposure, тем больше evidence и approvals."
    ],
    [
      "Подтверди entity и ownership.",
      "Собери traffic/compliance evidence.",
      "Оцени risks и mitigations.",
      "Прими approve, conditional, reject или escalate."
    ],
    "Prospect менял domains, но объясняет migration и показывает ownership/evidence. Это не автоматический reject; решение зависит от причин, history, source continuity и unresolved risks.",
    "Создай due diligence file для fictional partner: entity, ownership, domains, traffic, audience, reputation, complaints, sanctions question, data/privacy, risks, mitigations и reviewer.",
    "Due diligence decision record",
    [
      "Использовать только Google search без прямых документов.",
      "Записывать слухи как факты.",
      "Не указывать date, reviewer и evidence URL."
    ],
    [
      "Что означает conditional approval?",
      "Партнёр может двигаться дальше только после конкретных mitigations/ограничений с owner, сроком и evidence; это не скрытый полный approve."
    ],
    ["ukgcThirdParties", "contractFirst"]
  ),
  makeLesson(
    "traffic-proof",
    55,
    "Traffic proof превращает обещание объёма и качества в проверяемую основу forecast. Хороший evidence отвечает не только «сколько», но и «откуда, когда и для чего».",
    [
      "Минимальные dimensions: period, GEO, channel, placement/page, device, source/medium, clicks, registrations и conversions.",
      "Screenshots удобны, но слабее export/API и должны показывать date range, filters и system context.",
      "Historical conversion переносится в forecast только с учётом brand, product, offer, landing и seasonality differences.",
      "Privacy principle: запрашивай aggregate/synthetic evidence; player-level PII для qualification обычно не нужен."
    ],
    [
      "Сформулируй claim.",
      "Определи достаточный evidence.",
      "Проверь scope и consistency.",
      "Запиши confidence и forecast range."
    ],
    "Партнёр показывает 3% click-to-FTD, но screenshot относится к другому GEO и sportsbook brand. Это полезный signal, но не валидный base forecast для UK casino.",
    "Составь evidence request для SEO partner и оцени три mock evidence: полный export, cropped screenshot и устное обещание. Назначь confidence.",
    "Traffic evidence rubric",
    [
      "Просить raw player data.",
      "Игнорировать filters/timezone на screenshot.",
      "Переносить чужой brand performance как гарантированный результат."
    ],
    [
      "Почему точное число forecast может быть менее честным, чем range?",
      "Новая кампания содержит uncertainty по brand, product, offer, landing и seasonality; range с допущениями показывает риск лучше ложной точности."
    ],
    ["googleTraffic", "contractFirst"]
  ),
  makeLesson(
    "personalized-outreach",
    50,
    "Outreach должен доказать relevance за несколько строк и дать простой следующий шаг. Массовый текст снижает доверие и скрывает отсутствие research.",
    [
      "Персональный факт — конкретный page, audience, market move или content angle, а не имя в шаблоне.",
      "Value proposition соединяет partner goal и operator asset: product fit, exclusive data, localized landing или operational support.",
      "Qualification question проверяет ключевой unknown — source, GEO, placement или timeline — до разговора о ставке.",
      "CTA ограничивает усилие: 15-minute call, reply with evidence или конкретный next step."
    ],
    [
      "Открой prospect research.",
      "Выбери один факт и одну value hypothesis.",
      "Добавь qualification question.",
      "Заверши одним CTA и follow-up date."
    ],
    "Сильное письмо: «Увидел ваш обновлённый UK casino comparison и прозрачный блок terms. Мы готовим localized launch. Какой объём UK SEO traffic приходится на review pages? Если fit есть, обсудим 15 минут в четверг».",
    "Напиши outreach для SEO-site, influencer и network. Каждый текст — до 100 слов, с разным evidence question и без commercial promise.",
    "Три персонализированных outreach message",
    [
      "Начинать со ставки и «лучшего offer».",
      "Использовать ложную персонализацию.",
      "Добавлять несколько CTA и длинную презентацию."
    ],
    [
      "Как измерять качество outreach кроме reply rate?",
      "Смотри qualified reply, meeting-to-qualified, time-to-next-step и причины decline; высокий reply на нерелевантный promise не является успехом."
    ],
    ["affnookRole", "track360"]
  ),
  makeLesson(
    "crm-pipeline",
    50,
    "CRM делает recruitment управляемым: показывает stage, owner, age, next step и причину потери. Без него отношения зависят от памяти и личных чатов.",
    [
      "Stage отражает доказанный факт, а не настроение: prospect, contacted, engaged, qualified, negotiation, onboarding, live, lost.",
      "Exit criteria для stage предотвращают pipeline inflation: qualified требует fit/evidence, negotiation — конкретный commercial scope.",
      "Обязательные поля: entity, contacts, GEO/product/source, score, value hypothesis, risk, owner, next step/date и source.",
      "Lost reason и reactivation date превращают отказ в market intelligence."
    ],
    [
      "Определи stages и exit criteria.",
      "Заполни mandatory fields.",
      "Поставь owner и next action.",
      "Проводи weekly aging/quality review."
    ],
    "Prospect ответил «интересно» — это engaged, не qualified. Stage меняется после подтверждения GEO, source, audience, evidence и readiness.",
    "Спроектируй CRM pipeline с 8 stages, exit criteria, mandatory fields, SLA, lost reasons и dashboard views для junior manager.",
    "CRM pipeline specification",
    [
      "Переводить lead в negotiation после первого ответа.",
      "Хранить next step без даты/owner.",
      "Удалять lost leads и терять причину."
    ],
    [
      "Какое поле сильнее всего предотвращает «зависшие» сделки?",
      "Конкретный next step с owner и due date; stage без следующего действия не управляет движением."
    ],
    ["track360", "contractFirst"]
  )
];

window.AFF0_LESSON_DETAILS.commercials = [
  makeLesson(
    "cpa-basics",
    65,
    "CPA выглядит как простая цена за FTD, но фактическая выплата зависит от определения qualifying player, лимитов и последующей проверки.",
    [
      "Qualifying FTD — не обязательно любой первый депозит: договор может задавать minimum deposit, KYC, GEO, product и исключённые методы оплаты.",
      "Baseline задаёт ожидаемое качество, cap ограничивает оплачиваемый объём, а hold period оставляет время на fraud и compliance review.",
      "Chargeback описывает возврат ранее начисленной комиссии при отмене платежа, дубле, fraud или нарушении источника.",
      "CPA сравнивают не только по ставке, но и по approval rate, effective CPA, сроку оплаты и contribution после acquisition cost."
    ],
    [
      "Перепиши определение qualifying FTD своими словами.",
      "Зафиксируй rate, cap, hold, validation и exclusions.",
      "Посчитай gross, approved и payable commission.",
      "Проверь экономику и получи нужный approval."
    ],
    "При €120 CPA партнёр привёл 50 FTD. Пять не прошли KYC, три оказались дублями, cap равен 40. Оплата считается по 40 approved FTD, а не автоматически как 50 × €120.",
    "Рассчитай выплату по трём сценариям с разными cap, rejection rate и minimum deposit; перечисли данные, которых не хватает для решения.",
    "CPA settlement sheet",
    [
      "Обещать ставку до согласования определения FTD.",
      "Считать rejected players оплачиваемыми.",
      "Не фиксировать cap и период его применения."
    ],
    [
      "Почему самая высокая CPA-ставка может быть худшей сделкой для партнёра?",
      "Из-за строгой квалификации, низкого approval rate, короткого срока атрибуции, cap или долгого hold фактическая выплата может быть ниже."
    ],
    ["contractFirst", "ukgcAffiliates"]
  ),
  makeLesson(
    "revshare-basics",
    65,
    "Revenue Share связывает доход партнёра с качеством и сроком жизни игроков, поэтому критичны не только проценты, но и формула расчёта.",
    [
      "Комиссия обычно равна согласованной доле NGR, но само NGR определяется договором и может включать разные deductions.",
      "Negative carryover переносит отрицательный баланс на следующий период; no-negative-carryover может обнулять его, но условия бывают ограничены.",
      "Tier может зависеть от числа FTD, NGR или другого критерия; важно знать период и то, пересчитывается ли вся база.",
      "RevShare требует cohort-мышления: ранняя выплата не показывает будущую retention, бонусные расходы и chargebacks."
    ],
    [
      "Найди точное NGR definition.",
      "Отметь deductions, carryover, tiers и срок.",
      "Построй расчёт по cohort и месяцам.",
      "Проверь invoice против platform report."
    ],
    "При 30% RevShare от €20 000 GGR нельзя сразу записать €6 000 комиссии: сначала применяются перечисленные в договоре бонусы, налоги, fees и другие допустимые deductions.",
    "Построй трёхмесячную модель RevShare с бонусами, налогом, отрицательным первым месяцем и двумя вариантами carryover.",
    "RevShare cohort calculator",
    [
      "Считать процент от GGR при договорной базе NGR.",
      "Не моделировать отрицательный месяц.",
      "Сравнивать tiers без их threshold и периода."
    ],
    [
      "Что нужно спросить сразу после фразы «дадим 40% RevShare»?",
      "Определение NGR, список deductions, правила negative carryover, tier threshold, срок и условия изменения ставки."
    ],
    ["contractFirst", "affnookRole"]
  ),
  makeLesson(
    "hybrid-model",
    60,
    "Hybrid объединяет быстрый CPA cash flow и долгосрочный RevShare, распределяя риск между оператором и партнёром.",
    [
      "Hybrid записывают как две независимые части: CPA × approved FTD плюс RevShare × contractual NGR.",
      "Чем выше гарантированная CPA-часть, тем обычно меньше долгосрочная доля; сравнение требует одного player cohort.",
      "Модель полезна при неопределённой retention, но не исправляет плохой traffic fit или непрозрачную формулу.",
      "Нужны общие validation rules: один игрок не должен ошибочно оплачиваться несколько раз вне согласованной механики."
    ],
    [
      "Определи обе части и qualification rules.",
      "Смоделируй cohort на 3–12 месяцев.",
      "Сравни risk, cash timing и downside.",
      "Запиши выбранный вариант и assumptions."
    ],
    "Партнёр выбирает между €140 CPA и €70 + 20% NGR. Для качественного cohort второй вариант может выиграть после нескольких месяцев, но для слабой retention — нет.",
    "Сравни CPA, RevShare и Hybrid для одинаковых 100 FTD в downside/base/upside и найди break-even month.",
    "Hybrid comparison model",
    [
      "Складывать проценты и CPA без единой модели.",
      "Игнорировать payment timing.",
      "Гарантировать LTV до созревания cohort."
    ],
    [
      "Как честно сравнить Hybrid с CPA?",
      "Применить обе модели к одному cohort, одинаковым qualification rules и временному горизонту, затем сравнить cash flow и contribution."
    ],
    ["contractFirst"]
  ),
  makeLesson(
    "fixed-fee",
    55,
    "Fixed fee покупает заранее оговорённое размещение или доступ к аудитории, а не гарантированный performance.",
    [
      "Tenancy — плата за позицию/период, listing — за присутствие, sponsorship — за пакет brand inventory; названия не заменяют scope.",
      "SOW должен фиксировать URL/канал, формат, позицию, даты, impressions при наличии, assets, approval и make-good.",
      "Оценка строится через equivalent CPA, CPM, expected value и opportunity cost, но прогноз не превращается в гарантию.",
      "Оплата по milestone снижает риск: например, approval, публикация и подтверждённый delivery."
    ],
    [
      "Опиши inventory и audience evidence.",
      "Зафиксируй deliverables и acceptance criteria.",
      "Посчитай сценарии и максимальную цену.",
      "Согласуй monitoring, proof и make-good."
    ],
    "«Homepage placement на месяц» неполно. Нужны GEO страницы, device, точная позиция, даты, share of voice, маркировка, screenshot evidence и действие при downtime.",
    "Составь SOW и valuation для fictional sponsorship package из трёх размещений.",
    "Fixed-fee SOW + valuation",
    [
      "Покупать обещанный объём без evidence.",
      "Не фиксировать exact placement.",
      "Платить всё до compliance approval."
    ],
    [
      "Какой главный результат fixed-fee сделки контролирует партнёр?",
      "Согласованный delivery размещения; registrations и FTD зависят также от аудитории, предложения, продукта и funnel."
    ],
    ["asaCode", "contractFirst"]
  ),
  makeLesson(
    "ggr-ngr",
    65,
    "GGR и NGR часто звучат стандартно, но коммерческий результат меняется от конкретных договорных определений и deductions.",
    [
      "Упрощённо GGR — stakes минус winnings, но product accounting и adjustments могут отличаться.",
      "NGR получают после договорно определённых deductions: возможны taxes, bonuses, payment costs, platform/admin fees, chargebacks и jackpot contribution.",
      "Нельзя переносить формулу из презентации, старого договора или другой программы без проверки текущих terms.",
      "Waterfall показывает каждое вычитание отдельно и позволяет сверить calculation base."
    ],
    [
      "Скопируй definitions из terms.",
      "Построй GGR-to-NGR waterfall.",
      "Пометь неизвестные и спорные deductions.",
      "Передай legal/finance вопросы владельцу."
    ],
    "GGR €100 000 и NGR €58 000 могут быть корректными только если €42 000 deductions разрешены terms и подтверждены отчётом; само расхождение ещё не доказывает ошибку.",
    "Собери waterfall по mock statement, найди два deduction без договорного основания и подготовь вопросы finance.",
    "GGR-to-NGR reconciliation",
    [
      "Называть NGR «GGR минус бонусы» для любого договора.",
      "Скрывать deductions одной строкой.",
      "Спорить без определения и первичного отчёта."
    ],
    [
      "Какой документ имеет приоритет при расчёте комиссии?",
      "Действующие согласованные terms/договор вместе с подтверждёнными transaction reports, а не общая рыночная формула."
    ],
    ["contractFirst"]
  ),
  makeLesson(
    "player-economics",
    70,
    "Экономика игрока показывает, окупает ли качество cohort стоимость привлечения после переменных расходов.",
    [
      "ARPU требует явно указанной базы и периода; average по active users нельзя бездумно сравнивать с average по FTD.",
      "Retention измеряет возвращение cohort, LTV — накопленную ценность за горизонт, а payback — момент покрытия acquisition cost.",
      "Contribution margin учитывает релевантные переменные расходы и лучше gross revenue отвечает на вопрос устойчивого роста.",
      "Молодые cohort неполны: сравнение требует одинакового maturation window и осторожного forecast."
    ],
    [
      "Зафиксируй cohort и observation window.",
      "Рассчитай revenue, costs и contribution.",
      "Построй cumulative curve и payback.",
      "Сравни с acquisition cost и uncertainty."
    ],
    "Cohort с высоким первым депозитом может иметь меньший 90-day LTV, если игроки не возвращаются. One-day revenue не заменяет retention.",
    "Рассчитай D7/D30/D90 retention, ARPU, cumulative contribution и payback для трёх partner cohorts.",
    "Player economics workbook",
    [
      "Смешивать cohorts разного возраста.",
      "Называть deposits выручкой.",
      "Использовать lifetime без горизонта и assumptions."
    ],
    [
      "Почему новый партнёр может выглядеть хуже зрелого в LTV-отчёте?",
      "Его cohort ещё не успел накопить последующие игровые периоды; нужен одинаковый maturation window или корректная модель."
    ],
    ["affnookRole", "contractFirst"]
  ),
  makeLesson(
    "forecasting",
    70,
    "Forecast превращает traffic evidence и funnel assumptions в диапазон результата, достаточный для решения о бюджете.",
    [
      "Модель строится цепочкой: impressions/traffic → clicks → registrations → KYC/deposit → qualified FTD → NGR/contribution.",
      "Base, downside и upside различаются явно указанными assumptions, а не произвольными итоговыми числами.",
      "Sensitivity показывает, какой input сильнее всего меняет outcome: объём, conversion, approval или player value.",
      "Forecast обновляют после факта; разница forecast vs actual должна улучшать следующие assumptions."
    ],
    [
      "Собери evidence и inputs.",
      "Построй прозрачный funnel.",
      "Создай три сценария и sensitivity.",
      "Укажи confidence, decision и review date."
    ],
    "При 20 000 clicks изменение click-to-FTD с 1% до 0,7% сокращает FTD на 60. Такой driver важнее косметической точности в ставке.",
    "Построй forecast запуска на 8 недель и one-way sensitivity для traffic, CR, approval и 90-day contribution.",
    "Scenario forecast model",
    [
      "Давать одно число без range.",
      "Скрывать источник assumptions.",
      "Не обновлять модель после запуска."
    ],
    [
      "Какой forecast заслуживает большего доверия?",
      "Тот, где inputs связаны с evidence, допущения видны, диапазон отражает uncertainty и назначена дата пересмотра."
    ],
    ["googleTraffic", "contractFirst"]
  ),
  makeLesson(
    "deal-guardrails",
    55,
    "Guardrails позволяют junior-менеджеру двигаться быстро внутри полномочий и вовремя эскалировать риск.",
    [
      "Коммерческий scope включает legal entity, GEO, product, source, model, rate, cap, period, currency и payment terms.",
      "Operational guardrails задают allowed placements, brand bidding, sub-affiliates, creatives, data sharing и launch approval.",
      "Approval matrix показывает, кто согласует исключение: manager, finance, legal, compliance, data/privacy или director.",
      "Устное «можно» не заменяет запись decision, approver, date и exact exception."
    ],
    [
      "Собери deal sheet.",
      "Сверь каждый параметр с guardrail.",
      "Эскалируй exception с impact и options.",
      "Сохрани approval и обнови terms."
    ],
    "Партнёр просит поднять cap — это может быть manager approval. Новый неразрешённый GEO или channel требует отдельной legal/compliance проверки.",
    "Создай red/amber/green approval matrix для 15 типовых requests партнёра.",
    "Deal guardrail matrix",
    [
      "Считать молчание approval.",
      "Расширять GEO через сообщение в чате.",
      "Эскалировать проблему без recommendation."
    ],
    [
      "Что должно быть в качественной эскалации?",
      "Контекст, точный запрос, договорный/коммерческий impact, риск, deadline, варианты и рекомендуемое решение."
    ],
    ["ukgcThirdParties", "contractFirst"]
  ),
  makeLesson(
    "negotiation",
    65,
    "Переговоры — это управляемый обмен ценностью и риском, а не соревнование за максимальную headline rate.",
    [
      "Position — заявленное требование; interest — причина. «Нужен высокий CPA» может означать cash-flow risk, а не только цену.",
      "BATNA — реальная альтернатива без сделки; она задаёт границу, но не служит угрозой.",
      "Tradeables включают rate, cap, exclusivity, placement, creative support, reporting, test period и payment timing.",
      "Conditional language связывает уступку с доказуемой встречной ценностью: if volume/quality, then tier/review."
    ],
    [
      "Подготовь interests, evidence и walk-away.",
      "Расставь tradeables по стоимости.",
      "Задавай вопросы и делай conditional exchange.",
      "Отправь письменный recap без двусмысленности."
    ],
    "Вместо безусловного повышения CPA: «Если первые 30 approved FTD достигнут quality threshold, пересматриваем следующие 50 по agreed tier».",
    "Подготовь negotiation brief и проведи mock-call по CPA/cap/payment dispute.",
    "Negotiation brief + recap",
    [
      "Торговаться только ставкой.",
      "Делать уступку без встречного условия.",
      "Оставлять устные договорённости без recap."
    ],
    [
      "Чем хороший concession отличается от скидки?",
      "Он условный, имеет рассчитанную стоимость и получает взамен ценность или снижение риска."
    ],
    ["contractFirst", "affnookRole"]
  ),
  makeLesson(
    "terms-review",
    75,
    "Terms превращают коммерческую договорённость в исполнимые правила; junior должен находить вопросы, а не подменять юриста.",
    [
      "Проверь parties, effective date, term, renewal, termination, payment, invoice, tax, currency и dispute process.",
      "Commercial schedule должен совпадать с устной сделкой: definitions, validation, cap, carryover, deductions и reporting.",
      "Control clauses охватывают audit, records, IP/brand, confidentiality, data/privacy, sub-affiliates и compliance.",
      "Приоритет документов и change mechanism важны: кто и как может обновить commission plan или policy."
    ],
    [
      "Сверь deal recap с draft.",
      "Пройди checklist clause-by-clause.",
      "Составь issue log: clause, risk, question, owner.",
      "Получи approval и сохрани executed version."
    ],
    "Если email обещает no negative carryover, а schedule его не исключает, запуск нельзя строить на email: несоответствие нужно устранить в согласованном документе.",
    "Проведи business review mock agreement: найди 12 вопросов, назначь owner и приоритет; не давай юридическое заключение.",
    "Terms issue log",
    [
      "Редактировать legal clause без владельца.",
      "Проверять только rate.",
      "Запускать по неподписанному противоречивому draft."
    ],
    [
      "Где заканчивается роль Junior Partnerships Manager?",
      "Он проверяет business completeness, фиксирует расхождения и эскалирует legal/compliance вопросы уполномоченным владельцам."
    ],
    ["ukgcThirdParties", "contractFirst"]
  )
];

window.AFF0_LESSON_DETAILS.tracking = [
  makeLesson(
    "affiliate-platform",
    60,
    "Affiliate platform хранит идентичность партнёра, кампании, клика, события и комиссии — основу измеримой работы.",
    [
      "Partner account связывает entity и пользователей; campaign задаёт scope, tracker/creative различают placements.",
      "Commission plan применяет правила к событиям, но конфигурация должна соответствовать подписанным terms.",
      "Roles и least privilege ограничивают изменение payout, просмотр sensitive data и создание доступов.",
      "Audit log и effective dates позволяют восстановить, кто изменил настройку и какой период затронут."
    ],
    [
      "Нарисуй entity-to-event map.",
      "Сверь account, campaign и commission plan.",
      "Проверь permissions и effective dates.",
      "Сохрани QA evidence."
    ],
    "Один partner может иметь trackers для SEO и influencer. Если всё идёт через общий link, команда теряет placement-level insight и сложнее расследует качество.",
    "Настрой на бумаге fictional partner account: роли, campaigns, trackers, creatives и commission plan.",
    "Affiliate platform configuration map",
    [
      "Выдавать admin всем контактам.",
      "Менять payout задним числом без approval.",
      "Использовать один tracker для всех sources."
    ],
    [
      "Почему договор и настройка платформы проверяются вместе?",
      "Платформа исполняет экономику технически; несовпадение с terms создаёт неверные начисления и disputes."
    ],
    ["scaleoPostback", "track360"]
  ),
  makeLesson(
    "tracking-url",
    55,
    "Tracking URL должен передать нужные идентификаторы и привести пользователя на разрешённую релевантную страницу.",
    [
      "Base tracking domain и path задаёт платформа; affiliate/campaign IDs идентифицируют отношения и кампанию.",
      "SubID передаёт контролируемую partner segmentation: placement, creative или keyword bucket без персональных данных.",
      "Landing/deeplink должен быть разрешён, локализован и устойчив к redirect; параметры нужно URL-encode.",
      "Shorteners и несколько redirect могут удалять query parameters, менять домен или мешать проверке."
    ],
    [
      "Выбери approved campaign и landing.",
      "Добавь controlled SubID/UTM.",
      "Открой link на desktop/mobile и нужном GEO.",
      "Сверь final URL и recorded click."
    ],
    "SubID `review_top_mobile` полезен; email игрока или цифровой отпечаток устройства в открытом URL создают ненужный риск для приватности.",
    "Собери пять tracking URLs по naming sheet, затем проверь encoding, redirects и запись параметров.",
    "Tracking link registry",
    [
      "Редактировать системные IDs вручную.",
      "Передавать PII в SubID.",
      "Публиковать ссылку без end-to-end click test."
    ],
    [
      "Что доказывает успешное открытие landing page?",
      "Только доставку страницы; отдельно нужно подтвердить запись клика, параметров и последующих событий."
    ],
    ["googleUtm", "scaleoPostback"]
  ),
  makeLesson(
    "utm-naming",
    55,
    "Единый UTM naming делает acquisition traffic сопоставимым и не дробит отчёты случайными вариантами регистра.",
    [
      "Google рекомендует как минимум utm_source, utm_medium и utm_campaign; content/term помогают различать creative и keyword.",
      "Значения UTM чувствительны к регистру: `Affiliate` и `affiliate` могут стать разными строками.",
      "Naming dictionary задаёт allowed values, separator, transliteration, ownership и change process.",
      "UTM описывает marketing context, а platform IDs обеспечивают affiliate attribution; одно не заменяет другое."
    ],
    [
      "Определи dimensions и controlled values.",
      "Собери URL через шаблон.",
      "Проверь case, encoding и destination.",
      "Подтверди данные в acquisition report."
    ],
    "Кампания `uk_launch_q3`, source `partnername`, medium `affiliate`, content `review_top_v2` читается лучше, чем свободные `SummerPromoFinalNEW`.",
    "Создай UTM dictionary и исправь 20 намеренно грязных campaign names.",
    "UTM naming convention",
    [
      "Менять регистр без правила.",
      "Помещать имя/телефон в параметры.",
      "Ожидать, что UTM сам начислит commission."
    ],
    [
      "Где в Google Analytics проверять campaign parameters?",
      "В измерениях Traffic acquisition; точный интерфейс может меняться, поэтому важнее проверить recorded source/medium/campaign."
    ],
    ["googleUtm", "googleTraffic"]
  ),
  makeLesson(
    "click-id-attribution",
    65,
    "Click ID соединяет конкретный переход с server-side conversion и позволяет объяснить путь атрибуции.",
    [
      "При клике платформа создаёт уникальный click ID и сохраняет campaign/partner context.",
      "Оператор должен сохранить ID до нужного события и передать его обратно через integration/postback.",
      "Attribution rule определяет eligible click: например last eligible click в согласованном окне; правило нужно документировать.",
      "Click ID — технический ключ, не доказательство качества: status и business qualification применяются отдельно."
    ],
    [
      "Сделай тестовый переход.",
      "Запиши click ID в обеих системах.",
      "Создай test conversion.",
      "Сверь attribution, status и timestamps."
    ],
    "Если registration сохранила один ID, а deposit отправил другой из-за перезаписи session, FTD может уйти не тому source. Нужен event-level trace.",
    "Нарисуй sequence diagram click → session → registration → FTD → postback и разберись с тремя конфликтующими кликами.",
    "Attribution sequence map",
    [
      "Искать игрока только по имени.",
      "Считать любой последний click eligible.",
      "Не фиксировать timezone и timestamp."
    ],
    [
      "Что нужно для воспроизводимого attribution decision?",
      "Идентификаторы, timestamps/timezone, campaign/source, rule/window, event status и логи передачи."
    ],
    ["scaleoPostback", "voluumOverview"]
  ),
  makeLesson(
    "cookie-window",
    60,
    "Cookie window и browser restrictions определяют, как долго и насколько надёжно client-side сигнал связывается с conversion.",
    [
      "Attribution window — договорное/техническое правило допустимого интервала между click и event.",
      "Last-click выбирает последний eligible touch, но eligibility зависит от channel rules, consent и данных.",
      "Удаление cookies, cross-device journey, browser policies и privacy controls создают потерю browser-side continuity.",
      "S2S повышает устойчивость передачи известных ID, но не восстанавливает click ID, который никогда не был сохранён."
    ],
    [
      "Документируй rule и window.",
      "Проверь storage/consent flow.",
      "Тестируй direct, repeat и cross-device cases.",
      "Измеряй unattributed share без выдуманного uplift."
    ],
    "Игрок кликнул на телефоне, а внёс депозит на laptop. Без согласованной cross-device identity две сессии нельзя автоматически считать одной.",
    "Сравни пять journeys и реши attribution по заданным правилам, отдельно обозначив неизвестные.",
    "Attribution decision table",
    [
      "Обещать 100% tracking.",
      "Смешивать cookie duration и договорный qualification period.",
      "Приписывать unattributed conversions вручную без evidence."
    ],
    [
      "Решает ли S2S все ограничения cookies?",
      "Нет. Оно надёжнее передаёт сохранённый идентификатор между серверами, но исходный click и законное связывание всё равно нужны."
    ],
    ["scaleoPostback", "icoPecr"]
  ),
  makeLesson(
    "s2s-postback",
    75,
    "S2S postback передаёт conversion между серверами по click ID и должен быть протестирован на поля, статусы и безопасность.",
    [
      "Endpoint принимает параметры через macros: click ID, goal/event, status, payout, currency и transaction ID — точный набор задаёт интеграция.",
      "Macros должны совпадать по имени и encoding; literal placeholder в запросе означает ошибку конфигурации.",
      "Pending/approved/rejected events могут отправляться разными вызовами; обновление не должно превращаться в duplicate conversion.",
      "Security token, allowlist, signature и logs защищают endpoint и помогают расследованию."
    ],
    [
      "Создай test click и сохрани ID.",
      "Вызови sandbox/test event.",
      "Проверь response, logs и platform record.",
      "Повтори status update и negative cases."
    ],
    "Postback вернул HTTP 200, но записал выплату `0` из-за неверной макрокоманды. Технический успех доставки ещё не означает корректность бизнес-данных.",
    "Составь QA matrix: valid, missing ID, wrong token, duplicate, pending→approved, currency mismatch и delayed event.",
    "S2S postback QA protocol",
    [
      "Проверять только HTTP status.",
      "Отправлять production payout в случайный test.",
      "Публиковать secret token в документе для партнёра."
    ],
    [
      "Какие четыре проверки обязательны после test postback?",
      "Правильный click/campaign, event/status, payout/currency и отсутствие unintended duplicate; также сохраняются request/response timestamps."
    ],
    ["scaleoPostback"]
  ),
  makeLesson(
    "funnel-events",
    60,
    "Чёткий event dictionary не позволяет командам по-разному понимать registration, deposit, FTD и qualified FTD.",
    [
      "Каждое событие имеет trigger, unique key, timestamp, source of truth, allowed statuses и owner.",
      "Registration, KYC passed, first deposit и qualified FTD — разные milestones; их нельзя сворачивать в одно без потери диагностики.",
      "Deposit amount и player balance не равны revenue; финансовые метрики имеют отдельный источник и правила.",
      "Event versioning нужен, когда меняются qualification criteria или schema."
    ],
    [
      "Определи business meaning.",
      "Свяжи с technical trigger и key.",
      "Назначь source of truth/owner.",
      "Протестируй happy path и exceptions."
    ],
    "Если BI считает FTD в момент успешного payment, а affiliate platform — после KYC, отчёты закономерно расходятся до завершения verification.",
    "Создай event dictionary для 8 funnel events с статусами, keys, owners и SLA.",
    "Funnel event dictionary",
    [
      "Использовать «conversion» без определения.",
      "Считать retry новым депозитом.",
      "Менять критерий без effective date."
    ],
    [
      "Зачем qualified FTD отделять от FTD?",
      "Чтобы технический первый депозит не становился оплачиваемым событием до выполнения договорных quality/compliance criteria."
    ],
    ["scaleoPostback", "contractFirst"]
  ),
  makeLesson(
    "launch-qa",
    75,
    "End-to-end QA доказывает полный путь от опубликованной ссылки до корректного события в двух системах до реального трафика.",
    [
      "Тестовый сценарий фиксирует environment, GEO/device, URL, IDs, consent path, account и ожидаемые events.",
      "Проверяют click, redirect, landing, registration, KYC/deposit test mechanism, postback, payout/status и reports.",
      "Negative tests ловят missing parameter, disallowed GEO, duplicate и rejected event.",
      "Evidence pack содержит screenshots/log extracts без лишних player data, timestamps и sign-off."
    ],
    [
      "Подготовь case и expected result.",
      "Пройди путь, записывая IDs.",
      "Сверь обе системы и финальный status.",
      "Закрой defects или останови запуск."
    ],
    "Красивый landing и записанный click недостаточны: если approved event не виден партнёру, billing и оптимизация начнутся с неверных данных.",
    "Выполни mock pre-launch QA на наборе логов и составь defect report с severity/owner.",
    "End-to-end QA evidence pack",
    [
      "Тестировать после отправки traffic.",
      "Использовать реальную карту без процесса.",
      "Закрывать defect по обещанию, а не retest."
    ],
    [
      "Каков exit criterion tracking QA?",
      "Все critical steps и agreed events воспроизводимо видны с правильными IDs/status/values, а blockers закрыты и подтверждены retest."
    ],
    ["scaleoPostback", "googleTraffic"]
  ),
  makeLesson(
    "data-quality",
    65,
    "Прежде чем делать вывод о performance, нужно нормализовать период, timezone, currency, status и дедупликацию.",
    [
      "Один календарный день в UTC и local timezone может включать разные events; период задают start/end и timezone.",
      "Payout, deposit, GGR и NGR в разных валютах требуют согласованного FX source/date и исходных значений.",
      "Pending, approved, rejected и cancelled нельзя сравнивать как один показатель.",
      "Unique transaction ID и event rules предотвращают duplicates; late events требуют defined restatement window."
    ],
    [
      "Зафиксируй report grain и filters.",
      "Нормализуй time/currency/status.",
      "Проверь uniqueness и late arrivals.",
      "Запиши reconciliation result."
    ],
    "Operator report показывает 102 FTD, platform — 97 approved. После выравнивания timezone находятся 2 late events и 3 pending: необъяснимого gap нет.",
    "Очисти mock export с дублями, тремя валютами и UTC/local dates; создай quality report.",
    "Data quality checklist + clean table",
    [
      "Сравнивать dashboard totals без фильтров.",
      "Удалять rejected строки вместо сохранения статуса.",
      "Конвертировать валюту без rate/date."
    ],
    [
      "Какие параметры записать рядом с любой цифрой?",
      "Период и timezone, metric definition/status, currency/FX, filters, source и время обновления."
    ],
    ["googleTraffic", "scaleoPostback"]
  ),
  makeLesson(
    "discrepancy-triage",
    70,
    "Triage локализует расхождение от общего числа к конкретным IDs и логам, не начиная с обвинений.",
    [
      "Сначала подтвердите одну metric definition, period/timezone, currency, filters и status scope.",
      "Затем сравните counts по дням/campaign/SubID, чтобы найти первый сегмент, где возникает gap.",
      "ID-level join классифицирует missing, duplicate, status mismatch, value mismatch и timing difference.",
      "Эскалация содержит evidence, impact, first affected time, reproducibility, owner и workaround."
    ],
    [
      "Заморозь comparison scope.",
      "Сегментируй gap.",
      "Сверь IDs, statuses и logs.",
      "Эскалируй только остаток с evidence."
    ],
    "Партнёр пишет «не хватает 20 FTD». После сверки 12 rejected по terms, 5 пришли за границей периода, 2 duplicate и только 1 требует integration investigation.",
    "Разбери два CSV-отчёта по triage ladder и подготовь нейтральный incident brief.",
    "Discrepancy reconciliation pack",
    [
      "Сразу обещать компенсацию.",
      "Сравнивать screenshots вместо exports.",
      "Отправлять player-level data в общий чат."
    ],
    [
      "Когда discrepancy считается объяснённым?",
      "Когда каждый gap row отнесён к согласованной причине либо оформлен как воспроизводимый unresolved incident с owner и следующим шагом."
    ],
    ["scaleoPostback", "contractFirst"]
  )
];

window.AFF0_LESSON_DETAILS.launch = [
  makeLesson(
    "kickoff",
    55,
    "Kickoff переводит подписанную сделку в план исполнения с единым scope, владельцами, сроками и критерием готовности.",
    [
      "Brief начинается с business goal и approved scope: entity, brand, GEO, product, source, commercial model и cap.",
      "RACI отделяет owner от contributors и approvers; один task не должен иметь несколько неясных владельцев.",
      "Timeline строится назад от launch date и включает dependencies: KYB, contract, assets, tracking и compliance.",
      "Success criteria включают не только объём, но tracking health, compliance, quality и reporting cadence."
    ],
    [
      "Сверь executed terms и scope.",
      "Назначь owners/approvers.",
      "Построй milestones и blockers.",
      "Отправь recap и decision log."
    ],
    "Партнёр хочет live в пятницу, но creative approval занимает два рабочих дня. Реалистичный plan либо двигает дату, либо сокращает approved scope.",
    "Подготовь kickoff agenda, RACI и timeline для запуска SEO-партнёра в одном GEO.",
    "Partner kickoff pack",
    [
      "Начинать до executed/approved scope.",
      "Ставить deadline без dependencies.",
      "Оставлять решения только в созвоне."
    ],
    [
      "Какой минимальный итог kickoff?",
      "Письменно согласованные scope, owners, milestones, blockers, communication channel, success criteria и следующий check-in."
    ],
    ["contractFirst", "track360"]
  ),
  makeLesson(
    "partner-kyb",
    60,
    "KYB, договорные и платёжные данные защищают компанию от работы или оплаты неверному юридическому лицу.",
    [
      "Проверяется legal name, registration, address, ownership/authorized signatory и применимые screening requirements по внутренней политике.",
      "Tax и bank data должны пройти approved verification process; изменение реквизитов — отдельный risk event.",
      "Access выдаётся named users с business need, MFA при наличии и минимальными правами.",
      "Junior собирает комплект и отслеживает status, но не объявляет entity «законной» вместо compliance/legal."
    ],
    [
      "Отправь approved document list.",
      "Сверь entity across contract/invoice/account.",
      "Передай проверки владельцам.",
      "Сохрани approval и access register."
    ],
    "Invoice от Brand Media Ltd нельзя оплачивать, если договор подписан с Brand Network PLC без согласованной assignment/payment structure.",
    "Проверь mock onboarding folder, найди несоответствия и составь missing-items request без запроса лишних данных.",
    "KYB onboarding checklist",
    [
      "Принимать реквизиты из нового Telegram-аккаунта.",
      "Хранить identity documents в общем чате.",
      "Создавать production access до approval."
    ],
    [
      "Что делать при срочной смене банковских реквизитов?",
      "Остановить изменение и пройти независимую approved verification по известному контакту/процессу; срочность не отменяет контроль."
    ],
    ["ukgcThirdParties", "contractFirst"]
  ),
  makeLesson(
    "account-setup",
    60,
    "Точная настройка account и commission plan предотвращает неверную атрибуцию, лишние права и будущие disputes.",
    [
      "Account связывают с той же legal entity, что указана в terms; contact users не становятся сторонами договора.",
      "Campaign ограничивает GEO/product/source, а commission plan — event, rate, cap, start/end и qualification.",
      "Least privilege разделяет view reports, create links и administrative changes.",
      "Four-eyes review особенно важен для payout, currency, retroactive date и access."
    ],
    [
      "Создай setup ticket из approved terms.",
      "Внеси конфигурацию и users.",
      "Проведи peer review field-by-field.",
      "Зафиксируй screenshots/audit ID."
    ],
    "Ошибка валюты `GBP` вместо `EUR` может выглядеть как небольшая настройка, но затронет каждую выплату и заблокирует запуск.",
    "Заполни account setup sheet и найди пять отличий между mock terms и configuration.",
    "Account configuration record",
    [
      "Копировать старый plan без полного review.",
      "Давать shared login.",
      "Ставить retroactive date без approval."
    ],
    [
      "Как доказать, что commission plan соответствует сделке?",
      "Сохранить mapping каждого ключевого field к approved term и результат независимой проверки до активации."
    ],
    ["scaleoPostback", "contractFirst"]
  ),
  makeLesson(
    "restrictions",
    55,
    "Партнёр должен получить однозначные письменные границы по GEO, продукту, источникам и способу продвижения.",
    [
      "Allowlist/denylist перечисляет страны, продукты, domains/apps, traffic types, paid keywords и sub-affiliate policy.",
      "Do/don’t формулируются наблюдаемым поведением: не «без плохой рекламы», а конкретные запрещённые claims/placements.",
      "Ограничения version-controlled; изменение требует approval и подтверждения получения партнёром.",
      "Unknown source не считается разрешённым по умолчанию."
    ],
    [
      "Извлеки restrictions из policies/terms.",
      "Переведи их в partner-facing matrix.",
      "Получи acknowledgement.",
      "Настрой monitoring и escalation."
    ],
    "Разрешение SEO-трафика для UK не разрешает PPC brand bidding или распространение того же offer в соседних GEO.",
    "Создай one-page traffic policy для fictional launch, включая ambiguous cases и escalation contact.",
    "Partner do/don’t matrix",
    [
      "Отправлять десятки ссылок без краткого summary.",
      "Разрешать channel устно.",
      "Обновлять policy без effective date."
    ],
    [
      "Как действовать, если партнёр предлагает источник, которого нет в matrix?",
      "Считать его unapproved, собрать точное описание и получить письменное решение владельцев до запуска."
    ],
    ["ukgcThirdParties", "asaCode"]
  ),
  makeLesson(
    "landing-deeplink",
    60,
    "Landing и deeplink должны соответствовать обещанию рекламы, GEO, устройству и утверждённому tracking path.",
    [
      "Message match связывает creative claim с landing content и material terms, снижая confusion.",
      "Локализация включает язык, валюту, product availability, legal footer и помощь, а не только перевод заголовка.",
      "Deeplink ведёт на approved destination и сохраняет параметры через redirects.",
      "Promo code проверяется на scope, spelling, eligibility, expiry и отображение на mobile."
    ],
    [
      "Выбери approved destination.",
      "Проверь message/offer match.",
      "Тестируй GEO/device/redirects.",
      "Сохрани final URL и evidence."
    ],
    "Creative обещает sportsbook free bet, а ссылка ведёт на casino homepage. Даже рабочий tracking не исправляет нерелевантный и потенциально misleading journey.",
    "Проведи landing QA по 20 пунктам для desktop/mobile и двух языков.",
    "Landing/deeplink QA sheet",
    [
      "Использовать homepage по умолчанию.",
      "Проверять только из офиса в одном GEO.",
      "Менять landing после approval без retest."
    ],
    [
      "Что важнее: короткий URL или проверяемый путь?",
      "Проверяемый approved path с сохранением attribution и прозрачным destination; сокращение не должно скрывать или ломать его."
    ],
    ["asaCode", "googleUtm"]
  ),
  makeLesson(
    "creative-brief",
    60,
    "Creative brief даёт партнёру достаточно свободы для канала, сохраняя обязательный message, disclosure и version control.",
    [
      "Brief описывает audience, objective, format/specs, approved proposition, mandatory copy, prohibited claims и CTA.",
      "Asset IDs, version, locale, owner, approval status и expiry предотвращают публикацию устаревшего баннера.",
      "Influencer/script content требует review фактических claims и явной advertising disclosure по применимым правилам.",
      "Feedback привязывается к конкретному risk/requirement, а не к субъективному «не нравится»."
    ],
    [
      "Собери approved inputs.",
      "Напиши message hierarchy и specs.",
      "Добавь mandatory/prohibited элементы.",
      "Проведи review и архивируй version."
    ],
    "Фраза «реши финансовые проблемы выигрышем» не проходит как creative angle: gambling нельзя представлять финансовым решением.",
    "Напиши creative brief для review page, display banner и streamer integration с разными specs.",
    "Multi-format creative brief",
    [
      "Передавать только logo и offer.",
      "Согласовывать файл без версии.",
      "Разрешать партнёру менять mandatory terms."
    ],
    [
      "Какие две части brief нельзя смешивать?",
      "Обязательные compliance/brand boundaries и рекомендованные creative ideas: первые требуют соблюдения, вторые допускают адаптацию."
    ],
    ["asaCode", "asaUnder18"]
  ),
  makeLesson(
    "offer-terms",
    65,
    "Промо должно быть понятно до действия: ключевые ограничения нельзя прятать за привлекательным headline.",
    [
      "Material terms обычно включают eligibility, minimum deposit, reward, wagering, qualifying bets/games, max conversion и expiry — точный набор зависит от offer.",
      "Headline и qualification не должны создавать ложное общее впечатление даже при наличии длинных full terms.",
      "Offer ID/version, start/end, GEO, channel и landing связывают approved copy с фактической конфигурацией.",
      "Изменение mechanic требует повторной проверки всех placements и partner notification."
    ],
    [
      "Получите authoritative offer spec.",
      "Выдели material terms для placement.",
      "Сверь headline, short и full terms.",
      "Протестируй eligibility и expiry."
    ],
    "«100% bonus до €200» без заметного указания deposit/wagering/eligibility может сформировать неверное ожидание, даже если детали есть глубоко по ссылке.",
    "Перепиши три промо: short copy, material terms и link to full terms; отметь вопросы compliance.",
    "Offer communication pack",
    [
      "Сокращать terms до потери смысла.",
      "Публиковать offer после expiry.",
      "Считать маленький шрифт достаточной прозрачностью."
    ],
    [
      "Что проверять первым в affiliate promo screenshot?",
      "Общее впечатление и видимость material terms рядом с claim, затем соответствие approved offer version и destination."
    ],
    ["ukgcIncentives", "asaCode"]
  ),
  makeLesson(
    "compliance-approval",
    55,
    "Approval до публикации создаёт доказуемый контроль, за который оператор остаётся ответственным при работе через affiliate.",
    [
      "Submission включает final creative/copy, placement context, audience/GEO, landing, offer version, dates и traffic source.",
      "Approver должен видеть именно финальный вариант; approval abstract concept не покрывает изменённый headline.",
      "Status — draft/submitted/changes/approved/expired — и owner должны быть видимы обеим сторонам.",
      "Evidence хранит version, approver, timestamp и conditions; emergency takedown contact известен заранее."
    ],
    [
      "Собери complete submission.",
      "Отслеживай questions/changes.",
      "Свяжи approval с asset ID.",
      "После публикации проверь exact match."
    ],
    "Одобрение баннера не одобряет accompanying influencer caption, если его не было в submission.",
    "Создай approval workflow со SLA, statuses, required evidence и процессом срочного takedown.",
    "Compliance approval register",
    [
      "Считать отправку approval.",
      "Менять approved copy перед публикацией.",
      "Хранить решение только в личном чате."
    ],
    [
      "Когда approved asset снова становится unapproved?",
      "При содержательном изменении, смене context/GEO/offer, истечении срока или отмене approval согласно процессу."
    ],
    ["ukgcThirdParties", "ukgcAdvertising", "asaCode"]
  ),
  makeLesson(
    "prelaunch-qa",
    70,
    "Pre-launch QA объединяет commercial, technical, content и compliance readiness в один go/no-go.",
    [
      "Checklist покрывает executed terms, KYB, account/rate, restrictions, assets, offer, landing, tracking, reporting и contacts.",
      "Blocker — дефект, делающий запуск незаконным, неотслеживаемым, финансово неверным или существенно misleading.",
      "Owner и evidence нужны для каждого check; tick без доказательства не закрывает риск.",
      "Go/no-go фиксирует точный approved scope и открытые non-blocking issues с due dates."
    ],
    [
      "Собери readiness board.",
      "Проведи functional и compliance checks.",
      "Ретестируй blockers.",
      "Зафиксируй решение и launch version."
    ],
    "Неверный размер баннера может быть minor; сломанный postback или отсутствующий material term — blocker.",
    "Классифицируй 25 findings по severity и проведи mock go/no-go meeting.",
    "Pre-launch go/no-go record",
    [
      "Снижать severity ради даты.",
      "Отмечать N/A без причины.",
      "Запускать часть scope, не обновив решение."
    ],
    [
      "Кто может принять риск blocker?",
      "Только назначенный уполномоченный владелец по установленному процессу; junior не снимает legal/compliance/financial blocker самостоятельно."
    ],
    ["ukgcThirdParties", "scaleoPostback"]
  ),
  makeLesson(
    "launch-day",
    60,
    "Launch day — контролируемое окно наблюдения с быстрым обнаружением дефектов, коммуникацией и rollback.",
    [
      "Monitoring plan задаёт первые 15/60 минут и 24 часа: clicks, errors, funnel events, status, spend/cap и published content.",
      "Single incident channel и contact tree сокращают потерю времени; partner знает, кому сообщать.",
      "Rollback/takedown conditions определены заранее для tracking, compliance, wrong offer и financial configuration.",
      "First report отделяет факт от раннего signal: маленький sample не поддерживает вывод о LTV."
    ],
    [
      "Подтверди publication и final URLs.",
      "Следи по agreed intervals.",
      "Локализуй issue и останови при trigger.",
      "Отправь launch report и next review."
    ],
    "200 clicks без registrations за первые минуты — signal проверить landing/form; это ещё не доказательство плохой аудитории.",
    "Составь launch-day runbook и разыграй outage postback через 30 минут после старта.",
    "Launch-day runbook + report",
    [
      "Смотреть только clicks.",
      "Ждать ежедневного отчёта при critical error.",
      "Менять несколько настроек без incident log."
    ],
    [
      "Что должно быть в первом launch update?",
      "Фактический scope/time, traffic и tracking health, incidents/actions, текущий risk, owner и время следующего update."
    ],
    ["scaleoPostback", "ukgcThirdParties"]
  )
];

window.AFF0_LESSON_DETAILS.optimization = [
  makeLesson(
    "kpi-tree",
    60,
    "KPI tree связывает действия партнёра с business outcome и показывает, где именно теряется результат.",
    [
      "Дерево идёт от reach к clicks, registrations, KYC/FTD, NGR и contribution; каждый узел имеет определение.",
      "Volume metric и rate разделяют причину: меньше FTD может быть следствием меньшего traffic или худшей conversion.",
      "Leading indicators помогают рано, lagging outcomes подтверждают ценность после maturation.",
      "Guardrails — compliance, fraud, complaints и technical health — нельзя жертвовать ради роста."
    ],
    [
      "Выбери outcome.",
      "Разложи его на математические drivers.",
      "Назначь source/owner/frequency.",
      "Свяжи действие с одним driver."
    ],
    "NGR упал на 20%: KPI tree заставляет проверить FTD volume, player value и maturation отдельно, а не сразу просить больше traffic.",
    "Построй KPI tree до уровня placement и добавь data definitions/guardrails.",
    "Affiliate KPI tree",
    [
      "Считать clicks результатом бизнеса.",
      "Смешивать stocks и flows.",
      "Оптимизировать KPI без guardrail."
    ],
    [
      "Как проверить, полезен ли KPI?",
      "Он имеет определение, owner/source, влияет на решение и связан математически или причинно с целевым outcome."
    ],
    ["googleTraffic", "affnookRole"]
  ),
  makeLesson(
    "conversion-rates",
    60,
    "Conversion rates локализуют friction между этапами funnel, если знаменатели, периоды и cohorts сопоставимы.",
    [
      "Click-to-reg = registrations/clicks; reg-to-FTD = FTD/registrations; click-to-FTD = FTD/clicks.",
      "Нужно фиксировать unique vs total events, qualification status и attribution window.",
      "Rates низкого объёма нестабильны; абсолютные counts и confidence context обязательны.",
      "Изменение одного этапа может сдвинуть следующий с lag, поэтому сравнивают cohorts."
    ],
    [
      "Проверь definitions и counts.",
      "Рассчитай rates без преждевременного округления.",
      "Сегментируй значимый gap.",
      "Сформулируй hypothesis и next check."
    ],
    "1 FTD из 10 clicks = 10%, но это не надёжнее 80 из 1 000 = 8%. Объём определяет uncertainty.",
    "Рассчитай funnel по пяти placements, отметь small samples и предложи один следующий diagnostic.",
    "Conversion diagnostic table",
    [
      "Сравнивать percent без denominator.",
      "Смешивать pending и approved FTD.",
      "Делать вывод по одному дню."
    ],
    [
      "Если click-to-reg стабилен, а reg-to-FTD упал, где искать сначала?",
      "После регистрации: KYC, payments, offer eligibility, product/UX или изменение quality; сначала подтвердить data definitions."
    ],
    ["googleTraffic", "scaleoPostback"]
  ),
  makeLesson(
    "epc-cpa-roi",
    65,
    "EPC, CPA, ROI и payback отвечают на разные вопросы, поэтому их используют вместе, а не выбирают удобную цифру.",
    [
      "EPC = attributable commission/revenue per click с явно указанной стороной и периодом.",
      "Actual CPA = acquisition cost/approved FTD; contract CPA — ставка и может не равняться фактической стоимости.",
      "ROI требует согласованного numerator: например (contribution − acquisition cost)/acquisition cost.",
      "Payback показывает, когда cumulative contribution покрывает cost, включая время."
    ],
    [
      "Определи decision и perspective.",
      "Выбери правильные numerator/denominator.",
      "Нормализуй cohort/time/currency.",
      "Сравни metrics и ограничения."
    ],
    "Высокий EPC может соседствовать с отрицательным operator ROI, если player value низкая или acquisition cost/bonus deductions высоки.",
    "Рассчитай четыре метрики для трёх partners и напиши recommendation с caveats.",
    "Unit economics scorecard",
    [
      "Не указывать perspective EPC.",
      "Называть revenue profit.",
      "Сравнивать payback разных horizons."
    ],
    [
      "Какой KPI выбрать для решения увеличить cap?",
      "Нужна связка quality/contribution, actual acquisition cost, payback и compliance guardrails; одной click-метрики недостаточно."
    ],
    ["contractFirst", "affnookRole"]
  ),
  makeLesson(
    "cohorts",
    65,
    "Cohort analysis сравнивает игроков одинакового возраста и не выдаёт неполные будущие месяцы за плохую performance.",
    [
      "Cohort задают signup/FTD date и источник; age измеряют D7/D30/M1/M3 от этой даты.",
      "Calendar report отвечает «что произошло в месяце», cohort report — «как развивается группа привлечения».",
      "Maturation lag означает, что recent cohorts имеют censored outcome.",
      "Restatement policy определяет, когда поздние events обновляют историю."
    ],
    [
      "Выбери cohort key и event.",
      "Построй age matrix.",
      "Сравни одинаково зрелые cohorts.",
      "Отметь incomplete cells и lag."
    ],
    "Июльский cohort на 30 июля нельзя честно сравнить по M3 LTV с январским; у него ещё нет трёх месяцев наблюдения.",
    "Построй cohort heatmap и выдели реальные изменения retention, не перепутав их с maturation.",
    "Cohort maturity matrix",
    [
      "Сравнивать calendar NGR с cohort LTV.",
      "Заполнять неизвестное нулями.",
      "Менять cohort key между отчётами."
    ],
    [
      "Почему diagonal в cohort matrix неполна?",
      "Новые cohorts ещё не достигли поздних возрастных периодов; это отсутствие наблюдения, а не нулевой результат."
    ],
    ["googleTraffic"]
  ),
  makeLesson(
    "retention-ltv",
    70,
    "Retention и LTV оценивают устойчивое качество, не подменяя его первым депозитом или суммой deposits.",
    [
      "Retention определяется через meaningful return event: active, wager, deposit — выбор зависит от вопроса.",
      "Repeat deposit rate и ARPU дополняют друг друга, но не равны profitability.",
      "Observed LTV имеет horizon; predicted LTV требует модели, assumptions и error monitoring.",
      "Responsible gambling и vulnerability controls всегда выше попытки увеличить engagement."
    ],
    [
      "Определи cohort/event/horizon.",
      "Рассчитай curves и value.",
      "Сравни acquisition sources.",
      "Проверь risk signals и uncertainty."
    ],
    "Партнёр A даёт больше FTD, B — меньший объём, но выше D90 contribution. Решение зависит от capacity, payback и качества, а не только headline count.",
    "Сравни D7/D30/D90 retention и contribution трёх cohorts; подготовь balanced recommendation.",
    "Retention and LTV memo",
    [
      "Оптимизировать частоту игры любой ценой.",
      "Считать deposits доходом.",
      "Показывать predicted LTV как факт."
    ],
    [
      "Как корректно подписать LTV?",
      "Указать cohort, value definition, observation/prediction horizon, валюту, deductions и observed vs modelled status."
    ],
    ["asaCode", "contractFirst"]
  ),
  makeLesson(
    "segmentation",
    60,
    "Сегментация превращает средний результат партнёра в конкретное место для действия — placement, GEO, product, device или SubID.",
    [
      "Начинай с dimension, связанной с гипотезой; перебор десятков срезов создаёт ложные открытия.",
      "Каждый segment должен иметь достаточный volume и корректный denominator.",
      "Simpson’s paradox возможен, когда общий trend меняется после учёта mix.",
      "Privacy и data minimization исключают ненужный player-level export."
    ],
    [
      "Сформулируй question.",
      "Выбери один-два dimensions.",
      "Проверь volume/mix/definitions.",
      "Найди actionable segment и owner."
    ],
    "Mobile CR ниже desktop, но весь спад пришёл из одного устаревшего landing в одном GEO. Device сам по себе не причина.",
    "Сегментируй mock performance и выбери самый узкий подтверждённый bottleneck.",
    "Segmentation analysis",
    [
      "Делить данные до единичных строк.",
      "Сравнивать segments с разным offer.",
      "Экспортировать PII для обычного отчёта."
    ],
    [
      "Когда прекращать детализацию?",
      "Когда segment достаточно конкретен для действия, имеет достаточный volume и дальнейшее деление не добавляет надёжного решения."
    ],
    ["googleTraffic", "icoPreferences"]
  ),
  makeLesson(
    "bottleneck-analysis",
    65,
    "Bottleneck analysis отделяет недостаток объёма от проблем relevance, landing, KYC, payment, product или offer.",
    [
      "Начинай с первого funnel step, где actual заметно отклоняется от comparable baseline.",
      "Диагноз требует evidence: speed/error logs, source mix, rejection reasons, payment availability или usability.",
      "Root cause не равна корреляции; изменение traffic mix может объяснить одновременно несколько rates.",
      "Приоритет = impact × confidence × ease с учётом risk."
    ],
    [
      "Найди первый изменившийся step.",
      "Сегментируй и собери evidence.",
      "Составь competing hypotheses.",
      "Выбери один test/fix и owner."
    ],
    "Рост registrations при падении KYC pass указывает не на landing, а на audience relevance, document flow или technical verification — это проверяемые ветки.",
    "Построй issue tree для падения FTD на 30% и выбери три проверки по information value.",
    "Bottleneck issue tree",
    [
      "Сразу менять offer.",
      "Называть partner виновным без source evidence.",
      "Менять три этапа одновременно."
    ],
    [
      "Зачем искать первый сломанный этап?",
      "Поздние метрики наследуют потери раннего этапа; исправление downstream не вернёт пользователей, которые до него не дошли."
    ],
    ["googleTraffic", "scaleoPostback"]
  ),
  makeLesson(
    "experimentation",
    70,
    "Хороший эксперимент проверяет одну причинную гипотезу с заранее заданной метрикой, окном и защитными ограничениями.",
    [
      "Hypothesis связывает change, audience, expected metric и mechanism.",
      "Control и treatment должны быть сопоставимы; если рандомизация невозможна, ограничения дизайна записываются.",
      "Primary metric, minimum sample/window и stopping rule определяют до просмотра результата.",
      "Guardrails включают complaints, RG/compliance, tracking error и негативные downstream metrics."
    ],
    [
      "Запиши hypothesis и decision.",
      "Определи groups/metric/window.",
      "Проверь instrumentation и guardrails.",
      "Проанализируй и задокументируй learnings."
    ],
    "Смена headline, landing и bonus одновременно может поднять CR, но команда не узнает, что сработало.",
    "Создай experiment card для нового review-page CTA, включая sample caveat и rollback.",
    "Experiment design card",
    [
      "Останавливать тест при первом хорошем дне.",
      "Выбирать metric после результата.",
      "Игнорировать quality после роста registrations."
    ],
    [
      "Когда эксперимент «не дал значимого результата» всё равно полезен?",
      "Если instrumentation корректна и uncertainty задокументирована: он ограничивает ожидаемый эффект и улучшает следующее решение."
    ],
    ["googleTraffic", "asaCode"]
  ),
  makeLesson(
    "partner-segmentation",
    60,
    "Portfolio segmentation помогает распределить время между grow, maintain, fix, pause и exit по ценности, потенциалу и риску.",
    [
      "Current value оценивает contribution/quality, potential — доступный audience/inventory, effort — операционную стоимость.",
      "Risk gate может отправить даже ценного партнёра в pause/exit при compliance/fraud issue.",
      "Grow получает конкретный expansion plan; maintain — service cadence; fix — time-boxed remediation.",
      "Segment пересматривают по evidence, а не по личной близости."
    ],
    [
      "Собери common scorecard.",
      "Примени risk gate.",
      "Назначь segment и strategy.",
      "Поставь review trigger/date."
    ],
    "Партнёр с высоким NGR, но повторными unapproved placements не относится к grow до remediation.",
    "Распредели 12 fictional partners и защити time allocation на следующий месяц.",
    "Portfolio segmentation matrix",
    [
      "Сегментировать только по revenue.",
      "Держать всех в grow.",
      "Не назначать exit criteria для fix."
    ],
    [
      "Что отличает fix от maintain?",
      "У fix есть конкретный gap, remediation owner, deadline и exit rule; maintain стабильно выполняет ожидания без такого плана."
    ],
    ["ukgcThirdParties", "affnookRole"]
  ),
  makeLesson(
    "weekly-qbr",
    65,
    "Weekly review управляет ближайшими действиями, а QBR согласует более крупную стратегию на основе фактов и зрелых cohorts.",
    [
      "Структура: objective → facts → variance → insight → decision → action/owner/date.",
      "Weekly фокусируется на delivery, funnel, incidents и next tests; QBR — на trend, cohort quality, roadmap и commercial fit.",
      "Slide без decision не заменяет review; appendix хранит definitions и source.",
      "Commitment log из прошлого периода открывается до новых обещаний."
    ],
    [
      "Обнови scorecard одинакового scope.",
      "Выдели 1–3 decisions.",
      "Подготовь evidence и recommendation.",
      "Запиши commitments и follow-up."
    ],
    "«Clicks +20%» становится insight только после ответа: какие placements, что случилось с FTD/contribution и какое действие следует.",
    "Собери one-page weekly и 6-slide QBR для fictional partner portfolio.",
    "Weekly review + QBR deck",
    [
      "Показывать все доступные charts.",
      "Скрывать плохой result без контекста.",
      "Заканчивать без owner/deadline."
    ],
    [
      "Какая единица качества review?",
      "Принятое решение и выполненное действие с измеримым результатом, а не количество слайдов."
    ],
    ["googleTraffic", "contractFirst"]
  )
];

window.AFF0_LESSON_DETAILS.compliance = [
  makeLesson(
    "license-matrix",
    65,
    "License matrix не даёт переносить разрешение одного бренда, юридического лица, продукта или GEO на другой scope.",
    [
      "Строка matrix связывает GEO, regulator, licensee/legal entity, brand/domain, product и permitted channel.",
      "Status и effective date важны: market может быть launchable, restricted, pending review или prohibited.",
      "Commercial availability не равна legal permission; affiliate должен получить утверждённую границу от владельцев.",
      "Sources и last-reviewed date превращают таблицу в контроль, а не вечное предположение."
    ],
    [
      "Собери authoritative sources внутри компании.",
      "Свяжи entity-brand-product-channel.",
      "Назначь owner/review date.",
      "Блокируй unknown scope до решения."
    ],
    "Лицензия Brand A для casino в одном GEO не означает, что Brand B sportsbook можно продвигать там же через influencer.",
    "Построй license matrix для трёх fictional GEO и отработай пять launch requests.",
    "License and channel matrix",
    [
      "Копировать старый market list без проверки.",
      "Считать язык доказательством GEO.",
      "Самостоятельно трактовать серую зону как разрешение."
    ],
    [
      "Что делать со строкой без подтверждённого channel permission?",
      "Пометить pending/blocked и получить решение legal/compliance; отсутствие запрета не является approval."
    ],
    ["ukgcAdvertising", "ukgcThirdParties"]
  ),
  makeLesson(
    "third-party-responsibility",
    65,
    "Оператор не снимает с себя лицензионную ответственность, передав рекламу affiliate, поэтому нужны договорные и фактические controls.",
    [
      "UKGC LCCP требует, чтобы third parties соблюдали те же применимые licence conditions/codes и предоставляли нужную информацию.",
      "Договор должен позволять prompt termination при breach, но clause без monitoring не является достаточным контролем.",
      "Controls включают due diligence, training, approval, source disclosure, monitoring, records, remediation и termination.",
      "Sub-affiliate chain требует прозрачности и распространения тех же обязательств."
    ],
    [
      "Свяжи requirement с contract clause.",
      "Определи preventive/detective control.",
      "Собери evidence выполнения.",
      "Эскалируй breach и применяй remedy."
    ],
    "Affiliate подписал policy, но запустил unapproved sub-affiliate. Operator должен остановить риск, запросить chain/evidence и применить terms, а не просто переслать напоминание.",
    "Создай control map requirement → clause → process → evidence → owner для affiliate lifecycle.",
    "Third-party control framework",
    [
      "Ограничиваться подписью под policy.",
      "Не знать downstream sources.",
      "Продолжать traffic во время material breach review."
    ],
    [
      "Почему monitoring обязателен при хорошем договоре?",
      "Договор задаёт право и обязанность, а monitoring показывает фактическое поведение и позволяет вовремя исправить нарушение."
    ],
    ["ukgcThirdParties", "ukgcAffiliates"]
  ),
  makeLesson(
    "socially-responsible-ads",
    65,
    "Gambling-реклама должна быть социально ответственной и не создавать misleading представление о деньгах, статусе или контроле.",
    [
      "CAP Code Section 16 запрещает показывать gambling как решение финансовых проблем или альтернативу работе.",
      "Нельзя внушать, что gambling повышает качества, самоуважение, признание или контроль.",
      "Нельзя использовать давление peers или унижать отказ от игры.",
      "Review оценивает общее впечатление copy, imagery, context, CTA и landing — не только отдельную фразу."
    ],
    [
      "Определи claim и implied message.",
      "Проверь vulnerability/financial/status cues.",
      "Сверь evidence и material terms.",
      "Исправь или останови до публикации."
    ],
    "«Докажи, что ты победитель» связывает игру со статусом и давлением; «отыграй зарплату» — с финансовым решением. Оба angle неприемлемы.",
    "Проведи red-flag review 12 mock creatives и перепиши рискованные варианты без обещания результата.",
    "Responsible advertising review",
    [
      "Проверять только наличие 18+.",
      "Оправдывать misleading claim юмором.",
      "Считать disclaimer исправлением противоречивого headline."
    ],
    [
      "Какой вопрос помогает увидеть implied claim?",
      "Что разумный человек поймёт о роли gambling в деньгах, статусе, отношениях и личном контроле после всего сообщения?"
    ],
    ["asaCode", "ukgcAdvertising"]
  ),
  makeLesson(
    "under18-protection",
    65,
    "Защита несовершеннолетних требует одновременно правильного targeting, media placement и content без strong appeal.",
    [
      "CAP Code запрещает направлять gambling marketing на under-18 через выбор media или context.",
      "Creative не должен иметь strong appeal к детям/молодым, особенно через youth culture, characters или celebrities.",
      "Audience data и age-gating снижают риск, но не делают запрещённый content допустимым.",
      "Affiliate обязан доказать placement controls, audience rationale и monitoring."
    ],
    [
      "Оцени media audience/context.",
      "Проверь creative appeal.",
      "Подтверди targeting/exclusions.",
      "Сохрани evidence и monitor live."
    ],
    "Streamer с взрослой аудиторией всё равно может иметь strong youth appeal; одного age label в профиле недостаточно для решения.",
    "Создай under-18 risk assessment для influencer, sports content и review site.",
    "Under-18 protection assessment",
    [
      "Полагаться только на self-declared age.",
      "Путать adult product с adult audience.",
      "Игнорировать adjacent youth content."
    ],
    [
      "Какие две независимые проверки нужны?",
      "Кому фактически/вероятно показывается реклама и имеет ли сам content сильную привлекательность для under-18."
    ],
    ["asaUnder18", "asaCode"]
  ),
  makeLesson(
    "responsible-gambling",
    65,
    "Responsible gambling — не footer, а граница tone, targeting, offer и действий при признаках уязвимости.",
    [
      "Marketing не должен использовать distress, desperation, loss-chasing или уязвимость как opportunity.",
      "Помощь и safer-gambling information должны быть доступны и соответствовать market requirements.",
      "Партнёр не диагностирует игрока, но распознаёт risk signal и передаёт его по утверждённому process.",
      "Performance pressure никогда не отменяет suppression, affordability/interaction controls или takedown."
    ],
    [
      "Проверь tone/context/targeting.",
      "Убедись в help information.",
      "Останови risky communication.",
      "Эскалируй по RG process без лишних данных."
    ],
    "Сообщение «верни потери сегодня» эксплуатирует loss-chasing и не может быть исправлено маленьким responsible-gambling footer.",
    "Разбери восемь scenarios: обычный support question, vulnerability signal, complaint и urgent risk; назначь маршрут.",
    "RG response playbook",
    [
      "Советовать player, как быстрее отыграться.",
      "Обсуждать sensitive case в partner group.",
      "Считать VIP value основанием игнорировать signal."
    ],
    [
      "Что делает junior при RG signal?",
      "Не импровизирует помощь/диагноз: прекращает рискованное действие, сохраняет минимум фактов и немедленно передаёт обученному владельцу."
    ],
    ["asaCode", "ukgcAdvertising"]
  ),
  makeLesson(
    "self-exclusion",
    60,
    "Self-excluded пользователь не должен получать gambling marketing; suppression должна работать во всех задействованных каналах.",
    [
      "Suppression list хранит минимум данных, нужный для блокировки, вместо простого удаления контакта и последующего re-acquisition.",
      "Партнёрские audience lists должны обновляться по утверждённому privacy-safe process и не использоваться для других целей.",
      "Stop instruction требует выполнения и evidence; нельзя писать пользователю, чтобы спросить, не передумал ли он.",
      "Incident review устанавливает affected channels, duration, root cause, containment и remediation."
    ],
    [
      "Останови campaign/audience use.",
      "Передай identifier безопасным каналом.",
      "Подтверди suppression across systems.",
      "Задокументируй incident и prevention."
    ],
    "Удаление email из CRM без suppression позволяет снова загрузить его из affiliate list. Минимальный suppression record предотвращает повторный контакт.",
    "Спроектируй suppression flow operator ↔ approved partner без раскрытия полной player database.",
    "Self-exclusion suppression flow",
    [
      "Посылать confirmation marketing message.",
      "Передавать suppression list открытым файлом.",
      "Проверять только email при нескольких identifiers."
    ],
    [
      "Почему suppression лучше простого удаления?",
      "Она сохраняет минимальный do-not-contact signal и предотвращает повторное добавление из другого источника."
    ],
    ["icoPreferences", "ukgcAdvertising"]
  ),
  makeLesson(
    "direct-marketing",
    70,
    "Direct marketing требует действительного основания, channel-specific controls, простого opt-out и немедленного уважения objection.",
    [
      "Consent и применимые PECR rules зависят от канала/context; команда использует approved legal basis, а не предположение.",
      "ICO указывает: objection to direct marketing необходимо уважать, withdrawal должен быть таким же простым, как предоставление.",
      "Opt-out может быть channel-specific; preference record должен передаваться downstream processors/partners.",
      "Suppression хранит минимум данных и не используется для новой рекламы."
    ],
    [
      "Определи channel/audience и approved basis.",
      "Проверь notice/evidence/preferences.",
      "Дай простой opt-out.",
      "Распространи suppression и audit result."
    ],
    "Отписка от email не всегда автоматически выражает отказ от push, но broad objection может охватывать все каналы. Scope должен быть записан и выполнен.",
    "Проведи data-flow audit affiliate lead → CRM → email/SMS/push и найди точки потери preference.",
    "Direct marketing control map",
    [
      "Покупать list без provenance.",
      "Делать unsubscribe сложнее signup.",
      "Повторно писать suppressed человеку."
    ],
    [
      "Можно ли спросить отказавшегося пользователя, не передумал ли он?",
      "Нет: это само по себе direct marketing. Предпочтение нужно уважать, пока человек сам его не изменит допустимым способом."
    ],
    ["icoPreferences", "icoPecr"]
  ),
  makeLesson(
    "promo-compliance",
    65,
    "Promo review проверяет, видит ли пользователь ключевые условия вовремя и совпадает ли опубликованный offer с approved mechanic.",
    [
      "Material terms выбирают по влиянию на решение: eligibility, deposit, wagering, qualifying activity, expiry и material exclusions.",
      "Prominence зависит от placement/device; ссылка на full terms не всегда заменяет короткие ключевые условия.",
      "Countdown, scarcity и urgency должны быть фактическими и не давить на vulnerable behaviour.",
      "Offer version контролирует banners, copy, landing и affiliate pages; expired assets удаляются."
    ],
    [
      "Сверь authoritative mechanic.",
      "Выдели material terms.",
      "Проверь prominence/consistency.",
      "Мониторь publication и expiry."
    ],
    "Условие «только новые пользователи, wagering 35×, 7 дней» может существенно изменить решение и не должно исчезнуть из видимого context.",
    "Проведи promo audit для desktop/mobile screenshots и составь remediation request.",
    "Promo compliance audit",
    [
      "Полагаться на tooltip, которого нет на mobile.",
      "Менять expiry вручную у партнёра.",
      "Использовать fake urgency."
    ],
    [
      "Как определить material term?",
      "Спросить, могло бы его отсутствие существенно изменить ожидание или решение разумного пользователя об участии."
    ],
    ["ukgcIncentives", "asaCode"]
  ),
  makeLesson(
    "fraud-signals",
    70,
    "Fraud signals помогают остановить и проверить подозрительный трафик, но не заменяют расследование и утверждённое решение.",
    [
      "Signals: abnormal click/registration speed, duplicates, repeated devices/payment data, impossible GEO, fake KYC и synchronized behaviour.",
      "Commercial abuse включает incentivized traffic вне terms, cookie stuffing, brand bidding и скрытых sub-affiliates.",
      "Один signal не доказывает fraud; нужны baseline, linked IDs, logs и review уполномоченной команды.",
      "Containment — pause source/payout согласно процессу, сохранение evidence и ограничение распространения sensitive data."
    ],
    [
      "Зафиксируй anomaly и baseline.",
      "Сегментируй source/SubID/time.",
      "Сохрани evidence и contain.",
      "Эскалируй без обвинительного вывода."
    ],
    "50 registrations за минуту с одного SubID и нулём KYC — серьёзный signal, но incident note пишет наблюдаемые факты, а не «партнёр мошенник».",
    "Разбери fraud dashboard и подготовь case pack: facts, impact, unknowns, containment и requests.",
    "Fraud investigation brief",
    [
      "Раскрывать detection thresholds партнёру.",
      "Удалять подозрительные логи.",
      "Обвинять до review."
    ],
    [
      "Как формулировать initial fraud escalation?",
      "Наблюдаемые аномалии, scope/IDs/time, сравнение с baseline, текущий impact, containment и вопросы для расследования."
    ],
    ["ukgcThirdParties", "scaleoPostback"]
  ),
  makeLesson(
    "evidence-escalation",
    65,
    "Evidence и audit trail позволяют быстро остановить риск, принять пропорциональное решение и доказать выполнение контроля.",
    [
      "Minimum pack: URL/placement, timestamp/timezone, screenshot/archive, partner/campaign/SubID, exact issue, scope и reporter.",
      "Severity учитывает player harm, regulatory/commercial impact, reach, duration и продолжается ли exposure.",
      "Escalation tree задаёт owner, SLA, containment authority, partner contact и executive/legal path.",
      "Resolution log хранит decision, rationale, approvals, partner response, remediation, retest и closure."
    ],
    [
      "Сохрани volatile evidence.",
      "Оцени severity и contain.",
      "Передай owner с clear ask.",
      "Проверь remediation и закрой запись."
    ],
    "Удалённый пост через час нельзя надёжно расследовать без screenshot, URL и timestamp. Evidence нужно сохранять до спора о причине.",
    "Собери incident pack из разрозненных материалов и проведи severity triage.",
    "Compliance incident pack",
    [
      "Пересылать screenshot без URL/date.",
      "Ждать полной уверенности до containment.",
      "Закрывать case без retest."
    ],
    [
      "Чем containment отличается от окончательного решения?",
      "Containment быстро прекращает возможный вред при неполной информации; финальное решение следует после проверки evidence и процесса."
    ],
    ["ukgcThirdParties", "asaCode"]
  )
];

window.AFF0_LESSON_DETAILS.operations = [
  makeLesson(
    "portfolio-cadence",
    55,
    "Cadence распределяет внимание по срочности и горизонту: alert сегодня, action на неделе, close в месяце, стратегия в квартале.",
    [
      "Daily — incidents, spend/cap, outages и material anomalies; weekly — performance/actions; monthly — reconciliation/forecast; QBR — strategy.",
      "Cadence зависит от segment/risk: new launch и fix требуют чаще, стабильный maintain — реже.",
      "Каждый ritual имеет входные данные, decisions, owner и output.",
      "Calendar buffer нужен для unexpected partner issues и cross-functional dependencies."
    ],
    [
      "Сегментируй portfolio.",
      "Назначь ritual/frequency/SLA.",
      "Создай agenda и outputs.",
      "Пересматривай cadence по triggers."
    ],
    "Junior с 30 партнёрами не проводит одинаковый час с каждым: launch blockers получают daily control, стабильные — monthly/weekly cadence.",
    "Составь 4-недельный operating calendar для portfolio из 20 partners.",
    "Portfolio operating calendar",
    [
      "Планировать только meetings.",
      "Не оставлять focus time.",
      "Проводить review без decisions."
    ],
    [
      "Как понять, что cadence слишком редкий?",
      "Issues обнаруживаются после material impact, commitments просрочены или decisions принимаются на устаревших данных."
    ],
    ["affnookRole", "track360"]
  ),
  makeLesson(
    "crm-hygiene",
    55,
    "CRM сохраняет контекст отношений независимо от памяти менеджера и делает обещания, forecast и ownership видимыми.",
    [
      "Запись содержит factual note, decision, commitment, owner, due date, next step и risk — не стенограмму.",
      "Contact roles и relationship map отделяют champion, decision maker, finance и operational contact.",
      "Forecast category опирается на exit criteria и evidence, а не оптимизм.",
      "Sensitive player data не попадает в general CRM notes."
    ],
    [
      "Обнови запись сразу после interaction.",
      "Зафиксируй commitments обеих сторон.",
      "Поставь next step/date/owner.",
      "Проводи weekly aging audit."
    ],
    "Заметка «хороший звонок» бесполезна. «Partner пришлёт UK traffic export до 4 августа; owner Anna; после evidence — commercial review» управляет работой.",
    "Очисти 15 mock CRM records и создай quality rules/dashboard.",
    "CRM hygiene standard",
    [
      "Хранить обещания только в Slack.",
      "Ставить next step без даты.",
      "Копировать sensitive evidence в note."
    ],
    [
      "Какие три поля делают запись исполнимой?",
      "Конкретный следующий шаг, его владелец и срок; context/decision объясняют, зачем он нужен."
    ],
    ["track360", "contractFirst"]
  ),
  makeLesson(
    "reconciliation",
    70,
    "Commission reconciliation подтверждает, что invoice соответствует согласованным terms, статусам и authoritative данным.",
    [
      "Scope фиксирует entity, period/timezone, currency, campaign, commission model и report version.",
      "CPA сверяется по approved qualifying events/cap; RevShare — по contractual NGR waterfall/carryover.",
      "Adjustments имеют reason code, source, approver и affected transaction IDs.",
      "Invoice не меняет расчёт: он предъявляет сумму, которую нужно подтвердить."
    ],
    [
      "Заморозь period и terms version.",
      "Сверь counts/values/adjustments.",
      "Разреши gaps ID-level.",
      "Approve/dispute и сохрани pack."
    ],
    "Invoice на €12 000 при platform total €11 400 не означает ошибку любой стороны: сначала проверяются timezone, carryover, manual adjustment и VAT/tax presentation.",
    "Проведи month-end close по mock invoice, platform export и terms.",
    "Commission reconciliation workbook",
    [
      "Править исходный export.",
      "Смешивать commission и tax.",
      "Одобрять по total без transaction trace."
    ],
    [
      "Что делает adjustment проверяемым?",
      "Уникальная ссылка на affected items, reason, calculation, approval, date и отражение в следующем отчёте."
    ],
    ["contractFirst", "scaleoPostback"]
  ),
  makeLesson(
    "disputes",
    65,
    "Dispute решается быстрее, когда обе стороны отделяют agreed facts от interpretation и ведут единый resolution log.",
    [
      "Issue statement содержит конкретную metric/amount/period и expected vs actual.",
      "Evidence pack включает terms version, reports, IDs, calculations, approvals и communication.",
      "Neutral language не признаёт вину до проверки и не обвиняет партнёра.",
      "Resolution фиксирует amount/action, owner, deadline, precedent status и preventive change."
    ],
    [
      "Подтверди scope и disputed amount.",
      "Собери common evidence.",
      "Классифицируй facts/unknowns.",
      "Согласуй resolution и prevention."
    ],
    "«Вы нас недоплатили» превращается в: «За 1–31 июля расхождение €600; 5 transaction IDs отсутствуют в approved report; просим сверить status/logs».",
    "Напиши dispute response и resolution log по конфликту payout/cap.",
    "Dispute evidence and resolution pack",
    [
      "Спорить по screenshots.",
      "Обещать credit без полномочий.",
      "Закрывать сумму без root cause."
    ],
    [
      "Зачем отмечать, является ли resolution precedent?",
      "Разовая goodwill/exception не должна незаметно изменить будущие terms или ожидания."
    ],
    ["contractFirst", "scaleoPostback"]
  ),
  makeLesson(
    "reactivation",
    60,
    "Reactivation работает, когда устраняет конкретную причину dormancy и подтверждает новый fit, а не просто предлагает больше денег.",
    [
      "Классифицируй причину: performance, product, offer, tracking, relationship, payment, compliance или смена стратегии.",
      "Проверь, что market/product/policy и contact всё ещё актуальны.",
      "Value hypothesis связывает произошедшее изменение с partner audience.",
      "Pilot имеет ограниченный scope, success/stop criteria и новую QA."
    ],
    [
      "Изучи history и lost reason.",
      "Подтверди новый trigger/fit.",
      "Сделай персональный outreach.",
      "Запусти time-boxed pilot или закрой."
    ],
    "Партнёр ушёл из-за низкой mobile conversion. Новый localized mobile flow — релевантный trigger; просто +€20 CPA не доказывает исправление.",
    "Подготовь reactivation plan для трёх разных dormant partners.",
    "Partner win-back plan",
    [
      "Рассылать «есть новый оффер?» всем.",
      "Игнорировать старый compliance breach.",
      "Возвращать старые links без QA."
    ],
    [
      "Какой reactivation outreach сильный?",
      "Он показывает, что причина паузы понята, называет проверяемое изменение и предлагает небольшой следующий шаг с критериями."
    ],
    ["track360", "affnookRole"]
  ),
  makeLesson(
    "cross-functional-handoff",
    60,
    "Качественный handoff даёт каждой команде контекст, конкретный запрос, deadline и нужные данные без бесконечной переписки.",
    [
      "BI получает metric definitions/IDs/period; finance — terms/invoice/calculation; compliance — placement/evidence; product — reproducible journey.",
      "Ticket отвечает: что произошло, impact, evidence, expected outcome, owner, urgency и dependency.",
      "Privacy minimization означает передавать только необходимые fields через approved channel.",
      "Partnership manager остаётся orchestration owner и сообщает партнёру validated updates."
    ],
    [
      "Выбери правильного functional owner.",
      "Собери complete brief.",
      "Согласуй SLA/priority.",
      "Отслеживай решение и закрой loop."
    ],
    "«Tracking не работает, срочно» недостаточно. Нужны campaign/click IDs, timestamps, expected/actual event, reproduction и business impact.",
    "Перепиши шесть плохих Slack-запросов в полноценные BI/finance/legal/compliance tickets.",
    "Cross-functional request templates",
    [
      "Добавлять всех в чат.",
      "Ставить urgent без impact.",
      "Пересылать сырые player data."
    ],
    [
      "Кто сообщает partner технический статус?",
      "Назначенный partnership/incident owner, используя подтверждённую информацию functional team и согласованный cadence."
    ],
    ["scaleoPostback", "icoPreferences"]
  ),
  makeLesson(
    "networking",
    55,
    "Networking создаёт качественный pipeline, если каждая встреча имеет research, hypothesis, qualification и follow-up.",
    [
      "Meeting brief содержит company/person, portfolio, GEO/source, recent signal, fit hypothesis и 3 questions.",
      "На конференции цель — qualification и next step, а не провести полную negotiation в шумном зале.",
      "Relationship map фиксирует roles/influence и известные commitments этично, без чувствительных gossip.",
      "Follow-up за 24–48 часов повторяет value, decision и один action."
    ],
    [
      "Приоритизируй targets.",
      "Подготовь briefs и calendar buffer.",
      "Запиши structured notes.",
      "Отправь follow-up и CRM next step."
    ],
    "«Рад знакомству» слабее: «Вы подтвердили UK SEO review traffic; пришлите device split до вторника, мы вернём fit assessment в четверг».",
    "Спланируй конференционный день с 8 meetings и подготовь briefs/follow-ups.",
    "Conference relationship pack",
    [
      "Назначать встречи без цели.",
      "Обещать rate на стенде.",
      "Собирать contacts без follow-up."
    ],
    [
      "Как измерять conference ROI до revenue?",
      "Qualified opportunities, agreed next steps completed, evidence obtained и progression по pipeline — с долгосрочным revenue позже."
    ],
    ["affnookRole", "track360"]
  ),
  makeLesson(
    "crisis-communication",
    65,
    "В кризисе доверие сохраняют быстрые факты, containment и предсказуемый cadence — не догадки и преждевременные обещания.",
    [
      "Первый update: known facts, affected scope, start time, containment, owner и next update time.",
      "Отдельно ведутся technical/compliance decision log и partner-facing messages.",
      "Не называй root cause до evidence и не обещай compensation до calculation/approval.",
      "После восстановления нужны validation, backlog handling, RCA, corrective actions и closure."
    ],
    [
      "Открой incident и оцени severity.",
      "Contain/rollback и назначь roles.",
      "Обновляй по cadence даже без change.",
      "Проведи RCA и remediation review."
    ],
    "При postback outage сообщение «всё потеряно» вредно. Лучше: «С 12:10 UTC delivery задержан; clicks сохраняются; traffic paused/continues per plan; следующий update 13:00».",
    "Напиши четыре updates для tracking outage, compliance breach и payment delay.",
    "Crisis communication timeline",
    [
      "Молчать до полного решения.",
      "Публиковать неподтверждённую причину.",
      "Удалять ранние сообщения из incident log."
    ],
    [
      "Что сообщать, если нового факта нет?",
      "Подтвердить ongoing status, containment/impact, что проверяется, owner и новое время следующего update."
    ],
    ["ukgcThirdParties", "scaleoPostback"]
  ),
  makeLesson(
    "portfolio-interview",
    70,
    "Портфолио junior-кандидата сильнее, когда показывает решение, расчёт, контроль риска и learning, не раскрывая конфиденциальные данные.",
    [
      "STAR/CARE structure: context, objective, action/reasoning, result/evidence и reflection.",
      "Используй fictional/sanitized data и ясно обозначай assumptions.",
      "Покажи artifacts: pipeline, calculator, QA, dashboard, incident pack и QBR — с decision, а не только дизайн.",
      "Вопросы работодателю проверяют licence/GEO, portfolio, KPIs, tools, approval authority, compliance culture и coaching."
    ],
    [
      "Выбери 4–6 competency stories.",
      "Санитизируй evidence.",
      "Репетируй расчёт и trade-offs.",
      "Подготовь вопросы и 30/60/90 plan."
    ],
    "Ответ «поднял трафик» слаб. Сильнее: baseline, bottleneck, конкретное изменение, sample/horizon, business result и guardrails.",
    "Собери portfolio outline и запиши ответы на 12 junior interview questions.",
    "Interview portfolio + 30/60/90 plan",
    [
      "Показывать real player data.",
      "Приписывать командный результат себе.",
      "Заучивать цифру без definition."
    ],
    [
      "Что говорить, если нет коммерческого опыта?",
      "Честно использовать учебный кейс: показать структуру решения, расчёты, assumptions, риски, проверку и то, что сделал бы в реальной команде."
    ],
    ["affnookRole", "contractFirst"]
  ),
  makeLesson(
    "capstone",
    120,
    "Capstone объединяет весь цикл Junior Affiliate / Partnerships Manager: research, qualification, deal, tracking, launch, optimization и QBR.",
    [
      "Кейс начинается с fictional brand/GEO/product и ограничений; все unknowns становятся assumptions или questions.",
      "Deliverables связаны: ICP/evidence → forecast/guardrails → terms → tracking map → launch pack → KPI review.",
      "Decision log показывает trade-offs и approvals; compliance/risk embedded в каждый этап.",
      "Защита оценивает не идеальную цифру, а логику, traceability, качество контроля и реакцию на challenge."
    ],
    [
      "Выбери partner и докажи fit.",
      "Смоделируй/согласуй deal.",
      "Спроектируй tracking и safe launch.",
      "Проанализируй 30-day data и проведи QBR."
    ],
    "Fictional partner NorthRank предлагает UK SEO casino traffic. Студент проверяет source/GEO, выбирает capped pilot, описывает NGR, тестирует postback, проходит approval и решает scale/fix/pause по cohort evidence.",
    "Собери единый capstone dossier из 12 артефактов и защити его за 15 минут перед mock stakeholders.",
    "Capstone launch and growth dossier",
    [
      "Использовать реальные бренды как одобрение.",
      "Скрывать допущения.",
      "Масштабировать до tracking/compliance validation."
    ],
    [
      "Как выглядит готовность к junior-роли после курса?",
      "Кандидат самостоятельно ведёт стандартный scoped workflow, считает и документирует решения, распознаёт границы полномочий и вовремя эскалирует риск."
    ],
    ["ukgcThirdParties", "asaCode", "icoPreferences", "googleUtm", "scaleoPostback", "contractFirst"]
  )
];
