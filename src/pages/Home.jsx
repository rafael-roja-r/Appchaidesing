import React from "react";
import fot from "../img/foto.svg"
import bus from "../img/buscar.svg"
import co from "../img/corazon.svg"
import ma from "../img/Marcar.svg"
import te from "../img/Termino.svg"



const Home =()=>{
    return (
      <div className="home__conten">
        <div className="home__info_nav">
          <div className="home__info__header">
            <h3>Hello</h3>
          </div>
          <div className="home__info__body">
            <div className="home__info__body__text">
              <h1>Josrey</h1>
            </div>
            <div className="home__info__body__img">
              <img src={fot} alt="" />
            </div>
          </div>
          <div className="home__info__input">
            <div className="home__info__input__text">
              <input type="text" placeholder="Search" />
              <img src={bus} alt="" />
            </div>
          </div>
        </div>

        <div className="home__body__container">
          <h3>Training programs</h3>
          <div className="home__body__container__cur">
            <div className="hom__cur">
              <h4>Curso de Creatividad </h4>
              <p>
                Este curso te invita a explorar y potenciar tu creatividad,
                desafiando los límites de tu pensamiento y descubriendo nuevas
                formas.
              </p>
              <div className="home__icon">
                <img src={co} alt="" />
                <img src={ma} alt="" />
                <img src={te} alt="" />
              </div>
            </div>

            <div className="hom__cur">
              <h4>Curso de Creatividad </h4>
              <p>
                Este curso te invita a explorar y potenciar tu creatividad,
                desafiando los límites de tu pensamiento y descubriendo nuevas
                formas.
              </p>
              <div className="home__icon">
                <img src={co} alt="" />
                <img src={ma} alt="" />
                <img src={te} alt="" />
              </div>
            </div>

            <div className="hom__cur">
              <h4>Curso de Creatividad </h4>
              <p>
                Este curso te invita a explorar y potenciar tu creatividad,
                desafiando los límites de tu pensamiento y descubriendo nuevas
                formas.
              </p>
              <div className="home__icon">
                <img src={co} alt="" />
                <img src={ma} alt="" />
                <img src={te} alt="" />
              </div>
            </div>

            <div className="hom__cur">
              <h4>Curso de Creatividad </h4>
              <p>
                Este curso te invita a explorar y potenciar tu creatividad,
                desafiando los límites de tu pensamiento y descubriendo nuevas
                formas.
              </p>
              <div className="home__icon">
                <img src={co} alt="" />
                <img src={ma} alt="" />
                <img src={te} alt="" />
              </div>
            </div>
            <div className="hom__cur">
              <h4>Curso de Creatividad </h4>
              <p>
                Este curso te invita a explorar y potenciar tu creatividad,
                desafiando los límites de tu pensamiento y descubriendo nuevas
                formas.
              </p>
              <div className="home__icon">
                <img src={co} alt="" />
                <img src={ma} alt="" />
                <img src={te} alt="" />
              </div>
            </div>

            <div className="hom__cur">
              <h4>Curso de Creatividad </h4>
              <p>
                Este curso te invita a explorar y potenciar tu creatividad,
                desafiando los límites de tu pensamiento y descubriendo nuevas
                formas.
              </p>
              <div className="home__icon">
                <img src={co} alt="" />
                <img src={ma} alt="" />
                <img src={te} alt="" />
              </div>
            </div>
            <div className="hom__cur">
              <h4>Curso de Creatividad </h4>
              <p>
                Este curso te invita a explorar y potenciar tu creatividad,
                desafiando los límites de tu pensamiento y descubriendo nuevas
                formas.
              </p>
              <div className="home__icon">
                <img src={co} alt="" />
                <img src={ma} alt="" />
                <img src={te} alt="" />
              </div>
            </div>


          </div>

          <h3>Colleagues</h3>
          <div className="home__body__container__list"></div>
        </div>
      </div>
    );
}
export default Home;