/* DDC Portal — js/projects.js */

// ══════════════════════════════════════════════
//  PROJECTS DATA
// ══════════════════════════════════════════════
const PROJECTS = [
  {cat:'fintech',status:'active',icon:'💎',
   name:{ru:'Digital Tenge Platform',kz:'Digital Tenge Platform',en:'Digital Tenge Platform'},
   desc:{ru:'Платформа цифровой национальной валюты Казахстана. 500K+ пользователей, ₸2.3B оборот в месяц.',kz:'Қазақстанның цифрлық ұлттық валюта платформасы. 500K+ пайдаланушы.',en:'Kazakhstan\'s digital national currency platform. 500K+ users, ₸2.3B monthly turnover.'},
   tags:['CBDC','Blockchain','NestJS','PostgreSQL']},
  {cat:'cyber',status:'active',icon:'🛡️',
   name:{ru:'Cyber Monitoring Center',kz:'Кибермониторинг орталығы',en:'Cyber Monitoring Center'},
   desc:{ru:'24/7 SOC центр мониторинга и реагирования на кибератаки. 2,847+ угроз блокируется ежедневно.',kz:'24/7 SOC мониторинг орталығы. Күн сайын 2 847+ қауіп бұғатталады.',en:'24/7 SOC monitoring and incident response center. 2,847+ threats blocked daily.'},
   tags:['Wazuh','SIEM','Suricata','TheHive']},
  {cat:'ai',status:'active',icon:'📊',
   name:{ru:'Data Platform KZ',kz:'Data Platform KZ',en:'Data Platform KZ'},
   desc:{ru:'Государственная платформа больших данных. 200+ активных датасетов, 5TB данных обрабатывается ежедневно.',kz:'Мемлекеттік деректер платформасы. 200+ датасет, тәулігіне 5TB деректер.',en:'National big data platform. 200+ active datasets, 5TB processed daily.'},
   tags:['Apache Spark','Kafka','ClickHouse','Grafana']},
  {cat:'fintech',status:'active',icon:'🔗',
   name:{ru:'Open Banking API',kz:'Open Banking API',en:'Open Banking API'},
   desc:{ru:'Открытый API-шлюз для банковской экосистемы Казахстана. 12 банков подключено.',kz:'Қазақстан банк экожүйесі үшін ашық API шлюзы. 12 банк қосылды.',en:'Open API gateway for Kazakhstan\'s banking ecosystem. 12 banks connected.'},
   tags:['REST API','OAuth 2.0','WSO2','ISO 20022']},
  {cat:'gov',status:'active',icon:'🆔',
   name:{ru:'Digital Identity Platform',kz:'Цифрлық жеке куәлік',en:'Digital Identity Platform'},
   desc:{ru:'Единая платформа цифровой идентификации граждан с биометрической верификацией.',kz:'Биометриялық верификациямен азаматтарды цифрлық сәйкестендіру платформасы.',en:'Unified digital identity platform for citizens with biometric verification.'},
   tags:['eKYC','Biometrics','Digital ID','PKI']},
  {cat:'ai',status:'dev',icon:'🤖',
   name:{ru:'AI Analytics Platform',kz:'AI Analytics Platform',en:'AI Analytics Platform'},
   desc:{ru:'Платформа интеллектуальной аналитики для выявления финансовых аномалий и прогнозирования рисков.',kz:'Қаржылық аномалияларды анықтауға арналған интеллектуалды аналитика платформасы.',en:'Intelligent analytics platform for detecting financial anomalies and risk forecasting.'},
   tags:['Python','TensorFlow','LangChain','MLflow']},
  {cat:'gov',status:'dev',icon:'🏛️',
   name:{ru:'Smart Government Integration',kz:'Smart Government интеграциясы',en:'Smart Government Integration'},
   desc:{ru:'Интеграционная шина государственных информационных систем на базе микросервисной архитектуры.',kz:'Микросервис архитектурасына негізделген мемлекеттік ақпараттық жүйелерді интеграциялау.',en:'Government information systems integration bus based on microservices architecture.'},
   tags:['Smart Bridge','Microservices','Kafka','Kubernetes']},
  {cat:'cyber',status:'active',icon:'🔍',
   name:{ru:'Vulnerability Management',kz:'Осалдықтарды басқару',en:'Vulnerability Management'},
   desc:{ru:'Автоматизированная система сканирования и управления уязвимостями государственной инфраструктуры.',kz:'Мемлекеттік инфрақұрылымдағы осалдықтарды автоматты сканерлеу жүйесі.',en:'Automated vulnerability scanning and management system for government infrastructure.'},
   tags:['OpenVAS','Nessus','CVSS','MITRE']},
  {cat:'ai',status:'active',icon:'💬',
   name:{ru:'Gov AI Assistant',kz:'Gov AI Assistant',en:'Gov AI Assistant'},
   desc:{ru:'Многоязычный AI-ассистент для обработки обращений граждан на казахском, русском и английском.',kz:'Қазақ, орыс және ағылшын тілдерінде азаматтардың өтініштерін өңдейтін AI-көмекші.',en:'Multilingual AI assistant for processing citizen requests in Kazakh, Russian and English.'},
   tags:['NLP','LangChain','BERT-kz','FastAPI']},
];


