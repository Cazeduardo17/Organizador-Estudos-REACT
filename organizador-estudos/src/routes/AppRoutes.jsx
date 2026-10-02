import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";

import Home from "../pages/Home.jsx";
import Disciplinas from "../pages/Disciplinas.jsx";
import DetalhesDisciplina from "../pages/DetalhesDisciplina.jsx";
import Tarefas from "../pages/Tarefas.jsx";
import Sobre from "../pages/Sobre.jsx";
import NotFound from "../pages/NotFound.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="disciplinas" element={<Disciplinas />} />

        <Route
          path="disciplinas/:id"
          element={<DetalhesDisciplina />}
        />

        <Route path="tarefas" element={<Tarefas />} />

        <Route path="sobre" element={<Sobre />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;