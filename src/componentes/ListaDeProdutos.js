import React, {useContext} from 'react';
import './ListaDeProdutos.scss';
import { useHistory } from 'react-router-dom';
import LojaContext from '../contexto/LojaContext';

const ListaDeProdutos = () => {
  const history = useHistory();
  const { loja } = useContext(LojaContext);

  const exibirDetalhe = (p) => {
    history.push('/detalhe/' + p._id);
  };

  const renderProduto = (p) => {
    return (
      <div className="produto" key={p._id}>
        <p className="nome">{p.nome}</p>
        <img src={p.foto} onClick={(e) => exibirDetalhe(p)} />
        <p className="preco">R$ {p.valor.toFixed(2)}</p>
        <button onClick={(e) => loja.adicionarAoCarrinho(p)}>Comprar</button>
      </div>
    );
  };

  return (
    <div className="produtos">
      {loja.produtos.map(renderProduto)}
    </div>
  );
};

export default ListaDeProdutos;