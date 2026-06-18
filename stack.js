/* DDC Portal — js/stack.js */

// ══════════════════════════════════════════════
//  TECHNOLOGY STACK
// ══════════════════════════════════════════════
const STACK = [
  {icon:'🐍',name:'Python',cat:'ai',link:'https://www.python.org',desc:{ru:'Основной язык DDC для AI/ML, аналитики данных и backend-сервисов — используется в большинстве ML-моделей и ETL-пайплайнов.',kz:'AI/ML, деректер аналитикасы және backend-сервистер үшін DDC негізгі тілі.',en:"DDC's primary language for AI/ML, data analytics and backend services — powers most ML models and ETL pipelines."}},
  {icon:'☕',name:'Java',cat:'backend',link:'https://www.java.com',desc:{ru:'Язык для высоконагруженных финансовых микросервисов: Digital Tenge Core, Open Banking API.',kz:'Digital Tenge Core, Open Banking API сияқты жоғары жүктелген қаржылық микросервистерге арналған тіл.',en:'Language for high-load financial microservices: Digital Tenge Core, Open Banking API.'}},
  {icon:'⚛️',name:'React',cat:'frontend',link:'https://react.dev',desc:{ru:'Библиотека для интерфейсов государственных порталов, аналитических дашбордов и DDC Portal.',kz:'Мемлекеттік порталдар мен аналитикалық дашбордтар интерфейстеріне арналған кітапхана.',en:'Library for government portal interfaces, analytics dashboards and the DDC Portal.'}},
  {icon:'🔷',name:'TypeScript',cat:'frontend',link:'https://www.typescriptlang.org',desc:{ru:'Типизированный JavaScript для надёжного frontend- и Node.js-кода во всех веб-проектах DDC.',kz:'DDC веб-жобаларындағы сенімді frontend және Node.js коды үшін типтелген JavaScript.',en:'Typed JavaScript for reliable frontend and Node.js code across DDC web projects.'}},
  {icon:'🌿',name:'NestJS',cat:'backend',link:'https://nestjs.com',desc:{ru:'Node.js-фреймворк для API-сервисов Digital Tenge и государственных интеграций.',kz:'Digital Tenge API-сервистеріне арналған Node.js фреймворкі.',en:'Node.js framework for Digital Tenge API services and government integrations.'}},
  {icon:'🍃',name:'Spring Boot',cat:'backend',link:'https://spring.io/projects/spring-boot',desc:{ru:'Java-фреймворк для банковских и государственных backend-систем с высокими требованиями к надёжности.',kz:'Сенімділікке жоғары талаптары бар банктік backend жүйелеріне арналған Java фреймворкі.',en:'Java framework for banking and government backend systems with high reliability requirements.'}},
  {icon:'🐘',name:'PostgreSQL',cat:'data',link:'https://www.postgresql.org',desc:{ru:'Основная реляционная СУБД DDC для транзакционных данных Digital Tenge и государственных реестров.',kz:'Digital Tenge транзакциялық деректеріне арналған негізгі реляциялық ДҚБЖ.',en:"DDC's primary relational database for Digital Tenge transactional data and government registries."}},
  {icon:'🔶',name:'Oracle DB',cat:'backend',link:'https://www.oracle.com/database/',desc:{ru:'Корпоративная СУБД для критичных банковских и финансовых систем партнёров.',kz:'Серіктестердің сыни банктік жүйелеріне арналған корпоративтік ДҚБЖ.',en:'Enterprise database for critical banking and financial partner systems.'}},
  {icon:'🔴',name:'Redis',cat:'backend',link:'https://redis.io',desc:{ru:'In-memory хранилище для кэширования, сессий и очередей в высоконагруженных сервисах.',kz:'Жоғары жүктелген сервистердегі кэштеу мен сессияларға арналған in-memory қойма.',en:'In-memory store for caching, sessions and queues in high-load services.'}},
  {icon:'🔍',name:'Elasticsearch',cat:'data',link:'https://www.elastic.co/elasticsearch',desc:{ru:'Полнотекстовый поиск и анализ логов в составе SIEM и поисковых сервисов DDC.',kz:'SIEM құрамындағы толық мәтінді іздеу және логтарды талдау.',en:'Full-text search and log analysis used within SIEM and DDC search services.'}},
  {icon:'🌊',name:'Apache Kafka',cat:'data',link:'https://kafka.apache.org',desc:{ru:'Шина потоковых данных для Smart Bridge и Data Platform KZ — 5TB данных в сутки.',kz:'Smart Bridge және Data Platform KZ үшін ағынды деректер шинасы.',en:'Streaming data bus for Smart Bridge and Data Platform KZ — 5TB of data per day.'}},
  {icon:'⚡',name:'Apache Spark',cat:'data',link:'https://spark.apache.org',desc:{ru:'Движок пакетной обработки больших данных для аналитики Data Platform KZ.',kz:'Data Platform KZ аналитикасына арналған Big Data өңдеу қозғалтқышы.',en:'Big data batch-processing engine for Data Platform KZ analytics.'}},
  {icon:'📊',name:'Grafana',cat:'data',link:'https://grafana.com',desc:{ru:'Дашборды мониторинга инфраструктуры, SOC-метрик и аптайма сервисов в реальном времени.',kz:'Инфрақұрылым мен SOC метрикаларын нақты уақытта бақылау дашбордтары.',en:'Real-time dashboards for infrastructure monitoring, SOC metrics and service uptime.'}},
  {icon:'🐳',name:'Docker',cat:'cloud',link:'https://www.docker.com',desc:{ru:'Контейнеризация всех сервисов DDC для единообразного развёртывания в GovCloud.',kz:'GovCloud-та бірыңғай орналастыру үшін DDC сервистерін контейнерлеу.',en:"Containerization of all DDC services for consistent deployment across GovCloud."}},
  {icon:'☸️',name:'Kubernetes',cat:'cloud',link:'https://kubernetes.io',desc:{ru:'Оркестрация 180+ узлов GovCloud — автоматическое масштабирование и отказоустойчивость.',kz:'180+ GovCloud торабын оркестрлеу — автоматты масштабтау.',en:'Orchestration of 180+ GovCloud nodes — automatic scaling and fault tolerance.'}},
  {icon:'🔴',name:'OpenShift',cat:'cloud',link:'https://www.redhat.com/en/technologies/cloud-computing/openshift',desc:{ru:'Корпоративная Kubernetes-платформа Red Hat для государственного облака GovCloud.',kz:'GovCloud мемлекеттік бұлты үшін Red Hat корпоративтік Kubernetes платформасы.',en:'Red Hat enterprise Kubernetes platform for the GovCloud government cloud.'}},
  {icon:'🏗️',name:'Terraform',cat:'cloud',link:'https://www.terraform.io',desc:{ru:'Infrastructure as Code — декларативное управление облачной инфраструктурой DDC.',kz:'DDC бұлттық инфрақұрылымын декларативті басқару.',en:"Infrastructure as Code — declarative management of DDC's cloud infrastructure."}},
  {icon:'⚙️',name:'Ansible',cat:'cloud',link:'https://www.ansible.com',desc:{ru:'Автоматизация настройки серверов и конфигурации GovCloud без простоев.',kz:'Серверлерді баптауды автоматтандыру.',en:'Automating server configuration and GovCloud setup without downtime.'}},
  {icon:'🛡️',name:'Wazuh',cat:'security',link:'https://wazuh.com',desc:{ru:'Открытая SIEM/XDR-платформа — ядро SOC DDC для мониторинга 24/7.',kz:'SOC DDC-нің 24/7 мониторингке арналған негізгі SIEM/XDR платформасы.',en:"Open-source SIEM/XDR platform — the core of DDC's 24/7 SOC monitoring."}},
  {icon:'🐝',name:'Suricata',cat:'security',link:'https://suricata.io',desc:{ru:'Система обнаружения и предотвращения вторжений (IDS/IPS) для сетевого периметра.',kz:'Желі периметріне арналған шабуылды анықтау жүйесі (IDS/IPS).',en:'Network intrusion detection and prevention system (IDS/IPS) for the perimeter.'}},
  {icon:'🦈',name:'Zeek',cat:'security',link:'https://zeek.org',desc:{ru:'Глубокий анализ сетевого трафика для расследования инцидентов и threat hunting.',kz:'Оқиғаларды тергеу үшін желі трафигін терең талдау.',en:'Deep network traffic analysis for incident investigation and threat hunting.'}},
  {icon:'🔬',name:'TheHive',cat:'security',link:'https://thehive-project.org',desc:{ru:'Платформа реагирования на инциденты — координация работы команды SOC.',kz:'SOC командасының жұмысын үйлестіруге арналған оқиғаға жауап беру платформасы.',en:"Incident response platform — coordinates the SOC team's workflow."}},
  {icon:'🧩',name:'MISP',cat:'security',link:'https://www.misp-project.org',desc:{ru:'Платформа обмена индикаторами компрометации (IOC) и Threat Intelligence.',kz:'Threat Intelligence және IOC алмасу платформасы.',en:'Threat intelligence and indicator-of-compromise (IOC) sharing platform.'}},
  {icon:'🦅',name:'Velociraptor',cat:'security',link:'https://docs.velociraptor.app',desc:{ru:'Инструмент цифровой криминалистики (DFIR) для расследования инцидентов на хостах.',kz:'Хосттардағы оқиғаларды тергеуге арналған цифрлық криминалистика құралы.',en:'Digital forensics (DFIR) tool for host-level incident investigation.'}},
  {icon:'📡',name:'Splunk',cat:'security',link:'https://www.splunk.com',desc:{ru:'Платформа анализа машинных данных и логов в составе SIEM-стека DDC.',kz:'DDC SIEM стегі құрамындағы машиналық деректер мен логтарды талдау платформасы.',en:"Machine-data and log analysis platform within DDC's SIEM stack."}},
  {icon:'🔒',name:'OpenVAS',cat:'security',link:'https://openvas.org',desc:{ru:'Сканер уязвимостей для автоматизированного управления Vulnerability Management.',kz:'Осалдықтарды басқаруға арналған автоматтандырылған сканер.',en:'Vulnerability scanner for automated Vulnerability Management.'}},
  {icon:'🤖',name:'TensorFlow',cat:'ai',link:'https://www.tensorflow.org',desc:{ru:'Фреймворк глубокого обучения для детекции аномалий и предиктивной аналитики.',kz:'Аномалияларды анықтауға арналған терең оқыту фреймворкі.',en:'Deep-learning framework for anomaly detection and predictive analytics.'}},
  {icon:'🔥',name:'PyTorch',cat:'ai',link:'https://pytorch.org',desc:{ru:'Фреймворк ML-исследований AI Lab — обучение моделей Computer Vision и NLP.',kz:'AI Lab ML зерттеулеріне арналған фреймворк.',en:'AI Lab ML research framework — training Computer Vision and NLP models.'}},
  {icon:'🦜',name:'LangChain',cat:'ai',link:'https://www.langchain.com',desc:{ru:'Фреймворк для построения LLM-приложений: Gov AI Assistant, RAG поверх базы знаний.',kz:'LLM қосымшаларын құруға арналған фреймворк: Gov AI Assistant.',en:'Framework for building LLM applications: Gov AI Assistant, RAG over the knowledge base.'}},
  {icon:'📈',name:'MLflow',cat:'ai',link:'https://mlflow.org',desc:{ru:'Управление жизненным циклом ML-моделей: эксперименты, версии, деплой.',kz:'ML модельдерінің өмірлік циклін басқару.',en:'Managing the ML model lifecycle: experiments, versioning, deployment.'}},
  {icon:'🤗',name:'HuggingFace',cat:'ai',link:'https://huggingface.co',desc:{ru:'Платформа NLP-моделей, включая BERT-kz — казахскую языковую модель DDC.',kz:'BERT-kz қазақ тілді моделін қоса алғанда NLP платформасы.',en:"NLP model hub, including BERT-kz — DDC's Kazakh-language model."}},
  {icon:'🚀',name:'FastAPI',cat:'backend',link:'https://fastapi.tiangolo.com',desc:{ru:'Высокопроизводительный Python-фреймворк для ML-инференса и AI API.',kz:'ML инференс пен AI API-ге арналған жоғары өнімді Python фреймворкі.',en:'High-performance Python framework for ML inference and AI APIs.'}},
  {icon:'🔑',name:'Keycloak',cat:'security',link:'https://www.keycloak.org',desc:{ru:'Identity & Access Management — единая аутентификация для сервисов DDC.',kz:'DDC сервистеріне арналған бірыңғай аутентификация.',en:"Identity & Access Management — single sign-on for DDC's services."}},
  {icon:'🔐',name:'Vault',cat:'cloud',link:'https://www.vaultproject.io',desc:{ru:'Безопасное хранение секретов, ключей шифрования и сертификатов в GovCloud.',kz:'GovCloud-та құпияларды, шифрлау кілттерін қауіпсіз сақтау.',en:'Secure storage of secrets, encryption keys and certificates in GovCloud.'}},
];
const CAT_LBL = {security:{ru:'Security',kz:'Security',en:'Security'},data:{ru:'Data',kz:'Data',en:'Data'},cloud:{ru:'Cloud',kz:'Cloud',en:'Cloud'},backend:{ru:'Backend',kz:'Backend',en:'Backend'},frontend:{ru:'Frontend',kz:'Frontend',en:'Frontend'},ai:{ru:'AI/ML',kz:'AI/ML',en:'AI/ML'}};

