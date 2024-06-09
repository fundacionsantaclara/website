import React from "react";
import { useParams } from "react-router-dom";
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
    { image: noticia.carrousel1 },
    { image: noticia.carrousel2 },
    { image: noticia.carrousel3 },
    { image: noticia.carrousel4 },
  ];

  return (
    <>
      {noticia ? (
        <>
          <Carrousel
            images={[
              noticia.carrousel1,
              noticia.carrousel2,
              noticia.carrousel3,
              noticia.carrousel4,
            ]}
          />
          <div className="newsContainer">
            <h1 className="newTitle">{noticia.title}</h1>
            <p>{noticia.ubicacion}</p>
            <h2>{noticia.subtitle}</h2>
            <p className="newsP">{noticia.body}</p>
            <div className="TCcard-container">
              <div className="TCcards-wrapper">
                {TCcardData.map((card, index) => (
                  <TallerCarouselcard key={index} image={card.image} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>{t("loading_news")}</p>
      )}
    </>
  );
};

export default NewsPage;
