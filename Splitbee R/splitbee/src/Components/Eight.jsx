import React from 'react'
import style from "./eight.module.css"
import ab from "../Images/AB.jpg"
import tick from "../Images/tick.png" 
import Svg3 from "./Svg3.jsx"

const Eight = () => {
  return (
    <section id={style.eight}>
        <article id={style.gif}>
                <Svg3/>
        </article>
        <article id={style.down}>
            <div className={style.div}>
                <pre>A/B TESTING</pre>
                <h1>Split your traffic</h1>
                <p>Create and run experiments on your page. Compare multiple variants. See <br /> what works and increase conversions.</p>
                    <div className={style.list2}>
                        <img src={tick} />
                        <span><b>Split Test</b></span>
                        <p>Balance traffic between multiple pages</p>
                    </div>
                    <div className={style.list2}>
                        <img src={tick} />
                        <span><b>Variation Test</b></span>
                        <p>Try different wordings. Swap buttons, images and more</p>
                    </div>
                    <div className={style.list2}>
                        <img src={tick} />
                        <span><b>Custom Code Test</b></span>
                        <p>get programmatic access to test groups with Splitbee.js</p>
                    </div>
            </div>
            <div className={style.div}>
                <img id={style.a_b} src={ab} alt="" />
            </div>
        </article>
    </section>
  )
}

export default Eight