let tsFilter='all';
function filterTS(cat,btn){
  tsFilter=cat;
  document.querySelectorAll('.ts-cat').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderStack();
}
function renderStack(){
  const grid=document.getElementById('tsGrid'); if(!grid)return;
  const items=tsFilter==='all'?STACK:STACK.filter(s=>s.cat===tsFilter);
  grid.innerHTML=items.map(s=>`<div class="ts-chip" onclick="openTechModal('${s.name.replace(/'/g,"\\'")}')" title="${(s.desc[lang]||s.desc.ru).replace(/"/g,'&quot;')}"><div class="ts-chip-icon">${s.icon}</div><div class="ts-chip-name">${s.name}</div><div class="ts-chip-cat">${CAT_LBL[s.cat]?.[lang]||s.cat}</div></div>`).join('');
}

function openTechModal(name){
  const s = STACK.find(x=>x.name===name); if(!s) return;
  const closeL = T[lang]?.modalClose || 'Закрыть';
  document.getElementById('svcModalContent').innerHTML = `
    <div class="modal-icon">${s.icon}</div>
    <div class="modal-badge">${CAT_LBL[s.cat]?.[lang]||s.cat}</div>
    <h2>${s.name}</h2>
    <p class="modal-desc">${s.desc[lang]||s.desc.ru}</p>
    <div class="modal-btns">
      <a href="${s.link}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size:13px">🔗 ${lang==='en'?'Official site':lang==='kz'?'Ресми сайт':'Официальный сайт'}</a>
      <button class="btn btn-outline" onclick="closeModal('svcModal')" style="font-size:13px">${closeL}</button>
    </div>`;
  openModalEl('svcModal');
}


