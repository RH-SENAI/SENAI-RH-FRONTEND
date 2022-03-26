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
import HeaderFuncionario from './Components/Header/headerFuncionario';
import HeaderAdm from './Components/Header/headerAdm';
import CursosRapidos from './Pages/Cursos/cursosRapidos';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HeaderFuncionario} />
        <Route  path="/Adm" component={HeaderAdm} />
        <Route  path="/CursosRapidos" component={CursosRapidos} />
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
