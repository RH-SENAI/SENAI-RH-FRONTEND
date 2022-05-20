import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import './Assets/css/gp1style.css';
import reportWebVitals from './reportWebVitals';
import CadastrarAtividades from './Pages/CadastrarAtividades/cadastrarAtividades';
import ValidarAtividades from './Pages/ValidarAtividades/validarAtividades';
import AlterarSenha from './Pages/AlterarSenha/alterarSenha';
import AlterarSenhaRec from './Pages/AlterarSenha/alterarSenhaRec';
import esqueciMinhaSenha from './Pages/EsqueciMinhaSenha/esqueciMinhaSenha'
import Ranking from './Pages/Ranking/rankingUsuarios'
import Login from './Pages/Login/login.jsx';
import Atividades from './Pages/TodasAtividades/todasAtividades.jsx';
import Redirecionar from './Pages/Redirecionamento/redirecionamento.jsx';
import { parseJwt, usuarioAutenticado } from './services/auth';

const Logado = ({component: Component}) => (
  <Route
    render={(props) =>
      usuarioAutenticado() ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/"/>
      )}
  />
);

const PermissaoAdm = ({component: Component}) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '2' ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/"/>
      )}
  />
);
const PermissaoFuncionario = ({component: Component}) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/"/>
      )}
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = {Login} /> 
        <PermissaoAdm path = "/CadastrarAtividades" component = {CadastrarAtividades}/>
        <PermissaoAdm path = "/ValidarAtividades" component = {ValidarAtividades}/>
        <PermissaoAdm path = "/TodasAtividades" component={Atividades}/>
        <PermissaoAdm path = "/RankingUsuarios" component={Ranking}/>
        <Route path = "/AlterarSenhaRec" component = {AlterarSenhaRec}/>
        <Route path = "/EsqueciMinhaSenha" component={esqueciMinhaSenha}/>
        <Route path="/Redirecionamento" component = {Redirecionar} /> 
        <Logado path="/AlterarSenha" component = {AlterarSenha}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  routing, document.getElementById('root')
);
reportWebVitals();
