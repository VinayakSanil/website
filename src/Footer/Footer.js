import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaAddressCard } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
     <div className='footer-main'>
      <div className="footer-item">
        <h3>Contact Us</h3>
        <p><i className="fa fa-phone"></i> Phone: +91 80-2293-2266 , 80-2293-2474</p>
        <p><i className="fa fa-fax"></i> CHEP: +91 80-2360-0106</p>
        <p><i className="fa fa-fax"></i> IISc: +91 80-2360-0683, 80-2360-0085</p>
      </div>
      <div className="footer-item">
        <h3>E-MAIL</h3>
        <p><i className="fa fa-envelope"></i> Email   : userid@iisc.ac.in</p>
        <p><i className="fa fa-envelope"></i> Chair   : chair.chep@iisc.ac.in</p>
        <p><i className="fa fa-envelope"></i> Office : office.chep@iisc.ac.in</p>
      </div>
      <div className="footer-item">
        <h3>Find Us</h3>
        <p><FaAddressCard className="icon" />CV Raman Rd, Bengaluru, Karnataka, 560012</p>
        <p>
        <a href="https://goo.gl/maps/vRgAbR6WVHtWwumu9" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="icon" />Locate Us</a>
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/chep.iisc" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.linkedin.com/school/indian-institute-of-science/mycompany/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/CHEP_IISc" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
        </div>
      </div>
      </div>
      <div>
        <p className='copyright'>
            <i className="fa fa-copyright"></i>2023 CHEP, Indian Institute of Science, Bengaluru, Karnataka, India. All Rights Reserved.<br/>
      <span style={{fontSize:15}}>Designed by : Vinayak Sanil and Coded by : ChatGPT  </span><br/>Last Updated : dd/mm/yyyy</p>
      </div>
    </footer>
  );
};

export default Footer;
