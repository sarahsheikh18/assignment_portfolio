import React, { useState } from 'react';
import './Navbarstyles.css';
import { Link } from 'react-router-dom';

// import { FaBars, FaTimes } from 'react-icons/fa'};

const Navbar = () => {
  //   const [click, setClick] = useState(false);
  //   const handleClick = () => {
  //     setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1 className="main-heading">Portfolio.</h1>
      </Link>
      <ul className="nav-menu">
        {/*{click ? 'nav-menu active' : 'nav-menu'} */}
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/project">Project </Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
      </ul>
      {/* <div className="hambuger" onClick={handleClick}>
      {click ? (<FaBars size={20} style={{ color: '#fff' }} />) : ( <FaTimes size={20} style={{ color: '#fff' }} />)}
        
       
      </div> */}
    </div>
  );
};
export default Navbar;
