import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import SegurancaService from '../servicos/SegurancaService';
import api from '../api';
import LojaContext from '../contexto/LojaContext';

const formVazio = () => {
  return {
    email: '',
    senha: ''
  };
};

export default function Login() {
  const [form, setForm] = useState(formVazio());
  const history = useHistory();
  const { seguranca } = useContext(LojaContext);

  const setValor = (evento, campo) => {
    setForm({...form, [campo]: evento.target.value});
  }; 

  const entrar = async () => {
    const {data} = await api.post('/login', form);
    if (data.auth) {
      SegurancaService.setToken(data.token);
      seguranca.setAutenticado(true);
      history.push('/interna');
    } else {
      alert('Erro: ' + data.mensagem);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Login</legend>
        <p>
          <label>Email</label>
          <input type="email" value={form.email} onChange={(e) => setValor(e, 'email')}/>
        </p>
        <p>
          <label>Senha</label>
          <input type="password" value={form.senha} onChange={(e) => setValor(e, 'senha')}/>
        </p>
        <p>
          <button onClick={(e) => entrar()}>Entrar</button>
        </p>
      </fieldset>
    </div>
  )
}
