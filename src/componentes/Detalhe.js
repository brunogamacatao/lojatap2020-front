import React, { useEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './Detalhe.scss';
import LojaContext from '../contexto/LojaContext';

export default function Detalhe() {
  const { id } = useParams();
  const [ produto, setProduto ] = useState({});
  const history = useHistory();
  const { loja } = useContext(LojaContext);

  useEffect(() => {
    async function fetchData() {
      setProduto(await loja.findProdutoById(id));
    }
    fetchData();
  }, []);

  return (
    <div className="detalhe">
      <img src={produto.foto}/>
      <div className="dados">
        <h1>{produto.nome}</h1>
        <p className="descricao">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim scelerisque quam, venenatis sodales tellus hendrerit ac. Duis nec dolor feugiat metus facilisis volutpat vel vitae dui. Duis placerat porttitor posuere. Ut urna nibh, semper faucibus condimentum eget, finibus malesuada ex. Vivamus blandit velit ac quam commodo ullamcorper. Ut suscipit odio elit, et tempus urna vestibulum sed. Donec eget elit massa.
        </p>
        <h3>R$ {produto.valor}</h3>
        <button onClick={(e) => loja.adicionarAoCarrinho(produto)}>Comprar</button>
        <button onClick={(e) => history.push("/")}>Voltar</button>
      </div>
    </div>
  )
}
