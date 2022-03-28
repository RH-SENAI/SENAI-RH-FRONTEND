import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './index.css';
import Cadastro from './Pages/CadastrarUsuario/CadastrarUsuario';
import TelaAcesso from './Pages/Acesso/telaAcesso'
import CadastrarAtividades from './Pages/CadastrarAtividades/cadastrarAtividades.jsx';
import {Login} from './Pages/Login/login.jsx';
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={TelaAcesso}/>
        <Route path="/Cadastro" component={Cadastro}/> 
        <Route exact path="/Cadastrar" component={CadastrarAtividades}/>

      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

reportWebVitals();
