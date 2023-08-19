import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Footer from '../component/Footer'
import Navber from '../component/navber'
const contact =() => {

    return(
        
        <div>
            
            <Navber/>
            <h1 className="contact">contact Us</h1>
            <Footer/>
        </div>
    )
}

export default contact;