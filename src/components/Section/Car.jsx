import React from "react";
import Group30 from "../../image/Group 30.png";
import Group29 from "../../image/Group 29.png";
import Rectangle17 from "../../image/Rectangle 17.png";
import Rectangle18 from "../../image/Rectangle 18.png";
import Rectangle10 from "../../image/Rectangle 10.png";

const Car = () => {
  return (
    <section>
      <div className="contentt">
        <h1 className="vidio-h1">Клиенты, уже получившие автомобили</h1>
        <div className="center-btn">
          <button className="btn">Все видео</button>
          <img src={Group30} alt="" />
          <img src={Group29} alt="" />
        </div>
      </div>
      <div className="content-center">
        <div className="img-center">
          <img src={Rectangle17} alt="" />
          <img src={Rectangle18} alt="" />
        </div>
        <img className="Rectangle10" src={Rectangle10} alt="" />
        <div className="image-center">
          <img src={Rectangle17} alt="" />
          <img src={Rectangle18} alt="" />
        </div>
        <img className="Rectangle10" src={Rectangle10} alt="" />
        <div className="image-center-div">
          <img src={Rectangle17} alt="" />
          <img src={Rectangle18} alt="" />
        </div>
        <img className="Rectangle10" src={Rectangle10} alt="" />
      </div>
    </section>
  );
};

export default Car;
