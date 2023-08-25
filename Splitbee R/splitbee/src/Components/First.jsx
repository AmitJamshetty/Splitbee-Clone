import React from 'react';
import style from "./first.module.css";
import image from "../Images/back-img.webp";
import image2 from "../Images/back-img2.webp"

const First = () => {
  return (
    <div id={style.main}>
       <div id={style.head}>
            <h1>The analytics platform you'll love</h1>
            <p>Track and optimize your online business with Splitbee.</p>
            <p>Your friendly analytics & conversion platform.</p>
            <span>Add to Your Website</span>
            <sub>No credit card required</sub>
       </div>
        <img src={image}id={style.one}></img>
        <img src={image2} id={style.two}></img>
    </div>
  )
}

export default First