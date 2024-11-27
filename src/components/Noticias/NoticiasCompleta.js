import React from "react";
import { useTranslation } from "react-i18next";
import "./Noticias.css";
import { Link } from "react-router-dom";

const NoticiasCompleta = () => {
  const { t } = useTranslation();
  const noticias = t("news", { returnObjects: true });

  const noticiasOrdenadas = noticias.sort((a, b) => b.id - a.id);

  return (
    <div className="noticias-card-container">
      <h1 className="noticia-title">{t("latest_news")}</h1>
      <div className="noticias-card-list completa-list">
        {noticiasOrdenadas.map((noticia) => (
          <div className="noticias-card" key={noticia.id}>
            <Link to={`/News/${noticia.id}`}>
              <img src={noticia.carrousel1} alt={noticia.title} />
              <h2>{noticia.title}</h2>
              <p>{noticia.subtitle}</p>
              <p className="noticia-date">
                <strong>{t("date")}:</strong> {noticia.date}
              </p>
              <p className="noticia-ubicacion">
                <strong>{t("location")}:</strong> {noticia.ubicacion}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticiasCompleta;
