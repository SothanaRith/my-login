import React, { Component } from "react";
import { Link } from 'react-router-dom';


class footer extends Component{
    render(){
    return (
        <div className="Footer">
            <div className="line_alone">

            </div>
            <center className="WE_ARE">
                    <h1>TECH N</h1>
            </center>
            <center className="book_exp">
                <span>
                    univeres of Technology 
                </span>
            </center>
            <footer className="footer">
                <div className="txt_for_footer">
                    <h2>Contact</h2>
                    <p>
                        <i className="fas fa-book" /> <br></br>
                        <i className="fas fa-book" /> Tel <br></br>
                        <i className="fas fa-book" /> Address
                    </p>
                </div>
                <div className="txt_for_footer">
                    <h2>Navigation</h2>
                    <p>
                        <Link to="/"> Home </Link><br /> 
                        <Link to="/shop"> Shop </Link><br /> 
                        <Link to="/about"> About </Link><br /> 
                        <Link to="/contact"> Contact </Link><br /> 
                        <Link to="/favorite"> Favorite </Link><br /> 
                        
                        
                    </p>
                </div>
                <div className="txt_for_footer">
                <h2>Social</h2>
                <p>
                    <a href="https://t.me/NarithB">Telegram</a> <br/>
                    <a href="https://youtube.com/@narith309">Youtube</a> <br/>
                    <a href="https://www.facebook.com/profile.php?id=100073711089187&mibextid=LQQJ4d">FaceBook</a> <br/>
                    <a href="https://instagram.com/narith_zo?igshid=MmIzYWVlNDQ5Yg==">Instagram</a> <br />
                    <a href="http://www.tiktok.com/@narith_r">Tiktok</a> <br/>
                </p>
                </div>
                <div className="txt_for_footer">
                    <h2>Find Us ON</h2>
                    
                </div>
            </footer>


            <center className="copy">
                <strong><i className="fas fa-book" /> 2035 by Narith. Powered and secured by TICH DG</strong>
            </center>
            
        </div>
    )
}}
export default footer;