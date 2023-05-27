import React from 'react';
import Navbar from "../Navbar";
import Destination from "../Destination";
import HeroImg from "../HeroImg";
import Footer from "../Footer";
import Gallery from "../routes/Gallery";
import Contact from "./Contact";
import {Link} from "react-router-dom";

const Home = () => {
    return (
    <div>
        <Navbar />
         <HeroImg 
         cName="hero"
         heroImg="https://amrutha-sree-varshini-school.web.app/assets/gallery-banner02.png"
         title="Amrutha Sree Varshini School"
         text="Choose Your Favourate Destination"
         buttonText="Contact"
        
         url="/Contact"
         btnClass="show"
         /> 
         <Destination />
         
         {/* <Gallery />
         <Contact /> */}
        <Footer />
        
    </div>
    )   
};
export default Home;