import React, { useState } from "react";
import { aboutDropdown } from "./Dropdown-items";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { useTranslation } from "react-i18next";

function Dropdown({ closeMenu }) {
  const [dropdown, setDropdown] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <ul
        className={dropdown ? "about-submenu clicked" : "about-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {aboutDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path} className={item.cName} onClick={closeMenu}>
                {t(item.title)}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
