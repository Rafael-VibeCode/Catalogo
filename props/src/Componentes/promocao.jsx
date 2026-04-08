function Promocao({ nome, preco, imagem }) {
  return (
    <div className="card promocao">
      <img src={imagem} alt={nome} />

      <div className="card-body">
        <h2>{nome}</h2>

        <p className="promo-texto">🔥 Em promoção!</p>

        <div className="card-footer">
          <span className="preco">R$ {preco.toFixed(2)}</span>
          <button className="btn">Pedir</button>
        </div>
      </div>
    </div>
  );
}

export default Promocao;