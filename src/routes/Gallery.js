import React from 'react'
import Footer from "../Footer";
import Navbar from "../Navbar";
import HeroImg from "../HeroImg";
import './GalleryStyles.css';
const Gallery = () => {
  return (
    <div>
        <Navbar />
         <HeroImg 
         cName="hero-mid"
         heroImg="https://amrutha-sree-varshini-school.web.app/assets/about-banner.png"
         title="Gallery"
        btnClass="hide"
         /> 
 

      <div class="gallery img-gallery-magnific py-5">
   	  <div class="container">
   	  	         <div class="scn__title text-center">
		        	 <h2 class="primary_color heading_font">GALLERY</h2>
		        	 {/* <img src="./assets/bottom-line.png" alt="border" /> */}
		         </div>
   	  	 {/* <div class="tabs__scn">

   	  	 	 <ul class="nav nav-pills justify-content-center py-4" role="tablist">
			    <li class="nav-item">
			      <a class="nav-link active" data-bs-toggle="pill" href="#pictures">Pictures</a>
			    </li>
			    <li class="nav-item">
			      <a class="nav-link" data-bs-toggle="pill" href="#videos">Videos</a>
			    </li>
			//   </ul> */}
			{/* <li class="nav-item" role="presentation">
			       <a class="nav-link active" data-bs-toggle="pill" href="#pictures" aria-selected="true" role="tab">Pictures</a>
			   </li>
			<li class="nav-item" role="presentation">
			       <a class="nav-link" data-bs-toggle="pill" href="#videos" aria-selected="false" tabindex="-1" role="tab">Videos</a>
			    </li> */}

			 
			  <div class="tab-content">
			    <div id="pictures" class="container tab-pane active"><br />
			       <div class="row">
                   
			       	 <div class="col-12 col-lg-6 row8">
                        <div class="col-lg-6 col-sm-3">
			       	  <a class="image-popup-vertical-fit" href="https://amrutha-sree-varshini-school.web.app/assets/gall09.png" title="img">
							<img src="https://amrutha-sree-varshini-school.web.app/assets/gall09.png" class="w-100" alt="img" />
					  </a>
			       	 </div>

			       	 <div class="col-lg-6 col-sm-3">
			       	 <a class="image-popup-vertical-fit" href="https://amrutha-sree-varshini-school.web.app/assets/gall15.png" title="img">
							<img src="https://amrutha-sree-varshini-school.web.app/assets/gall15.png" class="w-100" alt="img" />
					 </a>
			       	 </div>

			       	 <div class="col-lg-6 col-sm-3">
			       	 <a class="image-popup-vertical-fit" href="https://amrutha-sree-varshini-school.web.app/assets/gall22.png" title="img">
							<img src="https://amrutha-sree-varshini-school.web.app/assets/gall22.png" class="w-100" alt="img" />
					 </a>
			       	 </div>
                      

			       	 <div class="">
			       	 <a class="image-popup-vertical-fit" href="https://amrutha-sree-varshini-school.web.app/assets/gall10.png" title="img">
							<img src="https://amrutha-sree-varshini-school.web.app/assets/gall10.png" class="w-100" alt="img" />
					 </a>
			       	 </div>
                        </div>
                        <br/>
                        <div class="col-12 col-lg-6 row8">
			       	 <div class="col-lg-6 col-sm-3">
			       	 <a class="image-popup-vertical-fit" href="https://amrutha-sree-varshini-school.web.app/assets/gall14.png" title="img">
							<img src="https://amrutha-sree-varshini-school.web.app/assets/gall14.png" class="w-100" alt="img" />
					 </a>
			       	 </div>

			       	 <div class="col-lg-6 col-sm-3">
			       	 <a class="image-popup-vertical-fit" href="https://amrutha-sree-varshini-school.web.app/assets/gall13.png" title="img">
							<img src="https://amrutha-sree-varshini-school.web.app/assets/gall13.png" class="w-100" alt="img" />
					 </a>
			       	 </div>
                       

                       

			       	 <div class="col-lg-6 col-sm-3">
			       	 <a class="image-popup-vertical-fit" href="https://amrutha-sree-varshini-school.web.app/assets/gall16.png" title="img">
							<img src="https://amrutha-sree-varshini-school.web.app/assets/gall16.png" class="w-100" alt="img" />
					 </a>
			       	 </div>

			       	 <div class="col-lg-6 col-sm-3">
			       	 <a class="image-popup-vertical-fit" href="https://amrutha-sree-varshini-school.web.app/assets/gall11.png" title="img">
							<img src="https://amrutha-sree-varshini-school.web.app/assets/gall11.png" class="w-100" alt="img" />
					 </a>
			       	 </div>
                        </div>

			       	 

			       	 </div>
			    </div>
    </div>
    </div>
			    </div>
                <Footer />
			</div>
  )
}

export default Gallery