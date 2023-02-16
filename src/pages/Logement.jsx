import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Collapse2 from "../components/Collapse2";
import "./../styles/logement.css";
import "./../styles/collapse.css";

function Logement() {
  let { id } = useParams();
  const [logement, setLogement] = useState({});
  useEffect(() => {
    fetch(`/logements.json`)
      .then((response) => response.json())
      .then((data) => {
        let result = data.find((l) => l.id == id);
        setLogement(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="logement_wrapper">
      <div className="logement_slideshow"></div>
      <div className="logmement_presentation">
        <div className="flat_info">
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
          <div className="logement_tags">
            {/* <div>{logement.tags}</div> */}
            <div className="logement_tag">tag</div>
            <div className="logement_tag">tag </div>
            <div className="logement_tag">tag </div>
          </div>
        </div>
        <div className="owner_info">
          <h2>{/* {logement.host.name} */}name</h2>
          <img src="https://place-hold.it/50"></img>
          <div>owner stars</div>
        </div>
      </div>

      <div className="logment_collapse">
        <div className="collapse_description"><Collapse/></div>
        <div className="collapse_equipement"><Collapse2/></div>
      </div>
    </div>
  );
}

export default Logement;
