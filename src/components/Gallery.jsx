import { useState, useEffect } from "react";
import "../styles/gallery.css";
import Banner from "./Banner";
import Card from "./Card";




function Gallery() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch(`/logements.json`)
      .then((response) => response.json())
      .then((Data) => setData(Data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Banner/>
      <div className="gallery_wrapper">
      {Data.length > 0 && Data.map(logement => 
       <Card key={"logement-"+ logement.id} logement ={logement}/>
      )}
      </div>
    </div>
  );
}

export default Gallery;
