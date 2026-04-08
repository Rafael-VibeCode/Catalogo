import { useState, useEffect } from "react";

function Slideshow() {
  const imagens = [
    "https://images.unsplash.com/photo-1550547660-d9450f859349",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximoSlide = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

  const voltarSlide = () => {
    setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  useEffect(() => {
    const intervalo = setInterval(proximoSlide, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="slideshow">
      <img
        src={imagens[indiceAtual]}
        alt="Banner"
        className="banner"
      />

      <button className="btn-slide esquerda" onClick={voltarSlide}>❮</button>
      <button className="btn-slide direita" onClick={proximoSlide}>❯</button>
    </div>
  );
}

export default Slideshow;