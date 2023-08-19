import React from "react";
import { Link } from 'react-router-dom';

import Navber from '../component/navber'
import Footer from '../component/Footer'

const favorite =() => {
    return(
        <div>
            
            <Navber/>
            <h1> Favorite</h1>\
            <Footer/>
        </div>
    )
}

export default favorite;