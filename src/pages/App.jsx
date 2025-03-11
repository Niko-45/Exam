"use client"

import { useEffect, useState } from "react"
import { Button, Card, Group, Select, Info, Event, BlueText, CardInfo } from "../components/components"
import "./app.css"

export default function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="header_div-Max">
          <nav className="header_nav">
            <div>
              <img src="./src/assets/image/img (39).png" alt="Logo" />
            </div>
            <div
              className={`heder-nav_text ${menuOpen ? "mobile-menu-open" : ""}`}
              style={{
                display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
                flexDirection: isMobile ? "column" : "row",
                position: isMobile ? "absolute" : "static",
                top: isMobile ? "70px" : "auto",
                left: isMobile ? "0" : "auto",
                width: isMobile ? "100%" : "auto",
                backgroundColor: isMobile ? "rgba(0, 0, 0, 0.9)" : "transparent",
                padding: isMobile ? "20px" : "0",
                zIndex: isMobile ? "10" : "auto",
              }}
            >
              <p>Кто мы?</p>
              <p>Услуги</p>
              <p>Акселератор</p>
              <p>Новости</p>
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Button>Войти</Button>
              <img
                className="menu"
                src="/src/assets/image/Group 929.png"
                alt="Menu"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              />
            </div>
          </nav>
          <div className="header_div">
            <Card
              name="header-div_card fade-in"
              h1="Запустите технологический IT-бизнес на международных рынках"
              p="Открыт набор заявок на акселератор"
              btn="Подать заявку"
              btnCol={true}
            />
          </div>
        </div>
      </header>

      <section className="section-main container">
        <BlueText>Наши услуги</BlueText>
        <div className="section-main_div">
          <Info
            name="main-div_info slide-in"
            title="Аналитические исследования"
            text="Одним из наших ключевых направлений является анализ технологических трендов на международных рынках.Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации"
            btn="Узнать подробнее"
          />
          <div className="main-div_img">
            <img src="/src/assets/image/img (40).png" alt="Analytics" className="fade-in" />
          </div>
        </div>
        <div className="section-main_div">
          <div className="main-div_img">
            <img src="/src/assets/image/img.png" alt="Accelerator" className="fade-in" />
          </div>
          <Info
            name="main-div_info slide-in"
            title="Онлайн акселератор для IT бизнеса"
            text="Одним из наших ключевых направлений является анализ технологических трендов на международных рынках.Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации"
            btn="Узнать подробнее"
          />
        </div>
      </section>

      <section className="section-hero container">
        <BlueText>Для кого мы?</BlueText>
        <div className="section-hero_div">
          <Group
            img={"/src/assets/image/img (11).png"}
            title="IT проекты на стадии идеи"
            text="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
            className={"card-group fade-in"}
          />
          <Group
            img={"/src/assets/image/img (44).png"}
            title="Инновационный бизнес"
            text="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
            className={"card-group fade-in"}
          />
          <Group
            img={"/src/assets/image/img (12).png"}
            title="Корпорации"
            text="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
            className={"card-group fade-in"}
          />
        </div>
      </section>

      <section className="section-next">
        <Card
          h1="Научитесь исследовать иностранные рынки и откройте новые возможности для своего бизнеса"
          p="Наша команда поможет вам изучить рынки Ближнего Востока, Азии, Латинской Америки и Африки"
          btn="Получить консультацию"
          btnCol={true}
          t="center"
          w={isMobile ? "90%" : "45%"}
          name="section-next_card fade-in"
        />
      </section>

      <section className="section-about container">
        <BlueText>С какими рынками мы работаем?</BlueText>
        <div className="section-about_div">
          <div className="section-about-div_text div-text_blue">
            <h4>
              <b>Ближний восток</b>
            </h4>
          </div>
          <div className="section-about-div_text">
            <h4>
              <b>Азия</b>
            </h4>
          </div>
          <div className="section-about-div_text">
            <h4>
              <b>Латинская Америка</b>
            </h4>
          </div>
          <div className="section-about-div_text border-end">
            <h4>
              <b>Африка</b>
            </h4>
          </div>
        </div>

        {/* Continue with the rest of the component, adding responsive classes and conditional rendering based on isMobile */}
        <div className="section-about_main">
          <div className="div-left slide-in">
            <h1>
              Чем интересен <br />
              <p className="green-h1">Рынок MENA:</p>
            </h1>
            <p style={{ margin: "20px 0" }}>
              ОАЭ, Саудовская Аравия, Израиль, Оман, Бахрейн, Катар, Тунис, Йемен, Египет, Алжир
            </p>
            <Button color={true}>Выйти на рынок</Button>
            <div
              style={{
                display: "flex",
                margin: "15px 0",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div>
                <img style={{ width: "62px", height: "62px" }} src="/src/assets/image/img (26).png" alt="img..." />
              </div>
              <div>
                <p>
                  <b>Фатима </b>
                </p>
                <p>Менеджер по MENA</p>
              </div>
            </div>
          </div>
          <div className="div-right">
            <Group
              img="/src/assets/image/img (47).png"
              title="Инвестиции pre-seed, seed"
              name={false}
              className={"card-group fade-in"}
              mg={"10px"}
            />
            <Group
              img="/src/assets/image/img (10).png"
              title="Акселераторов, инкубаторов"
              name={false}
              className={"card-group fade-in"}
              mg={"10px"}
            />
            <Group
              img="/src/assets/image/img (16).png"
              title="Венчурных фонда"
              name={false}
              className={"card-group fade-in"}
              mg={"10px"}
            />
            <Group
              img="/src/assets/image/img (27).png"
              title="Скачать отчет по рынку MENA"
              name={false}
              className={"card-group fade-in"}
              mg={"10px"}
              col="#1178B2"
              textCol="white"
            />
          </div>
        </div>
      </section>

      <section className="section-business container">
        <BlueText>Об акселераторе IT бизнеса</BlueText>
        <h3 className="text-center">
          Программа акселератора расчитана на 8 недель интенсивного онлайн курса с вебинарами приглашенных экспертов по
          международным рынкам, разборами ваших идей и проектов{" "}
        </h3>
        <div className="section-business_div">
          <Group
            img={"/src/assets/image/img (12).png"}
            title="Месяца обучения"
            className="card-group2 fade-in"
            mg={"10px"}
          />
          <Group
            img={"/src/assets/image/img (6).png"}
            title="Приглашенные эксперты"
            className="card-group2 fade-in"
            mg={"10px"}
          />
          <Group
            img={"/src/assets/image/img (2).png"}
            title="Персональный менеджер"
            className="card-group2 fade-in"
            mg={"10px"}
          />
        </div>
        <div className="section-business-div_img">
          <img src="/src/assets/image/img (36).png" alt="Business" className="slide-in" />
        </div>
      </section>

      <section className="section-accelerator container">
        <BlueText>Программа акселератора</BlueText>
        <div>
          <div>
            <div
              className="module-expanded"
              style={{
                boxShadow: "1px 1px 5px grey",
                margin: "10px auto",
                width: "95%",
                borderRadius: "5px",
                padding: "5px 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  margin: "10px auto",
                }}
              >
                <div style={{ gap: "20px", display: "flex", flexWrap: "wrap" }}>
                  <p style={{ color: "#2A79C2" }}>
                    <b>Модуль 1</b>
                  </p>
                  <p>Тенденции и тренды современного мира</p>
                </div>
                <img src="/src/assets/image/img (50).png" alt="Module icon" />
              </div>
              <div className="padding">
                <p>Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний</p>
              </div>
              <div className="padding">
                <p>Тема 2. Рынки Ближнего Востока, Азии, Латинской АмерикиТема</p>
              </div>
              <div className="padding">
                <p>3. Что такое внутренние и внешние инновации? Как искать инновационные идеи?</p>
              </div>
              <div className="padding">
                <p style={{ color: "#2A79C2" }}>9 видео роликов, вебинар с приглашенным экспертом</p>
              </div>
            </div>
          </div>
          <Select
            title="Модуль 2"
            text="Стартап подход к созданию международного IT продукта"
            img={"/src/assets/image/img (49).png"}
            alt={"Module icon"}
            className="modul"
          />
          <Select
            title="Модуль 3"
            text="Бизнес моделирование и поиск Product Market Fit"
            img={"/src/assets/image/img (49).png"}
            alt={"Module icon"}
            className="modul"
          />
          <Select
            title="Модуль 4"
            text="Определение рынка, поиск и исследование Целевой аудитории"
            img={"/src/assets/image/img (49).png"}
            alt={"Module icon"}
            className="modul"
          />
          <Select
            title="Модуль 5"
            text="Что такое MVP и почему это важно"
            img={"/src/assets/image/img (49).png"}
            alt={"Module icon"}
            className="modul"
          />
          <Select
            title="Модуль 6"
            text="Unit экономика и финансовое моделировани"
            img={"/src/assets/image/img (49).png"}
            alt={"Module icon"}
            className="modul"
          />
          <Select
            title="Модуль 7"
            text="Что такое дорожная карта продукта?"
            img={"/src/assets/image/img (49).png"}
            alt={"Module icon"}
            className="modul"
          />
          <Select
            title="Модуль 8"
            text="Документы дя международных инвесторов"
            img={"/src/assets/image/img (49).png"}
            alt={"Module icon"}
            className="modul"
          />
          <Select
            title="Модуль 9"
            text="Открытие юридического лица. Возможности для стартапов"
            img={"/src/assets/image/img (49).png"}
            alt={"Module icon"}
            className="modul"
          />
          <Select title="Демо день " text="" alt={""} />
        </div>
        <div className="text-center">
          <Button mg={"10px"} color={true}>
            Получить полную программу
          </Button>
        </div>
      </section>

      <section className="section-partners">
        <div className="section-partners_div">
          <Card
            h1="Попадите на радары инвесторов и партнеров"
            w={isMobile ? "90%" : "40%"}
            p="В результате прохождения обучения мы создадим профили вашей компании на всех международных скаутинговых площадках"
            btn="Записаться в акселератор"
            name="fade-in"
          />
          <div className="div_img">
            <img src="/src/assets/image/img (30).png" alt="Partner logo" className="fade-in" />
            <img src="/src/assets/image/img (31).png" alt="Partner logo" className="fade-in" />
            <img src="/src/assets/image/img (32).png" alt="Partner logo" className="fade-in" />
            <img src="/src/assets/image/img (33).png" alt="Partner logo" className="fade-in" />
            <img src="/src/assets/image/img (34).png" alt="Partner logo" className="fade-in" />
            <img src="/src/assets/image/img (31).png" alt="Partner logo" className="fade-in" />
          </div>
        </div>
      </section>

      <section className="section-result container">
        <BlueText>Что вы получите в результате?</BlueText>
        <div className="section-result_div">
          <Group
            img={"/src/assets/image/img (11).png"}
            mg="10px 0"
            className="card-group fade-in"
            title="Документы по продукту"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
          />
          <Group
            img={"/src/assets/image/img (44).png"}
            mg="10px 0"
            className="card-group fade-in"
            title="Обратная связь от рынка"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
          />
          <Group
            img={"/src/assets/image/img (12).png"}
            mg="10px 0"
            className="card-group fade-in"
            title="Продвижение продукта"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
          />
          <Group
            img={"/src/assets/image/img (13).png"}
            mg="10px 0"
            className="card-group fade-in"
            title="Подписка на отчеты"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
          />
          <Group
            img={"/src/assets/image/img (14).png"}
            mg="10px 0"
            className="card-group fade-in"
            title="Подписка на отчеты"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
          />
          <Group
            img={"/src/assets/image/img (15).png"}
            mg="10px 0"
            className="card-group fade-in"
            title="Подписка на отчеты"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
          />
        </div>
      </section>

      <section className="section-payment container">
        <BlueText>Стоимость</BlueText>
        <div className="section-payment_div">
          <CardInfo
            title="Анализ международных рынков "
            img="/src/assets/image/img (3).png"
          >
            <p>
              <b>Что входит в отчет?</b>
            </p>
            <p>1.Анализ конкурентов</p>
            <p>2.Анализ инвесторов</p>
            <p>3.Размеры рынка (TAM,SAM,SOM)</p>
            <p>4.Анализ СМИ</p>
            <p>5.Анализ запрос в сети интернет</p>
          </CardInfo>
          <CardInfo
            title="Упаковка стартапа под локальные "
            img="/src/assets/image/img (4).png"
          >
            <p>
              <b>Что входит в акселератор?</b>
            </p>
            <p>1.Анализ конкурентов</p>
            <p>2.Анализ инвесторов</p>
            <p>3.Размеры рынка (TAM,SAM,SOM)</p>
            <p>4.Анализ СМИ</p>
            <p>5.Анализ запрос в сети интернет</p>
          </CardInfo>
          <CardInfo
            title="Акселератор вашего бизнеса"
            img="/src/assets/image/img (5).png"
          >
            <p>
              <b>Что входит в услугу?</b>
            </p>
            <p>1.Анализ конкурентов</p>
            <p>2.Анализ инвесторов</p>
            <p>3.Размеры рынка (TAM,SAM,SOM)</p>
            <p>4.Анализ СМИ</p>
            <p>5.Анализ запрос в сети интернет</p>
          </CardInfo>
        </div>
      </section>
      <section className="section-info container">
        <BlueText>Кто мы?</BlueText>
        <div className="info">
          <div className="info-img">
            <img src="/src/assets/image/img (8).png" alt="img..." />
          </div>
          <div className="info-text">
            <p>
              <b style={{ color: "#1178B2" }}>INNOMA.VC</b> - Международное
              аналитическое агентство по запуску IT бизнеса на локальных рынках
              регионов Азии, Ближнего Востока, Латинской Америки, Африки.
            </p>
            <p>
              Наша команда состоит из профессионалов своего дела и основной
              нашей целью является помощь IT компаниям получить необходимые
              знания и пакеты документов, чтобы успешно запустить свой продукт
              на международных рынках.{" "}
            </p>
          </div>
        </div>
        <div className="info-user">
          <div className="info-img">
            <img src="/src/assets/image/img (37).png" alt="img..." />
          </div>
          <div className="info-text">
            <p>
              Всем привет! Меня зовут Роман. Последние 6 лет я являюсь частью
              инновационной экосистемы СНГ, прошел путь от проектного менеджера
              до руководителя продукта по автоматизированному скаутингу и
              скорингу стартапов. За 6 лет работы я увидел множество ошибок и
              отсутствие ориентации акселерационных программ под запросы
              стартапов. Все акселераторы выполнялись ради акселераторв и
              выполнения КПЭ.
            </p>
            <p style={{ marginTop: "60px" }}>
              <b>Роман Гайн</b>
            </p>
            <p>Основатель INNOMA.VC</p>
          </div>
        </div>
        <div className="user-images">
          <img src="/src/assets/image/img (38).png" alt="img..." />
          <img src="/src/assets/image/img (20).png" alt="img..." />
          <img src="/src/assets/image/img (43).png" alt="img..." />
          <img src="/src/assets/image/img (7).png" alt="img..." />
          <img src="/src/assets/image/img (19).png" alt="img..." />
        </div>
        <BlueText>Эксперты и трекеры программы</BlueText>
        <div className="user-about">
          <img src="/src/assets/image/img (21).png" alt="img..." />
          <Group
            img="/src/assets/image/img (22).png"
            title="Юрий Ким"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
            name={true}
          />
          <Group
            img="/src/assets/image/img (23).png"
            title="Эшли Абрамс"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
            name={true}
          />
          <Group
            img="/src/assets/image/img (24).png"
            title="Фатими Юсуф"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
            name={true}
          />
          <Group
            img="/src/assets/image/img (26).png"
            title="Майкл Донован"
            text="Проведение исследования целевой аудитории позволит сформировать Product market fit"
            name={true}
          />
          <img src="/src/assets/image/img (21).png" alt="img..." />
        </div>
        <BlueText>Наши партнеры</BlueText>
        <div className="partners">
          <img src="/src/assets/image/img (30).png" alt="img..." />
          <img src="/src/assets/image/img (31).png" alt="img..." />
          <img src="/src/assets/image/img (32).png" alt="img..." />
          <img src="/src/assets/image/img (33).png" alt="img..." />
          <img src="/src/assets/image/img (33).png" alt="img..." />
          <img src="/src/assets/image/img (34).png" alt="img..." />
          <img src="/src/assets/image/img (30).png" alt="img..." />
          <img src="/src/assets/image/img (31).png" alt="img..." />
        </div>
      </section>

      <section className="section_be-partner">
        <Card
          name="partner-div fade-in"
          h1="Мы создаем международное сообщество экспертов и партнеров"
          p="Если вы или ваш бизнес может быть полезен IT  командам при выходе на международные рынки,  приглашем вас стать нашим партнером"
          btn="Стать партнером"
          btnCol={true}
          t="center"
          w={isMobile ? "90%" : "45%"}
        />
      </section>

      <section className="section-event container">
        <BlueText>Мероприятия и события</BlueText>
        <div className="event_div">
          <Event
            name="event_card fade-in"
            img={"/src/assets/image/img (25).png"}
            title="Новый отчет по MENA"
            text="Аналитический отчет по рынкам "
            date="22.11.2022"
          />
          <Event
            name="event_card fade-in"
            img={"/src/assets/image/img (17).png"}
            title="Вебинар по особенностям "
            text="Ближнего Востока (инвесторы, "
            date="22.11.2022"
          />
          <Event
            name="event_card fade-in"
            img={"/src/assets/image/img (9).png"}
            title="Вебинар по особенностям "
            text="объем раундов, ТОП сферы)"
            date="22.11.2022"
          />
        </div>
      </section>

      <section className="section-contact">
        <div className="section-part">
          <div className="section-contact_div slide-in">
            <h1>Остались вопросы?</h1>
            <p>Оставьте заявку и наша команда свяжется с вами</p>
            <div style={{ marginTop: "60px" }}>
              <p>
                <b>Или напишите нам:</b>
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: isMobile ? "20px" : "50px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                  <img style={{ width: "64px", height: "64px" }} src="/src/assets/image/img (29).png" alt="Telegram" />
                  <p>Telegram</p>
                </div>
                <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                  <img style={{ width: "64px", height: "64px" }} src="/src/assets/image/img (28).png" alt="Whatsapp" />
                  <p>Whatsapp</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-part_div fade-in">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Почта" />
            <input type="number" placeholder="+(971)" />
            <Button>Оставить заявку</Button>
          </div>
        </div>
      </section>

      <footer className="footer-part">
        <nav className="header_nav">
          <div>
            <img src="./src/assets/image/img (39).png" alt="Logo" />
          </div>
          <div className="heder-nav_text">
            <p>Кто мы?</p>
            <p>Услуги</p>
            <p>Акселератор</p>
            <p>Новости</p>
          </div>
          <div style={{ color: "white" }}>
            <p>
              Dubai, Single Business Tower 1503, Business Bay <br />
              <br />
              Sales@innoma.vc
            </p>
          </div>
        </nav>
      </footer>
    </>
  )
}

