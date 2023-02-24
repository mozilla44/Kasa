import '../styles/banner.css'

/* chargemenr dynamic */
/* charger avec url  */
/*  */
function Banner({imgSrc, bannerText}) {
    return(
        <div className='banner'>
        <img src={imgSrc} alt="logo" className='banner_img'></img>
        <h1 h1 className='banner_txt'>{bannerText}</h1>
        </div>
      
   
)}

export default Banner