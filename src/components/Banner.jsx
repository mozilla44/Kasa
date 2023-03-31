import "../styles/css/banner.css";

/* chargemenr dynamic */
/* charger avec url  */
/*  */
function Banner({ imgSrc, bannerText, extraClass }) {
  return (
    <div className={`banner ${extraClass}`}>
      <img src={imgSrc} alt="logo" className="banner_img"></img>
      <h1 className="banner_txt">
        {bannerText}
      </h1>
    </div>
  );
}

export default Banner;
