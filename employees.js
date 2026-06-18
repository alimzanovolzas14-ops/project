/* DDC Portal — js/employees.js */

// ══════════════════════════════════════════════
//  ORG STRUCTURE MODALS
// ══════════════════════════════════════════════
const ORG_DATA = {
  cyber:{icon:'🔒',name:'Cyber Security Center',head:'Директор CSC',count:47,
    desc:'Ядро кибербезопасности DDC. Центр обеспечивает защиту всей финансово-государственной цифровой инфраструктуры Казахстана.',
    units:['SOC (Security Operations Center) — 16 аналитиков, мониторинг 24/7','SIEM Engineering — администрирование Wazuh, Splunk, OpenSearch','Blue Team — защита, мониторинг, Threat Hunting','Red Team — пентесты, аудит, симуляция атак','Threat Intelligence — MISP, IOC-аналитика','DFIR — цифровая криминалистика, Velociraptor'],
    tools:['Wazuh','Suricata','Zeek','TheHive','MISP','Velociraptor','Splunk','Shuffle'],
    certs:['OSCP','CEH','CISSP','CompTIA Security+','GREM','GCFE']},
  ai:{icon:'🤖',name:'AI Laboratory',head:'Директор AI Lab',count:34,
    desc:'Центр разработки и внедрения систем искусственного интеллекта для государственных задач, финансового сектора и Smart City.',
    units:['NLP Team — обработка казахского/русского языков, BERT-kz','Computer Vision Team — YOLO, face recognition, video analytics','ML Engineering — модели детекции аномалий, fraud detection','MLOps — Kubeflow, MLflow, model lifecycle management','AI Research — R&D, новые архитектуры, публикации'],
    tools:['Python','PyTorch','TensorFlow','LangChain','HuggingFace','MLflow','Kubeflow','FastAPI'],
    certs:['TensorFlow Developer','AWS ML Specialty','Google ML Engineer','Coursera Deep Learning']},
  data:{icon:'📊',name:'Data Analytics Center',head:'Директор DAC',count:28,
    desc:'Платформа больших данных для государственного и финансового секторов. 200+ датасетов, 5TB обрабатывается ежедневно.',
    units:['Data Engineering — ETL, Apache Kafka, Spark pipelines','BI & Visualization — Apache Superset, Grafana dashboards','Data Science — предиктивные модели, statistical analysis','Data Governance — качество данных, каталогизация, MDM','Open Data Platform — публичные датасеты, API'],
    tools:['Apache Spark','Apache Kafka','ClickHouse','dbt','Airflow','Superset','Grafana','Python'],
    certs:['Databricks Certified','Apache Kafka Certified','dbt Certified','Google Data Engineer']},
  cloud:{icon:'☁️',name:'Cloud Center',head:'Директор Cloud',count:31,
    desc:'Проектирование и эксплуатация GovCloud инфраструктуры. 180 Kubernetes nodes, 47 namespace, 34 деплоя в день.',
    units:['Platform Engineering — OpenShift, Kubernetes, GitOps','DevSecOps — CI/CD, GitLab, ArgoCD, security gates','Network Engineering — BGP, SDN, 100GbE fabric','Site Reliability — SLO/SLA, incident response, capacity','Infrastructure as Code — Terraform, Ansible, Helm'],
    tools:['Kubernetes','OpenShift','Docker','Terraform','Ansible','GitLab CI','ArgoCD','Vault'],
    certs:['CKA','CKAD','Red Hat RHCA','AWS Solutions Architect','Terraform Associate']},
  fintech:{icon:'💳',name:'FinTech Center',head:'Директор FinTech',count:42,
    desc:'Разработка и поддержка Digital Tenge (CBDC), Open Banking API и платёжной инфраструктуры Казахстана.',
    units:['Digital Tenge Team — CBDC core, smart contracts, wallet','Open Banking — API Gateway, ISO 20022, PSD2 analogue','Payment Systems — SWIFT, instant payments, processing','Compliance & Security — PCI DSS, AML, KYC процессы','Partner Integration — 12 банков, API-onboarding'],
    tools:['Java/Spring Boot','NestJS','PostgreSQL','Redis','Kafka','HSM','Vault','ISO 20022'],
    certs:['PCI DSS QSA','SWIFT Certified','Oracle Financial Services','AWS Financial Services']},
  dev:{icon:'💻',name:'Software Development Center',head:'Директор SDC',count:89,
    desc:'Крупнейший центр DDC — разработка всех цифровых продуктов: госпорталы, мобильные приложения, API, интеграции.',
    units:['Backend (Java/Python) — 28 разработчиков, микросервисы','Backend (Node.js/NestJS) — 18 разработчиков, API сервисы','Frontend (React/Next.js) — 22 разработчика','Mobile (React Native) — 8 разработчиков','QA & Testing — 8 инженеров, автоматизация, нагрузочное','Architecture — 5 архитекторов, solution design, ADR'],
    tools:['Java','Python','NestJS','React','TypeScript','PostgreSQL','Redis','gRPC'],
    certs:['Oracle Certified Java','AWS Developer','Google Professional Developer','Kubernetes CKAD']},
};

