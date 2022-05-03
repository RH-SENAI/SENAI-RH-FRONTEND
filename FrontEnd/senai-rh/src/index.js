import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './Assets/css/gp1style.css';
import reportWebVitals from './reportWebVitals';
import CadastrarAtividades from './Pages/CadastrarAtividades/cadastrarAtividades';
import ValidarAtividades from './Pages/ValidarAtividades/validarAtividades';
import AlterarSenha from './Pages/AlterarSenha/alterarSenha';
import AlterarSenhaRec from './Pages/AlterarSenha/alterarSenhaRec';
import esqueciMinhaSenha from './Pages/EsqueciMinhaSenha/esqueciMinhaSenha'
import Login from './Pages/Login/login';
import Atividades from './Pages/TodasAtividades/todasAtividades'

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = {Login} /> 
        <Route path = "/cadastrarAtividades" component = {CadastrarAtividades}/>
        <Route path = "/validarAtividades" component = {ValidarAtividades}/>
        <Route path = "/AlterarSenha" component = {AlterarSenha}/>
        <Route path = "/AlterarSenhaRec" component = {AlterarSenhaRec}/>
        <Route path = "/EsqueciMinhaSenha" component={ esqueciMinhaSenha}/>
        <Route path = "/EsqueciMinhaSenha" component={ esqueciMinhaSenha}/>
        <Route path = "/TodasAtividades" component={Atividades}/>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  routing, document.getElementById('root')
);
reportWebVitals();
