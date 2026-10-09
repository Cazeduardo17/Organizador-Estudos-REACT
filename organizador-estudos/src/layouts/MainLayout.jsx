import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

function MainLayout() {
  return (
    <div>
      <Header />

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;