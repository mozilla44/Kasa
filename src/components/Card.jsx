import { Link } from "react-router-dom"

function Card ({logement}){
    return (
        <Link to = {"/logement/" + logement.id}className="gallery_card">
          <img src={logement.cover} className="gallery_img"></img>
          <h1 className="card_title">{logement.title}</h1>
        </Link>
    )
}

export default Card