import "../styles/header.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo_link">
        <img src={logo} alt="logo" className="header_logo"></img>
      </Link>
      <nav className="header_nav">
        <Link to="/" className="header_link">
          Accueil
        </Link>
        <Link to="/about" className="header_link">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
