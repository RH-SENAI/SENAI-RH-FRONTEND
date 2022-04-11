import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './index.css';
// import App from './Pages/Home/App';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HeaderFuncionario from './components/Header/headerFuncionario';
import CadastrarCursos from './Pages/Cursos/cadastrarCursos';
import ListaBeneficios from './Pages/Beneficios/listaBeneficios';
import CadastroBeneficios from './Pages/Beneficios/cadastroBeneficio';
import './index.css';
import Cadastro from './Pages/CadastrarUsuario/CadastrarUsuario';
import TelaAcesso from './Pages/Acesso/telaAcesso'
import CadastrarAtividades from './Pages/CadastrarAtividades/cadastrarAtividades.jsx';
import Login from './Pages/Login/login.jsx';
import reportWebVitals from './reportWebVitals';
import Democratizacao from './Pages/Democratização/Democratizacao';
// import reportWebVitals from './reportWebVitals';
import HeaderAdm from './Components/Header/headerAdm';
import CursosRapidos from './Pages/Cursos/cursosRapidos';
import Redirecionar from './Pages/Redirecionar/redirecionar';
import RedirecionarADM from './Pages/Redirecionar/redirecionarADM';
import HomeVantagens from './Pages/HomeVantagens/homeVantagens';
import PerfilFavoritos from './Pages/PerfilFavoritos/perfilFavoritos';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/Funcionario" component={HeaderFuncionario} />
        <Route path="/CursosRapidos" component={CursosRapidos} />
        <Route path="/CadastrarCursos" component={CadastrarCursos} />
        <Route path="/Beneficios" component={ListaBeneficios} />
        <Route path="/BeneficiosCadastrar" component={CadastroBeneficios} />
        <Route path="/telaAcesso" component={TelaAcesso}></Route>
        <Route path="/" component={Login}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route path="/Cadastro" component={Cadastro} />
        <Route path="/Redirecionar" component={Redirecionar} />
        <Route path="/RedirecionarADM" component={RedirecionarADM} />
        <Route path="/CadastrarAtividades" component={CadastrarAtividades} />
        <Route path="/Adm" component={HeaderAdm} />
        <Route path="/CursosRapidos" component={CursosRapidos} />
        <Route path="/HomeVantagens" component={HomeVantagens} />
        <Route path="/PerfilFavoritos" component={PerfilFavoritos} />
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
