import { useState } from "react";
import './CSS/App.css';

import Topo from './Componentes/Topo.jsx';
import Rodape from './Componentes/Rodape.jsx';
import Slideshow from "./Componentes/slide.jsx";

import CartaoProduto from './Componentes/cartao_produto.jsx';
import Promocao from './Componentes/promocao.jsx';

import produtos from './Dados/dados_produtos';
import contato from './Dados/contato';

function App() {

  const [abaAtiva, setAbaAtiva] = useState('produtos');

  return (
    <>
      <Topo setAbaAtiva={setAbaAtiva} />

      <Slideshow />

      {/* CARDÁPIO */}
      {abaAtiva === 'produtos' && (
        <>
          <h2 style={{ textAlign: 'center' }}>🍔 Cardápio</h2>
          <div className='container'>
            {produtos.map((produto) => (
              <CartaoProduto
                key={produto.id}
                imagem={produto.imagem}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
              />
            ))}
          </div>
        </>
      )}

      {/* PROMOÇÕES */}
      {abaAtiva === 'promocoes' && (
        <>
          <h2 style={{ textAlign: 'center' }}>🔥 Promoções</h2>
          <div className='container'>
            {produtos
              .filter((p) => p.promocao)
              .map((produto) => (
                <Promocao
                  key={produto.id}
                  imagem={produto.imagem}
                  nome={produto.nome}
                  preco={produto.preco}
                />
              ))}
          </div>
        </>
      )}

      {/* CONTATO */}
      {abaAtiva === 'contato' && (
        <>
          <h2 style={{ textAlign: 'center' }}>📞 Contato</h2>
          <div className='container'>
            <p><strong>Telefone:</strong> {contato.telefone}</p>
            <p><strong>Email:</strong> {contato.email}</p>
            <p><strong>Endereço:</strong> {contato.endereco}</p>
          </div>
        </>
      )}

      <Rodape />
    </>
  );
}

export default App;