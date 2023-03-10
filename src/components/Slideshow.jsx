import "./../styles/css/slideshow.css";
import { useState, useEffect, navigate, useRef } from "react";

/* comment faire usestate?  */
/* commemt recuperer image puis push dans tableau ? */
/* push est la bonne methode ? */
/* comparer avec l'index? */

function Slideshow({ pictures }) {
  const [img, setImg] = useState(pictures[0]);
  useEffect(() => {
    setImg(pictures[0]);
  }, [setImg, pictures]); //pourqu

  function ChangeSlide(numero) {
    let index = pictures.findIndex((p) => p === img);
    if (index + numero >= 0 && index + numero <= pictures.length -1) {
      setImg(pictures[index+numero])
    }
    else if (index+numero<0){
      setImg(pictures[pictures.length-1])
    }
    else if (index+numero>pictures.length-1){
      setImg(pictures[0])
    }
  }

  return (
    <div className="slideshow_wrapper">
      <img src={img} alt="" className="slideshow_img"></img>
      <div className="precedent" onClick={() => ChangeSlide(-1)}><i class="fa-solid fa-chevron-left"></i></div>
      <div className="suivant" onClick={() => ChangeSlide(1)}><i class="fa-solid fa-chevron-right"></i></div>
    </div>
  );
}

export default Slideshow;
