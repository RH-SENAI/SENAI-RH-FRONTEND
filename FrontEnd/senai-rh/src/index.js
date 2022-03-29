import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Pages/Home/App';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './index.css';
import Cadastro from './Pages/CadastrarUsuario/CadastrarUsuario';
import TelaAcesso from './Pages/Acesso/telaAcesso'
import CadastrarAtividades from './Pages/CadastrarAtividades/cadastrarAtividades.jsx';
import Login from './Pages/Login/login.jsx';
import AtualizarPerfil from './Pages/atualizarUsuario/atualizarUsuario';
import reportWebVitals from './reportWebVitals';
import Democratizacao from './Pages/Democratização/Democratizacao';
import HeaderFuncionario from './components/Header/headerFuncionario';
import HeaderAdm from './components/Header/headerAdm';
//import CursosRapidos from './Pages/Cursos/cursosRapidos';

const routing = (
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component={AtualizarPerfil}></Route>
      {/* <Route exact path="/" component={TelaAcesso}></Route> */}
      <Route path="/Login" component={Login}></Route>
      <Route path="/Cadastro" component={Cadastro}/> 
      {/* <Route exact path="/CadastrarAtividades" component={CadastrarAtividades}/> */}
      {/* <Route  path="/" component={Democratizacao}/> */}
      {/* <Route  path="/Adm" component={HeaderAdm} /> */}
      {/* <Route  path="/CursosRapidos" component={CursosRapidos} /> */}
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
