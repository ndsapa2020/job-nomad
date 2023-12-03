import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Добро пожаловать в JobNomad</h1>
      <p className="lead">В JobNomad мы верим в силу возможностей. Наша миссия - открывать двери для тех, кто ищет новые горизонты в мире трудоустройства. С момента нашего основания в 2021 году мы помогли тысячам людей найти работу за границей, предоставляя актуальную информацию и надежные советы.</p>

      <section className="my-5">
        <h2 className="mb-3">Наша Миссия</h2>
        <p>Мы стремимся создавать мосты между странами и культурами, упрощая процесс международного трудоустройства. Наши эксперты постоянно анализируют рынок труда, чтобы предоставлять вам самые актуальные и полезные сведения.</p>
      </section>

      <section className="my-5">
        <h2 className="mb-3">Встречайте Нашу Команду</h2>
        <p>За успехом JobNomad стоит команда профессионалов с разнообразным опытом и уникальными историями. Мы объединены общей целью - помочь вам в достижении профессиональных целей.</p>
        {/* Карточки команды можно добавить здесь */}
      </section>

      <section className="my-5">
        <h2 className="mb-3">Отзывы наших пользователей</h2>
        <blockquote className="blockquote">
          <p className="mb-0">"Благодаря JobNomad я нашел работу мечты в Германии. Процесс был простым и понятным, а поддержка команды - бесценной." - Алексей И.</p>
        </blockquote>
        {/* Дополнительные отзывы */}
      </section>

      <section className="my-5">
        <h2 className="mb-3">Свяжитесь с нами</h2>
        <p>Есть вопросы? Наша команда всегда готова помочь. Свяжитесь с нами через форму обратной связи или по электронной почте.</p>
        {/* Форма обратной связи */}
      </section>

      <section className="contact-section my-5">
        <h2 className="mb-3">Контакты</h2>
        <p>Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами:</p>
        <ul className="list-unstyled">
          <li><strong>Email:</strong> info@jobnomad.com</li>
          <li><strong>Телефон:</strong> +90 545 814 33 990</li>
        </ul>
        {/* Здесь можно добавить форму обратной связи, если требуется */}
      </section>

    </div>
  );
};

export default AboutPage;
