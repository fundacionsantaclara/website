import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navi from "./components/Navigation/Navi";
import Home from "./components/Homepage/Home";
import Transparencia from "./components/Pages/Transparencia";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
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
import Comunidad from "./components/Pages/Comunidad";
import NoticiasCompleta from './components/Noticias/NoticiasCompleta';
import EventosCompleta from "./components/Pages/EventosCompleta";

function App() {
  return (
    <div className="App">
      <Navi />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/proyectos" element={<Cards />} />
        <Route path="/plataforma" element={<Plataforma />} />
        <Route path="/residencia" element={<Residencia />} />
        <Route path="/huerto" element={<Huerto />} />
        <Route path="/piso" element={<Pisos />} />
        <Route path="/taller" element={<Taller />} />
        <Route path="/duchas" element={<Duchas />} />
        <Route path="/cosidor" element={<Cosidor />} />
        <Route path="/oftamologia" element={<Oftamologia />} />
        <Route path="/invulnerables" element={<Invulnerables />} />
        <Route path="/corridores" element={<Corridores />} />
        <Route path="/josoc" element={<Josoc />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/fundación" element={<Fundacion />} />
        <Route path="/objectivos" element={<Objectivo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/voluntarios" element={<Voluntarios />} />
        <Route path="/News/:id" element={<NewsPage />} />
        <Route path="/NoticiasCompleta" element={<NoticiasCompleta />} />
        <Route path="/Comunidad" element={<Comunidad />} />
        <Route path="/EventosCompleta" element={<EventosCompleta />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