// ══════════════════════════════════════════════
//  JOBS / VACANCIES
// ══════════════════════════════════════════════
// filterDept matches the values used by the filter buttons in index.html (filterVacs)
const JOBS = [
  {filterDept:'Кибербезопасность',dept:{ru:'Кибербезопасность',kz:'Киберқауіпсіздік',en:'Cybersecurity'},title:{ru:'SOC Analyst L2/L3',kz:'SOC Analyst L2/L3',en:'SOC Analyst L2/L3'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['Wazuh','SIEM','Splunk'],desc:{ru:'Мониторинг событий безопасности, расследование инцидентов, разработка правил детекции в SOC DDC.',kz:'Қауіпсіздік оқиғаларын мониторинг, инциденттерді тергеу, детекция ережелерін жасау.',en:'Security event monitoring, incident investigation, detection rule development at DDC SOC.'}},
  {filterDept:'Кибербезопасность',dept:{ru:'Кибербезопасность',kz:'Киберқауіпсіздік',en:'Cybersecurity'},title:{ru:'SIEM Engineer',kz:'SIEM Engineer',en:'SIEM Engineer'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['Wazuh','Splunk','ELK'],desc:{ru:'Администрирование и развитие SIEM-систем, написание корреляционных правил, интеграция новых источников логов.',kz:'SIEM жүйелерін әкімшілеу, корреляция ережелерін жазу.',en:'SIEM system administration, correlation rule development, log source integration.'}},
  {filterDept:'Кибербезопасность',dept:{ru:'Кибербезопасность',kz:'Киберқауіпсіздік',en:'Cybersecurity'},title:{ru:'Penetration Tester (Red Team)',kz:'Penetration Tester (Red Team)',en:'Penetration Tester (Red Team)'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['Burp Suite','Metasploit','OWASP'],desc:{ru:'Проведение пентестов веб-приложений и инфраструктуры, участие в учениях Cyber Range, подготовка отчётов.',kz:'Веб-қосымшалар мен инфрақұрылымның пентесттерін жүргізу.',en:'Web application and infrastructure penetration testing, Cyber Range exercises, report preparation.'}},
  {filterDept:'AI',dept:{ru:'AI & Data',kz:'AI & Data',en:'AI & Data'},title:{ru:'AI/ML Engineer',kz:'AI/ML Engineer',en:'AI/ML Engineer'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['Python','PyTorch','MLflow'],desc:{ru:'Разработка и обучение ML-моделей для детекции аномалий и прогнозирования финансовых рисков.',kz:'Аномалияларды анықтауға арналған ML модельдерін жасау.',en:'Developing and training ML models for anomaly detection and financial risk forecasting.'}},
  {filterDept:'AI',dept:{ru:'AI & Data',kz:'AI & Data',en:'AI & Data'},title:{ru:'Data Engineer',kz:'Data Engineer',en:'Data Engineer'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['Apache Kafka','Spark','ClickHouse'],desc:{ru:'Построение ETL-пайплайнов, работа с Big Data платформами, оптимизация хранилищ данных Data Platform KZ.',kz:'ETL конвейерлерін құру, Big Data платформаларымен жұмыс.',en:'Building ETL pipelines, working with Big Data platforms, optimizing Data Platform KZ storage.'}},
  {filterDept:'AI',dept:{ru:'AI & Data',kz:'AI & Data',en:'AI & Data'},title:{ru:'NLP Engineer (BERT-kz)',kz:'NLP Engineer (BERT-kz)',en:'NLP Engineer (BERT-kz)'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['HuggingFace','LangChain','BERT-kz'],desc:{ru:'Развитие казахскоязычной NLP-модели BERT-kz, интеграция с Gov AI Assistant и порталом eGov.kz.',kz:'BERT-kz қазақ тілді NLP моделін дамыту.',en:'Developing the Kazakh-language BERT-kz NLP model, integration with Gov AI Assistant and eGov.kz.'}},
  {filterDept:'Разработка',dept:{ru:'Разработка',kz:'Әзірлеу',en:'Development'},title:{ru:'Backend Developer (Java)',kz:'Backend Developer (Java)',en:'Backend Developer (Java)'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['Java','Spring Boot','PostgreSQL'],desc:{ru:'Разработка высоконагруженных микросервисов для платформы Digital Tenge и Open Banking API.',kz:'Қаржылық платформалар үшін жоғары жүктелген микросервистерді жасау.',en:'Developing high-load microservices for the Digital Tenge platform and Open Banking API.'}},
  {filterDept:'Разработка',dept:{ru:'Разработка',kz:'Әзірлеу',en:'Development'},title:{ru:'Frontend Developer (React)',kz:'Frontend Developer (React)',en:'Frontend Developer (React)'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['React','TypeScript','Next.js'],desc:{ru:'Разработка интерфейсов государственных порталов и финансовых дашбордов DDC.',kz:'Мемлекеттік порталдар мен қаржылық дашбордтар интерфейстерін жасау.',en:'Developing interfaces for government portals and DDC financial dashboards.'}},
  {filterDept:'Облако',dept:{ru:'DevSecOps / Cloud',kz:'DevSecOps / Cloud',en:'DevSecOps / Cloud'},title:{ru:'DevSecOps Engineer',kz:'DevSecOps Engineer',en:'DevSecOps Engineer'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['Kubernetes','Docker','GitLab CI'],desc:{ru:'Встраивание безопасности в CI/CD GovCloud, сканирование контейнеров, управление секретами через Vault.',kz:'CI/CD-ге қауіпсіздікті енгізу, контейнерлерді сканерлеу.',en:'Embedding security into GovCloud CI/CD, container scanning, secrets management via Vault.'}},
  {filterDept:'Облако',dept:{ru:'DevSecOps / Cloud',kz:'DevSecOps / Cloud',en:'DevSecOps / Cloud'},title:{ru:'Cloud Platform Engineer',kz:'Cloud Platform Engineer',en:'Cloud Platform Engineer'},type:{ru:'Полная занятость',kz:'Толық жұмыс',en:'Full-time'},tags:['Kubernetes','OpenShift','Terraform'],desc:{ru:'Эксплуатация и развитие GovCloud-инфраструктуры: 180 Kubernetes-узлов, Infrastructure as Code на Terraform.',kz:'GovCloud инфрақұрылымын пайдалану және дамыту.',en:'Operating and developing the GovCloud infrastructure: 180 Kubernetes nodes, Infrastructure as Code with Terraform.'}},
  {filterDept:'Стажировка',dept:{ru:'Стажировка',kz:'Тағылымдама',en:'Internship'},title:{ru:'Cybersecurity Internship',kz:'Киберқауіпсіздік тағылымдамасы',en:'Cybersecurity Internship'},type:{ru:'Стажировка · 3 мес',kz:'Тағылымдама · 3 ай',en:'Internship · 3 months'},tags:['SOC','SIEM','Linux'],desc:{ru:'Оплачиваемая стажировка в команде SOC. Практика мониторинга событий и анализа угроз.',kz:'SOC командасындағы ақылы тағылымдама.',en:'Paid internship in the SOC team. Practice in event monitoring and threat analysis.'}},
  {filterDept:'Стажировка',dept:{ru:'Стажировка',kz:'Тағылымдама',en:'Internship'},title:{ru:'AI/ML Internship',kz:'AI/ML тағылымдамасы',en:'AI/ML Internship'},type:{ru:'Стажировка · 3 мес',kz:'Тағылымдама · 3 ай',en:'Internship · 3 months'},tags:['Python','TensorFlow','MLflow'],desc:{ru:'Оплачиваемая стажировка в AI Lab. Помощь в обучении и валидации ML-моделей.',kz:'AI Lab-та ақылы тағылымдама.',en:'Paid internship at the AI Lab. Assisting with ML model training and validation.'}},
  {filterDept:'Стажировка',dept:{ru:'Стажировка',kz:'Тағылымдама',en:'Internship'},title:{ru:'Backend Development Internship',kz:'Backend әзірлеу тағылымдамасы',en:'Backend Development Internship'},type:{ru:'Стажировка · 3 мес',kz:'Тағылымдама · 3 ай',en:'Internship · 3 months'},tags:['Java','Spring Boot','Git'],desc:{ru:'Оплачиваемая стажировка в команде разработки. Работа над реальными микросервисами под наставничеством.',kz:'Әзірлеу командасындағы ақылы тағылымдама.',en:'Paid internship on the development team. Working on real microservices with mentorship.'}},
  {filterDept:'Стажировка',dept:{ru:'Стажировка',kz:'Тағылымдама',en:'Internship'},title:{ru:'Cloud / DevOps Internship',kz:'Cloud / DevOps тағылымдамасы',en:'Cloud / DevOps Internship'},type:{ru:'Стажировка · 3 мес',kz:'Тағылымдама · 3 ай',en:'Internship · 3 months'},tags:['Docker','Kubernetes','Linux'],desc:{ru:'Оплачиваемая стажировка в Cloud Center. Знакомство с GovCloud, CI/CD и контейнеризацией.',kz:'Cloud Center-де ақылы тағылымдама.',en:'Paid internship at the Cloud Center. Hands-on with GovCloud, CI/CD and containerization.'}},
];

let vacFilter = 'all';
function renderJobs(){
  const list = document.getElementById('vacList'); if(!list) return;
  const items = vacFilter==='all' ? JOBS : JOBS.filter(j=>j.filterDept===vacFilter);
  const typeColors = {'Кибербезопасность':'#f87171','AI':'#60a5fa','Разработка':'#a78bfa','Облако':'#34d399','Стажировка':'#fbbf24'};
  list.innerHTML = items.map((j,i)=>{
    const idx = JOBS.indexOf(j);
    const color = typeColors[j.filterDept] || '#00A98F';
    return `<div class="vac-row reveal" data-dept="${j.filterDept}" onclick="openJobModal(${idx})" style="cursor:pointer">
      <div style="width:38px;height:38px;border-radius:9px;background:${color}1a;border:1px solid ${color}33;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">${j.filterDept==='Стажировка'?'🎓':'💼'}</div>
      <div style="flex:1;min-width:160px">
        <div style="font-size:14px;font-weight:700">${j.title[lang]||j.title.ru}</div>
        <div style="font-size:12px;color:var(--dim);margin-top:2px">${j.dept[lang]||j.dept.ru} · ${j.type[lang]||j.type.ru}</div>
      </div>
      <div class="proj-tags" style="flex-shrink:0">${j.tags.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div style="font-size:12px;color:var(--teal-l);font-weight:600;flex-shrink:0">${lang==='en'?'Details →':lang==='kz'?'Толығырақ →':'Подробнее →'}</div>
    </div>`;
  }).join('');
  list.querySelectorAll('.reveal').forEach(el=>revObs&&revObs.observe(el));
}

function openJobModal(i){
  const j=JOBS[i], t=T[lang];
  document.getElementById('jobModalContent').innerHTML=`
    <div class="modal-badge">${j.dept[lang]||j.dept.ru}</div>
    <h2>${j.title[lang]||j.title.ru}</h2>
    <p style="color:var(--muted);font-size:14px;margin:10px 0">🕐 ${j.type[lang]||j.type.ru}</p>
    <p class="modal-desc">${j.desc[lang]||j.desc.ru}</p>
    <div class="modal-section"><div class="modal-section-title">Tech Stack</div><div class="modal-tags">${j.tags.map(tg=>`<span class="modal-tag">${tg}</span>`).join('')}</div></div>
    <div class="modal-btns">
      <a href="mailto:hr@ddc.gov.kz" class="btn btn-primary" style="font-size:14px">${t.modalApply} →</a>
      <button class="btn btn-outline" onclick="closeModal('jobModal')" style="font-size:14px">${t.modalClose}</button>
    </div>`;
  openModalEl('jobModal');
}


