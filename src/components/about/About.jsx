import "./about.css";
import React from 'react'
import Mobile from "../../img/mobile.png"
import Award from "../../img/award.png"
import web from "../../img/web.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={Mobile} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        NOUS CRÉONS DES APPLICATIONS WEB SUR MESURE QUI FONT DÉCOLLER VOTRE BUSINESS
        </p>
        <p className="a-desc">
        Développeur web experimenté basé en Belgique, eGalamayo crée des sites internet en utilisant les meilleurs 
        logiciels libres. Je suis disponible en Freelance pour les agences web, les petites entreprises, les ASBL et 
        les particuliers : création de sites web responsive (compatibles tablettes et smartphones), gestion de site web, 
        configuration de la vente en ligne, debuggages, sécurisation etc...



        </p>
        <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <div className="a-award-desc">
             <img src={web} alt="" className="a-web-img" />
            </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default About
