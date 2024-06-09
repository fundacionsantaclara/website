import React from "react";
import "./Plataforma.css";
import { useTranslation } from "react-i18next";


function PlataformaData(props) {
  const { t } = useTranslation();
  return (
    <>
      <li className="plat-cards-item">
        <div className="platcards-item-link" to={props.path}>
          <div className="platcards-item-info">
            {" "}
            <div className="plat-para-text">{props.para}</div>
            <p className="plat-card-intro">{t("plat-card-intro")}<strong> {t("plat-card-intro-bold")}</strong></p>
            <div className="small-card-container">
              <div class="small-card-item">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/346/314/original/family-icon-vector-illustration-on-the-white-background-free-png.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="plat-card-body">
                  <p class="plat-card-text"> <strong>950</strong></p>
                  <p class="plat-card-text"> <strong>{t("plat-card-data")}</strong></p>{" "}
                </div>
              </div>

              <div class="small-card-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/32/32441.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="plat-card-body">
                  <p class="plat-card-text"> <strong>2600</strong></p>
                  <p class="plat-card-text"><strong>{t("plat-card-data2")}</strong> </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-part">
          <div className="pic-section">
            <img
              src="https://estaticos-cdn.prensaiberica.es/clip/24441745-7a6d-4e33-86ac-9e3824e6be22_16-9-discover-aspect-ratio_default_0.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div className="pic-section">
            <img
              src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2011/12/25/5f9aee0904f1f.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div className="pic-section">
            <img
              src="https://media.washingtonpost.com/wp-srv/health/features/2007/stretch-grocery-dollars-061907/gr/art-food_all.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div className="pic-section">
            <img
              src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/07/29/5faa5588cb4de.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <div class="card2-container">
          <div class="card2">
            <h2>{t("plat-card-obj1")}</h2>
            <p>
            {t("plat-card-obj1-para")}
            </p>
          </div>
          <div class="card2">
            <h2>{t("plat-card-obj2")}</h2>
            <p>
            {t("plat-card-obj2-para")}
            </p>
          </div>
          <div class="card2">
            <h2>{t("plat-card-obj3")}</h2>
            <p>
            {t("plat-card-obj3-para")}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

export default PlataformaData;
