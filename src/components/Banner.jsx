import '../styles/banner.css'
import banner_img from '../assets/banner.png'

function Header() {
    return(
        <div className='banner'>
        <img src={banner_img} alt="logo" className='banner_img'></img>
        <h1 className='banner_txt'>Chez vous, partout et ailleurs</h1>
        </div>
      
   
)}

export default Header