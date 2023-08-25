import React from 'react'
import style from "./seven.module.css"
import image1 from "../Images/fast.webp"
import easy from "../Images/easy.png"
import light from "../Images/light.png"
import bag from "../Images/bag.webp"
import time from "../Images/time.png"

const Seven = () => {
  return (
    <div id={style.seven}>
        <h1>Different. In a good way.</h1>
        <div className={style.out_block}>
                <div className={style.block}>
                        <img src={image1} alt="" />
                        <h4>Fast Dashboard</h4>
                        <p>No more staring at loading screens. Splitbee <br /> gives you the UX you deserve.</p>
                </div>
                <div className={style.block}>
                        <img src={bag} alt="" />
                        <h4>Based in Europe</h4>
                        <p>Your data is stored securely in Europe. We <br /> never share your data or sell it to a third- <br /> party.</p>
                </div>
                <div className={style.block}>
                        <img src={easy} alt="" />
                        <h4>Easy to integrate</h4>
                        <p>One line of code and you are done. <br /> No need to be an expert.</p>
                </div>
        </div>
        <div className={style.out_block}>
                <div className={style.block}>
                        <img src={light} alt="" />
                        <h4>Light on your page</h4>
                        <p>We assure your site stays fast. Splitbee is <br /> small in size  and runs on a global <br /> network.</p>
                </div>
                <div className={style.block}>
                        <img src={time} alt="" />
                        <h4>Insights in real-time</h4>
                        <p>See your dashboard update live. Understand <br /> users as they come and go.</p>
                </div>
        </div>
    </div>
  )
}

export default Seven