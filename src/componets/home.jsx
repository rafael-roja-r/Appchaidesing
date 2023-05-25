import React, { useState } from 'react';
import lo from "../img/logo/Logo.svg";
import gr from "../img/icons-v/group.svg";
import he from "../img/icons-v/help.svg";
import ho from "../img/icons-v/ho.svg";
import st from "../img/icons-v/stt.svg";
import wh from "../img/icons-v/Wrh.svg";
//nav-vertical
import Hm from "../pages/Home";
import Ms from "../pages/Team";
import Us from "../pages/Help";
import Ee from "../pages/Warehouse";
//nav-horizontal
import De from "../componets/Desing";
import Re from "../componets/Report";
import Ma from "../componets/Materials";
import Mh from "../componets/Machine";
import Cn from "../componets/Construct";



const Home = () => {

  const [open, Start] = useState('null');

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
          <button  onClick={() => Show("home")}>
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
          <button onClick={() => Show("desing")}>Desing</button>
          <button onClick={() => Show("report")}>Report</button>
          <button onClick={() => Show("materials")}>Materials</button>
          <button onClick={() => Show("machine")}>Machine</button>
          <button onClick={() => Show("construct")}>Construct</button>

        </div>


        <div className="home__container__right">
          {open === "home" && (
            <div className="inicontainer">
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

          {open === "desing" && (
            <div className="inicontainer">
              <De/>
            </div>
          )}

          {open === "report" && (
            <div className="inicontainer">
              <Re/>
              <Us />
            </div>
          )}

          {open === "materials" && (
            <div className="inicontainer">
             <Ma/>
              <Us />
            </div>
          )}

          {open === "machine" && (
            <div className="inicontainer">
              <Mh/>
              <Us />
            </div>
          )}

          {open === "construct" && (
            <div className="inicontainer">
              <Cn/>
              <Us />
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
export default Home;