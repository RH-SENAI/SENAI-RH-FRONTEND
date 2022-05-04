import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css'
// import App from './Pages/Home/App';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HeaderFuncionario from './components/header/headerFuncionario';
import HeaderAdm from './components/header/headerAdm';
import CursosRapidos from './pages/cursos/cursosRapidos';
import CadastrarCursos from './pages/cursos/cadastrarCursos';
import ListaBeneficios from './pages/vantagens/listaBeneficios';
import CadastroBeneficios from './pages/vantagens/cadastroBeneficio';
import CadastrarEmpresa from './pages/empresas/cadastrarEmpresas';
import Perfil from './pages/perfil/perfil';
import MeusFavoritos from './pages/favorito/favorito';
import RequisicaoFuncionario from './pages/requisicaoFuncionarios/requisicaoFuncionario';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HeaderFuncionario} />
        <Route  path="/adm" component={HeaderAdm} />
        <Route  path="/cursosRapidos" component={CursosRapidos} />
        <Route  path="/cadastrarCursos" component={CadastrarCursos} />
        <Route  path="/beneficios" component={ListaBeneficios} />
        <Route  path="/cadastrarEmpresa" component={CadastrarEmpresa} />
        <Route  path="/perfil" component={Perfil} />
        <Route  path="/meusFavoritos" component={MeusFavoritos} />
        <Route  path="/requisicaoFuncionario" component={RequisicaoFuncionario} />
        <Route  path="/beneficiosCadastrar" component={CadastroBeneficios} />
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
