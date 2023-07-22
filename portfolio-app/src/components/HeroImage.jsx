import './HeroImageStyles.css';
import React from 'react';
import img1 from '../assets/img1.jpg';
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={img1} alt="introimage" />
      </div>
      <div className="content">
        <p className="text">HI, I'M A DEVELOPER. </p>
        <h1 className="text">FULL STACK DEVELOPER</h1>
        <div>
          <Link to="/Project" className="btn">
            PROJECTS
          </Link>
          <Link to="/Contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroImage;
