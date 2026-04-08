function Topo({ setAbaAtiva }) {
  return (
    <header className="topo">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" 
        alt="Logo da lanchonete" 
        className="logo" 
      />

      <h1>🍔 Lanchonete Delícia</h1>

      <div className="menu-selecao">
        <button onClick={() => setAbaAtiva('produtos')}>Cardápio</button>
        <button onClick={() => setAbaAtiva('promocoes')}>Promoções</button>
        <button onClick={() => setAbaAtiva('contato')}>Contato</button>
      </div>
    </header>
  );
}

export default Topo;