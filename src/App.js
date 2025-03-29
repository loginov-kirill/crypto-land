import React, { useState } from "react";
import "./styles.css";

/* -------------------- Главное приложение, собирающее все блоки -------------------- */
function App() {
  return (
    <div className="page-container">
      <Header />
      <MainContent />
      <StatsSection />
      <StepsSection />
      <FounderSection />
      <TariffsSection />
      <CommunitySection />

      {/* Новые три секции */}
      <ReviewsSection /> 
      <TeamSection />
      <FaqSection />
      <DemoSection />
      <Footer />
    </div>
  );
}

/* ---------------------------------- ШАПКА (Header) ---------------------------------- */
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">ИРИШАСУПЕРСТАРКРИПТОМАНИМЕЙКЕР</h1>
      </div>
      <div className="header-right">
        <nav className="nav">
          <a href="#founder" className="nav-link">Основатель</a>
          <a href="#tariffs" className="nav-link">Тарифы</a>
          <a href="#community" className="nav-link">Комьюнити</a>
          <a href="#reviews" className="nav-link">Отзывы</a>
          <a href="#team" className="nav-link">Команда</a>
          <a href="#demo" className="nav-link">Демо</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>
        <button className="sign-up-button">Записаться</button>
      </div>
    </header>
  );
}



/* ---------------------------------- ГЛАВНЫЙ КОНТЕНТ (MainContent) ---------------------------------- */
function MainContent() {
  return (
    <main className="main-content">
      <div className="location-info">
        <span>Прямиком из Монако&nbsp;</span>
        <span className="icon-monaco">🛥</span>
        <span className="spacer"> &nbsp;|&nbsp; </span>
        <span>Прямиком из Дубая&nbsp;</span>
        <span className="icon-dubai">⛵</span>
      </div>

      <h2 className="main-title">
        Лучшее обучение <span className="highlight">трейдингу</span> от профессиональной команды&nbsp;
        <span className="highlight-brand">ИРИШАСУПЕРСТАРКРИПТОМАНИМЕЙКЕР</span>.
      </h2>

      <p className="main-paragraph">
        Улучшить навыки и повысить продуктивность можно на нашем обучении. Курс ИРИШАСУПЕРСТАРКРИПТОМАНИМЕЙКЕР
        предназначен как для новичков, которые не знакомы с миром трейдинга, так и для трейдеров,
        которые хотят улучшить свои знания и быть в лучшей команде и лучшем комьюнити.
      </p>

      <div className="buttons-row">
        <button className="cta-button">Регистрация</button>
        <button className="cta-button outline">Подробнее</button>
      </div>
    </main>
  );
}

/* ---------------------------------- СТАТИСТИКА (StatsSection) ---------------------------------- */
function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-cards">
        {/* Карточка 1 */}
        <div className="stats-card large">
          <h3 className="stats-value">$200M</h3>
          <p className="stats-label">Торговый объем за 2025 год</p>
          <div className="stats-chart line-chart">
            {/* Вместо текста можно вставить нужное изображение или чарт */}
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="stats-card">
          <h3 className="stats-value">480</h3>
          <p className="stats-label">Довольных учеников</p>
          <div className="stats-emoji">
            <span role="img" aria-label="emoji1">🤩</span>
            <span role="img" aria-label="emoji2">🧔</span>
            <span role="img" aria-label="emoji3">👩‍🎤</span>
          </div>
        </div>

        {/* Карточка 3 */}
        <div className="stats-card">
          <h3 className="stats-value">5 лет</h3>
          <p className="stats-label">Управления активами</p>
          <div className="stats-chart bar-chart" />
        </div>

        {/* Карточка 4 */}
        <div className="stats-card">
          <h3 className="stats-value">22</h3>
          <p className="stats-label">Успешных потоков обучения</p>
          <div className="stats-chart mortarboard-chart" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- ШАГИ (StepsSection) ---------------------------------- */
