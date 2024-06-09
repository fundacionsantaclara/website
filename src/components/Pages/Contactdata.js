import React from "react";
import Fundacion from "../Fcimages/vissionbg.jpg";

function Contactdata() {
  return (
    <>
      <div className="contact-page">
        <div className="location">
        <img className="fundacion-pic"  src={Fundacion} alt="" />
        </div>
        <div className="contact-form">
          {/* Contact Form */}
          <h2 className="contact-title">Contact Us</h2>
          <h6 className="contact-subtitle">DIRECCIÓN</h6>
          <p> Fundación del Convento de Santa Clara </p>
          <p>c/ Nou de Santa Clara, 62 </p>
          <p>08241 Manresa (Barcelona) </p>
          <h6 className="contact-subtitle">TELÉFONO</h6>
          <p> T. 93 873 4928</p>
          <h6 className="contact-subtitle">EMAIL</h6>
          <p className="mail-text"> info@fsantaclara.org </p>
         
        </div>
      </div>
    </>
  );
}

export default Contactdata;
