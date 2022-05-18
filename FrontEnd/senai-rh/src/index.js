import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Pages/Home/App';
import {
  Route,
  BrowserRouter as Router, Redirect, 
  Switch
} from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';
import './index.css';
import cadastro from './pages/cadastrarUsuario/cadastrarUsuario';
import TelaAcesso from './pages/acesso/telaAcesso'
import atualizarPerfil from './pages/atualizarUsuario/atualizarUsuario';
import reportWebVitals from './reportWebVitals';
import democratizacao from './pages/democratizacao/democratizacao';
import democratizacaoAdm from './pages/democratizacao/democratizacaoAdm';
import redirecionar from './pages/redirecionar/redirecionar';
import redirecionarADM from './pages/redirecionar/redirecionarADM';
import decisao from './pages/democratizacao/decisoes';
import rankingAcompanhar from './pages/ranking/rankingAcompanhar';
import Carometro from './pages/carometro/carometro';
import Login from './pages/login/login.jsx';
import Dashboard from './pages/dashboard/dashboardFuncionario';
// import reportWebVitals from './reportWebVitals';

const Logado = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() ?  (
        <Component {...props} />
      ) : (
        <Redirect to="Login" />
      )
    }
  />
);
const PermissaoAdm = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        <Component {...props} />
      ) : (
        <Redirect to="Login" />
      )
    }
  />
);
const PermissaoFuncionario = ({ component: Component }) => (
 <Route
   render={(props) =>
     usuarioAutenticado() && parseJwt().role === '2' ? (
        <Component {...props} />
      ) : (
        <Redirect to="Login" />
     )
   }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
      <PermissaoAdm path="/carometro" component={Carometro}/>
      <Route exact path="/" component={TelaAcesso}/>
      <Route path="/login" component={Login}/>
      <PermissaoAdm path="/cadastro" component={cadastro}/> 
      <PermissaoAdm path ="/atualizar" component={atualizarPerfil}/>
      <PermissaoFuncionario exact path="/democratizacao/:iddecisao" component={democratizacao}/>
      <PermissaoAdm exact path="/democratizacaoAdm" component={democratizacaoAdm}/>
      <Logado path="/redirecionar" component={redirecionar} />
      <Logado path="/dashboard" component={Dashboard} />
      <Logado path="/redirecionarADM" component={redirecionarADM} />
      <PermissaoFuncionario path="/decisao" component={decisao} />
      <Logado path="/rankingAcompanhar" component={rankingAcompanhar} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
