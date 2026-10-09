import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page-shell">
      <section className="not-found-card">
        <p className="page-header__eyebrow">Erro 404</p>
        <h1 className="page-title">Página não encontrada</h1>
        <p className="page-description">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link className="button-link" to="/">
          Voltar ao início
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
