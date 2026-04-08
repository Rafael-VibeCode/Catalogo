function CartaoProduto({ nome, preco, descricao, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} className="card-img" />

      <div className="card-body">
        <h2>{nome}</h2>
        <p>{descricao}</p>

        <div className="card-footer">
          <span className="preco">R$ {preco.toFixed(2)}</span>
          <button className="btn">Pedir</button>
        </div>
      </div>
    </div>
  );
}

export default CartaoProduto;