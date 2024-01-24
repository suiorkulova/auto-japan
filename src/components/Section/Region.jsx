import React from "react";
import search from "../../image/search (4).png";
import reviev from "../../image/review 1.png";

const Region = () => {
  return (
    <div>
      <h1 className="auto-center">Авто приобретенные нашими клиентами</h1>
      <section className="container-display-center">
        <div className="fon-box-div">
          <div className="divn-home">
            <div className="divn-input">
              <div className="Марка">Марка:</div>
              <select id="velue-select">
                <option value="">Марка</option>
                <option value="">Марка</option>
                <option value="">Марка</option>
                <option value="">Марка</option>
                <option value="">Марка</option>
              </select>
              <div className="Марка">Обьем двигателя:</div>
              <div>
                <select id="select-class">
                  <option value="">1990</option>
                  <option value="">1991</option>
                  <option value="">1992</option>
                  <option value="">1993</option>
                  <option value="">1994</option>
                </select>
                <select id="select-class">
                  <option value="">2014</option>
                  <option value="">2015</option>
                  <option value="">2016</option>
                  <option value="">2017</option>
                  <option value="">2018</option>
                </select>
              </div>
            </div>
            <div className="divn-input">
              <div className="Марка">Модель:</div>
              <select id="velue-select">
                <option value="">Марка</option>
                <option value="">Марка</option>
                <option value="">Марка</option>
                <option value="">Марка</option>
                <option value="">Марка</option>
              </select>
              <div className="Марка">Год выпуска:</div>
              <div>
                <select id="select-class">
                  <option value="">1990</option>
                  <option value="">1991</option>
                  <option value="">1992</option>
                  <option value="">1993</option>
                  <option value="">1994</option>
                </select>
                <select id="select-class">
                  <option value="">2014</option>
                  <option value="">2015</option>
                  <option value="">2016</option>
                  <option value="">2017</option>
                  <option value="">2018</option>
                </select>
              </div>
            </div>
            <div className="select-center-div">
              <div>
                <div className="Марка">Регион:</div>
                <select id="select-class-divn">
                  <option value="">Выбрать регион</option>
                  <option value="">Выбрать регион</option>
                  <option value="">Выбрать регион</option>
                  <option value="">Выбрать регион</option>
                  <option value="">Выбрать регион </option>
                </select>
              </div>
              <div>
                <div className="поиск-div">
                  <img src={search} alt="" />
                  Начать поиск автомобилей
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gren-div">
          <div className="color-femili">
            <img src={reviev} alt="" />
            <span className="span260">260</span>
            <p className="Отзывов-p">
              Отзывов от клиентов <br /> Токидоки
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Region;
