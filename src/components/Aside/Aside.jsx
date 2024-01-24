import React from "react";
import "./Aside.css";
import shield from "../../image/Shield Check.png";
import shield2 from "../../image/File Text.png";
import shield3 from "../../image/Spedometer Middle.png";
import shield4 from "../../image/Ruble.png";
import rectandleimg from "../../image/Rectangle.png";
import rectandleimg1 from "../../image/Rectangle (1).png";
import rectandleimg2 from "../../image/Rectangle (2).png";
import rectandleimg3 from "../../image/Rectangle (3).png";
import rectandleimg4 from "../../image/Rectangle (4).png";
import wekaimg from "../../image/VK_Compact_Logo 1.png";
import rectandleimg5 from "../../image/Rectangle (5).png";
import rectandleimg6 from "../../image/Rectangle (6).png";

const Aside = () => {
  return (
    <div className="aside-div-disply">
      <h1 className="Почему-aside">Почему нам доверяют</h1>
      <p className="Сделав-p">
        Сделав выбор в пользу японского автомобиля, в последующие годы Вы и Ваша
        семья будете получать радость <br /> от эксплуатации нового автомобиля
        из Японии, радовать себя и окружающих прекрасным автомобилем <br />
        увеличивать семейное благосостояние.
      </p>
      <div className="aside-center-div">
        <div className="acide-div-backg">
          <img className="shield-cd" src={shield} alt="" />
          <div className="aside-container">
            <h4 className="Надежность-aside">Надежность компании</h4>
            <p className="aside-Более">
              Более 1000 <br /> положительных отзывов
            </p>
          </div>
        </div>

        <div className="acide-div-backg">
          <img className="shield-cd" src={shield2} alt="" />
          <div className="aside-container">
            <h4 className="Надежность-aside">
              Юридическая <br /> чистота компании
            </h4>
            <p className="aside-Более">
              Оплата через <br /> р/с ООО “Токидоки”
            </p>
          </div>
        </div>

        <div className="acide-div-backg">
          <img className="shield-cd" src={shield3} alt="" />
          <div className="aside-container">
            <h4 className="Надежность-aside">
              Подбираем автомобиль <br /> вместе с вамии
            </h4>
            <p className="aside-Более">
              Исключены ошибки <br /> при подборе
            </p>
          </div>
        </div>

        <div className="acide-div-backg">
          <img className="shield-cd" src={shield4} alt="" />
          <div className="aside-container">
            <h4 className="Надежность-aside">
              Фиксированная низкая <br /> комиссия и предоплата
            </h4>
            <p className="aside-Более">
              Прозрачные расчеты на <br /> всех этапах
            </p>
          </div>
        </div>
      </div>

      <h1 className="Токидоки-top">Токидоки в Вконтакте </h1>
      <div className="display-aside-center">
        <div className="rectandleimg">
          <img src={rectandleimg} alt="" />
          <img src={rectandleimg1} alt="" />
          <img src={rectandleimg2} alt="" />
          <img src={rectandleimg3} alt="" />
        </div>

        <div>
          <img src={rectandleimg4} alt="" />
          <img className="src-img" src={rectandleimg5} alt="" />
          <img src={rectandleimg6} alt="" />
        </div>
        <div className="color-aside">
          <img src={wekaimg} alt="" />
          <h3 className="class14">14 261</h3>
          <span className="подписчиков">подписчиков</span>
          <h3 className="tik-tok">vk.com/tokidoki_nsk</h3>
        </div>
      </div>
    </div>
  );
};

export default Aside;
