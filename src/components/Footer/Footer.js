import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../Fcimages/fsantaclara.png";
import generalitat from "../Fcimages/logotipogeneralitat.png";
import manresa from "../Fcimages/logotipoajuntamentmanresa.png";
import fundacioCaixa from "../Fcimages/logotipofundacionlacaixa.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <div className="footer-text">
          <p className="footer-subscription-heading">{t("footer-p1")}</p>
          <h2 className="support-text">{t("footer-p2")}</h2>
        </div>
        <div class="footer-images">
            <div class="footer-link-items">
              <img src={generalitat} alt="Generalitat" />
              <img src={fundacioCaixa} alt="FundacioCaixa" />
              <img src={manresa} alt="Manresa" />
          </div>
        </div>
      </section>
      <section class="social-media">
  <div class="social-media-wrap">
    <div class="footer-logo">
      <Link to="/" className="social-logo">
        <img className="fsclogo" src={logo} alt="Fundación Santa Clara Logo" />
      </Link>
    </div>
    <small class="website-rights">
      Fundació convent de Santa Clara © 2024
    </small>
    <div class="social-icons">
      <a
        class="social-icon-link facebook"
        href="https://www.facebook.com/fundaciorosaoriol/" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <i class="fab fa-facebook-f" />
      </a>
      <a
        class="social-icon-link instagram"
        href="https://www.instagram.com/fundsantaclara/" 
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <i class="fab fa-instagram" />
      </a>
      
      <a
        class="social-icon-link twitter"
        href="https://x.com/i/flow/login?redirect_after_login=%2Ffundsantaclara"  
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <i class="fab fa-twitter" />
      </a>
      
    </div>
  </div>
</section>
    </div>
  );
}

export default Footer;
