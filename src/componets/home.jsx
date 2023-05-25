import React, { useState } from 'react';
import lo from "../img/logo/Logo.svg";
import gr from "../img/icons-v/group.svg";
import he from "../img/icons-v/help.svg";
import ho from "../img/icons-v/ho.svg";
import st from "../img/icons-v/stt.svg";
import wh from "../img/icons-v/Wrh.svg";

import Hm from "../pages/Home";
import Ms from "../pages/Messages";
import Us from "../pages/User";
import Ee from "../pages/Estado";


const Home = () => {

  const [open, Start] = useState('home');

  const Show = (option) => {
    Start(option);

  };


  return (
    <div className="home">
      <div className="home__nav">
      <div className="home__logo">
        <img src={lo} alt="Logo de chaidising" title='Logo de chaidising' />
      </div>

      <div className="home__nav__v">
          <button onClick={() => Show("home")}>
            {" "}
            <img src={ho} alt="" />{" "}
          </button>
          <button onClick={() => Show("team")}>
            <img src={gr} alt="" />{" "}
          </button>
          <button onClick={() => Show("warehouse")}>
            {" "}
            <img src={wh} alt="" />{" "}
          </button>
          <div className="home__buton_btn">
          <button  onClick={() => Show("help")}>
            {" "}
            <img src={he} alt="" />{" "}
          </button>

          <button  onClick={() => Show("setting")}>
            {" "}
            <img src={st} alt="" />{" "}
          </button>
          </div>
          
        </div>
      </div>
      
      <div className="home__container">
        <div className="home__nav_h">

        </div>


        <div className="home__container__left">
          {open === "home" && (
            <div className="inicontainer">
              <h3>Home</h3>
              <Hm />
            </div>
          )}

          {open === "team" && (
            <div className="inicontainer">
              <h3>Team</h3>
              <Ms />
            </div>
          )}

          {open === "warehouse" && (
            <div className="inicontainer">
              <h3>Warehouse</h3>
              <Ee />
            </div>
          )}

          {open === "help" && (
            <div className="inicontainer">
              <h3>Helpr</h3>
              <Us />
            </div>
          )}

          {open === "setting" && (
            <div className="inicontainer">
              <h3>Setting</h3>
              <Us />
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
export default Home;