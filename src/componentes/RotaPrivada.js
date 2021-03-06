import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import SegurancaService from '../servicos/SegurancaService';

const RotaPrivada = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    if (!SegurancaService.isAutenticado()) {
      return <Redirect to={{ pathname: '/login', 
                       state: { from: props.location } }} />
    }

    return <Component {...props} />
  }}/>
);

export default RotaPrivada;