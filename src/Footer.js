import "./FooterStyles.css"
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div class="left">
                    <div className="location">
                        <FaHome size={20} style={{ color:"#fff",marginRight:"2rem" }} />
                       <div>
                            <p className="head">Thotapalem</p>
                            <p className="head">Vizianagaram, Andhra Pradesh</p>
                            </div>
                        </div>
                    <div className="phone">
                        <h4 className="head"><FaPhone size={20} style={{ color:"fff", marginRight: "2rem" }} />098498 12456</h4>
                    </div>
                    <div className="email">
                        <h4 className="head"><FaMailBulk size={20} style={{ color:"fff", marginRight: "2rem" }} />info@gmail.com</h4>
                    </div>
                    </div>
                  
                 
                    <div className="right">
                        <h4 className="head">About Amrutha Sree Varshini School</h4>
                        <p className="para">A classical dance school with quality, innovative and creative teaching and making students of best</p>
                        <div className="social">
                            <FaFacebook 
                            size={30}
                            style={{ color: "#fff", marginRight:"1rem" }}
                            url="/https://facebook.com"
                            />

                           <FaTwitter   
                            size={30}
                            style={{ color: "#fff", marginRight:"1rem" }}
                            />

                           <FaLinkedin
                            size={30}
                            style={{ color: "#fff", marginRight:"1rem" }}
                            />
                        </div>
                    </div>
                    </div>
            </div>
        
    )
}
export default Footer;