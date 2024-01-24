import React from "react";
import "./Section.css";
import Group30 from "../../image/Group 30.png";
import Group29 from "../../image/Group 29.png";
import image1 from "../../image/image 1.png";
import image2 from "../../image/image 2.png";
import image3 from "../../image/image 3.png";
import image4 from "../../image/image 4.png";

const Section = () => {
  return (
    <section>
      <div className="content">
        <h1 className="vidio-h1">Видео отзывы клиентов</h1>
        <div className="center-btn">
          <button className="btn">Все видео</button>
          <img src={Group30} alt="" />
          <img src={Group29} alt="" />
        </div>
      </div>
      <div className="demio">
        <div className="fit">
          <img src={image1} alt="" />
          <p className="lifom-p">
            Что стало с Лифом через 1.5 года после аукционов Японии
          </p>
        </div>
        <div className="fit">
          <img src={image2} alt="" />
          <p className="lifom-p">
            Что стало с Лифом через 1.5 года после аукционов Японии
          </p>
        </div>
        <div className="fit">
          <img src={image3} alt="" />
          <p className="lifom-p">
            Что стало с Лифом через 1.5 года после аукционов Японии
          </p>
        </div>
        <div className="fit">
          <img src={image4} alt="" />
          <p className="lifom-p">
            Что стало с Лифом через 1.5 года после аукционов Японии
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