// ══════════════════════════════════════════════
//  PROJECT DETAIL DATA
// ══════════════════════════════════════════════
const PROJ_DETAIL = {
  0: { // Digital Tenge
    kpis:[{v:'500K+',l:{ru:'Пользователей',kz:'Пайдаланушы',en:'Users'}},{v:'₸2.3B',l:{ru:'Оборот/мес',kz:'Айналым/ай',en:'Volume/mo'}},{v:'PCI DSS',l:{ru:'Сертификат',kz:'Сертификат',en:'Certified'}},{v:'<1с',l:{ru:'Транзакция',kz:'Транзакция',en:'Transaction'}}],
    techs:['NestJS','PostgreSQL','Redis','Blockchain','SWIFT','ISO 20022','OAuth 2.0','HSM','Vault','OpenAPI'],
    projects:[{n:'Digital Tenge CBDC',s:'active'},{n:'Open Banking API',s:'active'},{n:'Instant Payment Platform',s:'dev'}],
    detail:{ru:'Платформа цифрового национального тенге реализует концепцию CBDC (Central Bank Digital Currency) для Казахстана. Система обеспечивает мгновенные платежи, программируемые деньги и полную интеграцию с банковской экосистемой страны. Архитектура построена на распределённом реестре с использованием HSM для хранения ключей и OAuth 2.0 для авторизации. Соответствует стандарту PCI DSS Level 1.',kz:'Цифрлық ұлттық теңге платформасы Қазақстан үшін CBDC тұжырымдамасын іске асырады. Жүйе жылдам төлемдер, бағдарламаланатын ақша және банктік жүйемен толық интеграцияны қамтамасыз етеді.',en:'The digital national tenge platform implements the CBDC concept for Kazakhstan. The system provides instant payments, programmable money and full integration with the country&#39;s banking ecosystem. Architecture is built on a distributed ledger using HSM for key storage and OAuth 2.0 for authorization. PCI DSS Level 1 compliant.'},
    arch:'CBDC Core → Blockchain Ledger → API Gateway → Mobile App / Bank Integration',
    chart:{labels:['Q1 2024','Q2 2024','Q3 2024','Q4 2024','Q1 2025','Q2 2025'],data:[120,210,310,390,450,510],label:'Пользователей (тыс.)'}
  },
  1: { // Cyber Monitoring Center
    kpis:[{v:'2,847',l:{ru:'Атак/сутки',kz:'Шабуыл/тәулік',en:'Attacks/day'}},{v:'8.4мин',l:{ru:'Реакция',kz:'Жауап',en:'Response'}},{v:'99.97%',l:{ru:'Uptime SOC',kz:'Uptime SOC',en:'SOC Uptime'}},{v:'24/7',l:{ru:'Мониторинг',kz:'Мониторинг',en:'Monitoring'}}],
    techs:['Wazuh','SIEM','Suricata','TheHive','MISP','Zeek','Velociraptor','OpenVAS','OpenSearch','Splunk'],
    projects:[{n:'SOC Center 24/7',s:'active'},{n:'Threat Intelligence Platform',s:'active'},{n:'Cyber Range',s:'active'},{n:'MITRE ATT&CK Integration',s:'dev'}],
    detail:{ru:'Центр мониторинга кибербезопасности работает в режиме 24/7/365. SOC-команда отслеживает все события безопасности в государственной инфраструктуре Казахстана. Используется полный стек Open Source инструментов: Wazuh для SIEM/XDR, Suricata для IDS/IPS, TheHive для управления инцидентами, MISP для Threat Intelligence.',kz:'Киберқауіпсіздік мониторинг орталығы 24/7/365 режимінде жұмыс жасайды. SOC командасы Қазақстан мемлекеттік инфрақұрылымындағы барлық қауіпсіздік оқиғаларын бақылайды.',en:'The cybersecurity monitoring center operates 24/7/365. The SOC team monitors all security events in Kazakhstan\'s government infrastructure. A full stack of open source tools is used: Wazuh for SIEM/XDR, Suricata for IDS/IPS, TheHive for incident management, MISP for Threat Intelligence.'},
    arch:'Wazuh Agents → SIEM Cluster → Correlation Engine → Incident Response → TheHive',
    chart:{labels:['DDoS','Phishing','Malware','Brute Force','Ransomware','SQLi'],data:[1240,874,412,198,89,34],label:'Угрозы заблокировано',type:'bar'}
  },
  2: { // Data Platform KZ
    kpis:[{v:'200+',l:{ru:'Датасетов',kz:'Датасет',en:'Datasets'}},{v:'5TB',l:{ru:'Данных/день',kz:'Деректер/күн',en:'Data/day'}},{v:'500+',l:{ru:'Пользователей',kz:'Пайдаланушы',en:'Users'}},{v:'99.9%',l:{ru:'Доступность',kz:'Қолжетімділік',en:'Uptime'}}],
    techs:['Apache Spark','Kafka','ClickHouse','Grafana','Hadoop','Airflow','dbt','MinIO','Superset','Trino'],
    projects:[{n:'National Data Lake',s:'active'},{n:'Open Data Portal',s:'active'},{n:'Real-time Analytics',s:'active'},{n:'Data Mesh Architecture',s:'dev'}],
    detail:{ru:'Государственная платформа больших данных обеспечивает сбор, хранение и аналитику данных от всех государственных ведомств Казахстана. Ежедневно обрабатывается более 5TB данных из 200+ датасетов. Архитектура Data Mesh позволяет каждому ведомству управлять своими данными самостоятельно.',kz:'Мемлекеттік үлкен деректер платформасы Қазақстанның барлық мемлекеттік мекемелерінен деректерді жинауды, сақтауды және талдауды қамтамасыз етеді.',en:'The state big data platform ensures collection, storage and analytics of data from all Kazakh government agencies. Over 5TB of data from 200+ datasets is processed daily. The Data Mesh architecture allows each agency to manage its own data independently.'},
    arch:'Source Systems → Kafka Streams → Data Lake (MinIO) → Spark Processing → ClickHouse → Grafana/Superset',
    chart:{labels:['Янв','Фев','Мар','Апр','Май','Июн'],data:[3.2,3.8,4.1,4.5,4.8,5.0],label:'Объём данных (TB/день)'}
  },
  3: { // Open Banking API
    kpis:[{v:'12',l:{ru:'Банков',kz:'Банк',en:'Banks'}},{v:'5M+',l:{ru:'API вызовов/день',kz:'API/күн',en:'API calls/day'}},{v:'ISO 20022',l:{ru:'Стандарт',kz:'Стандарт',en:'Standard'}},{v:'<50мс',l:{ru:'Latency',kz:'Latency',en:'Latency'}}],
    techs:['REST API','OAuth 2.0','WSO2','ISO 20022','OpenAPI 3.0','Kong Gateway','mTLS','PKI','RabbitMQ','Redis'],
    projects:[{n:'Open Banking Gateway',s:'active'},{n:'PSD2 Kazakhstan',s:'active'},{n:'Account Information API',s:'active'},{n:'Payment Initiation API',s:'dev'}],
    detail:{ru:'Открытый API-шлюз создаёт единую экосистему для банковского сектора Казахстана. 12 банков уже подключены к платформе, ежедневно обрабатывается более 5 миллионов API-вызовов. Платформа реализует стандарт Open Banking по аналогии с европейской директивой PSD2.',kz:'Ашық API шлюзы Қазақстанның банк секторы үшін бірыңғай экожүйе құрады. 12 банк платформаға қосылды, күн сайын 5 миллионнан астам API шақыруы өңделеді.',en:'The open API gateway creates a unified ecosystem for Kazakhstan\'s banking sector. 12 banks are already connected to the platform, processing over 5 million API calls daily. The platform implements the Open Banking standard similar to the European PSD2 directive.'},
    arch:'Banks → mTLS → API Gateway (WSO2/Kong) → OAuth2 Authorization → Core Banking → Consumer Apps',
    chart:{labels:['Q3 2024','Q4 2024','Q1 2025','Q2 2025'],data:[8,10,11,12],label:'Подключённых банков'}
  },
  4: { // Digital Identity Platform
    kpis:[{v:'4M+',l:{ru:'Граждан',kz:'Азамат',en:'Citizens'}},{v:'eKYC',l:{ru:'Верификация',kz:'Верификация',en:'Verification'}},{v:'PKI',l:{ru:'Инфраструктура',kz:'Инфрақұрылым',en:'Infrastructure'}},{v:'GDPR+',l:{ru:'Защита данных',kz:'Деректер қорғау',en:'Data Protection'}}],
    techs:['eKYC','Biometrics','Digital ID','PKI','FIDO2','OpenID Connect','Keycloak','HSM','FaceID','Liveness Detection'],
    projects:[{n:'National Digital ID',s:'active'},{n:'eKYC Platform',s:'active'},{n:'Biometric Passport',s:'active'},{n:'Digital Signature',s:'dev'}],
    detail:{ru:'Единая платформа цифровой идентификации граждан Казахстана. Система поддерживает биометрическую верификацию по лицу и отпечатку пальца, электронную подпись и интеграцию с мобильным приложением eGov. Соответствует требованиям eIDAS и FIDO2.',kz:'Қазақстан азаматтарының бірыңғай цифрлық сәйкестендіру платформасы. Жүйе бет пен саусақ ізі бойынша биометриялық верификацияны, электрондық қолтаңбаны қолдайды.',en:'Unified digital identity platform for Kazakh citizens. The system supports biometric verification by face and fingerprint, electronic signature and integration with the eGov mobile app. Compliant with eIDAS and FIDO2 requirements.'},
    arch:'Citizen → FaceID/Fingerprint → Liveness Check → PKI → Digital ID Token → Government Services',
    chart:{labels:['2021','2022','2023','2024','2025'],data:[500,1200,2100,3200,4000],label:'Граждан (тыс.)'}
  },
  5: { // AI Analytics Platform
    kpis:[{v:'94%',l:{ru:'Точность',kz:'Дәлдік',en:'Accuracy'}},{v:'1.2M+',l:{ru:'Запросов/день',kz:'Сұрау/күн',en:'Requests/day'}},{v:'18',l:{ru:'AI-моделей',kz:'AI-модель',en:'AI Models'}},{v:'3x',l:{ru:'Ускорение',kz:'Жеделдету',en:'Speedup'}}],
    techs:['Python','TensorFlow','LangChain','MLflow','PyTorch','Kubeflow','FastAPI','Airflow','Redis','MinIO'],
    projects:[{n:'Anomaly Detection System',s:'active'},{n:'Gov AI Assistant',s:'active'},{n:'Document AI Pipeline',s:'dev'},{n:'Risk Forecasting Engine',s:'dev'}],
    detail:{ru:'Платформа интеллектуальной аналитики объединяет 18 AI-моделей в единую инфраструктуру. Основные задачи: выявление мошеннических транзакций (точность 94%), прогнозирование финансовых рисков, обработка документов и многоязычный AI-ассистент для госпорталов.',kz:'Интеллектуалды аналитика платформасы 18 AI-моделін бірыңғай инфрақұрылымда біріктіреді. Негізгі міндеттер: алаяқтық транзакцияларды анықтау, қаржылық тәуекелдерді болжау.',en:'The intelligent analytics platform combines 18 AI models into a single infrastructure. Key tasks: fraud transaction detection (94% accuracy), financial risk forecasting, document processing and multilingual AI assistant for government portals.'},
    arch:'Data Sources → Feature Store → Model Training (MLflow) → API (FastAPI) → Government Apps',
    chart:{labels:['ML Models','NLP','Computer Vision','Predictive','Document AI','Anomaly'],data:[94,91,89,87,85,94],label:'Точность моделей (%)',type:'bar'}
  },
  6: { // Smart Government Integration
    kpis:[{v:'47',l:{ru:'Систем',kz:'Жүйе',en:'Systems'}},{v:'5M+',l:{ru:'Запросов/день',kz:'Сұрау/күн',en:'Requests/day'}},{v:'Smart Bridge',l:{ru:'Технология',kz:'Технология',en:'Technology'}},{v:'ISO 27001',l:{ru:'Сертификат',kz:'Сертификат',en:'Certified'}}],
    techs:['Smart Bridge','Microservices','Kafka','Kubernetes','Spring Boot','API Gateway','OpenAPI','GraphQL','gRPC','Istio'],
    projects:[{n:'Smart Bridge Platform',s:'active'},{n:'eGov API Hub',s:'active'},{n:'Government ESB',s:'active'},{n:'Data Exchange Protocol',s:'dev'}],
    detail:{ru:'Интеграционная шина государственных информационных систем обеспечивает бесшовный обмен данными между 47 ведомственными системами. В основе — платформа Smart Bridge с микросервисной архитектурой и Apache Kafka для потоковой обработки данных.',kz:'Мемлекеттік ақпараттық жүйелерді интеграциялау шинасы 47 ведомстволық жүйе арасындағы деректер алмасуын қамтамасыз етеді.',en:'The government information systems integration bus provides seamless data exchange between 47 departmental systems. Based on the Smart Bridge platform with microservice architecture and Apache Kafka for streaming data processing.'},
    arch:'Gov Agency → API Gateway → Smart Bridge ESB → Kafka → Target System',
    chart:{labels:['2022','2023','2024','2025 Plan'],data:[12,27,38,47],label:'Интегрированных систем'}
  },
  7: { // Vulnerability Management
    kpis:[{v:'99.9%',l:{ru:'Покрытие',kz:'Қамту',en:'Coverage'}},{v:'CVE',l:{ru:'База данных',kz:'Дерек қор',en:'Database'}},{v:'MITRE',l:{ru:'ATT&CK',kz:'ATT&CK',en:'ATT&CK'}},{v:'<24ч',l:{ru:'Патчинг',kz:'Патчинг',en:'Patching'}}],
    techs:['OpenVAS','Nessus','CVSS','MITRE','Tenable.sc','Qualys','DefectDojo','Jira','Ansible','GitLab CI'],
    projects:[{n:'Vulnerability Scanner',s:'active'},{n:'Patch Management',s:'active'},{n:'Red Team Platform',s:'active'},{n:'Attack Surface Management',s:'dev'}],
    detail:{ru:'Автоматизированная система сканирования и управления уязвимостями охватывает всю государственную инфраструктуру Казахстана. Ежедневное сканирование более 50 000 хостов, интеграция с базой CVE и MITRE ATT&CK Framework для приоритизации рисков.',kz:'Автоматтандырылған осалдықтарды сканерлеу жүйесі Қазақстанның барлық мемлекеттік инфрақұрылымын қамтиды. 50 000-нан астам хостты күнделікті сканерлеу.',en:'The automated vulnerability scanning and management system covers all of Kazakhstan\'s government infrastructure. Daily scanning of over 50,000 hosts, integration with CVE database and MITRE ATT&CK Framework for risk prioritization.'},
    arch:'Target Systems → OpenVAS/Nessus Scan → CVE Correlation → CVSS Scoring → DefectDojo → Patch Automation',
    chart:{labels:['Critical','High','Medium','Low','Info'],data:[12,89,342,1205,4820],label:'Уязвимостей найдено',type:'bar'}
  },
  8: { // Gov AI Assistant
    kpis:[{v:'3 языка',l:{ru:'Поддержка',kz:'Тіл',en:'Languages'}},{v:'91%',l:{ru:'NLU точность',kz:'NLU дәлдік',en:'NLU Accuracy'}},{v:'500K+',l:{ru:'Сессий/мес',kz:'Сессия/ай',en:'Sessions/mo'}},{v:'<2с',l:{ru:'Ответ',kz:'Жауап',en:'Response'}}],
    techs:['NLP','LangChain','BERT-kz','FastAPI','Redis','PostgreSQL','Kubernetes','Grafana','Milvus','RAG'],
    projects:[{n:'Gov Chatbot (kz/ru/en)',s:'active'},{n:'Document Q&A System',s:'active'},{n:'Voice Assistant',s:'dev'},{n:'Multimodal AI',s:'dev'}],
    detail:{ru:'Многоязычный AI-ассистент обрабатывает обращения граждан на казахском, русском и английском языках. Система использует BERT-kz — казахстанскую языковую модель — и RAG-архитектуру для точных ответов на основе официальных документов.',kz:'Көптілді AI-көмекші қазақ, орыс және ағылшын тілдерінде азаматтардың өтініштерін өңдейді. Жүйе BERT-kz — қазақстандық тілдік моделін — және дәл жауаптар үшін RAG архитектурасын пайдаланады.',en:'The multilingual AI assistant processes citizen requests in Kazakh, Russian and English. The system uses BERT-kz — a Kazakhstani language model — and RAG architecture for accurate answers based on official documents.'},
    arch:'Citizen → NLP Layer (BERT-kz) → Intent Classification → RAG (Milvus) → LangChain → Response',
    chart:{labels:['Янв','Фев','Мар','Апр','Май','Июн'],data:[280,320,380,420,470,510],label:'Обращений (тыс./мес)'}
  },
};

