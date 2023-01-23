 import '../styles/footer.css';
 import logo from '../assets/footer_logo.svg';


 function Footer() {
    return(
    <footer className='footer'>
        <div className='footer_content'>
        <img  src={logo}className='logo_footer' alt='logo'></img>
        <h1 className='copyright'>© 2020 Kasa. All rights reserved</h1>
        </div>
        
    </footer>
)}

export default Footer