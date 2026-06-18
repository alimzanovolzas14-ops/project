# DDC — Digital Development Center
### АО «Цифровой центр развития» | National Bank of Kazakhstan

---

## 🚀 Как запустить

### Вариант 1 — VS Code (рекомендуется)
1. Установите расширение **Live Server** (Ritwick Dey)
2. Откройте папку `DDC_pages/` в VS Code
3. ПКМ на `index.html` → **Open with Live Server**

### Вариант 2 — Python
```bash
cd DDC_pages/
python3 -m http.server 8080
# Открыть: http://localhost:8080
```

### Вариант 3 — Node.js
```bash
npx serve DDC_pages/
```

> ⚠️ Файлы **НЕ открываются** двойным кликом из-за ограничений браузера (CORS).
> Используйте Live Server или Python.

---

## 📁 Структура проекта

```
DDC_pages/
├── 🌐 index.html              ← Главная страница
├── 📖 README.md               ← Эта документация
│
├── 📁 pages/                  ← 21 отдельная страница
│   ├── home.html              ← Главная (дубль для навигации)
│   ├── about.html             ← О компании
│   ├── board.html             ← Совет директоров
│   ├── org.html               ← Структура DDC
│   ├── history.html           ← История
│   ├── cybersecurity.html     ← SOC / Кибербезопасность
│   ├── fintech.html           ← FinTech / Digital Tenge
│   ├── ai.html                ← AI Innovation Lab
│   ├── smartcity.html         ← Smart City & eGov
│   ├── projects.html          ← Каталог проектов (8 проектов)
│   ├── services.html          ← Услуги DDC
│   ├── technology.html        ← Tech Stack
│   ├── infrastructure.html    ← Data Center & Architecture
│   ├── team.html              ← Команда специалистов
│   ├── careers.html           ← Карьера (14 вакансий)
│   ├── partners.html          ← Партнёры и заказчики
│   ├── news.html              ← Новости
│   ├── analytics.html         ← Аналитика (KPI + Charts)
│   ├── knowledge.html         ← Центр знаний (статьи)
│   ├── faq.html               ← FAQ
│   └── contact.html           ← Контакты
│
├── 📁 css/
│   ├── style.css              ← Базовые стили (переменные, nav, hero)
│   ├── components.css         ← Компоненты (SOC, AI, карточки, модалки)
│   └── spa.css                ← Навигация (sidebar, topbar, breadcrumb)
│
├── 📁 js/
│   ├── language.js            ← 🔑 Переводы RU/KZ/EN (грузится ПЕРВЫМ)
│   ├── canvas.js              ← Анимация частиц
│   ├── currency.js            ← Курсы валют НБ РК + погода
│   ├── projects.js            ← Данные проектов, новостей, сервисов
│   ├── soc.js                 ← SOC Dashboard, карта угроз
│   ├── fintech.js             ← Digital Tenge live
│   ├── stack.js               ← Tech Stack, Jobs
│   ├── employees.js           ← Сотрудники, оргструктура, DC
│   ├── ai_assistant.js        ← AI ассистент (Claude API)
│   ├── interactive.js         ← Quiz, Incident, Uptime, CVE, ROI, FAQ
│   ├── router.js              ← Аналитика, поиск
│   └── main.js                ← Инициализация (грузится ПОСЛЕДНИМ)
│
├── 📁 data/
│   ├── projects.json          ← 8 проектов DDC
│   ├── news.json              ← 6 новостей
│   ├── employees.json         ← 12 сотрудников
│   ├── partners.json          ← 18 партнёров
│   ├── articles.json          ← 9 статей центра знаний
│   └── menu.json              ← Структура меню
│
└── 📁 assets/
    └── icons/
        └── logo.svg           ← Логотип DDC
```

## 🌐 Языки
Переключение RU / KZ / EN — кнопки в топбаре или sidebar.  
Язык сохраняется в localStorage между сессиями.

## 📞 Контакты DDC
- 📧 info@ddc.gov.kz
- 📞 +7 (7172) 55-00-00
- 🌐 bsbnb.kz
- 🛒 zakup.nationalbank.kz
