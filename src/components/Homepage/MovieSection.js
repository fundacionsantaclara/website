import React from "react";
import "./MovieSection.css";
import video1 from "../Fcimages/video/ucvideo1.mov";
import { useTranslation } from "react-i18next";

const MovieSection = () => {
  const { t } = useTranslation();
  return (
    <div className="video-page-full">
      <h1 className="video-title">{t("corredores")}</h1>

      <div className="video-wrapper">
        <video controls>
          <source src={video1} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MovieSection;
