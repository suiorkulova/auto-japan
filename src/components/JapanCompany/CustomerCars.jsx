import React from "react";
import imgCustomerCars_1 from ".././../image/Rectangle 3 (7).png";
import route from "../../image/route.png";
import imgCustomerCars_2 from ".././../image/Rectangle 3 (2).png";
import imgCustomerCars_3 from ".././../image//Rectangle 3 (3).png";
import imgCustomerCars_4 from ".././../image//Rectangle 3 (4).png";
import imgCustomerCars_5 from ".././../image/Rectangle 3 (5).png";
import imgCustomerCars_6 from ".././../image/Rectangle 3 (6).png";
import imgCustomerCars_7 from ".././../image/Rectangle 3 (7).png";
import imgCustomerCars_8 from ".././../image/Rectangle 3 (1).png";
import vector from "../../image/Vector (1).png";

const CustomerCars = () => {
  return (
    <div>
      <h1 className="Автомобили-customer">Автомобили клиентов</h1>
      <div className="customercasr-backg-div">
        <div className="customercasr-backg">
          <img src={imgCustomerCars_1} alt="" />
          <div className="route-bac-div">
            <img src={route} alt="" />В пути
          </div>
          <div className="customer-div-bottom">
            <h5 className="Nissan-h5">Nissan Wingroad, 2014</h5>
            <span className="Обьем-span-customer">Обьем: 1.5</span>
            <p className="Обьем-span-customer">Привод: Передний</p>
          </div>
        </div>

        <div className="customercasr-backg">
          <img src={imgCustomerCars_2} alt="" />
          <div className="route-bac-div">
            <img src={route} alt="" />В пути
          </div>
          <div className="customer-div-bottom">
            <h5 className="Nissan-h5">NHonda Stepwgn, 2014</h5>
            <span className="Обьем-span-customer">Обьем: 2.0</span>
            <p className="Обьем-span-customer">Привод: Передний</p>
          </div>
        </div>

        <div className="customercasr-backg">
          <img src={imgCustomerCars_3} alt="" />
          <div className="route-bac-div">
            <img src={route} alt="" />В пути
          </div>
          <div className="customer-div-bottom">
            <h5 className="Nissan-h5">NToyota Isis, 2014</h5>
            <span className="Обьем-span-customer">Обьем: 1.8</span>
            <p className="Обьем-span-customer">Привод: Полный</p>
          </div>
        </div>

        <div className="customercasr-backg">
          <img src={imgCustomerCars_4} alt="" />
          <div className="route-bac-div">
            <img src={route} alt="" />В пути
          </div>
          <div className="customer-div-bottom">
            <h5 className="Nissan-h5">Toyota Vellfire, 2014</h5>
            <span className="Обьем-span-customer">Обьем: 2.4</span>
            <p className="Обьем-span-customer">Привод: Полный</p>
          </div>
        </div>
      </div>

      <div className="customercasr-backg-div">
        <div className="customercasr-backg">
          <img src={imgCustomerCars_5} alt="" />
          <div className="route-bac-div">
            <img src={route} alt="" />В пути
          </div>
          <div className="customer-div-bottom">
            <h5 className="Nissan-h5">Nissan Wingroad, 2014</h5>
            <span className="Обьем-span-customer">Обьем: 1.5</span>
            <p className="Обьем-span-customer">Привод: Передний</p>
          </div>
        </div>

        <div className="customercasr-backg">
          <img src={imgCustomerCars_6} alt="" />
          <div className="route-bac-div">
            <img src={route} alt="" />В пути
          </div>
          <div className="customer-div-bottom">
            <h5 className="Nissan-h5">Honda Stepwgn, 2014</h5>
            <span className="Обьем-span-customer">Обьем: 2.0</span>
            <p className="Обьем-span-customer">Привод: Передний</p>
          </div>
        </div>

        <div className="customercasr-backg">
          <img src={imgCustomerCars_7} alt="" />
          <div className="route-bac-div2">
            <img src={vector} alt="" />Доставлено
          </div>
          <div className="customer-div-bottom">
            <h5 className="Nissan-h5">Toyota Isis, 2014</h5>
            <span className="Обьем-span-customer">Обьем: 1.8</span>
            <p className="Обьем-span-customer">ППривод: Полный</p>
          </div>
        </div>

        <div className="customercasr-backg">
          <img src={imgCustomerCars_8} alt="" />
          <div className="route-bac-div">
            <img src={route} alt="" />В пути
          </div>
          <div className="customer-div-bottom">
            <h5 className="Nissan-h5">Toyota Vellfire, 2014</h5>
            <span className="Обьем-span-customer">Обьем: 2.4</span>
            <p className="Обьем-span-customer">Toyota Vellfire, 2014</p>
          </div>
        </div>
      </div>
      <div className="centr-center-coustomer">
      <button className="button-все-center">Смотреть все</button>
      </div>
    </div>
  );
};

export default CustomerCars;