function openProjModal(idx) {
  const p = PROJECTS[idx];
  const d = PROJ_DETAIL[idx];
  const t = T[lang];
  const sLabel=(s)=>s==='active'?(lang==='en'?'● Active':lang==='kz'?'● Белсенді':'● Активен'):(lang==='en'?'◐ In Dev':lang==='kz'?'◐ Жасалуда':'◐ В разработке');
  
  const kpiHTML = d ? `<div class="modal-section"><div class="modal-section-title">KPI</div><div class="modal-kpi-grid">${d.kpis.map(k=>`<div class="modal-kpi"><div class="modal-kpi-val">${k.v}</div><div class="modal-kpi-lbl">${k.l[lang]||k.l.ru}</div></div>`).join('')}</div></div>` : '';
  const detailHTML = d ? `<p style="font-size:13px;color:var(--muted);line-height:1.8;margin:16px 0">${d.detail[lang]||d.detail.ru}</p>` : '';
  const techHTML = d ? `<div class="modal-section"><div class="modal-section-title">Tech Stack</div><div class="modal-tags">${d.techs.map(tg=>`<span class="modal-tag">${tg}</span>`).join('')}</div></div>` : '';
  const archHTML = d ? `<div class="modal-section"><div class="modal-section-title" style="color:var(--blue)">🏗️ Архитектура</div><div style="background:rgba(0,0,0,0.3);border:1px solid rgba(96,165,250,0.2);border-radius:10px;padding:14px;font-size:12px;color:var(--muted);font-family:'Manrope',sans-serif;letter-spacing:.02em">${d.arch}</div></div>` : '';
  const projHTML = d ? `<div class="modal-section"><div class="modal-section-title">${lang==='en'?'Sub-projects':lang==='kz'?'Ішкі жобалар':'Проекты'}</div>${d.projects.map(pr=>`<div class="modal-proj-row"><span>${pr.n}</span><span class="proj-status ${pr.s==='active'?'s-active':'s-dev'}" style="margin:0">${sLabel(pr.s)}</span></div>`).join('')}</div>` : '';
  const chartId = 'projDetailChart_'+idx;
  const chartHTML = d && d.chart ? `<div class="modal-section"><div class="modal-section-title">📈 ${lang==='en'?'Analytics':lang==='kz'?'Аналитика':'Аналитика'}</div><canvas id="${chartId}" height="160"></canvas></div>` : '';

  document.getElementById('svcModalContent').innerHTML = `
    <div class="modal-icon">${p.icon}</div>
    <div class="modal-badge" style="background:${p.status==='active'?'rgba(74,222,128,0.12)':'rgba(251,191,36,0.12)'};color:${p.status==='active'?'var(--green)':'var(--yellow)'};border-color:${p.status==='active'?'rgba(74,222,128,0.3)':'rgba(251,191,36,0.3)'}">${sLabel(p.status)}</div>
    <h2>${p.name[lang]||p.name.ru}</h2>
    ${detailHTML}
    ${kpiHTML}
    ${techHTML}
    ${archHTML}
    ${projHTML}
    ${chartHTML}
    <div class="modal-btns">
      <a href="#" onclick="closeModal('svcModal');navigate('contact');return false;" class="btn btn-primary" style="font-size:14px">${lang==='en'?'Request Service →':lang==='kz'?'Қызмет сұрау →':'Запросить услугу →'}</a>
      <button class="btn btn-outline" onclick="closeModal('svcModal')" style="font-size:14px">${lang==='en'?'Close':lang==='kz'?'Жабу':'Закрыть'}</button>
    </div>`;
  openModalEl('svcModal');
  if (d && d.chart) {
    setTimeout(()=>{
      const canvas = document.getElementById(chartId);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const chartType = d.chart.type || 'line';
      const isBar = chartType === 'bar';
      new Chart(ctx,{type:chartType,data:{labels:d.chart.labels,datasets:[{label:d.chart.label,data:d.chart.data,backgroundColor:isBar?d.chart.data.map((_,i)=>`hsl(${160+i*20},70%,40%)`+55):'rgba(0,169,143,0.15)',borderColor:'#00A98F',borderWidth:2,pointBackgroundColor:'#00A98F',tension:.4,fill:!isBar,borderRadius:isBar?6:0}]},options:{plugins:{legend:{labels:{color:'rgba(255,255,255,0.5)',font:{size:11}}}},scales:{x:{ticks:{color:'rgba(255,255,255,0.4)',font:{size:10}}},y:{ticks:{color:'rgba(255,255,255,0.4)',font:{size:10}}}},animation:{duration:600}}});
    },100);
  }
}

