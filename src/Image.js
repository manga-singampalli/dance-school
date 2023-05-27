import "./ImageStyles.css";
import ImageData from "./ImageData";
import Mountain1 from "./img3.jpg"
import Mountain2 from "./img2.jpg"

const ImageData = () => {

    return (
        <div>
        <div className="destination">
            <h1>GALLERY</h1>
         <p>Our dance school trains students of various age groups through an established program with multiple levels of training and skill level. The school regularly presents “Nrithya Sandhya” (evening of dance), a stage performance by students.
    
     Alumnus of Sreejaya's School of Classical Dance have attained distinction as star performers, many of our students are reputed Bharatanatyam dance teachers and recognized choreographers successfully fulfilling the school’s aim of preserving and spreading the art form of Bharatanatyam in its purest form with devotion and dedication.</p>
   
      {/* <ImageData 
      className="first-des"
      heading="Kuchipudi"
      text="Kuchipudi is indigenous to the state of Andhra Pradesh and differs from the other five classical styles by the inclusion of singing. Kuchipudi originated in the 17th century with the creation by Sidhyendra Yogi of the dance-drama Bhama Kalapam, a story of Satyabhāma, the charming but jealous wife of the god Krishna."
      img1={Mountain1}
      img2={Mountain2}
      /> */}
       
       </div>
       <div className="tabs__scn">

       <ul className="nav nav-pills justify-content-center py-4" role="tablist">
    <li className="nav-item" role="presentation">
      <a class="nav-link active" data-bs-toggle="pill" href="#pictures" aria-selected="true" role="tab">Pictures</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" data-bs-toggle="pill" href="#videos" aria-selected="false" tabindex="-1" role="tab">Videos</a>
    </li>
  </ul>

  
  <div class="tab-content">
    <div id="pictures" class="container tab-pane active" role="tabpanel"><br />
       <div class="row">

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
             <a class="image-popup-vertical-fit" href="./assets/gall09.png" title="img">
                <img src="./assets/gall09.png" class="w-100" alt="img" />
          </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall10.png" title="img">
                <img src="./assets/gall10.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall11.png" title="img">
                <img src="./assets/gall11.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall12.png" title="img">
                <img src="./assets/gall12.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall13.png" title="img">
                <img src="./assets/gall13.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall14.png" title="img">
                <img src="./assets/gall14.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall15.png" title="img">
                <img src="./assets/gall15.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall16.png" title="img">
                <img src="./assets/gall16.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall17.png" title="img">
                <img src="./assets/gall17.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall18.png" title="img">
                <img src="./assets/gall18.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall19.png" title="img">
                <img src="./assets/gall19.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall20.png" title="img">
                <img src="./assets/gall20.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall21.png" title="img">
                <img src="./assets/gall21.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall22.png" title="img">
                <img src="./assets/gall22.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall23.png" title="img">
                <img src="./assets/gall23.png" class="w-100" alt="img" />
         </a>
            </div>

            <div class="col-lg-3 col-sm-6 mb-3 magnific-img img__block">
            <a class="image-popup-vertical-fit" href="./assets/gall24.png" title="img">
                <img src="./assets/gall24.png" class="w-100" alt="img" />
         </a>
            </div>

       </div>
    </div>
    <div id="videos" class="videos_tab container tab-pane fade" role="tabpanel"><br />
       <div class="row">
             <div class="col-lg-3 col-sm-6 mb-3">
                  <a href="https://www.youtube.com/watch?v=1gSIlvCUybQ">
                      <i class="fa-solid fa-circle-play"></i>
                      <img src="./assets/gall14.png" class="w-100" alt="videos" />
                  </a>
             </div>
             <div class="col-lg-3 col-sm-6 mb-3">
                  <a href="https://www.youtube.com/watch?v=J87D6wrWD3g">
                      <i class="fa-solid fa-circle-play"></i>
                      <img src="./assets/gall16.png" class="w-100" alt="videos" />
                  </a>
             </div>
             <div class="col-lg-3 col-sm-6 mb-3">
                  <a href="https://www.youtube.com/watch?v=1KLNBgxio0s">
                      <i class="fa-solid fa-circle-play"></i>
                      <img src="./assets/gall19.png" class="w-100" alt="videos" />
                  </a>
             </div>
             <div class="col-lg-3 col-sm-6 mb-3">
                  <a href="https://www.youtube.com/watch?v=pTp1wbaLDWw">
                      <i class="fa-solid fa-circle-play"></i>
                      <img src="./assets/gall18.png" class="w-100" alt="videos" />
                  </a>
             </div>
       </div>
    </div>
  </div>
</div>
</div>
    )
    }

    export default ImageData;
