import { useState, useEffect } from "react";
import "../styles/gallery.css";
import testImg from "../assets/test_img.jpg";

function Gallery() {
  useEffect(() => {}, []);
  return (
    <div className="gallery_wrapper">
      <div className="gallery_card">
        <h1>nom</h1>
        <img src={testImg} className="gallery_img"></img>
      </div>
      <div className="gallery_card">
        <h1>nom</h1>
        <img src={testImg} className="gallery_img"></img>
      </div>
      <div className="gallery_card">
        <h1>nom</h1>
        <img src={testImg} className="gallery_img"></img>
      </div>
      <div className="gallery_card">
        <h1>nom</h1>
        <img src={testImg} className="gallery_img"></img>
      </div>
      <div className="gallery_card">
        <h1>nom</h1>
        <img src={testImg} className="gallery_img"></img>
      </div>
      <div className="gallery_card">
        <h1>nom</h1>
        <img src={testImg} className="gallery_img"></img>
      </div>
    </div>
  );
}

export default Gallery;
