import "./../styles/css/slideshow.css"
import { useState, useEffect,navigate, useRef } from "react";

/* map puis une div par img?  */
/* comment declencher evenement ? */

function Slideshow (){ 
function ChangeSlide (){
  
}
  return (
        <div className="slider">
        <img src="https://place-hold.it/100x100" alt="slideshow" className="slider-img"></img>
        {/* <div className="precedent" onClick={()=>ChangeSlide(-1)}></div> */}
        {/* <div className="suivant" onClick={()=>ChangeSlide(1)}></div> */}
    </div>
)}

export default Slideshow;
