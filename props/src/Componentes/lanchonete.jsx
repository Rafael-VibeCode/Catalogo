import produtos from "../Dados/dados_produtos";
import CartaoProduto from "./cartao_produto";

function Lanchonete() {
  return (
    <div className="pagina">
      <h1 className="titulo">🍔 Nossa Lanchonete</h1>

      <div className="container">
        {produtos.map((produto) => (
          <CartaoProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </div>
  );
}

export default Lanchonete;