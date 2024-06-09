import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Noticias.css";
import { Link } from "react-router-dom";

const Noticias = () => {
  const { t } = useTranslation();
  const noticias = t("news", { returnObjects: true });

  return (
    <div className="noticias-card-container">
      <h1 className="noticia-title">{t("latest_news")}</h1>
      <div className="noticias-card-list">
        {noticias.map((noticia) => (
          <div className="noticias-card" key={noticia.id}>
            <Link to={`/News/${noticia.id}`}>
              <img src={noticia.carrousel1} alt={noticia.title} />
              <h2>{noticia.title}</h2>
              <p>{noticia.subtitle}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
