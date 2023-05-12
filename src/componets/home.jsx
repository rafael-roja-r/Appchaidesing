import React, { useState } from 'react';
import hom from "../img/home.svg";
import mss from "../img/messages.svg";
import usr from "../img/user.svg";
import est from "../img/estado.svg";
import Hm from "../pages/Home";
import Ms from "../pages/Messages";
import Us from "../pages/User";
import Ee from "../pages/Estado";


 const Home = ()=>{

    const [open, Start] = useState('home');

  const Show = (option) => {
    Start(option);

  };


    return (
      <div className="home">
        <div className="home__container">
          <div className="home__container__left">
            <h2>informacion</h2>
            {open === "home" && (
              <div className="inicontainer">
                <h3>Home</h3>
                <Hm/>
              </div>
            )}

            {open === "message" && (
              <div className="inicontainer">
                <h3>Message</h3>
                <Ms/>
              </div>
            )}

            {open === "estado" && (
              <div className="inicontainer">
                <h3>Estado</h3>
                <Ee/>
              </div>
            )}

            {open === "user" && (
              <div className="inicontainer">
                <h3>User</h3>
                <Us/>
              </div>
            )}
          </div>
          <div className="home__container__right">
            <button onClick={() => Show("home")}>
              {" "}
              <img src={hom} alt="" />{" "}
            </button>
            <button  onClick={() => Show("message")}>
              <img src={mss} alt="" />{" "}
            </button>
            <button  onClick={() => Show("estado")}>
              {" "}
              <img src={est} alt="" />{" "}
            </button>
            <button  onClick={() => Show("user")}>
              {" "}
              <img src={usr} alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
    );
 }
export default Home;