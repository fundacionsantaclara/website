import React from "react";
import "./Corridores.css";
import ambulancia from "../Fcimages/corredores humanitarios/entregaambulancias.jpg";
import pickups from "../Fcimages/corredores humanitarios/pickups 2.jpg";
import generadoresElectricos from "../Fcimages/corredores humanitarios/entregageneradores.jpg";
import Bizzum from "../Fcimages/bizzum.jpg";
import ancianos1 from "../Fcimages/corredores humanitarios/ancianos .jpg";
import ancianos2 from "../Fcimages/corredores humanitarios/ancianos 4.jpg";
import heridos1 from "../Fcimages/corredores humanitarios/heridos kiev 3.jpg";
import heridos2 from "../Fcimages/corredores humanitarios/heridosor2.jpg";
import criosMontserrat from "../Fcimages/corredores humanitarios/vacacionescrios.jpg";
import rosarioPapa from "../Fcimages/corredores humanitarios/risariopapajpg.jpg";
import hosp11 from "../Fcimages/corredores humanitarios/hosp de campaña/hosp1_4.jpg";
import hosp12 from "../Fcimages/corredores humanitarios/hosp de campaña/hosp1_1.jpg";
import hosp13 from "../Fcimages/corredores humanitarios/hosp de campaña/hosp1_2.jpg";
import hosp21 from "../Fcimages/corredores humanitarios/2do hosp de campaña/hospital2_1.jpg";
import hosp22 from "../Fcimages/corredores humanitarios/2do hosp de campaña/hospital2_2jpg.jpg";
import hosp23 from "../Fcimages/corredores humanitarios/2do hosp de campaña/hospital2_4jpg.jpg";

import { useTranslation } from "react-i18next";

function Corridores() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="corridores section__padding">
        <div className="corridores-header">
          <h1 className="corridores-section__title text__cap">
            {t("corredores")}
          </h1>
        </div>
        <div className="corridores-container">
          <div className="corridores__content text__center">
            <p className="corridores__text text__grey" dangerouslySetInnerHTML={{ __html: t("corredores-text") }}></p>
            <p className="corridores__text text__grey" dangerouslySetInnerHTML={{ __html: t("corredores-text2") }}></p>

            <h2 className="corridores__subtitle">
              {t("solicitamos-tu-ayuda")}
            </h2>

            <div>
              <div className="reto-container">
                <div className="reto-card">
                  <h2 dangerouslySetInnerHTML={{ __html: t("reto") }}></h2>
                  <img src={ambulancia} className="reto-img" alt="..." />
                  <div className="ucrania-part2-card-content"></div>
                </div>
                <div className="reto-card">
                  <h2 dangerouslySetInnerHTML={{ __html: t("reto1") }}></h2>
                  <img src={pickups} className="reto-img" alt="..." />
                  <div className="ucrania-part2-card-content"></div>
                </div>
                <div className="reto-card">
                  <h2 dangerouslySetInnerHTML={{ __html: t("reto2") }}></h2>
                  <img src={generadoresElectricos} className="reto-img" alt="..." />
                  <div className="ucrania-part2-card-content"></div>
                </div>
              </div>

              <div className="ucrania-Part2-container">
                <div className="ucrania-part2-card">
                  <h2>{t("corredores1")}</h2>
                  <div className="ucrania-part2-card-content">
                    <ul>
                      <li dangerouslySetInnerHTML={{ __html: t("corredores-p") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("corredores-p1") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("corredores-p2") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("corredores-p3") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("corredores-p4") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("corredores-p5") }}></li>
                    </ul>
                  </div>
                </div>

                <div className="ucrania-part2-card">
                  <h2>{t("acompañamiento-personas")}</h2>
                  <div className="ucrania-part2-card-content">
                    <ul>
                      <li dangerouslySetInnerHTML={{ __html: t("acompañamiento-personas-p") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("acompañamiento-personas-p1") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("acompañamiento-personas-p2") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("acompañamiento-personas-p3") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("acompañamiento-personas-p4") }}></li>
                    </ul>
                    <p>
                      <strong>{t("acompañamiento-strong")}</strong>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="corridores-img-part">
                    <img src={ancianos1} className="corridores-card-img1" alt="..." />
                    <img src={ancianos2} className="corridores-card-img2" alt="..." />
                    <img src={heridos1} className="corridores-card-img1" alt="..." />
                  </div>
                </div>

                <div className="ucrania-part2-card">
                  <h2>{t("ayuda-humanitaria")}</h2>
                  <div className="ucrania-part2-card-content">
                    <ul>
                      <li dangerouslySetInnerHTML={{ __html: t("ayuda-humanitaria-p") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("ayuda-humanitaria-p1") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("ayuda-humanitaria-p2") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("ayuda-humanitaria-p3") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("ayuda-humanitaria-p4") }}></li>
                    </ul>
                    <p>
                      <strong>{t("ayuda-humanitaria-strong")}</strong>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="corridores-img-part">
                    <img src={criosMontserrat} className="corridores-card-img1" alt="..." />
                    <img src={rosarioPapa} className="corridores-card-img2" alt="..." />
                    <img src={heridos2} className="corridores-card-img1" alt="..." />
                  </div>
                </div>
              </div>
            </div>

            <div className="ucrania-part2-card">
              <h2>{t("hospitales-campaña")}</h2>
              <div className="ucrania-part2-card-content">
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t("hospitales-campaña-p") }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t("hospitales-campaña-p1") }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t("hospitales-campaña-p2") }}></li>
                </ul>
                <p>
                  <strong>{t("hospitales-campaña-strong")}</strong>
                </p>
              </div>
            </div>

            <div>
              <div className="corridores-img-part">
                <img src={hosp11} className="corridores-card-img1" alt="..." />
                <img src={hosp12} className="corridores-card-img2" alt="..." />
                <img src={hosp13} className="corridores-card-img1" alt="..." />
              </div>
            </div>
          </div>

          <div className="corridores-img-part">
            <img src={hosp21} className="corridores-card-img1" alt="..." />
            <img src={hosp22} className="corridores-card-img2" alt="..." />
            <img src={hosp23} className="corridores-card-img1" alt="..." />
          </div>

          <div className="reto-card">
            <h2>{t("bizzum")}</h2>
            <img src={Bizzum} className="reto-img" alt="..." />
            <div className="ucrania-part2-card-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corridores;