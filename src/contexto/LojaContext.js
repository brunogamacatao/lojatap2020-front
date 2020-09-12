import React, {useState, useEffect} from 'react';
import SegurancaService from '../servicos/SegurancaService';
import { findProdutos, findProdutoById } from '../servicos/ProdutosService';

const $ = window.$;
const LojaContext = React.createContext();

export const LojaProvider = ({children}) => {
  const [autenticado, setAutenticado] = useState(SegurancaService.isAutenticado());
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [tituloModal, setTituloModal] = useState('');
  const [textoModal, setTextoModal] = useState('');
  
  useEffect(() => {
    exibirModal('Loja', 'Carregando produtos ...');
    async function fetchData() {
      setProdutos(await findProdutos());
      esconderModal();
    }
    fetchData();
  }, []);

  const exibirModal = (titulo, texto) => {
    setTituloModal(titulo);
    setTextoModal(texto);
    $('#lojaModal').modal('show');
  };

  const esconderModal = () => {
    setTimeout(() => $('#lojaModal').modal('hide'), 500);
  };

  const adicionarAoCarrinho = (p) => {
    exibirModal('Loja', 'Adicionando ...');
    setCarrinho([...carrinho, p]);
    esconderModal();
  };

  const removerDoCarrinho = (p) => {
    let indice = carrinho.findIndex(x => x._id === p._id);
    if (indice >= 0) {
      setCarrinho([...carrinho.slice(0, indice), ...carrinho.slice(indice + 1)]);
    }
  };

  return (
    <LojaContext.Provider value={{
      seguranca: {autenticado, setAutenticado},
      loja: {produtos, setProdutos, adicionarAoCarrinho, 
            carrinho, setCarrinho, removerDoCarrinho,
            findProdutoById},
      modal: {exibirModal, esconderModal, tituloModal, textoModal}
    }}>
      {children}
    </LojaContext.Provider>
  );
};

export default LojaContext;