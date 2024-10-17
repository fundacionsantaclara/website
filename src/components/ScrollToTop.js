import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Desplaza a la parte superior
  }, [pathname]);  // Se ejecuta cuando cambia la ruta (pathname)

  return null;
}

export default ScrollToTop;