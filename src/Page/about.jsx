import React from "react";
import { Link } from 'react-router-dom';

import Navber from '../component/navber'
import Footer from '../component/Footer'
import Me from './image/my_pf.jpg'
const about =() => {
    return(
        <div>
            
            
            <div>
                <div className="about">
                    <br />
                    <Navber/>
                    <div className="benner_about">
                        <div className="txt_about">
                            <h1>We are designed to facilitate you</h1><br />
                            <p>Save time, money and the hassle ot getting the Laptop in your dreams.</p><br />
                            

                        </div>
                        <div className="card_about">
                            <div className="tital_about">
                                <h1>TECH N Store</h1>
                                <p>Technology is something that is gaining increasing importtance in world today</p>
                                <a href="https://t.me/NarithB"><button>Contact</button></a>

                            </div>
                            <div className="imgCard_about">
                                <h1>Founder</h1>
                                <div className="img_about">

                                    <img src={Me} alt="" />
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="footer_about">
                        <div className="card_txt_about">
                            <h1> Our Studio </h1>
                            <h3>Norton University</h3><br /><br />
                            <div className="detail_about">
                                <p>Norton University is the first private university in Cambodia, established on December 2, 1996 by Professor Chan Sok Khieng.</p>
                            </div>
                        </div>
                        <div className="Detail_card_about">
                            <h1>Details</h1>
                            <div className="text_details_about">
                                <h3>I'm </h3>
                                <h2>Software deverloper</h2>
                                <h3>from Norton university</h3>

                            </div>

                        </div>
                        

                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default about;