let projFilter = 'all';
function filterProj(cat,btn) {
  projFilter = cat;
  document.querySelectorAll('.proj-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects();
}
function renderProjects() {
  const grid = document.getElementById('projGrid');
  if (!grid) return;
  const items = projFilter==='all'?PROJECTS:PROJECTS.filter(p=>p.cat===projFilter);
  grid.innerHTML = items.map((p,i)=>`
    <div class="proj-card reveal" onclick="openProjModal(${PROJECTS.indexOf(p)})" style="cursor:pointer;transition:transform .2s,box-shadow .2s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 32px rgba(0,169,143,0.2)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
      <span class="proj-status ${p.status==='active'?'s-active':'s-dev'}">${p.status==='active'?(lang==='en'?'Active':lang==='kz'?'Белсенді':'Активен'):(lang==='en'?'In Development':lang==='kz'?'Жасалуда':'В разработке')}</span>
      <div style="font-size:28px;margin-bottom:10px">${p.icon}</div>
      <h3>${p.name[lang]||p.name.ru}</h3>
      <p>${p.desc[lang]||p.desc.ru}</p>
      <div class="proj-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div style="margin-top:14px;font-size:12px;color:var(--teal-l);font-weight:600">${lang==='en'?'Details →':lang==='kz'?'Толығырақ →':'Подробнее →'}</div>
    </div>`).join('');
  grid.querySelectorAll('.reveal').forEach(el=>revObs&&revObs.observe(el));
}


// ══════════════════════════════════════════════
//  SERVICE MODALS
// ══════════════════════════════════════════════
const SVC_DATA = {
  cyber:{icon:'🔒',badge:{ru:'Кибербезопасность',kz:'Киберқауіпсіздік',en:'Cybersecurity'},
    title:{ru:'Кибербезопасность',kz:'Киберқауіпсіздік',en:'Cybersecurity'},
    desc:{ru:'Комплексная защита государственной цифровой инфраструктуры: SOC 24/7, SIEM, Threat Intelligence, Blue/Red Team и управление уязвимостями.',kz:'Мемлекеттік цифрлық инфрақұрылымды кешенді қорғау: SOC 24/7, SIEM, Threat Intelligence.',en:'Comprehensive protection of government digital infrastructure: 24/7 SOC, SIEM, Threat Intelligence, Blue/Red Team and vulnerability management.'},
    kpis:[{v:'2 847',l:{ru:'Атак/сутки',kz:'Шабуыл/тәул.',en:'Attacks/day'}},{v:'8.4 мин',l:{ru:'Реакция',kz:'Жауап',en:'Response'}},{v:'99.97%',l:{ru:'Uptime SOC',kz:'SOC Uptime',en:'SOC Uptime'}}],
    techs:['Wazuh','Suricata','Zeek','TheHive','MISP','Velociraptor','OpenVAS','Splunk','Shuffle','OpenSearch'],
    projects:[{n:'Cyber Monitoring Center',s:'active'},{n:'SOC-as-a-Service',s:'active'},{n:'Threat Hunting Platform',s:'dev'}]},
  ai:{icon:'🤖',badge:{ru:'AI',kz:'AI',en:'AI'},
    title:{ru:'Искусственный интеллект',kz:'Жасанды интеллект',en:'Artificial Intelligence'},
    desc:{ru:'Разработка и интеграция AI-систем: NLP, компьютерное зрение, предиктивная аналитика и автоматизация документооборота.',kz:'AI жүйелерін жасау: NLP, компьютерлік көру, болжамды аналитика.',en:'Development and integration of AI systems: NLP, computer vision, predictive analytics and document automation.'},
    kpis:[{v:'1.2M+',l:{ru:'Запросов/сут',kz:'Сұрау/тәул.',en:'Requests/day'}},{v:'94%',l:{ru:'Точность',kz:'Дәлдік',en:'Accuracy'}},{v:'18',l:{ru:'AI-продуктов',kz:'AI өнімдер',en:'AI Products'}}],
    techs:['Python','TensorFlow','PyTorch','LangChain','FastAPI','HuggingFace','MLflow','ONNX','OpenSearch','BERT-kz'],
    projects:[{n:'Gov AI Assistant',s:'active'},{n:'Anomaly Detector',s:'active'},{n:'Document AI Platform',s:'dev'}]},
  data:{icon:'📊',badge:{ru:'Analytics',kz:'Analytics',en:'Analytics'},
    title:{ru:'Аналитика данных',kz:'Деректер аналитикасы',en:'Data Analytics'},
    desc:{ru:'BI-платформы, Big Data решения и предиктивная аналитика для принятия решений в государственном и финансовом секторе.',kz:'Мемлекеттік және қаржылық секторда шешім қабылдауға арналған BI, Big Data.',en:'BI platforms, Big Data solutions and predictive analytics for decision-making in government and financial sectors.'},
    kpis:[{v:'200+',l:{ru:'Датасетов',kz:'Датасет',en:'Datasets'}},{v:'5 TB',l:{ru:'Данных/сут',kz:'Деректер/тәул.',en:'Data/day'}},{v:'40мс',l:{ru:'Avg запрос',kz:'Орт. сұрау',en:'Avg query'}}],
    techs:['Apache Spark','Kafka','ClickHouse','Grafana','Superset','dbt','Airflow','PostgreSQL','Python','TensorFlow'],
    projects:[{n:'Data Platform KZ',s:'active'},{n:'Financial Analytics Hub',s:'active'},{n:'Predictive Analytics',s:'dev'}]},
  cloud:{icon:'☁️',badge:{ru:'Cloud',kz:'Cloud',en:'Cloud'},
    title:{ru:'Облачные решения',kz:'Бұлттық шешімдер',en:'Cloud Solutions'},
    desc:{ru:'Проектирование и эксплуатация GovCloud, контейнерная инфраструктура, DevSecOps и автоматизация развёртывания.',kz:'GovCloud жобалау, контейнерлік инфрақұрылым, DevSecOps.',en:'GovCloud design and operation, container infrastructure, DevSecOps and deployment automation.'},
    kpis:[{v:'120+',l:{ru:'Сервисов',kz:'Қызмет',en:'Services'}},{v:'99.99%',l:{ru:'Uptime',kz:'Uptime',en:'Uptime'}},{v:'3x',l:{ru:'Деплой',kz:'Деплой',en:'Deploy'}}],
    techs:['Kubernetes','OpenShift','Docker','Terraform','Ansible','Helm','Prometheus','Grafana','Vault','ArgoCD'],
    projects:[{n:'GovCloud Platform',s:'active'},{n:'Container Registry',s:'active'},{n:'Disaster Recovery',s:'dev'}]},
  fintech:{icon:'💳',badge:{ru:'FinTech',kz:'FinTech',en:'FinTech'},
    title:{ru:'Финансовые технологии',kz:'Қаржылық технологиялар',en:'Financial Technologies'},
    desc:{ru:'Digital Tenge (CBDC), Open Banking API, платёжные платформы и инфраструктура финансового сектора Казахстана.',kz:'Digital Tenge (CBDC), Open Banking API, төлем платформалары.',en:'Digital Tenge (CBDC), Open Banking API, payment platforms and Kazakhstan\'s financial infrastructure.'},
    kpis:[{v:'500K+',l:{ru:'Пользователей',kz:'Пайдаланушы',en:'Users'}},{v:'₸2.3B',l:{ru:'Оборот/мес',kz:'Айналым/ай',en:'Volume/month'}},{v:'PCI DSS',l:{ru:'Сертификат',kz:'Сертификат',en:'Certificate'}}],
    techs:['NestJS','PostgreSQL','Redis','Blockchain','SWIFT','ISO 20022','OAuth 2.0','HSM','Vault','OpenAPI'],
    projects:[{n:'Digital Tenge CBDC',s:'active'},{n:'Open Banking API',s:'active'},{n:'Instant Payment Platform',s:'dev'}]},
  banking:{icon:'🏦',badge:{ru:'Banking',kz:'Banking',en:'Banking'},
    title:{ru:'Цифровой банкинг',kz:'Цифрлық банкинг',en:'Digital Banking'},
    desc:{ru:'Мобильный банк, интернет-банкинг, eKYC и интеграция с государственными системами идентификации для финансовых организаций Казахстана.',kz:'Мобильді банк, интернет-банкинг, eKYC және мемлекеттік жүйелермен интеграция.',en:'Mobile banking, internet banking, eKYC and integration with government identity systems for Kazakhstan\'s financial organizations.'},
    kpis:[{v:'12',l:{ru:'Банков',kz:'Банк',en:'Banks'}},{v:'99.95%',l:{ru:'Uptime',kz:'Uptime',en:'Uptime'}},{v:'4.8★',l:{ru:'Рейтинг',kz:'Рейтинг',en:'Rating'}}],
    techs:['React Native','Spring Boot','Oracle DB','RabbitMQ','WSO2','OpenAPI','Keycloak','ELK Stack','Nginx','Redis'],
    projects:[{n:'Mobile Banking NBK',s:'active'},{n:'Internet Banking Portal',s:'active'},{n:'eKYC Platform',s:'dev'}]},
};

function openModal(key){
  const d=SVC_DATA[key], t=T[lang];
  const sLabel=(s)=>s==='active'?(lang==='en'?'● Active':lang==='kz'?'● Белсенді':'● Активен'):(lang==='en'?'◐ Dev':lang==='kz'?'◐ Жасалуда':'◐ В разработке');
  document.getElementById('svcModalContent').innerHTML=`
    <div class="modal-icon">${d.icon}</div>
    <div class="modal-badge">${d.badge[lang]||d.badge.ru}</div>
    <h2>${d.title[lang]||d.title.ru}</h2>
    <p class="modal-desc">${d.desc[lang]||d.desc.ru}</p>
    <div class="modal-section"><div class="modal-section-title">KPI</div>
      <div class="modal-kpi-grid">${d.kpis.map(k=>`<div class="modal-kpi"><div class="modal-kpi-val">${k.v}</div><div class="modal-kpi-lbl">${k.l[lang]||k.l.ru}</div></div>`).join('')}</div>
    </div>
    <div class="modal-section"><div class="modal-section-title">Tech Stack</div><div class="modal-tags">${d.techs.map(tg=>`<span class="modal-tag">${tg}</span>`).join('')}</div></div>
    <div class="modal-section"><div class="modal-section-title">${lang==='en'?'Projects':lang==='kz'?'Жобалар':'Проекты'}</div>${d.projects.map(p=>`<div class="modal-proj-row"><span>${p.n}</span><span class="proj-status ${p.s==='active'?'s-active':'s-dev'}" style="margin:0">${sLabel(p.s)}</span></div>`).join('')}</div>
    <div class="modal-btns">
      <a href="#" onclick="closeModal('svcModal');navigate('contact');return false;" class="btn btn-primary" style="font-size:14px">${t.modalRequest} →</a>
      <button class="btn btn-outline" onclick="closeModal('svcModal')" style="font-size:14px">${t.modalClose}</button>
    </div>`;
  openModalEl('svcModal');
}


// ══════════════════════════════════════════════
//  NEWS DATA
// ══════════════════════════════════════════════
const NEWS = [
  {cat:'cyber',date:'12.06.2025',
   title:{ru:'DDC обнаружил новую волну фишинговых атак на банки Казахстана',kz:'DDC Қазақстан банктеріне жаңа фишинг шабуылдарын анықтады',en:'DDC Detected New Wave of Phishing Attacks on Kazakhstan Banks'},
   text:{ru:'SOC-команда DDC зафиксировала серию целевых фишинговых атак, направленных на сотрудников финансовых организаций.',kz:'DDC SOC командасы қаржы ұйымдарының қызметкерлеріне бағытталған фишинг шабуылдарын анықтады.',en:'The DDC SOC team recorded a series of targeted phishing attacks aimed at employees of financial organizations.'}},
  {cat:'fintech',date:'08.06.2025',
   title:{ru:'Количество пользователей Digital Tenge превысило 500 000',kz:'Digital Tenge пайдаланушылары 500 000-нан асты',en:'Digital Tenge Users Exceed 500,000'},
   text:{ru:'Платформа цифрового тенге продолжает активный рост: ежемесячный оборот достиг ₸2.3 миллиарда.',kz:'Цифрлық теңге платформасы белсенді өсімін жалғастыруда: ай сайынғы айналым ₸2.3 млрд-қа жетті.',en:'The digital tenge platform continues active growth: monthly turnover has reached ₸2.3 billion.'}},
  {cat:'ai',date:'03.06.2025',
   title:{ru:'DDC запустил многоязычный AI-ассистент для госпорталов',kz:'DDC мемлекеттік порталдарға арналған көптілді AI-көмекшісін іске қосты',en:'DDC Launched Multilingual AI Assistant for Government Portals'},
   text:{ru:'Новый AI-ассистент обрабатывает обращения граждан на казахском, русском и английском языках в режиме реального времени.',kz:'Жаңа AI-көмекші қазақ, орыс және ағылшын тілдерінде азаматтардың өтініштерін нақты уақытта өңдейді.',en:'The new AI assistant processes citizen requests in Kazakh, Russian and English in real time.'}},
  {cat:'gov',date:'28.05.2025',
   title:{ru:'Интеграция Smart Bridge расширена до 47 государственных систем',kz:'Smart Bridge интеграциясы 47 мемлекеттік жүйеге дейін кеңейтілді',en:'Smart Bridge Integration Expanded to 47 Government Systems'},
   text:{ru:'Платформа государственной интеграции Smart Bridge теперь обеспечивает бесшовный обмен данными между 47 ведомственными системами.',kz:'Smart Bridge мемлекеттік интеграция платформасы енді 47 ведомстволық жүйе арасындағы деректер алмасуын қамтамасыз етеді.',en:'The Smart Bridge government integration platform now provides seamless data exchange between 47 departmental systems.'}},
  {cat:'cyber',date:'20.05.2025',
   title:{ru:'DDC провёл учения Cyber Range с 200 специалистами',kz:'DDC 200 маманмен Cyber Range жаттығулары өткізді',en:'DDC Conducted Cyber Range Exercises with 200 Specialists'},
   text:{ru:'В рамках учений специалисты Blue Team и Red Team отработали сценарии защиты критической инфраструктуры.',kz:'Жаттығулар барысында Blue Team және Red Team мамандары маңызды инфрақұрылымды қорғау сценарийлерін жаттықты.',en:'During the exercises, Blue Team and Red Team specialists practiced critical infrastructure protection scenarios.'}},
  {cat:'ai',date:'15.05.2025',
   title:{ru:'Модель детекции аномалий DDC достигла точности 94%',kz:'DDC аномалияларды анықтау моделі 94% дәлдікке жетті',en:'DDC Anomaly Detection Model Reaches 94% Accuracy'},
   text:{ru:'Новая ML-модель для выявления мошеннических транзакций показала точность 94% на тестовой выборке из 10 миллионов операций.',kz:'Алаяқтық транзакцияларды анықтауға арналған жаңа ML модель 10 миллион операцияда 94% дәлдік көрсетті.',en:'The new ML model for detecting fraudulent transactions showed 94% accuracy on a test sample of 10 million operations.'}},
];

let newsFilter='all';
function filterNews(cat,btn){
  newsFilter=cat;
  document.querySelectorAll('.news-filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderNews();
}
const NEWS_DETAIL = {
  1:{icon:'🛡️',ext:'https://www.kaspersky.com/blog/',
    body:{ru:'<p>Команда SOC DDC зафиксировала серию целевых фишинговых атак на сотрудников финансовых организаций Казахстана. Атаки использовали поддельные письма от имени регуляторных органов с вредоносными вложениями формата PDF.</p><p>В результате оперативного реагирования все попытки компрометации были заблокированы. Специалисты Blue Team обновили правила фильтрации и добавили индикаторы компрометации в MISP.</p><p>Рекомендуется повысить осведомлённость сотрудников о фишинговых угрозах и внедрить двухфакторную аутентификацию на всех корпоративных сервисах.</p>',
           kz:'<p>DDC SOC командасы Қазақстан қаржылық ұйымдарының қызметкерлеріне бағытталған фишинг шабуылдарын анықтады. Шабуылдар реттеуші органдардың атынан жасалған жалған хаттарды пайдаланды.</p><p>Барлық компрометация әрекеттері бұғатталды. Blue Team мамандары MISP-ке компрометация индикаторларын қосты.</p>',
           en:'<p>The DDC SOC team detected a series of targeted phishing attacks on employees of Kazakhstan financial organizations. Attacks used fake emails from regulatory authorities with malicious PDF attachments.</p><p>All compromise attempts were blocked. Blue Team specialists updated filtering rules and added IoCs to MISP.</p><p>Recommendation: improve employee phishing awareness and implement MFA on all corporate services.</p>'}},
  2:{icon:'💳',ext:'https://nationalbank.kz/',
    body:{ru:'<p>Платформа Digital Tenge продолжает активный рост: число пользователей превысило 500 000 человек, а ежемесячный оборот операций достиг ₸2.3 миллиарда.</p><p>Цифровой тенге используется для розничных платежей, государственных субсидий и программируемых финансовых инструментов. Среднее время проведения транзакции составляет менее 1 секунды.</p><p>В ближайших планах — расширение на все регионы Казахстана и интеграция с международными платёжными системами.</p>',
           kz:'<p>Digital Tenge платформасы белсенді өсімін жалғастыруда: пайдаланушылар саны 500 000-нан асты, ай сайынғы айналым ₸2.3 млрд-қа жетті.</p><p>Цифрлық теңге бөлшек төлемдерге, мемлекеттік субсидияларға және бағдарламаланатын қаржы құралдарына пайдаланылады.</p>',
           en:'<p>The Digital Tenge platform continues active growth: users exceeded 500,000 and monthly transaction volume reached ₸2.3 billion.</p><p>Digital tenge is used for retail payments, government subsidies and programmable financial instruments. Average transaction time is under 1 second.</p><p>Plans: expansion to all regions of Kazakhstan and integration with international payment systems.</p>'}},
  3:{icon:'🤖',ext:'https://aicenter.kz/',
    body:{ru:'<p>DDC запустил многоязычного AI-ассистента для государственных порталов Казахстана. Система обрабатывает обращения граждан на казахском, русском и английском языках в режиме реального времени.</p><p>Ассистент использует модель BERT-kz, специально обученную на казахскоязычных текстах. Точность распознавания намерений пользователей составляет более 91%.</p><p>Интеграция с portalyönetim.kz позволит обрабатывать до 50 000 обращений в сутки без участия операторов.</p>',
           kz:'<p>DDC Қазақстанның мемлекеттік порталдары үшін көптілді AI-көмекшісін іске қосты. Жүйе қазақ, орыс және ағылшын тілдерінде нақты уақытта өтініштерді өңдейді.</p><p>Көмекші қазақ тілінде арнайы оқытылған BERT-kz моделін пайдаланады. Пайдаланушылардың ниеттерін тану дәлдігі 91%-дан асады.</p>',
           en:'<p>DDC launched a multilingual AI assistant for Kazakhstan government portals. The system processes citizen requests in Kazakh, Russian and English in real time.</p><p>The assistant uses the BERT-kz model specially trained on Kazakh-language texts. Intent recognition accuracy exceeds 91%.</p><p>Integration will handle up to 50,000 requests per day without human operators.</p>'}},
  4:{icon:'🏛️',ext:'https://egov.kz/',
    body:{ru:'<p>Платформа государственной интеграции Smart Bridge теперь обеспечивает бесшовный обмен данными между 47 ведомственными информационными системами Казахстана.</p><p>Новые подключения включают системы налогового комитета, Министерства здравоохранения, ЦОНов и платформу цифровых документов. Количество ежедневных межведомственных транзакций выросло до 2.8 миллиона.</p>',
           kz:'<p>Smart Bridge мемлекеттік интеграция платформасы енді 47 ведомстволық ақпараттық жүйе арасындағы деректер алмасуын қамтамасыз етеді.</p><p>Жаңа қосылымдар салық комитетінің жүйелерін, Денсаулық сақтау министрлігін және ЦОН платформаларын қамтиды.</p>',
           en:'<p>The Smart Bridge government integration platform now provides seamless data exchange between 47 departmental information systems of Kazakhstan.</p><p>New connections include tax committee systems, Ministry of Health, public service centers, and the digital documents platform. Daily inter-departmental transactions grew to 2.8 million.</p>'}},
  5:{icon:'⚔️',ext:'https://nationalbank.kz/cybersecurity/',
    body:{ru:'<p>DDC провёл масштабные учения на платформе Cyber Range с участием 200 специалистов по информационной безопасности из государственных органов и финансовых организаций Казахстана.</p><p>В рамках учений Blue Team и Red Team отработали 12 сценариев атак на критическую инфраструктуру, включая атаки на банковские SWIFT-подключения, ransomware и DDoS-атаки на государственные порталы.</p><p>По результатам учений разработаны рекомендации по улучшению SOC-процессов и обновлены runbook-инструкции для 8 типов инцидентов.</p>',
           kz:'<p>DDC Cyber Range платформасында 200 ақпараттық қауіпсіздік маманының қатысуымен ауқымды жаттығулар өткізді.</p><p>Жаттығулар барысында Blue Team және Red Team маңызды инфрақұрылымға 12 шабуыл сценарийін жаттықты.</p>',
           en:'<p>DDC conducted large-scale Cyber Range exercises with 200 information security specialists from government agencies and financial organizations of Kazakhstan.</p><p>Blue Team and Red Team practiced 12 attack scenarios on critical infrastructure, including attacks on banking SWIFT connections, ransomware and DDoS attacks on government portals.</p><p>Results: recommendations for improving SOC processes and updated runbooks for 8 incident types.</p>'}},
  6:{icon:'📊',ext:'https://github.com/ddc-kz/',
    body:{ru:'<p>Новая ML-модель DDC для выявления мошеннических транзакций показала точность 94% на тестовой выборке из 10 миллионов финансовых операций. Модель использует ансамблевый подход: Isolation Forest для выявления аномалий + Autoencoder для профилирования поведения.</p><p>Ложно-положительные срабатывания составляют менее 0.3%, что позволяет внедрить систему в production без значительного влияния на клиентский опыт. Время инференса — менее 15 миллисекунд на транзакцию.</p>',
           kz:'<p>DDC-нің жаңа ML моделі 10 миллион қаржылық операциядан тұратын тест жиынтығында 94% дәлдік көрсетті. Модель ансамбльдік тәсілді пайдаланады.</p><p>Жалған оң жауаптар 0.3%-дан аз, бұл жүйені production-қа енгізуге мүмкіндік береді. Инференс уақыты транзакцияға 15 миллисекундтан аз.</p>',
           en:'<p>DDC&#39;s new ML model for detecting fraudulent transactions showed 94% accuracy on a test sample of 10 million financial operations. The model uses an ensemble approach: Isolation Forest for anomaly detection + Autoencoder for behavioral profiling.</p><p>False positive rate is below 0.3%, enabling production deployment without significant impact on customer experience. Inference time is under 15ms per transaction.</p>'}},
};

function openNewsModal(id) {
  const n = NEWS.find(x => x.id === id);
  const d = NEWS_DETAIL[id];
  if(!n) return;
  const catColors={cyber:'var(--red)',fintech:'var(--teal-l)',ai:'var(--purple)',gov:'var(--blue)'};
  const catIcons={cyber:'🔒',fintech:'💳',ai:'🤖',gov:'🏛️'};
  const extLabel = lang==='en'?'Read full article ↗':lang==='kz'?'Толық мақала оқу ↗':'Читать полностью ↗';
  const shareLabel = lang==='en'?'Share':'Поделиться';
  document.getElementById('svcModalContent').innerHTML = `
    <div class="modal-badge" style="color:${catColors[n.cat]};border-color:${catColors[n.cat]}44;background:${catColors[n.cat]}12">${n.cat.toUpperCase()}</div>
    <h2 style="font-size:20px;margin-bottom:8px">${n.title[lang]||n.title.ru}</h2>
    <div style="font-size:12px;color:var(--dim);margin-bottom:20px">📅 ${n.date} · DDC Media Center</div>
    <div style="font-size:48px;text-align:center;padding:24px;background:rgba(0,0,0,0.2);border-radius:12px;margin-bottom:20px">${d?.icon||catIcons[n.cat]||'📰'}</div>
    <div class="news-article-body">${d?.body?.[lang]||d?.body?.ru||'<p>'+(n.text[lang]||n.text.ru)+'</p>'}</div>
    <div style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap">
      ${d?.ext ? `<a href="${d.ext}" target="_blank" rel="noopener" class="news-ext-link">🔗 ${extLabel}</a>` : ''}
      <button class="btn btn-outline" onclick="closeModal('svcModal')" style="font-size:13px;padding:10px 18px">✕ Закрыть</button>
    </div>`;
  openModalEl('svcModal');
}

function renderNews(){
  const grid=document.getElementById('newsGrid'); if(!grid)return;
  const items=newsFilter==='all'?NEWS:NEWS.filter(n=>n.cat===newsFilter);
  const catColors={cyber:'var(--red)',fintech:'var(--teal-l)',ai:'var(--purple)',gov:'var(--blue)'};
  const readLabel = lang==='en'?'Read →':lang==='kz'?'Оқу →':'Читать →';
  grid.innerHTML=items.map(n=>`
    <div class="news-card reveal" onclick="openNewsModal(${n.id})" style="cursor:pointer">
      <div class="news-body">
        <div class="news-cat" style="color:${catColors[n.cat]}">${n.cat.toUpperCase()}</div>
        <h3>${n.title[lang]||n.title.ru}</h3>
        <p style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">${n.text[lang]||n.text.ru}</p>
        <div class="news-meta"><span>${n.date}</span><span style="color:var(--teal-l)">${readLabel}</span></div>
      </div>
    </div>`).join('');
  grid.querySelectorAll('.reveal').forEach(el=>revObs&&revObs.observe(el));
}


