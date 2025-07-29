import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Carrousel from "./Carrousel";
import "./Noticias.css";
import "../Pages/TallerCarouselTheme.css";
import TallerCarouselcard from "../Pages/TallerCarouselcard";

const NewsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const noticias = t("news", { returnObjects: true });
  const noticia = noticias.find((n) => n.id === parseInt(id));

  const TCcardData = [
    { image: noticia.main_img },
    { image: noticia.second_img },
    { image: noticia.third_img },
  ];

  return (
    <>
      {noticia ? (
        <div className="news-container">
          <Link to="/NoticiasCompleta" className="back-button">
            {t("back-button")}
          </Link>

          <Carrousel
            images={[
              noticia.carrousel1,
              noticia.carrousel2,
              noticia.carrousel3,
              noticia.carrousel4,
            ]}
          />

          <div className="news-content">
            <h1 className="news-title">{noticia.title}</h1>
            <p className="news-date">
              {t("date")}: {noticia.date}
            </p>
            <p className="news-location">{noticia.ubicacion}</p>
            <h2 className="news-subtitle">{noticia.subtitle}</h2>
            <p className="news-body">{noticia.body}</p>
            <p className="news-body">{noticia.body2}</p>
            <p className="news-body">{noticia.body3}</p>


            <div className="gallery-container">
              {TCcardData.map(
                (card, index) =>
                  card.image && (
                    <TallerCarouselcard key={index} image={card.image} />
                  )
              )}
            </div>
          </div>
        </div>
        
      ) : (
        <p>{t("loading_news")}</p>
      )}
      {noticia.sponsors && noticia.sponsors.length > 0 && (
  <div className="huerto-sponsor-container">
    <h3>{t("sponsors-title")}</h3>
    <div className="huerto-sponsor-logos">
      {noticia.sponsors.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Sponsor ${index + 1}`}
          className="sponsor-logo"
        />
      ))}
    </div>
  </div>
)}
    </>
  );
};

export default NewsPage;
