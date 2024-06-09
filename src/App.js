import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navi from "./components/Navigation/Navi";
import Home from "./components/Homepage/Home";
import Transparencia from "./components/Pages/Transparencia";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Plataforma from "./components/Pages/Plataforma";
import Residencia from "./components/Pages/Residencia";
import Huerto from "./components/Pages/Huerto";
import Pisos from "./components/Pages/Pisos";
import Taller from "./components/Pages/Taller";
import Duchas from "./components/Pages/Duchas";
import Cosidor from "./components/Pages/Cosidor";
import Oftamologia from "./components/Pages/Oftamologia";
import Invulnerables from "./components/Pages/Invulnerables";
import Corridores from "./components/Pages/Corridores";
import Josoc from "./components/Pages/Josoc";
import Equipo from "./components/Pages/Equipo";
import Fundacion from "./components/Pages/Fundacion";
import Objectivo from "./components/Pages/Objectivo";
import Contacto from "./components/Pages/Contact";
import Voluntarios from "./components/Pages/Voluntarios";
import NewsPage from "./components/Noticias/NewsPage";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/transparencia" element={<Transparencia />} />
      </Routes>
      <Routes>
        <Route path="/proyectos" element={<Cards />} />
      </Routes>
      <Routes>
        <Route path="/plataforma" element={<Plataforma />} />
      </Routes>
      <Routes>
        <Route path="/residencia" element={<Residencia />} />
      </Routes>
      <Routes>
        <Route path="/huerto" element={<Huerto />} />
      </Routes>
      <Routes>
        <Route path="/piso" element={<Pisos />} />
      </Routes>
      <Routes>
        <Route path="/taller" element={<Taller />} />
      </Routes>
      <Routes>
        <Route path="/duchas" element={<Duchas />} />
      </Routes>
      <Routes>
        <Route path="/cosidor" element={<Cosidor />} />
      </Routes>
      <Routes>
        <Route path="/oftamologia" element={<Oftamologia />} />
      </Routes>
      <Routes>
        <Route path="/invulnerables" element={<Invulnerables />} />
      </Routes>
      <Routes>
        <Route path="/corridores" element={<Corridores />} />
      </Routes>
      <Routes>
        <Route path="/josoc" element={<Josoc />} />
      </Routes>
      <Routes>
        <Route path="/equipo" element={<Equipo />} />
      </Routes>
      <Routes>
        <Route path="/fundación" element={<Fundacion />} />
      </Routes>
      <Routes>
        <Route path="/objectivos" element={<Objectivo />} />
      </Routes>
      <Routes>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Routes>
        <Route path="/voluntarios" element={<Voluntarios />} />
      </Routes>
      <Routes>
        <Route path="/News/:id" element={<NewsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
