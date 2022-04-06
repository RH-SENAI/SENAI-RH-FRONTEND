import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Pages/Home/App';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import './index.css';
import Cadastro from './Pages/CadastrarUsuario/CadastrarUsuario';
import TelaAcesso from './Pages/Acesso/telaAcesso'
import CadastrarAtividades from './Pages/CadastrarAtividades/cadastrarAtividades.jsx';
import Login from './Pages/Login/login.jsx';
import AtualizarPerfil from './Pages/atualizarUsuario/atualizarUsuario';
import reportWebVitals from './reportWebVitals';
import Carometro from './Pages/Carometro/Carometro';
import Democratizacao from './Pages/Democratização/Democratizacao';
import DemocratizacaoAdm from './Pages/Democratização/democratizacaoAdm';
import reportWebVitals from './reportWebVitals';
import Redirecionar from './Pages/Redirecionar/redirecionar'
import RedirecionarADM from './Pages/Redirecionar/redirecionarADM'
// import reportWebVitals from './reportWebVitals';


const routing = (
  <Router>
    <div>
      <Switch>
      <Route path="/Carometro" component={Carometro}/>
      <Route exact path="/" component={TelaAcesso}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Cadastro" component={Cadastro}/> 
      <Route path ="AtualizarFuncionario" component={AtualizarPerfil}/>
      <Route  path="/CadastrarAtividades" component={CadastrarAtividades}/>
      <Route exact path="/Democratizacao" component={Democratizacao}/>
      <Route exact path="/DemocratizacaoAdm" component={DemocratizacaoAdm}/>
        {/* <Route exact path="/" component={HeaderFuncionario} /> */}
        {/* <Route  path="/Adm" component={HeaderAdm} /> */}
      <Route path="/Redirecionar" component={Redirecionar} />
      <Route path="/RedirecionarADM" component={RedirecionarADM} />
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