function StepsSection() {
  return (
    <section className="steps-section">
      <div className="steps-left">
        <div className="steps-topic-badge">О ТРЕЙДИНГЕ И ИНВЕСТИЦИЯХ</div>
        <h2 className="steps-title">Как начать свою историю?</h2>
        <p className="steps-description">
          Усвоить механику финансовых, а также крипто-рынков 
          и научиться выбирать активы для торговли, довольно 
          просто, особенно с командой.
        </p>
        <p className="steps-description">
          Путь трейдера начинается с осознания, что одному
          приходится очень сложно.
        </p>
        <p className="steps-description">
          Для этого мы с командой разработали четкий план,
          которому нужно следовать, чтобы обрести финансовую 
          независимость и повысить свой уровень дохода:
        </p>
      </div>

      {/* Горизонтальный скролл карточек */}
      <div className="steps-cards-container">
        {/* Карточка 1 */}
        <div className="step-card">
          <div className="step-card-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <h3 className="step-card-title">
            1. Записаться на поток обучения <br />
            <strong>ИРИШАСУПЕРСТАРКРИПТОМАНИМЕЙКЕР</strong> <span role="img" aria-label="graduate">👨‍🎓</span>
          </h3>
          <div className="step-card-balance">
            Ваш баланс: <strong>$500</strong> <span className="balance-indicator up">▲</span>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="step-card">
          <div className="step-card-dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <h3 className="step-card-title">
            2. Слушать указания<br />
            ментора и кураторов <span role="img" aria-label="doc">📝</span>
          </h3>
          <div className="step-card-balance">
            Ваш баланс: <strong>$742</strong> <span className="balance-indicator up">▲</span>
          </div>
        </div>

        {/* Карточка 3 */}
        <div className="step-card">
          <div className="step-card-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
          <h3 className="step-card-title">
            3. Выполнять в срок<br />
            домашнее задание <span role="img" aria-label="books">📚</span>
          </h3>
          <div className="step-card-balance">
            Ваш баланс: <strong>$2&nbsp;320</strong> <span className="balance-indicator up">▲</span>
          </div>
        </div>

        {/* Карточка 4 */}
        <div className="step-card">
          <div className="step-card-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
          </div>
          <h3 className="step-card-title">
            4. Не пропускать лекции <br />
            и изучать материал <span role="img" aria-label="tv">📺</span>
          </h3>
          <div className="step-card-balance">
            Ваш баланс: <strong>$5&nbsp;771</strong> <span className="balance-indicator up">▲</span>
          </div>
        </div>

        {/* Карточка 5 */}
        <div className="step-card">
          <div className="step-card-dots">
            {/* Условно все неактивные */}
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <h3 className="step-card-title">
            5. Исполнить мечту<br />
            зарабатывать удаленно <span role="img" aria-label="money-bag">💰</span>
          </h3>
          <div className="step-card-balance">
            Ваш баланс: <strong>$14&nbsp;256</strong> <span className="balance-indicator up">▲</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- БЛОК ОБ ОСНОВАТЕЛЕ (FounderSection) ---------------------------------- */
function FounderSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const maxScroll = scrollWidth - clientWidth;
    const scrolledPercent = (scrollLeft / maxScroll) * 100;
    setScrollProgress(scrolledPercent);
  };

  return (
    <section className="founder-section" id="founder">
      <h2 className="founder-name">Игнат Бонд</h2>
      <p className="founder-title">
        Основатель образовательного продукта ИРИШАСУПЕРСТАРКРИПТОМАНИМЕЙКЕР
      </p>

      <div className="founder-socials">
        <a href="#telegram" className="social-link">Telegram</a>
        <a href="#youtube" className="social-link">YouTube</a>
        <a href="#instagram" className="social-link">Instagram</a>
      </div>

      <div className="founder-scroll-wrap">
        <div className="founder-cards-container" onScroll={handleScroll}>
          <div className="founder-card">
            <img
              src="https://via.placeholder.com/300x300.png?text=2017"
              alt="2017"
              className="founder-photo"
            />
            <h3>2017 год</h3>
            <p>Сформировал свой первый крипто-портфель...</p>
          </div>

          <div className="founder-card">
            <img
              src="https://via.placeholder.com/300x300.png?text=2018"
              alt="2018"
              className="founder-photo"
            />
            <h3>2018 год</h3>
            <p>Решил сделать серьезный шаг и переехать в Монако...</p>
          </div>

          <div className="founder-card">
            <img
              src="https://via.placeholder.com/300x300.png?text=2019"
              alt="2019"
              className="founder-photo"
            />
            <h3>2019 год</h3>
            <p>Начал активно учиться трейдингу...</p>
          </div>

          <div className="founder-card">
            <img
              src="https://via.placeholder.com/300x300.png?text=2020"
              alt="2020"
              className="founder-photo"
            />
            <h3>2020 год</h3>
            <p>Стабильно начал зарабатывать 10000$ в месяц...</p>
          </div>
        </div>

        <div className="custom-scrollbar">
          <div
            className="custom-scrollbar-thumb"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- ТАРИФЫ (TariffsSection) ---------------------------------- */
function TariffsSection() {
  return (
    <section className="tariffs-section" id="tariffs">
      <div className="tariffs-left">
        <h2 className="tariffs-left-title">Тарифы</h2>
        <p className="tariffs-left-desc">
          Каждый разработанный нами тариф – это уникальная система получения 
          знаний для вашего успеха в трейдинге и инвестициях.
        </p>
        <p className="tariffs-left-desc">
          Есть 2 варианта развития событий:
        </p>
        <ol className="tariffs-left-list">
          <li>
            Самостоятельно набрать опыт путём проб и ошибок 
            с неструктурированным материалом из интернета.
          </li>
          <li>
            Обучаться у ментора, который делится своим опытом и готовой стратегией.
          </li>
        </ol>
        <div className="tariffs-left-help">
          <h4>Нужна помощь с выбором тарифа?</h4>
          <button className="help-button">Напишите нам!</button>
        </div>
      </div>

      <div className="tariffs-right">
        {/* Карточка "Трейдинг" */}
        <div className="tariff-card">
          <div className="tariff-card-header">
            <h3 className="tariff-card-title">Трейдинг</h3>
            <span className="tariff-badge">TBA</span>
            <button className="close-button">✕</button>
          </div>

          <button className="program-button">Посмотреть программу обучения</button>

          <div className="tariff-lists-wrap">
            <div className="tariff-list-block">
              <h4>Кому подойдёт:</h4>
              <ul className="tariff-list plus-list">
                <li><span>+</span> Всем, кто хочет зарабатывать онлайн</li>
                <li><span>+</span> Тем, кто хочет изучить трейдинг/инвестиции</li>
                <li><span>+</span> Тем, кто хочет добиться успеха</li>
                <li><span>+</span> Кто хочет стать частью команды</li>
                <li><span>+</span> Кто мечтает о свободе перемещений</li>
                <li><span>+</span> Кто хочет заставить деньги «работать»</li>
              </ul>
            </div>

            <div className="tariff-list-block">
              <h4>Что даст тариф:</h4>
              <ul className="tariff-list star-list">
                <li><span>★</span> Реальную прибыль после 9 вебинаров</li>
                <li><span>★</span> Пожизненный доступ в сообщество</li>
                <li><span>★</span> Полный теоретический материал</li>
                <li><span>★</span> Проверка домашних заданий</li>
                <li><span>★</span> Еженедельные групповые звонки</li>
                <li><span>★</span> 24/7 контакт с менторами</li>
              </ul>
            </div>
          </div>

          <button className="signup-button disabled">Записей нет</button>
        </div>

        {/* Карточка "Персональное" */}
        <div className="tariff-card">
          <div className="tariff-card-header">
            <h3 className="tariff-card-title">Персональное</h3>
            <span className="tariff-badge star-badge">★ TBA</span>
            <button className="close-button">✕</button>
          </div>

          <p className="tariff-subtext">
            Индивидуальные созвоны и максимальное погружение с ментором.
          </p>

          <button className="signup-button disabled">Записей нет</button>
          <button className="signup-button outline plus-btn">+</button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- КОМЬЮНИТИ (CommunitySection) ---------------------------------- */
function CommunitySection() {
  return (
    <section className="community-section" id="community">
      <div className="community-dark-bg">
        <div className="community-content">
          <h2 className="community-title">Комьюнити</h2>
          <p className="community-text">
            Все ученики получают пожизненный доступ к чату потока с кураторами, 
            где можно обсуждать рынок, делиться аналитикой и обмениваться опытом.
          </p>

          <div className="community-cards-row">
            <div className="community-card stat-card">
              <h3>$25M</h3>
              <p>Капитал наших учеников внутри закрытого сообщества</p>
            </div>
            <div className="community-card stat-card">
              <h3>480</h3>
              <p>Учеников, которые уже получают прибыль</p>
            </div>
          </div>

          <div className="community-features">
            <div className="feature-box">
              <span role="img" aria-label="phone">📞</span>
              <p>Еженедельные групповые звонки</p>
            </div>
            <div className="feature-box">
              <span role="img" aria-label="chart">📈</span>
              <p>Разбор рынка</p>
            </div>
            <div className="feature-box">
              <span role="img" aria-label="lightbulb">💡</span>
              <p>Инсайды и бизнес-идеи</p>
            </div>
            <div className="feature-box">
              <span role="img" aria-label="refresh">🔄</span>
              <p>Актуализация под рынок</p>
            </div>
          </div>
        </div>
      </div>

      <div className="community-trust-block">
        <h3 className="trust-title">Нам доверяют</h3>
        <p className="trust-subtitle">
          Многие ученики изначально занимались трейдингом сами, но именно с нами вышли на новый уровень
        </p>
        <div className="trust-cards">
          <div className="trust-card">
            <h4>500 учеников</h4>
            <p>Присоединились к нам на обучение</p>
          </div>
          <div className="trust-card">
            <h4>Более 80%</h4>
            <p>Вышли на стабильную прибыль по итогам курса</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- ОТЗЫВЫ (ReviewsSection) ---------------------------------- */
function ReviewsSection() {
  // Можно сделать слайдер/карусель, но для демонстрации — просто три карточки
  return (
    <section className="reviews-section" id="reviews">
      <h2 className="reviews-title">Почему люди выбирают нас</h2>
      <div className="reviews-container">
        <div className="review-card">
          <div className="review-author">
            <div className="avatar-placeholder">👤</div>
            <h4>Nade</h4>
          </div>
          <p className="review-text">
            Не пожалел, что пошёл на обучение! Ребята, вы сэкономите свои деньги, а что важнее – время. 
            В курсе описаны все базовые вещи, нужные трейдеру...
          </p>
          <p className="review-date">10 ноября</p>
        </div>

        <div className="review-card">
          <div className="review-author">
            <div className="avatar-placeholder">👤</div>
            <h4>Egor</h4>
          </div>
          <p className="review-text">
            По поводу обучения, прекрасная доступная подача. Многие моменты, которые казалось бы очевидными, 
            оказались настолько просты...
          </p>
          <p className="review-date">7 ноября</p>
        </div>

        <div className="review-card">
          <div className="review-author">
            <div className="avatar-placeholder">👤</div>
            <h4>SP</h4>
          </div>
          <p className="review-text">
            Я очень благодарен тебе, Игнат, за твоё обучение, очень рад что попал в твой сообщества...
          </p>
          <p className="review-date">4 ноября</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- НАША КОМАНДА (TeamSection) ---------------------------------- */
function TeamSection() {
  return (
    <section className="team-section" id="team">
      <h2 className="team-title">Наша команда</h2>
      <p className="team-subtitle">
        Многие участники нашей команды пришли в проект будучи нашими учениками.
        Мы стремимся увидеть талант в каждом и дать возможность реализовать себя.
      </p>

      <div className="team-cards">
        <div className="team-card">
          <img
            src="https://via.placeholder.com/300x300.png?text=Igant+Bond"
            alt="Игнат Бонд"
            className="team-photo"
          />
          <h3>Игнат Бонд</h3>
          <p className="team-role">Основатель</p>
          <p className="team-desc">
            Создатель трейдинг-крипто фонда.
            Торговый объем за 2021 год 194.000.000$
          </p>
        </div>

        <div className="team-card">
          <img
            src="https://via.placeholder.com/300x300.png?text=Bod+Invade"
            alt="Bodя Invade"
            className="team-photo"
          />
          <h3>Bodя Invade</h3>
          <p className="team-role">Сооснователь</p>
          <p className="team-desc">
            Основатель инвест-компании BCT.
            Чистый доход на NFT более 300.000$
          </p>
        </div>

        <div className="team-card">
          <img
            src="https://via.placeholder.com/300x300.png?text=Andrey+Karpenko"
            alt="Андрей Карпенко"
            className="team-photo"
          />
          <h3>Андрей Карпенко</h3>
          <p className="team-role">Ментор</p>
          <p className="team-desc">
            Prop-funded trader (Price Action/SMC).
            Объём средств под управлением 600.000$
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ (FaqSection) ---------------------------------- */
function FaqSection() {
  // Пример реализации «аккордеона»
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Сколько будет длиться обучение?",
      answer:
        "Курс состоит из 3 блоков, на его прохождение потребуется ~4.5 недели. Вебинары идут LIVE, после чего запись закрепляется в группе вашего потока."
    },
    {
      question: "Будет ли домашнее задание?",
      answer:
        "Да, после каждого блока выдаём практические задания для закрепления материала."
    },
    {
      question: "У меня точно будет результат?",
      answer:
        "Это обучение – не волшебная таблетка. Но при выполнении всех заданий и рекомендаций мы гарантируем рост навыков и понимания рынка."
    },
    {
      question: "Сколько начального капитала мне понадобится?",
      answer:
        "Можно начинать даже с небольших сумм, вплоть до 100-200$. Важно научиться грамотно управлять любым депозитом."
    },
    {
      question: "Смогу ли я научиться торговать без вашего курса?",
      answer:
        "Теоретически – да. Практически – это займёт гораздо больше времени и денег на личные эксперименты."
    },
    {
      question: "Когда лучше начинать?",
      answer: "Лучший момент был вчера. Следующий – прямо сейчас!"
    },
    {
      question: "Будет ли обратная связь?",
      answer:
        "Конечно! Мы постоянно на связи в чате, проводим групповые и индивидуальные созвоны в зависимости от тарифа."
    },
    {
      question: "Можно ли вернуть деньги за обучение?",
      answer:
        "Есть условный период, в течение которого можно вернуть часть средств, если что-то пошло совсем не так."
    },
    {
      question: "Самый глупый вопрос?",
      answer:
        "Тот, который не был задан. Лучше спросить, чем потом пожалеть!"
    }
  ];

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleItem(index)}>
              <span>{item.question}</span>
              <span>{activeIndex === index ? "–" : "+"}</span>
            </div>
            {/* Разворачиваем блок ответа, если кликнули */}
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
/* ---------------------------- DEMO-SECTION ---------------------------- */
export function DemoSection() {
  return (
    <section className="demo-section" id="demo">
      <h2 className="demo-title">Демо видео</h2>
      
      {/* Вставьте YouTube-ролик (iframe) или React-плеер */}
      <div className="demo-video-container">
        <iframe
          className="demo-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XXXXXXXXXXX" 
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Тёмный блок (оформим фоном через CSS) */}
      <div className="demo-bottom-wrap">
        <h2 className="demo-bottom-title">Получите демо материал</h2>
        <p className="demo-bottom-subtitle">
          Заполните форму и получите нашу вводную лекцию совершенно бесплатно.
        </p>
        
        <div className="demo-content">
          {/* Левый блок с «плюшками» */}
          <div className="demo-features">
            <div className="demo-feature-card">Kраткий справочник терминов</div>
            <div className="demo-feature-card">Информация о диверсификации активов</div>
            <div className="demo-feature-card">Виды и типы торговли</div>
            <div className="demo-feature-card">Наш список полезной литературы</div>
          </div>

          {/* Правая сторона с формой */}
          <form className="demo-form">
            <label>
              Ваше Имя
              <input type="text" placeholder="Александр Сергеев" />
            </label>
            <label>
              Email
              <input type="email" placeholder="example@mail.com" />
            </label>
            <label>
              Телефон
              <input type="tel" placeholder="+375 44 999 99 99" />
            </label>
            <button type="submit">Получить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- FOOTER ---------------------------- */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">BondCryptoTrade</div>
          <nav className="footer-nav">
            <a href="#founder">Основатель</a>
            <a href="#tariffs">Тарифы</a>
            <a href="#community">Комьюнити</a>
            <a href="#reviews">Отзывы</a>
            <a href="#team">Команда</a>
            <a href="#demo">Демо</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-copy">
            © 2025 BondCryptoTrade. All rights reserved.
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <a href="#telegram" className="social-link">  
              <span role="img" aria-label="Telegram">💬</span>
            </a>
            <a href="#youtube" className="social-link">
              <span role="img" aria-label="YouTube">▶</span>
            </a>
            <a href="#instagram" className="social-link">
              <span role="img" aria-label="Instagram">📸</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
