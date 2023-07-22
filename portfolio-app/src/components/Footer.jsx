import './FooterStyles.css';
import React from 'react';
// import {
//   FaHome,
//   FaPhone,
//   FaMailBulk,
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
// } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location, text">
            {/* <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} /> */}
            <div>
              <p>Housing Society</p>
              <p>Pakistan.</p>
            </div>
          </div>
          <div className="phone, text">
            <h4>
              {/* <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              /> */}
              123-6548-569-85{' '}
            </h4>
          </div>
          <div className="E-Mail, text">
            <h4>
              {/* <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              /> */}
              info@gmail.com
            </h4>
          </div>
        </div>
        <div className="right" >
          <h4>About the company</h4>
          <p>
            This is me Sarah. CEO and Founder of Tech. I enjoy discussing new
            project and design challenges.{' '}
          </p>
          <div className="social, text">
            {/* <FaFacebook
              size={30}
              style={{ color: '#fff', marginRight: '1rem ' }}
            />
            <FaTwitter
              size={30}
              style={{ color: '#fff', marginRight: '1rem ' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#fff', marginRight: '1rem ' }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
