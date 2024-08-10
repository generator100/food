import React from 'react';
import"./AppDownload.css"
import { assets } from '../../assets/assets';
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Download <br/> Tomato App</p>
      <div className="app-download-platform">
        <img src={assets.AppStore} alt="" />
        <img src={assets.playStore}alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
