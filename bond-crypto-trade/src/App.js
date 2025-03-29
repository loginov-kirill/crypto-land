import React, { useState } from "react";

import "./styles.css";

function App() {
  return (
    <div className="page-container">
      {/* Шапка (header) */}
      <header className="header">
        <div className="header-left">
          <h1 className="logo">ИРИШАСУПЕРСТАРКРИПТОМАНИМЕЙКЕР</h1>
          <nav className="nav">
            <a href="#founder" className="nav-link">Основатель</a>
            <a href="#tariffs" className="nav-link">Тарифы</a>
            <a href="#community" className="nav-link">Комьюнити</a>
            <a href="#reviews" className="nav-link">Отзывы</a>
            <a href="#team" className="nav-link">Команда</a>
            <a href="#demo" className="nav-link">Демо</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>
        </div>
        <div className="header-right">
          <button className="sign-up-button">Записаться</button>
        </div>
      </header>

      {/* Основной контент */}
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

      {/* Новый блок статистики */}
      <section className="stats-section">
        <div className="stats-cards">
          {/* Карточка 1 */}
          <div className="stats-card large">
            <h3 className="stats-value">$200M</h3>
            <p className="stats-label">Торговый объем за 2025 год</p>
            <div className="stats-chart line-chart">
              {/* Замените этот блок на нужную вам картинку/иконку */}
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
            <div className="stats-chart bar-chart">
              {/* Замените этот блок на нужную вам картинку/иконку */}
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="stats-card">
            <h3 className="stats-value">22</h3>
            <p className="stats-label">Успешных потоков обучения</p>
            <div className="stats-chart mortarboard-chart">
              {/* Можно повторить иконку: 🎓🎓🎓 ... или использовать фон-изображение */}
            </div>
          </div>
        </div>
      </section>

      {/* Блок с "шагами" и горизонтальными карточками */}
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
              {/* Условно показываем 4 точки, но без активной - стилизуйте при необходимости */}
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
      <FounderSection />
      <TariffsSection />
      <CommunitySection />
    </div>
  );
}
function FounderSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Обработчик события onScroll
  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const maxScroll = scrollWidth - clientWidth;
    // вычисляем процент прокрутки, чтобы задать ширину «ползунка»
    const scrolledPercent = (scrollLeft / maxScroll) * 100;
    setScrollProgress(scrolledPercent);
  };

  return (
    <section className="founder-section">
      {/* Заголовок и подпись */}
      <h2 className="founder-name">Игнат Бонд</h2>
      <p className="founder-title">
        Основатель образовательного продукта ИРИШАСУПЕРСТАРКРИПТОМАНИМЕЙКЕР
      </p>

      {/* Иконки соцсетей */}
      <div className="founder-socials">
        <a href="#telegram" className="social-link">Telegram</a>
        <a href="#youtube" className="social-link">YouTube</a>
        <a href="#instagram" className="social-link">Instagram</a>
      </div>

      {/* Обёртка, в которой будет сама полоса прокрутки (progress-bar) */}
      <div className="founder-scroll-wrap">
        {/* Горизонтальный скролл карточек */}
        <div className="founder-cards-container" onScroll={handleScroll}>
          {/* Каждая карточка: изображение, год, текст */}
          <div className="founder-card">
            <img
              src="https://via.placeholder.com/300x300.png?text=2017"
              alt="2017"
              className="founder-photo"
            />
            <h3>2017 год</h3>
            <p>
              Сформировал свой первый крипто-портфель...
            </p>
          </div>

          <div className="founder-card">
            <img
              src="https://via.placeholder.com/300x300.png?text=2018"
              alt="2018"
              className="founder-photo"
            />
            <h3>2018 год</h3>
            <p>
              Решил сделать серьезный шаг и переехать в Монако...
            </p>
          </div>

          <div className="founder-card">
            <img
              src="https://via.placeholder.com/300x300.png?text=2019"
              alt="2019"
              className="founder-photo"
            />
            <h3>2019 год</h3>
            <p>
              Начал активно учиться трейдингу и прошел более десятка различных обучений...
            </p>
          </div>

          <div className="founder-card">
            <img
              src="https://via.placeholder.com/300x300.png?text=2020"
              alt="2020"
              className="founder-photo"
            />
            <h3>2020 год</h3>
            <p>
              Стабильно начал зарабатывать более 10000$ в месяц. Началась пандемия...
            </p>
          </div>

          {/* Добавьте при необходимости больше карточек */}
        </div>

        {/* Кастомный "ползунок", синхронизированный со скроллом */}
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
function TariffsSection() {
  return (
    <section className="tariffs-section">
      {/* Левая часть (тёмный фон) */}
      <div className="tariffs-left">
        <h2 className="tariffs-left-title">Тарифы</h2>
        <p className="tariffs-left-desc">
          Каждый разработанный нами тариф является уникальной системой получения 
          знаний для вашего успеха в трейдинге и инвестициях.
        </p>
        <p className="tariffs-left-desc">
          Есть 2 варианта развития событий:
        </p>
        <ol className="tariffs-left-list">
          <li>
            Самостоятельно образовываться, набирать опыт путём личных проб и ошибок 
            с неструктурированным материалом из интернета.
          </li>
          <li>
            Обучаться с помощью ментора, который делится своим опытом, стратегией 
            и знаниями для вашего продвижения в мире криптовалют и инвестиций.
          </li>
        </ol>
        <div className="tariffs-left-help">
          <h4>Нужна помощь с выбором тарифа?</h4>
          <button className="help-button">Напишите нам!</button>
        </div>
      </div>

      {/* Правая часть (светлый фон и карточки) */}
      <div className="tariffs-right">
        {/* Карточка "Трейдинг" */}
        <div className="tariff-card">
          <div className="tariff-card-header">
            <h3 className="tariff-card-title">Трейдинг</h3>
            <span className="tariff-badge">TBA</span>
            {/* «Закрыть» или «X» справа */}
            <button className="close-button">✕</button>
          </div>

          {/* Кнопка «Посмотреть программу обучения» */}
          <button className="program-button">Посмотреть программу обучения</button>

          <div className="tariff-lists-wrap">
            {/* Список «Кому подойдёт» */}
            <div className="tariff-list-block">
              <h4>Кому подойдёт:</h4>
              <ul className="tariff-list plus-list">
                <li><span>+</span> Всем, кто хочет начать зарабатывать онлайн</li>
                <li><span>+</span> Тем, кто хочет основательно изучить трейдинг и инвестиции</li>
                <li><span>+</span> Тем, кто хочет добиться успеха</li>
                <li><span>+</span> Кто хочет стать частью лучшей команды</li>
                <li><span>+</span> Кто мечтает не быть привязанным к одному месту</li>
                <li><span>+</span> Кто хочет заставить деньги «работать»</li>
              </ul>
            </div>

            {/* Список «Что вам даст тариф» */}
            <div className="tariff-list-block">
              <h4>Что вам даст тариф:</h4>
              <ul className="tariff-list star-list">
                <li><span>★</span> Выход на реальную прибыль после 9 вебинаров</li>
                <li><span>★</span> Пожизненный доступ в сообщество</li>
                <li><span>★</span> Теоретический материал</li>
                <li><span>★</span> Проверка домашнего задания</li>
                <li><span>★</span> Еженедельные групповые звонки с командой</li>
                <li><span>★</span> 24/7 контакт с менторами и кураторами</li>
              </ul>
            </div>
          </div>

          {/* Кнопка «Записаться / Нет записи» */}
          <button className="signup-button disabled">Записей нет</button>
        </div>

        {/* Карточка "Персональное" */}
        <div className="tariff-card">
          <div className="tariff-card-header">
            <h3 className="tariff-card-title">Персональное</h3>
            <span className="tariff-badge star-badge">★ TBA</span>
            {/* Аналогичная логика «Закрыть» */}
            <button className="close-button">✕</button>
          </div>

          {/* Здесь может быть другой контент, для примера */}
          <p className="tariff-subtext">
            Персональная программа, индивидуальные созвоны,
            максимальное погружение и сопровождение.
          </p>

          <button className="signup-button disabled">Записей нет</button>
          <button className="signup-button outline plus-btn">+</button>
        </div>
      </div>
    </section>
  );
}
function CommunitySection() {
  return (
    <section className="community-section">
      {/* Фон (можно вставить картинку через background-image) */}
      <div className="community-dark-bg">
        <div className="community-content">
          <h2 className="community-title">Комьюнити</h2>
          <p className="community-text">
            Все ученики получают пожизненный доступ к чату потока, где находятся все кураторы, ученики и 
            Игнат. Вместе со своими коллегами вы сможете обсуждать рынок, давать аналитику и самое главное – 
            обмениваться опытом и мыслями с другими участниками нашего комьюнити.
            Новички в начале обучения всегда нуждаются в поддержке и мотивации, а опытные трейдеры делятся 
            друг с другом аналитикой и результатами.
          </p>

          {/* Карточки с цифрами (например, $25M, 480) */}
          <div className="community-cards-row">
            <div className="community-card stat-card">
              <h3>$25M</h3>
              <p>Капитал наших учеников внутри закрытого сообщества</p>
            </div>
            <div className="community-card stat-card">
              <h3>480</h3>
              <p>Количество учеников, которые уже получают прибыль</p>
            </div>
          </div>

          {/* Блок с преимуществами (иконки и текст) */}
          <div className="community-features">
            <div className="feature-box">
              <span role="img" aria-label="phone">📞</span>
              <p>Еженедельные групповые звонки</p>
            </div>
            <div className="feature-box">
              <span role="img" aria-label="chart">📈</span>
              <p>Разбор и аналитика рынка</p>
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

      {/* Блок "Нам доверяют" (на светлом фоне) */}
      <div className="community-trust-block">
        <h3 className="trust-title">Нам доверяют</h3>
        <p className="trust-subtitle">
          Многие наши ученики занимались трейдингом и криптовалютой, но именно с нами многие достигли результатов
        </p>
        <div className="trust-cards">
          <div className="trust-card">
            <h4>500 учеников</h4>
            <p>Присоединились к нам на обучение</p>
          </div>
          <div className="trust-card">
            <h4>Более 80%</h4>
            <p>По статистике и опросам улучшили свои навыки</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
