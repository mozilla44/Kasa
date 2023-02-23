import "./../styles/slideshow.css"
import { useState, useEffect,navigate, useRef } from "react";

/* map puis une div par img?  */
/* comment declencher evenement ? */

function Slideshow (){ 

  return (
<div>
<div className="slideshow-container">
      <div className="mySlides fade">
        
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg"></img>
        <div className="numbertext">1 / 3</div>
      </div>
      <div className="mySlides fade">
        
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg"></img>
        <div className="numbertext">2 / 3</div>
      </div>
      <div className="mySlides fade">
        
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg"></img>
        <div className="numbertext">3 / 3</div>
      </div>
      <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a className="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    
    <div>
      <span className="dot" onclick="currentSlide(1)"></span>
      <span className="dot" onclick="currentSlide(2)"></span>
      <span className="dot" onclick="currentSlide(3)"></span>
    </div>
    </div>
)}

export default Slideshow;
