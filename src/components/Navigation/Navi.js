import React, { useState, useEffect } from "react";
import "./Navi.css";
import logo from "../Fcimages/fsantaclara.png";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown-menu/Dropdown";
import ParticipaDropdown from "../Dropdown-menu/ParticipaDropdown";
import { MenuList } from "../Menulist/Menulist";
import Languagebtn from "../Pages/TranslateBtn";
import { useTranslation } from "react-i18next";

function Navi() {
  const { t } = useTranslation();
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 969) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <Languagebtn />
      <nav className="Main-navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="menu-icons" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {MenuList.map((item, index) => {
              const isExternal = item.isExternal; // Detectar enlaces externos

              if (item.title === "nosotros") {
                return (
                  <li
                    key={index}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link
                      to={item.url}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      {t(item.title)}
                    </Link>
                    {dropdown && <Dropdown closeMenu={closeMobileMenu} />}
                  </li>
                );
              } else if (item.title === "participa") {
                return (
                  <li
                    key={index}
                    className={item.cName}
                    onMouseEnter={() => setDropdown2(true)}
                    onMouseLeave={() => setDropdown2(false)}
                  >
                    <Link
                      to={item.url}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      {t(item.title)}
                    </Link>
                    {dropdown2 && (
                      <ParticipaDropdown closeMenu={closeMobileMenu} />
                    )}
                  </li>
                );
              }

              return (
                <li key={index} className={item.cName}>
                  {isExternal ? (
                    <a
                      href={item.url}
                      className="nav-links"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                    >
                      {t(item.title)}
                    </a>
                  ) : (
                    <Link
                      to={item.url}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      {t(item.title)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          {/* {button && (
            <a
              href="https://www2.caixabank.es/apl/donativos/detalle_es.html?DON_codigoCausa=715"
              className="button donativo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{t("donativo")}</strong>
            </a>
          )} */}
          {button && (
            <Link to="/donate" className="button donativo">
              <strong>{t("donativo")}</strong>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navi;
