import "./../styles/css/error.css";
import { Link } from "react-router-dom";


function Error() {
  return (
    <div className="error_wrapper">
      <h1 className="error-code">404</h1>
      <span className="error-message">Oups! La page que vous demandez n'existe pas.</span>
      <Link to= "/" className="return-home">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error;
