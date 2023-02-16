import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

function Collapse2 (){
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
  
    const [open, setOpen] = useState(false)
    return (
        <div className="collapse">
            <div className="collapse-title" onClick={()=>setOpen(!open)}>Equipements</div>
            {open && <div className="content">{logement.equipments}</div>}
        </div>
    )
    
}

export default Collapse2