import React from "react";
import "./Footer.css";
import handimg from "../../image/photo_5294450106571021231_x.jpg";
import iconLogo from "../../image/logo.png";
import logoIcon from "../../image/vk-social-network-logo.png";
import logoIcon1 from "../../image/photo_5294450106571021234_m.jpg";
import logoIcon2 from "../../image/youtube (2).png";
import email from "../../image/close-envelope.png";
import call from "../../image/call-volume.png";
import copy from "../../image/copy (3).png";

const Footer = () => {
  return (
    <div>
      <section className="ends-section">
        <div>
          <img src={handimg} alt="" />
        </div>
        <div className="questions">
          <div className="questions2">
            <h1>Остались вопросы?</h1>
            <p className="ответимer">
              Мы ответим Вам на все интересующие вопросы. <br /> Заполните
              данные и мы перезвоним
            </p>
            <input className="nameIphone" type="text" placeholder="Ваше имя" />
            <input
              className="nameIphone"
              type="text"
              placeholder="Номер телефона"
            />
            <button className="send">Отправить</button>
          </div>
        </div>
      </section>

      <footer className="footer-container">
        <div>
          <img src={iconLogo} alt="" />
          <div className="icons">
            <img src={logoIcon} alt="" />
            <img src={logoIcon1} alt="" />
            <img src={logoIcon2} alt="" />
          </div>
          <span className="tokodoki">© 2004-2019 tokidoki.su</span>
        </div>
        <div className="Санкт-footer">
          <p>Санкт-Петербург</p>
          <p> Новосибирск </p>
          <p>Нижний Новгород </p>
          <p> Екатеринбург </p>
          <p> Казань</p>
          <p> Челябинск </p>
        </div>
        <div className="Санкт-footer">
          <p>Омск</p>
          <p> Самара</p>
          <p>Ростов </p>
          <p> Уфа </p>
          <p> Красноярск</p>
          <p> Пермь </p>
        </div>
        <div className="Санкт-footer">
          <p>Воронеж</p>
          <p> Волгоград</p>
          <p>Тюмень </p>
          <p> Иркутск </p>
          <p> Крым</p>
          <p> Краснодар </p>
        </div>
        <div className="Санкт-footer">
          <p>Томск</p>
          <p> Кемерово</p>
          <p>Хабаровск </p>
          <p> Якутск </p>
          <p> Новокузнецк</p>
          <p> Барнаул </p>
        </div>
      </footer>

      <div className="footer-content">
        <span>Пн-пт: 10.00-19.00, сб: 10.00-17.00</span>
        <div className="email-footer">
          <img src={email} alt="" />
          <span>1@tokidoki.su</span>
        </div>
        <div>
          <div className="email-footer">
            <img src={call} alt="" />
            <span>8 (383) 2-555-007</span>
          </div>
        </div>
        <div className="img-footer-centr">
          <button className="call">Заказать звонок</button>
          <div className="email-btn">
            <img src={copy} alt="" />
            Заключить договор
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
