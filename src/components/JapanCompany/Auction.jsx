import React from "react";
import "./Auction.css";
import imgAuction_1 from ".././../image/Rectangle 5.png";
import imgAuction_2 from ".././../image/Rectangle 5 (1).png";
import imgAuction_3 from ".././../image/Rectangle 5 (2).png";

const Auction = () => {
  return (
    <section className="auction-section-div">
      <h1 className="auction-Сейчас">Сейчас на аукционе</h1>
      <div className="auction-bacraunt">
        <div className="auction-div">
          <img src={imgAuction_1} alt="" />
          <div className="auction-divn-center">
            <h3 className="TAA-auction">TAA Yokohama</h3>
            <span className="Лот-auction">Лот 4318</span>
            <p className="p-2019">2019-07-20</p>
          </div>
          <hr className="hrs"></hr>
          <div>
            <div>
              <h2 className="Nissan-auction">Nissan Caravan</h2>
              <p className="Package-auction">250G S Package</p>
            </div>
            <div>
              <span className="Кузов-auction">Кузов: </span>
              <span className="span-N17">N17 </span>
            </div>
            <div>
              <span className="Кузов-auction">КПП:</span>
              <span className="span-N17">Dat</span>
            </div>
            <div>
              <span className="Кузов-auction">Пробег: </span>
              <span className="span-N17">59000 </span>
            </div>
          </div>
          <hr className="hre" />
          <div>
            <div className="div-top">
              <span className="Кузов-auction">Обьем:</span>
              <span className="span-N17">660</span>
            </div>
            <div>
              <span className="Кузов-auction">Год:</span>
              <span className="span-N17">2015</span>
            </div>
            <div>
              <span className="Кузов-auction">Оценка: </span>
              <span className="span-N17">4</span>
            </div>
          </div>
          <button className="button-Смотреть">Смотреть лоты</button>
        </div>
      </div>

      <div className="auction-bacraunt">
        <div className="auction-div">
          <img src={imgAuction_2} alt="" />
          <div className="auction-divn-center">
            <h3 className="TAA-auction">TAA Yokohama</h3>
            <span className="Лот-auction">Лот 4318</span>
            <p className="p-2019">2019-07-20</p>
          </div>
          <hr className="hrs"></hr>
          <div>
            <div>
              <h2 className="Nissan-auction">Nissan Caravan</h2>
              <p className="Package-auction">250G S Package</p>
            </div>
            <div>
              <span className="Кузов-auction">Кузов: </span>
              <span className="span-N17">N17 </span>
            </div>
            <div>
              <span className="Кузов-auction">КПП:</span>
              <span className="span-N17">Dat</span>
            </div>
            <div>
              <span className="Кузов-auction">Пробег: </span>
              <span className="span-N17">59000 </span>
            </div>
          </div>
          <hr className="hre" />
          <div>
            <div className="div-top">
              <span className="Кузов-auction">Обьем:</span>
              <span className="span-N17">660</span>
            </div>
            <div>
              <span className="Кузов-auction">Год:</span>
              <span className="span-N17">2015</span>
            </div>
            <div>
              <span className="Кузов-auction">Оценка: </span>
              <span className="span-N17">4</span>
            </div>
          </div>
          <button className="button-Смотреть">Смотреть лоты</button>
        </div>
      </div>

      <div className="auction-bacraunt">
        <div className="auction-div">
          <img src={imgAuction_3} alt="" />
          <div className="auction-divn-center">
            <h3 className="TAA-auction">TAA Yokohama</h3>
            <span className="Лот-auction">Лот 4318</span>
            <p className="p-2019">2019-07-20</p>
          </div>
          <hr className="hrs"></hr>
          <div>
            <div>
              <h2 className="Nissan-auction">Nissan Caravan</h2>
              <p className="Package-auction">250G S Package</p>
            </div>
            <div>
              <span className="Кузов-auction">Кузов: </span>
              <span className="span-N17">N17 </span>
            </div>
            <div>
              <span className="Кузов-auction">КПП:</span>
              <span className="span-N17">Dat</span>
            </div>
            <div>
              <span className="Кузов-auction">Пробег: </span>
              <span className="span-N17">59000 </span>
            </div>
          </div>
          <hr className="hre" />
          <div>
            <div className="div-top">
              <span className="Кузов-auction">Обьем:</span>
              <span className="span-N17">660</span>
            </div>
            <div>
              <span className="Кузов-auction">Год:</span>
              <span className="span-N17">2015</span>
            </div>
            <div>
              <span className="Кузов-auction">Оценка: </span>
              <span className="span-N17">4</span>
            </div>
          </div>
          <button className="button-Смотреть">Смотреть лоты</button>
        </div>
      </div>
      <button className="btn-center-Смотреть">Смотреть еще 2 274 лота</button>
    </section>
  );
};

export default Auction;
