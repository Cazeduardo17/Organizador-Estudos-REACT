import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page-shell">
      <div className="home-hero">
        <p className="page-header__eyebrow">Seu espaço de aprendizagem</p>
        <h1 className="page-title">Organize seus estudos com mais leveza.</h1>
        <p className="page-description">
          Reúna suas disciplinas e tarefas em um só lugar para acompanhar sua
          rotina acadêmica e manter o foco no que importa.
        </p>
        <div className="home-hero__actions">
          <Link className="button-link" to="/disciplinas">
            Explorar disciplinas
          </Link>
          <Link className="button-link button-link--secondary" to="/tarefas">
            Ver tarefas
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
