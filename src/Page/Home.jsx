import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import DELL from './image/h732.png'
import Mac from './image/macbook-air-m2-roundup-header.webp'
import Navber from '../component/navber'
import Footer from '../component/Footer'
import Comment from "../component/comment";
import Slider from "../component/slide";
import Products from "../component/products";

const Home =() => {

    return(
        
        <div>
            
            {/* <!-- banner start --> */}
            <div className="header_home">
                <br />
                <Navber/>
                <div className="text_ber">
                    <h1>Find your Favorite Laptop</h1><br /><br />
                    <h2>this shop have alot of Brand and Options for you</h2><br />
                    <Link to ="/Shop"><button>Store</button></Link>
                </div>
            </div>

            <Slider/>
            {/* <!-- banner end --> */}
            
            <div className="body_home">
                <div className="item_home"></div>
                <div className="box_home">

                    <div className="card_home2">
                        
                        <div className="item_card_home2">
                            <div className="txt_home2">
                                <h1>ROG Strix Scar 18</h1><br />
                                <h2>RTX 4090 ti 8G</h2>
                                <h2>18-inch QHD Nebula Display 240Hz/3ms</h2>
                                <h2> Gen Intel® Core™ i9-13980HX</h2>
                                <h2> Windows 11 Home gaming performance</h2>
                            </div>
                            <div className="img_home2">
                                <img src={DELL} alt="" />
                            </div>
    
                        </div>
                    </div>
                    <div className="card_home3">
                    
                        <div className="item_card_home3">
                            <div className="txt_home3">
                                <h1>MacBook Air</h1><br />
                                <h2>Apple M2</h2>
                                <h2>15-inch </h2>
                                <h2>Intel Core i7 processor</h2>
                                <h2>memory 1Tb Ram 6G</h2>
                            </div>
                            <div className="img_home3">
                                <img src={Mac} alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* end cards */}
                <Comment/>
                <Products/>
                

            </div>
            
            
            <Footer/>
        </div>
    )
}

export default Home;