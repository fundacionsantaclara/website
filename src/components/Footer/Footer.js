import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../Fcimages/fsantaclara.png";
import generalitat from "../Fcimages/logo-generalitat.png";
import manresa from "../Fcimages/logo_ajuntament_manresa.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">{t("footer-p1")}</p>
        <h2 className="support-text">{t("footer-p2")}</h2>
        <div class="footer-links">
          <div class="footer-link-items">
            <img src={generalitat} />
            <div class="footer-link-items">
              <img src={manresa} />
            </div>
          </div>
        </div>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img className="fsclogo" src={logo} alt="" />
            </Link>
          </div>
          <small class="website-rights">
            Fundació convent de Santa Clara © 2024
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
