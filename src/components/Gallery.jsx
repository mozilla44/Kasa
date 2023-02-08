import { useState, useEffect } from "react";
import "../styles/gallery.css";


function Gallery() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch(`/logements.json`)
      .then((response) => response.json())
      .then((Data) => setData(Data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="gallery_wrapper">
      {Data.length > 0 && Data.map(logement => 
        <div className="gallery_card">
          <img src={logement.cover} className="gallery_img"></img>
          <h1 className="card_title">{logement.title}</h1>
        </div>
      )}
    </div>
  );
}

export default Gallery;
