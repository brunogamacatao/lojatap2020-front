import React from 'react';
import './ListaDeProdutos.scss';

const ListaDeProdutos = ({produtos, onComprar}) => {
  const renderProduto = (p) => {
    return (
      <div className="produto" key={p._id}>
        <p className="nome">{p.nome}</p>
        <img src={p.foto}/>
        <p className="preco">R$ {p.valor.toFixed(2)}</p>
        <button onClick={(e) => onComprar(p)}>Comprar</button>
      </div>
    );
  };

  return (
    <div className="produtos">
      {produtos.map(renderProduto)}
    </div>
  );
};

export default ListaDeProdutos;