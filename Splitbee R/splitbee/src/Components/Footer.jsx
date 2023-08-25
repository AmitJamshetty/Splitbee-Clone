import React from 'react'
import style from "./footer.module.css"

 const Footer = () => {
    return (
            <div>
                <footer >
                    <section className={style.section}>
                        <div>
                            <h2>Get a taste of Splitbee today.</h2>
                            <h5 style={{ color: 'white' }}>Analyze your traffic. Increase Conversions.</h5>
                            <h6> ✔ Free 2,500 monthly page views</h6>
                            <h6> ✔No credit card required</h6>
                            <button className={style.addButton} >Add to your Website</button>
                        </div>

                        <div className={style.img}>
                            <span >
                                <img alt="honey image" src="https://splitbee.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhoney-stick.8ef7cc93.png&w=640&q=75"/>
                            </span>
                        </div>
                    </section>

                    <div  className={style.footer}>
                        <svg viewBox="0 100 1440 200" className="absolute top-0 hidden w-full md:block"><path fill="#fff" d="M0 192l120-5.3c120-5.7 360-15.7 600-16 240 .3 480 10.3 600 16l120 5.3V0H0z"></path></svg>
                        <div className={style.container}>
                        <div>
                            <h3>SplitBee</h3>
                            <span>2023</span>
                        </div>
                        <div>
                                <h3>Product</h3>
                                <h3>Pricing</h3>
                                <h3>Documentation</h3>
                        </div>

                        <div>
                                <h3>Updates</h3>
                                <h3>Blog</h3>
                                <h3>Changelog</h3>
                                <h3>Community</h3>
                        </div>

                        <div>
                            <h3>Compared to</h3>
                         <h3>Google Analytics</h3>
                        </div>

                        <div>
                            <h3>Legal</h3>
                            <h3>Terms & Conditions</h3>
                            <h3>Privacy Policy</h3>
                            <h3>imprint</h3>
                        </div>
                        </div>
                    </div>

                </footer>
            </div>
    )
}

export default Footer