import React from 'react'
import style from "./fifth.module.css"
import image from "../Images/plan.webp"
import image2 from "../Images/tick.png"

const Fifth = () => {
  return (
    <div id={style.fifth}>
            <div id={style.left}>
                    <img src={image} alt="" />
            </div>
            <div id={style.right}>
                    <pre>AUTOMATION</pre>
                    <h1>Automate everything</h1>
                    <p>Create flows triggered by user events. Send reactivation mails to your <br />
                            customers. Receive notifications for every sale you make. You decide with <br /> 
                            Splitbee Automations.</p>
                    <div className={style.list}>
                            <img src={image2} alt="" />
                            <span><b>Send emails</b></span>
                            <p>Onboard new users, Reactive churning customers</p>
                    </div>
                    <div className={style.list}>
                            <img src={image2} alt="" />
                            <span><b>Send emails</b></span>
                            <p>Onboard new users, Reactive churning customers</p>
                    </div>
                    <div className={style.list}>
                            <img src={image2} alt="" />
                            <span><b>Send emails</b></span>
                            <p>Onboard new users, Reactive churning customers</p>
                    </div>
                    <div className={style.list}>
                            <img src={image2} alt="" />
                            <span><b>Send emails</b></span>
                            <p>Onboard new users, Reactive churning customers</p>
                    </div>
            </div>
    </div>
  )
}

export default Fifth