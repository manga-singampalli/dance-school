import HeroImg from "../HeroImg";
// import Content from "../Content";
import Footer from "../Footer";
import Dance from "../Dance";
import Navbar from "../Navbar";
// import AboutImg from "./img19.png"
const About = () => {
    return (
    <div>
        <Navbar />
         <HeroImg 
         cName="hero-mid"
         heroImg="https://amrutha-sree-varshini-school.web.app/assets/about-banner.png"
         title="About"
        btnClass="hide"
         /> 
         <Dance />
         <Footer />
         
    </div>
    )   
};
export default About;