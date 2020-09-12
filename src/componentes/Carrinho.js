import React, {useContext} from 'react';
import './Carrinho.scss';
import LojaContext from '../contexto/LojaContext';

export default function Carrinho() {
  const { loja } = useContext(LojaContext);

  const renderProduto = (p) => {
    return (
      <div key="p._id" className="produto">
        <img src={p.foto}/>
        <div className="dados">
          <p className="nome">{p.nome}</p>
          <p className="valor">R$ {p.valor.toFixed(2)}</p>
          <button onClick={(e) => loja.removerDoCarrinho(p)}>Remover</button>
        </div>
      </div>
    );
  };

  const calculaTotal = () => {
    let total = 0.0;
    loja.carrinho.forEach(p => total += p.valor);
    return total;
  };

  return (
    <div>
      <div className="carrinho">
        { loja.carrinho.map(renderProduto) }
      </div>
      <h3>Total: R$ {calculaTotal().toFixed(2)}</h3>
    </div>
  )
}
