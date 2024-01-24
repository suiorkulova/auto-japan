import React from "react";
import subari from "../../image/image 8.png";
import subari2 from "../../image/i (26) 1.png";
import subari3 from "../../image/i (27) 1.png";
import subari4 from "../../image/image 5.png";
import subari5 from "../../image/image 6.png";
import subari6 from "../../image/image 7.png";

const Premio = () => {
  return (
    <section>
      <div className="to-myself">
        <h1 className="myself">Выбери себе авто</h1>
        <div className="Минивены-btn">
          <button className="Choose-btn">Седаны</button>
          <button className="Choose-btn">Гибриды</button>
          <button className="Choose-btn">Кейрары</button>
          <button className="Choose-btn">Минивены</button>
          <button className="Choose-btn">Кроссоверы</button>
          <button className="Choose-btn">Хетчбеки</button>
          <button className="Choose-btn">Универсалы</button>
          <button className="Choose-btn">Электрокары</button>
          <button className="Choose-btn">Внедорожники</button>
        </div>
      </div>
      <div className="tayotalar">
        <div>
          <div className="subari">
            <img src={subari} alt="" />
          </div>
          <span className="Impreza-span">Subaru Impreza</span>
        </div>
        <div>
          <div className="subari">
            <img src={subari2} alt="" />
          </div>
          <span className="Impreza-span">Toyota Allion</span>
        </div>
        <div>
          <div className="subari">
            <img src={subari3} alt="" />
          </div>
          <span className="Impreza-span">Toyota Premio</span>
        </div>
        <div>
          <div className="subari">
            <img src={subari4} alt="" />
          </div>
          <span className="Impreza-span">Mazda Axela</span>
        </div>
        <div>
          <div className="subari">
            <img src={subari5} alt="" />
          </div>
          <span className="Impreza-span">Toyota Corolla Axio</span>
        </div>
        <div>
          <div className="subari">
            <img src={subari6} alt="" />
          </div>
          <span className="Impreza-span">Toyota Crown</span>
        </div>
      </div>
    </section>
  );
};

export default Premio;
