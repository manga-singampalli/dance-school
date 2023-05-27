import "./NavbarStyles.css";
import React, { useState  } from 'react';
import logo from './logo.jpg'
import {Link} from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const [color,setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);

        }else{
            setColor(false)
        }
    };
    window.addEventListener("scroll",changeColor);
    return (
        
        <div className={color ? "header header-bg" : "header"}>
            {/* <Link to="/">
                <img src="https://lh3.googleusercontent.com/p/AF1QipPVwDi491TjI0-tOM-mVwjWXEqcVLR4jm3YyCFq=s1360-w1360-h1020 "class="logo" />
                <span>Tejuhi Soft Corp.</span>  
            </Link> */}
           
           
            <Link to="/">
               <img src={logo}class="logo" alt=''/>
                <span><p class="spa">Amrutha Sree Varshini</p> <p class="mb-0 text-center">School Of M.A.D.</p></span>
               
               </Link>
           
         

            <ul className= {click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/signin">SignIn</Link>
                   
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
               {click ? ( <FaTimes size={20} style={{ color: "#1034ff" } }/>) : (
                <FaBars size={20} style={{ color: "#1034ff" } }/>
               )}
            </div>
        </div>
    )
}


export default Navbar