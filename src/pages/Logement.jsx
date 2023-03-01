import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Ratings from "../components/Ratings";

import "./../styles/logement.css";
import "./../styles/collapse.css";

function Logement() {
  let navigate = useNavigate ()
  let { id } = useParams();
  
  const [logement, setLogement] = useState({host:{}, tags:[] ,equipments:[], rating:3});
  useEffect(() => {
    fetch(`/logements.json`)
      .then((response) => response.json())
      .then((data) => {
        let result = data.find((l) => l.id == id);
        if (result){
          setLogement(result);
        }
        else {
          navigate("/error")
        }
        
      })
      .catch((error) => navigate("/error") );
  }, [setLogement]);

  function displayEquipments (){
    
    return (logement.equipments.map(equipment => <div className="logement_equipment">{equipment}</div>))
  }

  return (
    <div className="logement_wrapper">
      {/* <Slideshow/> */}
      <div className="logmement_presentation">
        <div className="flat_info">
          <h2 className="logement-title">{logement.title}</h2>
          <h3 className="logement-location">{logement.location}</h3>
          <div className="logement_tags">
            {logement.tags.map(tag => <div className="logement_tag">{tag}</div>)}
          </div>
        </div>
        <div className="owner_info">
          <div className="owner-profile">
          <h2 className="host-name">{logement.host.name}</h2>
          <img className="profile_pic" src={logement.host.picture}></img>
          </div>
          <div className="owner-stars"><Ratings starNumber={parseInt(logement.rating)}/></div>
        </div>
      </div>


      <div className="logment_collapse">
        <div className="collapse_description"><Collapse title={"Description"} description={logement.description}/></div>
        <div className="collapse_equipement"><Collapse title={"Equipement"} description={displayEquipments()}/></div>
      </div>
    </div>
  );
}

export default Logement;
