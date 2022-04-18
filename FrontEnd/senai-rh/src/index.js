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

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HeaderFuncionario} />
        <Route  path="/Adm" component={HeaderAdm} />
        <Route  path="/CursosRapidos" component={CursosRapidos} />
        <Route  path="/CadastrarCursos" component={CadastrarCursos} />
        <Route  path="/Beneficios" component={ListaBeneficios} />
        <Route  path="/BeneficiosCadastrar" component={CadastroBeneficios} />
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
