import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.scss';
import ListaDeProdutos from './componentes/ListaDeProdutos';
import PaginaNaoEncontrada from './componentes/PaginaNaoEncontrada';
import Carrinho from './componentes/Carrinho';
import Detalhe from './componentes/Detalhe';
import Rodape from './componentes/Rodape';
import Cabecalho from './componentes/Cabecalho';
import Login from './componentes/Login';
import Interna from './componentes/Interna';
import RotaPrivada from './componentes/RotaPrivada';
import Modal from './componentes/Modal';
import {LojaProvider} from './contexto/LojaContext';

const App = () => {
  return (
    <LojaProvider>
      <Router>
        <Cabecalho/>
        <main role="main" className="flex-shrink-0">
          <div className="container">
            <Switch>
              <Route path="/" exact={true}>
                <ListaDeProdutos/>
              </Route>
              <Route path="/detalhe/:id"><Detalhe/></Route>
              <Route path="/carrinho">
                <Carrinho/>
              </Route>
              <Route path="/login"><Login/></Route>
              <RotaPrivada path="/interna" component={Interna} />
              <Route path="*"><PaginaNaoEncontrada/></Route>
            </Switch>
          </div>
        </main>
        <Rodape/>
        <Modal/>
      </Router>
    </LojaProvider>
  );
};

export default App;
