import '../styles/header.css'
import logo from '../assets/logo.svg'

function Header() {
    return(
    <header className='header'>
        <img src={logo} alt="logo" className='header_logo'></img>
        <nav className='header_nav'>
            <a className='header_link'>Accueil</a>
            <a className='header_link'> A propos</a>
        </nav>
    </header>
)}

export default Header