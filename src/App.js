import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.scss';
import ListaDeProdutos from './componentes/ListaDeProdutos';

const URL = 'http://localhost:5000/produtos';

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(async () => {
    let res = await axios.get(URL);
    setProdutos(res.data);
  }, []);

  const renderProdutoCarrinho = (p) => {
    return (
      <li key={p._id}>{p.nome}</li>
    );
  };

  const adicionarAoCarrinho = (p) => {
    setCarrinho([...carrinho, p]);
  };

  return (
    <>
      <h1>Loja</h1>
      <ListaDeProdutos produtos={produtos} onComprar={adicionarAoCarrinho}/>
      <hr/>
      <ol>
        {carrinho.map(renderProdutoCarrinho)}
      </ol>
    </>
  );
};

export default App;
