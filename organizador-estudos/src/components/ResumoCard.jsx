import "./ResumoCard.css";
function ResumoCard({ titulo, descricao, children }) {
  return (
    <article className="resumo-card">
      <h2>{titulo}</h2>

      <div className="resumo-card__valor">{children}</div>

      <p>{descricao}</p>
    </article>
  );
}

export default ResumoCard;
