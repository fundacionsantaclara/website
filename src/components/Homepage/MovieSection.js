import React from "react";
import "./MovieSection.css";
import { useTranslation } from "react-i18next";

const MovieSection = () => {
  const { t } = useTranslation();

  return (
    <div className="video-page-full">
      <h1 className="video-title">{t("corredores")}</h1>

      <div className="videos-container">
        <div className="video-card">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/GOSowwpVx_8"
              title="Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="video-card">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/K6L3GU3kJrM"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
