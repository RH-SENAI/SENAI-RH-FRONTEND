import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import './Assets/css/gp1style.css';
import reportWebVitals from './reportWebVitals';
import CadastrarAtividades from './Pages/CadastrarAtividades/cadastrarAtividades';
import ValidarAtividades from './Pages/ValidarAtividades/validarAtividades';
import AlterarSenha from './Pages/AlterarSenha/alterarSenha';
import Login from './Pages/Login/login';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = {Login} /> 
        <Route path = "/CadastrarAtividades" component = {CadastrarAtividades}/>
        <Route path = "/ValidarAtividades" component = {ValidarAtividades}/>
        <Route path = "/AlterarSenha" component = {AlterarSenha}/>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  routing, document.getElementById('root')
);
reportWebVitals();
