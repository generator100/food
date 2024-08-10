import React from 'react';
import"./Footer.css"
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipiscing elit et, nec nisl cum aliquam congue risus interdum nam,  </p>
         <div className="footer-scial-icons">
          <img src={assets.linkdin1} alt="" />
          <img src={assets.facebook} alt="" />
          <img src={assets.twitter} alt="" />
          
         </div>
        </div>
        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>

        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
         <ul>
         <li>+250784456264</li>
           <li>ericgne250@gmail.com</li>
         </ul>
        </div>
        </div>
      <hr />
      <p className='footer-copy-right'>footer copy@ 2024 right  ericgne250</p>
    </div>
  );
}

export default Footer;