function openOrgModal(key) {
  const d = ORG_DATA[key]; if(!d) return;
  document.getElementById('svcModalContent').innerHTML = `
    <div class="modal-icon">${d.icon}</div>
    <div class="modal-badge">${d.head}</div>
    <h2>${d.name}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin:10px 0 16px">
      <span style="background:rgba(0,169,143,.1);border:1px solid rgba(0,169,143,.2);color:var(--teal-l);font-size:13px;padding:5px 14px;border-radius:6px;font-weight:700">👥 ${d.count} специалистов</span>
    </div>
    <p class="modal-desc">${d.desc}</p>
    <div class="modal-section">
      <div class="modal-section-title">Подразделения</div>
      ${d.units.map(u=>`<div class="modal-proj-row"><span>• ${u}</span></div>`).join('')}
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Технологии</div>
      <div class="modal-tags">${d.tools.map(t=>`<span class="modal-tag">${t}</span>`).join('')}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Сертификации команды</div>
      <div class="modal-tags">${d.certs.map(c=>`<span class="modal-tag" style="border-color:rgba(74,222,128,.2);color:var(--green)">${c}</span>`).join('')}</div>
    </div>
    <div class="modal-btns">
      <a href="#" onclick="closeModal('svcModal');navigate('careers');return false;" class="btn btn-primary" style="font-size:13px">💼 Вакансии в ${d.name.split(' ')[0]} →</a>
      <button class="btn btn-outline" onclick="closeModal('svcModal')" style="font-size:13px">Закрыть</button>
    </div>`;
  openModalEl('svcModal');
}


