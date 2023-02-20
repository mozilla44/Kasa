import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";

import "./../styles/logement.css";
import "./../styles/collapse.css";

function Logement() {
  let navigate = useNavigate ()
  let { id } = useParams();
  
  const [logement, setLogement] = useState({host:{}, tags:[] ,equipments:[]});
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
  }, []);

  return (
    <div className="logement_wrapper">
      <div className="logement_slideshow"></div>
      <div className="logmement_presentation">
        <div className="flat_info">
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
          <div className="logement_tags">
            {logement.tags.map(tag => <div className="logement_tag">{tag}</div>)}
          </div>
        </div>
        <div className="owner_info">
          <h2>{logement.host.name}</h2>
          <img src="https://place-hold.it/50"></img>
          <div>owner stars</div>
        </div>
      </div>

      <div className="logment_collapse">
        <div className="collapse_description"><Collapse title={"Description"} description={logement.description}/></div>
        <div className="collapse_equipement"><Collapse title={"Equipement"} description={logement.equipments.map(equipment => <div className="logement_equipment">{equipment}</div>)}/></div>
      </div>
    </div>
  );
}

export default Logement;
