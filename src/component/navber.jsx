import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './style/navber.css'


class navber extends Component {
    state={clicked : false};
    handleclick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <div>
                <nav className ="header">
                    <div onClick={this.handleclick} className="menu_icon"><i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i></div>
                    <ul className={this.state.clicked ? "txt active":"txt"}>
                        <li><Link to ="/"><i className="fa-solid fa-house-chimney"></i> Home</Link></li>
                        <li><Link to ="/Shop"><i className="fa-solid fa-cart-shopping"></i> Shop</Link></li>
                        <li><Link to ="/about"><i className="fa-solid fa-eject"></i> about</Link></li>
                        <li><Link to="/contact"><i className="fa-solid fa-address-card"></i> contact</Link></li>
                        <li><Link to="/favorite"><i className="fa-solid fa-star"></i> Cart </Link></li>
                    </ul>
                    
                </nav>
                
                
                
            </div>
        )
}}

export default navber;