function Slideshow() {
  const slide = [];
  let numero = 0;

  function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0) numero = slide.length - 1;
    if (numero > slide.length - 1) numero = 0;
    document.getElementsByClassName("slide").src = slide[numero];
  }
  return (
    <div className="slider">
      <img src=""></img>
      <div id="precedent" onclick="ChangeSlide(-1)"></div>
      <div id="suivant" onclick="ChangeSlide(1)"></div>
    </div>
  );
}

export default Slideshow;
