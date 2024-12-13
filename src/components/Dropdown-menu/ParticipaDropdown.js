import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Dropdown.css";
import { participarDropdown } from "./Dropdown-items";
import { useTranslation } from "react-i18next";

function ParticipaDropdown({ closeMenu }) {
  const [dropdown, setDropdown] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <ul
        className={dropdown ? "about-submenu clicked" : "about-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
       {participarDropdown.map((item) => {
  const isExternal = item.path.startsWith("http");
  return (
    <li key={item.id}>
      {isExternal ? (
        <a
          href={item.path}
          className={item.cName}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {t(item.title)}
        </a>
      ) : (
        <Link
          to={item.path}
          className={item.cName}
          onClick={closeMenu}
        >
          {t(item.title)}
        </Link>
      )}
    </li>
  );
})}
      </ul>
    </>
  );
}

export default ParticipaDropdown;
