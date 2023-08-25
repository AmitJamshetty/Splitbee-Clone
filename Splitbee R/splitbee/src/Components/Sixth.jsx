import React from 'react'
import style from "./six.module.css"
import Svg2 from "./Svg2.jsx"

const Sixth = () => {
  return (
    <div>
        <div className={style.svg}>
            <Svg2/>
        </div>
        <div id={style.six}>
            <h1>Track Your Website on the Fly</h1>
            <p>See how your website is used. Understand user behavior. Take action. <br /> Install Splitbee in less than a minute.</p>
            <span>Add Splitbee to your Website</span>
        </div>
        <div className={style.svg}>
            <Svg2/>
        </div>
    </div>
  )
}

export default Sixth