// ══════════════════════════════════════════════
//  ARCHITECTURE TABS
// ══════════════════════════════════════════════
function showArch(key, btn) {
  document.querySelectorAll('.arch-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.arch-diagram').forEach(d=>d.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const el = document.getElementById('arch-'+key);
  if(el) el.classList.add('active');
}


// ══════════════════════════════════════════════
//  DATA CENTER LIVE GAUGES
// ══════════════════════════════════════════════
function animateDCGauges() {
  const gauges = [
    {el:'dcGauges', fills:[
      {pct: 60+Math.random()*20, color:'var(--teal)'},
      {pct: 48+Math.random()*16, color:'var(--blue)'},
      {pct: 40+Math.random()*10, color:'var(--purple)'},
      {pct: 72+Math.random()*12, color:'var(--yellow)'},
    ]}
  ];
  const container = document.getElementById('dcGauges');
  if(!container) return;
  const rows = container.querySelectorAll('.dc-gauge-row');
  rows.forEach((row, i) => {
    const pct = gauges[0].fills[i]?.pct || 50;
    const color = gauges[0].fills[i]?.color || 'var(--teal)';
    const fill = row.querySelector('.dc-gauge-fill');
    const val = row.querySelector('.dc-gauge-val');
    if(fill) { fill.style.width = Math.round(pct)+'%'; fill.style.background = color; }
    if(val) { val.textContent = Math.round(pct)+'%'; val.style.color = color; }
  });
  const pods = document.getElementById('dcPods');
  if(pods) pods.textContent = (2800+Math.floor(Math.random()*100)).toLocaleString();
}
setInterval(animateDCGauges, 3000);


// ══════════════════════════════════════════════
//  EMPLOYEE PORTAL DATA
// ══════════════════════════════════════════════
const EMPLOYEES = [
  {name:'Алибек Сейткали',initials:'АС',role:{ru:'Head of SOC / CISO',kz:'SOC басшысы / CISO',en:'Head of SOC / CISO'},dept:'cyber',color:'rgba(248,113,113,.2)',certs:['CISSP','OSCP','CEH'],projects:{ru:['Cyber Monitoring Center','SOC 24/7 Platform','Threat Intel Hub'],kz:['Киберқауіп мониторинг орталығы','SOC 24/7','Threat Intel Hub'],en:['Cyber Monitoring Center','SOC 24/7 Platform','Threat Intel Hub']},exp:{ru:'8 лет в ИБ',kz:'8 жыл ИБ-да',en:'8 years in Security'},edu:'КазНТУ / CISSP 2019'},
  {name:'Мадина Жаксыбекова',initials:'МЖ',role:{ru:'Lead AI Engineer',kz:'AI жетекші инженері',en:'Lead AI Engineer'},dept:'ai',color:'rgba(96,165,250,.2)',certs:['TensorFlow Dev','AWS ML'],projects:{ru:['BERT-kz NLP Model','Anomaly Detection','Gov AI Assistant'],kz:['BERT-kz модель','Аномалия детекциясы','Gov AI Assistant'],en:['BERT-kz NLP Model','Anomaly Detection','Gov AI Assistant']},exp:{ru:'6 лет в ML',kz:'6 жыл ML-да',en:'6 years in ML'},edu:'НУ Казахстана / Stanford Online'},
  {name:'Данияр Ахметов',initials:'ДА',role:{ru:'Senior Backend Developer',kz:'Аға Backend Developer',en:'Senior Backend Developer'},dept:'dev',color:'rgba(167,139,250,.2)',certs:['Oracle Java','AWS Dev'],projects:{ru:['Digital Tenge Core','Open Banking API','Payment Gateway'],kz:['Digital Tenge Core','Open Banking API','Төлем шлюзы'],en:['Digital Tenge Core','Open Banking API','Payment Gateway']},exp:{ru:'7 лет в Java',kz:'7 жыл Java-да',en:'7 years in Java'},edu:'КБТУ / Oracle Certified'},
  {name:'Айгерим Нурланова',initials:'АН',role:{ru:'Data Engineer',kz:'Data Engineer',en:'Data Engineer'},dept:'data',color:'rgba(0,169,143,.2)',certs:['Databricks','Apache Kafka'],projects:{ru:['Data Platform KZ','Financial Analytics','Open Data API'],kz:['Data Platform KZ','Қаржылық аналитика','Open Data API'],en:['Data Platform KZ','Financial Analytics','Open Data API']},exp:{ru:'5 лет в Big Data',kz:'5 жыл Big Data',en:'5 years in Big Data'},edu:'Databricks 2022'},
  {name:'Санжар Бекжанов',initials:'СБ',role:{ru:'DevSecOps Engineer',kz:'DevSecOps инженері',en:'DevSecOps Engineer'},dept:'cloud',color:'rgba(251,191,36,.2)',certs:['CKA','CKAD','Terraform'],projects:{ru:['GovCloud Platform','K8s Migration','CI/CD Pipeline'],kz:['GovCloud платформасы','K8s миграция','CI/CD'],en:['GovCloud Platform','K8s Migration','CI/CD Pipeline']},exp:{ru:'5 лет в DevOps',kz:'5 жыл DevOps',en:'5 years in DevOps'},edu:'Red Hat RHCE'},
  {name:'Зауре Сапарова',initials:'ЗС',role:{ru:'FinTech Lead Engineer',kz:'FinTech жетекші инженері',en:'FinTech Lead Engineer'},dept:'fintech',color:'rgba(52,211,153,.2)',certs:['PCI DSS','SWIFT Cert'],projects:{ru:['Digital Tenge CBDC','Open Banking','eKYC Platform'],kz:['Digital Tenge CBDC','Open Banking','eKYC платформасы'],en:['Digital Tenge CBDC','Open Banking','eKYC Platform']},exp:{ru:'9 лет в FinTech',kz:'9 жыл FinTech',en:'9 years in FinTech'},edu:'PCI QSA 2021'},
  {name:'Нурлан Касымов',initials:'НК',role:{ru:'SOC Analyst L3',kz:'SOC Analyst L3',en:'SOC Analyst L3'},dept:'cyber',color:'rgba(248,113,113,.15)',certs:['GREM','GCFE','CompTIA Sec+'],projects:{ru:['SOC Monitoring','Incident Response','Threat Hunting'],kz:['SOC мониторинг','Оқиға жауабы','Threat Hunting'],en:['SOC Monitoring','Incident Response','Threat Hunting']},exp:{ru:'6 лет в SOC',kz:'6 жыл SOC',en:'6 years in SOC'},edu:'GIAC 2020'},
  {name:'Айнур Жумабекова',initials:'АЖ',role:{ru:'ML Research Engineer',kz:'ML зерттеу инженері',en:'ML Research Engineer'},dept:'ai',color:'rgba(96,165,250,.15)',certs:['PyTorch','Google ML'],projects:{ru:['Computer Vision','Predictive Analytics','Document AI'],kz:['Компьютерлік көру','Болжамды аналитика','Document AI'],en:['Computer Vision','Predictive Analytics','Document AI']},exp:{ru:'4 года в ML',kz:'4 жыл ML',en:'4 years in ML'},edu:'Google ML Cert'},
  {name:'Тимур Сейдалин',initials:'ТС',role:{ru:'Cloud Architect',kz:'Бұлт архитекті',en:'Cloud Architect'},dept:'cloud',color:'rgba(251,191,36,.15)',certs:['AWS SA','RHCA'],projects:{ru:['GovCloud Design','DR Site','OpenShift Migration'],kz:['GovCloud дизайны','DR сайты','OpenShift миграция'],en:['GovCloud Design','DR Site','OpenShift Migration']},exp:{ru:'10 лет в Cloud',kz:'10 жыл Cloud',en:'10 years in Cloud'},edu:'AWS SA Pro'},
  {name:'Динара Байжанова',initials:'ДБ',role:{ru:'Frontend Developer',kz:'Frontend Developer',en:'Frontend Developer'},dept:'dev',color:'rgba(167,139,250,.15)',certs:['React','Next.js'],projects:{ru:['DDC Portal','Analytics Dashboard','Mobile App'],kz:['DDC порталы','Аналитика дашборды','Мобильді қосымша'],en:['DDC Portal','Analytics Dashboard','Mobile App']},exp:{ru:'4 года в Frontend',kz:'4 жыл Frontend',en:'4 years in Frontend'},edu:'ИТ-академия'},
  {name:'Асыл Дюсенов',initials:'АД',role:{ru:'Data Scientist',kz:'Data Scientist',en:'Data Scientist'},dept:'data',color:'rgba(0,169,143,.15)',certs:['Databricks ML','Coursera DL'],projects:{ru:['Credit Scoring Model','FX Forecasting','Risk Analytics'],kz:['Кредиттік скоринг','Форекс болжау','Тәуекел аналитикасы'],en:['Credit Scoring Model','FX Forecasting','Risk Analytics']},exp:{ru:'5 лет в Data Science',kz:'5 жыл Data Science',en:'5 years in Data Science'},edu:'Coursera DL'},
  {name:'Камила Нусупова',initials:'КН',role:{ru:'SIEM Engineer',kz:'SIEM инженері',en:'SIEM Engineer'},dept:'cyber',color:'rgba(248,113,113,.12)',certs:['Wazuh Expert','Splunk Core'],projects:{ru:['SIEM Platform','Detection Rules','Log Management'],kz:['SIEM платформасы','Анықтау ережелері','Лог менеджменті'],en:['SIEM Platform','Detection Rules','Log Management']},exp:{ru:'4 года в SIEM',kz:'4 жыл SIEM',en:'4 years in SIEM'},edu:'Splunk Admin'},
];

const DEPT_LABELS = {
  cyber:{ru:'🔒 Cyber Security',kz:'🔒 Киберқауіпсіздік',en:'🔒 Cyber Security'},
  ai:{ru:'🤖 AI Lab',kz:'🤖 AI Зертхана',en:'🤖 AI Lab'},
  data:{ru:'📊 Data',kz:'📊 Деректер',en:'📊 Data'},
  cloud:{ru:'☁️ Cloud',kz:'☁️ Бұлт',en:'☁️ Cloud'},
  fintech:{ru:'💳 FinTech',kz:'💳 FinTech',en:'💳 FinTech'},
  dev:{ru:'💻 Development',kz:'💻 Әзірлеу',en:'💻 Development'},
};

let empDeptFilter = 'all';
function filterEmpDept(dept, btn) {
  empDeptFilter = dept;
  document.querySelectorAll('.emp-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderEmployees();
}
function filterEmployees() { renderEmployees(); }

function renderEmployees() {
  const grid = document.getElementById('empGrid');
  if (!grid) return;
  const search = (document.getElementById('empSearch')?.value || '').toLowerCase();
  const filtered = EMPLOYEES.filter(e => {
    const matchDept = empDeptFilter === 'all' || e.dept === empDeptFilter;
    const roleStr = (e.role[lang] || e.role.ru).toLowerCase();
    const matchSearch = !search || e.name.toLowerCase().includes(search) || roleStr.includes(search);
    return matchDept && matchSearch;
  });
  grid.innerHTML = filtered.map((e, i) => `
    <div class="emp-card" onclick="openEmpModal(${EMPLOYEES.indexOf(e)})">
      <div class="emp-avatar" style="background:${e.color};border:2px solid ${e.color.replace('.2)','0.4)').replace('.15)','0.4)')}">
        <span style="font-family:'Manrope',sans-serif;font-size:22px;font-weight:900;color:rgba(255,255,255,0.9)">${e.initials}</span>
      </div>
      <div class="emp-name">${e.name}</div>
      <div class="emp-role">${e.role[lang] || e.role.ru}</div>
      <div class="emp-dept-tag">${DEPT_LABELS[e.dept]?.[lang] || DEPT_LABELS[e.dept]?.ru}</div>
      <div class="emp-certs">${e.certs.map(c => `<span class="emp-cert">${c}</span>`).join('')}</div>
      <div class="emp-stats">
        <span>💼 ${(e.projects[lang] || e.projects.ru).length} ${lang==='en'?'projects':lang==='kz'?'жоба':'проекта'}</span>
        <span>⏱ ${e.exp[lang] || e.exp.ru}</span>
      </div>
    </div>`).join('');
}

function openEmpModal(idx) {
  const e = EMPLOYEES[idx]; if (!e) return;
  const projs = e.projects[lang] || e.projects.ru;
  const closeL = T[lang]?.modalClose || 'Закрыть';
  const certL = {ru:'Сертификации',kz:'Сертификаттар',en:'Certifications'};
  const projL = {ru:'Проекты',kz:'Жобалар',en:'Projects'};
  document.getElementById('svcModalContent').innerHTML = `
    <div class="emp-modal-header">
      <div class="emp-modal-avatar" style="background:${e.color}">
        <span style="font-family:'Manrope',sans-serif;font-size:32px;font-weight:900;color:rgba(255,255,255,.9)">${e.initials}</span>
      </div>
      <div class="emp-modal-info">
        <h2>${e.name}</h2>
        <div style="color:var(--teal-l);font-weight:600;font-size:14px">${e.role[lang] || e.role.ru}</div>
        <div style="font-size:12px;color:var(--dim);margin-top:4px">${e.edu}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px">⏱ ${e.exp[lang] || e.exp.ru}</div>
      </div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">${certL[lang]||certL.ru}</div>
      <div class="modal-tags">${e.certs.map(c=>`<span class="modal-tag" style="border-color:rgba(74,222,128,.2);color:var(--green)">${c}</span>`).join('')}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">${projL[lang]||projL.ru}</div>
      <div class="emp-projects-list">${projs.map(p=>`<div class="emp-proj-item">✅ ${p}</div>`).join('')}</div>
    </div>
    <div class="modal-btns">
      <button class="btn btn-outline" onclick="closeModal('svcModal')" style="font-size:13px">${closeL}</button>
    </div>`;
  openModalEl('svcModal');
}

// ══════════════════════════════════════════════
//  PARTNERS DATA
// ══════════════════════════════════════════════
const PARTNERS_DATA = [
  {cat:'gov',icon:'🏦',bg:'rgba(0,169,143,.1)',name:'Национальный Банк РК',desc:'Учредитель и основной заказчик DDC',tag:'Основатель',link:'https://nationalbank.kz'},
  {cat:'gov',icon:'🏛️',bg:'rgba(59,130,246,.1)',name:'Правительство РК',desc:'Цифровизация госуслуг и Smart Bridge',tag:'Заказчик',link:'https://gov.kz'},
  {cat:'gov',icon:'📱',bg:'rgba(59,130,246,.1)',name:'eGov Kazakhstan',desc:'3 200+ государственных услуг онлайн',tag:'Интегратор',link:'https://egov.kz'},
  {cat:'gov',icon:'🌉',bg:'rgba(59,130,246,.1)',name:'Smart Bridge',desc:'Межведомственная интеграционная шина',tag:'Платформа',link:'https://egov.kz'},
  {cat:'gov',icon:'🏛️',bg:'rgba(167,139,250,.1)',name:'МЦРИАП РК',desc:'Министерство цифрового развития РК',tag:'Регулятор',link:'https://mci.gov.kz'},
  {cat:'gov',icon:'💰',bg:'rgba(251,191,36,.1)',name:'Министерство Финансов',desc:'Бюджетные информационные системы',tag:'Заказчик',link:'https://minfin.gov.kz'},
  {cat:'bank',icon:'🏦',bg:'rgba(0,169,143,.1)',name:'Halyk Bank',desc:'Open Banking API, Digital Tenge',tag:'Партнёр',link:'https://halykbank.kz'},
  {cat:'bank',icon:'🏦',bg:'rgba(0,169,143,.1)',name:'Kaspi Bank',desc:'FinTech интеграция, платёжные сервисы',tag:'Партнёр',link:'https://kaspi.kz'},
  {cat:'bank',icon:'🏦',bg:'rgba(0,169,143,.1)',name:'ForteBank',desc:'Open Banking, SIEM интеграция',tag:'Партнёр',link:'https://forte.kz'},
  {cat:'bank',icon:'🏦',bg:'rgba(0,169,143,.1)',name:'BCC Bank',desc:'Цифровой банкинг, API Gateway',tag:'Партнёр',link:'https://bcc.kz'},
  {cat:'tech',icon:'🔴',bg:'rgba(248,113,113,.1)',name:'Red Hat',desc:'OpenShift, RHEL, Ansible',tag:'Вендор',link:'https://redhat.com'},
  {cat:'tech',icon:'☁️',bg:'rgba(59,130,246,.1)',name:'Microsoft Azure',desc:'Гибридное облако, Active Directory',tag:'Вендор',link:'https://azure.microsoft.com'},
  {cat:'tech',icon:'🔴',bg:'rgba(248,113,113,.08)',name:'Oracle',desc:'Database, Financial Services Suite',tag:'Вендор',link:'https://oracle.com'},
  {cat:'tech',icon:'🛡️',bg:'rgba(248,113,113,.08)',name:'Palo Alto Networks',desc:'NGFW, Cortex XDR, SIEM',tag:'Security',link:'https://paloaltonetworks.com'},
  {cat:'tech',icon:'🌊',bg:'rgba(0,169,143,.08)',name:'Confluent / Kafka',desc:'Стриминг данных, Event Bus',tag:'Data',link:'https://confluent.io'},
  {cat:'edu',icon:'🎓',bg:'rgba(167,139,250,.1)',name:'Nazarbayev University',desc:'Совместные AI/ML исследования',tag:'Образование',link:'https://nu.edu.kz'},
  {cat:'edu',icon:'🎓',bg:'rgba(167,139,250,.1)',name:'КБТУ',desc:'Подготовка кадров, стажировки',tag:'Образование',link:'https://kbtu.kz'},
  {cat:'edu',icon:'🎓',bg:'rgba(167,139,250,.1)',name:'IITU',desc:'Партнёрская программа разработчиков',tag:'Образование',link:'https://iitu.edu.kz'},
];

let partnerFilter = 'all';
function filterPartners(cat, btn) {
  partnerFilter = cat;
  document.querySelectorAll('.partner-cat-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  renderPartners();
}
function renderPartners() {
  const grid = document.getElementById('partnersGrid'); if(!grid) return;
  const filtered = partnerFilter==='all'?PARTNERS_DATA:PARTNERS_DATA.filter(p=>p.cat===partnerFilter);
  grid.innerHTML = filtered.map(p=>`
    <a class="partner-logo-card reveal" href="${p.link}" target="_blank" rel="noopener">
      <div class="partner-logo-icon" style="background:${p.bg}">${p.icon}</div>
      <div class="partner-logo-name">${p.name}</div>
      <div class="partner-logo-desc">${p.desc}</div>
      <div class="partner-logo-tag">${p.tag}</div>
    </a>`).join('');
  grid.querySelectorAll('.reveal').forEach(el=>revObs&&revObs.observe(el));
}



