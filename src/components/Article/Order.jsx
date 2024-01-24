import React from "react";
import tayotalogo from "../../image/Toyota_Logo_Newes.png";
import tayotalogo1 from "../../image/150832_thumb.png";
import tayotalogo2 from "../../image/Nissan-emblema.png";
import tayotalogo3 from "../../image/mitshibishi.png";
import tayotalogo4 from "../../image/0c397d76e288e330e73b2737e3c38b2c5f26be14.png";
import tayotalogo5 from "../../image/Suzuki-Australia-under-new-management.png";
import tayotalogo6 from "../../image/subaru.png";
import tayotalogo7 from "../../image/isuzu_logo20.png";
import tayotalogo8 from "../../image/29549013.png";

const Order = () => {
  return (
    <section className="section-center-display">
      <div>
        <div>
          <h1 className="авто-order">
            Заказать авто из Японии с аукциона <br /> — нет ничего проще
          </h1>
          <p className="европейской-order">
            В европейской части России сегодня набирает обороты явление,
            наблюдаемое в <br /> Забайкалье и на Дальнем Востоке еще со времен
            распада СССР: все большее число <br /> автолюбителей хотят купить
            новые и б/у машины из Японии без пробега по России. <br />{" "}
            «Эпидемия» добралась до Москвы. Этому есть разумные объяснения.
            Приобрести <br /> новинку у экспортера либо официального дилера не
            по карману многим россиянам. Те <br /> же из них, кто может
            позволить себе новую отечественную машину, покупать ее не <br />
            торопится по понятным причинам:
          </p>
          <p className="японских-order">
            - Качество японских автомобилей выше, чем у продуктов отечественного
            автопрома, <br /> даже идущих на экспорт; <br /> - Цена 4-6-летних
            моделей из Страны восходящего солнца соизмерима со стоимостью <br />{" "}
            новых тольяттинских машин, но последние уступают японцам в
            моторесурсе, качестве <br /> сборки и отделки салона, пр.; <br /> -
            Японские фирмы и бренды престижнее русских; при прочих равных
            условиях их <br /> изделия не боятся суровых морозов, бездорожья,
            соляных ванн на асфальте и легко <br /> выигрывают сравнение с любым
            автомобилем, сделанным в РФ. <br /> - Ставшие притчей во языцех
            отечественные дороги убивают ходовую намного раньше <br />{" "}
            отпущенного ей срока для безотказного служения, поэтому сравнивать
            машины с <br /> пробегом «здесь» и «там» бессмысленно.
          </p>
        </div>
        <div>
          <h1 className="Японии-order">Как купить машину в Японии </h1>
          <p className="Цены-order">
            Цены на малолитражные автомобили с пробегом в Японии благодаря
            «Токидоки» <br /> оказываются доступными для значительной части
            желающих совершить их <br /> приобретение. Главным направление
            деятельности компании — предоставление <br /> возможности открыто и
            легально купить авто с аукциона в Японии. Собственно купля <br />{" "}
            происходит путем реализации несложного алгоритма:
          </p>
          <p className="Составить-order">
            - Составить агентский договор; <br /> - Внести средства в качестве
            предоплаты, обычно 30 тыс. рублей (до самого момента <br /> покупки
            они подлежат возврату в полном объеме); <br /> - Выбрать нужный
            автомобиль в каталоге на сайте tokidoki.su или осуществив там же
            <br /> поиск с указанием марки, модели, года выпуска, др.
            параметров; <br />
            - Совершить покупку; <br /> - Оплатить аукционную стоимость машины,
            включая расходы в Японии и перевозку на <br /> пароме; <br /> -
            Рассчитаться за транспортировку по РФ.
          </p>
        </div>
      </div>

      <div>
        <div className="order-color-bg">
          <h3 className="Подпишитесь-h3">
            Подпишитесь <br /> на новости
          </h3>
          <p className="Получайте-p">
            Получайте интересные и полезные новости <br /> от нашей компании
            первыми
          </p>
          <input className="input-order" type="text" placeholder="Ваш E-mail" />
          <button className="Подписаться-btn">Подписаться</button>
        </div>
        <div className="centei-justefyl-div">
          <div className="order-jystrful-order">
            <div className="order-color-white">
              <img src={tayotalogo} alt="" />
            </div>
            <div className="order-color-white">
              <img src={tayotalogo1} alt="" />
            </div>
            <div className="order-color-white">
              <img src={tayotalogo2} alt="" />
            </div>
          </div>

          <div className="order-jystrful-order">
            <div className="order-color-white">
              <img src={tayotalogo3} alt="" />
            </div>
            <div className="order-color-white">
              <img src={tayotalogo4} alt="" />
            </div>
            <div className="order-color-white">
              <img src={tayotalogo5} alt="" />
            </div>
          </div>

          <div className="order-jystrful-order">
            <div className="order-color-white">
              <img src={tayotalogo6} alt="" />
            </div>
            <div className="order-color-white">
              <img src={tayotalogo7} alt="" />
            </div>
            <div className="order-color-white">
              <img src={tayotalogo8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
