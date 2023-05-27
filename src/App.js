import React from "react";
import './index.css';
// import Navbar from "../Navbar";
import Home from "./routes/Home";
 import About from "./routes/About";
 import Gallery from "./routes/Gallery";
 import Contact from "./routes/Contact";
 import Signin from "./routes/Signin";
//  import Footer from "../Footer";

 import {  BrowserRouter, Route,Routes} from "react-router-dom";
 function App() {   
  return (    
     <>
   
   {/* <BrowserRouter>
   <Navbar /> */}
    <Routes>
       <Route path="/"  exact element={<Home />} />
       <Route path="/about" exact element={<About />} />
       <Route path="/gallery" exact element={<Gallery />} />    
       <Route path="/contact" exact element={<Contact />} />   
       {/* <Route path="/signin" exact element={<Signin />} /> */}
    </Routes> 
    {/* <Footer />
    </BrowserRouter> */}
      </>
        );
 }

export default App;

