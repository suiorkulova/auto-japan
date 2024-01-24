import React from "react";
import vector from "../../image/Vector.png";
import chart from "../../image/pie-chart (3) 1.png";

const Japan = () => {
  return (
    <section className="backgraunt-section">
      <div className="div-help">
        <h1 className="cars">
          Автомобили <br /> с аукционов Японии
        </h1>
        <div className="div-help-center">
          <div className="onlain-btn">
            <img src={vector} alt="" />
            Онлайн аукционы
          </div>
          <div className="onlain-btn">
            <img src={chart} alt="" /> Статистика продаж
          </div>
        </div>
      </div>
    </section>
  );
};

export default Japan;
