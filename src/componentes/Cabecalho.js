import React, {useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import SegurancaService from '../servicos/SegurancaService';
import LojaContext from '../contexto/LojaContext';

export default function Cabecalho() {
  const history = useHistory();
  const { seguranca, loja } = useContext(LojaContext);

  const logout = () => {
    SegurancaService.removeToken();
    seguranca.setAutenticado(false);
    history.push("/");
  };

  const exibeLinksSeguros = () => {
    return (
      <li className="nav-item active">
        <a onClick={(e) => logout()} className="nav-link" tabindex="-1" aria-disabled="true" href="#">Logout</a>
      </li>
    );
  };

  const exibeLinkCarrinho = () => {
    return (
      <li className="nav-item active">
        <Link className="nav-link" to="/carrinho">({loja.carrinho.length}) 🛒</Link>
      </li>
    );
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Minha Loja</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            { seguranca.autenticado ? exibeLinksSeguros() : '' }
            { loja.carrinho.length > 0 ? exibeLinkCarrinho() : '' }
          </ul>
        </div>
      </nav>
    </header>
  )
}
