import React from "react";
import "./Plataforma.css";
import { useTranslation } from "react-i18next";
import tomadatos from "../Fcimages/pilaryjoven.jpg";
import entregaalimentos from "../Fcimages/jaumaymamapilar.jpg";
import voluntariosplataform from "../Fcimages/voluntarios plataform.jpg";

function PlataformaData(props) {
  const { t } = useTranslation();

  const plataformaParagraph = t("plataforma-paragraph");

  const paragraphs = plataformaParagraph.split("\n\n");

  return (
    <>
      <li className="plat-cards-item">
        <div className="platcards-item-link" to={props.path}>
          <div className="platcards-item-info">
            <div className="plat-para-text">
              {paragraphs.map((paragraph, index) => {
                const [title, ...content] = paragraph.split(":");
                return (
                  <p key={index}>
                    <strong>{title}:</strong>
                    {content.length > 0 && ` ${content.join(":")}`}
                  </p>
                );
              })}
            </div>
            <p className="plat-card-intro">
              <strong>{t("plat-card-intro")}</strong>
              <strong> {t("plat-card-intro-bold")}</strong>
            </p>
            <div className="small-card-container">
              <div className="small-card-item">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/346/314/original/family-icon-vector-illustration-on-the-white-background-free-png.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="plat-card-body">
                  <p className="plat-card-text">
                    <strong>1030</strong>
                  </p>
                  <p className="plat-card-text">
                    <strong>{t("plat-card-data")}</strong>
                  </p>
                </div>
              </div>

              <div className="small-card-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/32/32441.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="plat-card-body">
                  <p className="plat-card-text">
                    <strong>2391</strong>
                  </p>
                  <p className="plat-card-text">
                    <strong>{t("plat-card-data2")}</strong>
                  </p>
                </div>
              </div>

              <div className="small-card-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9391/9391157.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="plat-card-body">
                  <p className="plat-card-text">
                    <strong>287 </strong>
                  </p>
                  <p className="plat-card-text">
                    <strong>{t("plat-card-data3")}</strong>
                  </p>
                </div>
              </div>

              <div className="small-card-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5227/5227060.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="plat-card-body">
                  <p className="plat-card-text">
                    <strong>500 </strong>
                  </p>
                  <p className="plat-card-text">
                    <strong>{t("plat-card-data4")}</strong>
                  </p>
                </div>
              </div>

              <div className="small-card-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/470/470912.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="plat-card-body">
                  <p className="plat-card-text">
                    <strong>20</strong>
                  </p>
                  <p className="plat-card-text">
                    <strong>{t("plat-card-data5")}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-part">
          {/* Código existente para las imágenes */}
          <div className="pic-section">
            <img
              src="https://estaticos-cdn.prensaiberica.es/clip/24441745-7a6d-4e33-86ac-9e3824e6be22_16-9-discover-aspect-ratio_default_0.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="pic-section">
            <img src={tomadatos} className="d-block w-100" alt="..." />
          </div>
          <div className="pic-section">
            <img src={entregaalimentos} className="d-block w-100" alt="..." />
          </div>
          <div className="pic-section">
            <img
              src={voluntariosplataform}
              className="d-block w-100"
              alt="..."
            />
          </div>
          {/* Resto de imágenes */}
        </div>

        <div className="card2-container">
          {/* Código existente para las cards */}
          <div className="card2">
            <h2>{t("plat-card-obj1")}</h2>
            <p>{t("plat-card-obj1-para")}</p>
          </div>
          <div className="card2">
            <h2>{t("plat-card-obj2")}</h2>
            <p>{t("plat-card-obj2-para")}</p>
          </div>
          <div className="card2">
            <h2>{t("plat-card-obj3")}</h2>
            <p>{t("plat-card-obj3-para")}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default PlataformaData;
