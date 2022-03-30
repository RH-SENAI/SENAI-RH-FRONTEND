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
import Login from './Pages/Login/login';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = {Login} /> 
        <Route path = "/cadastrarAtividades" component = {CadastrarAtividades}/>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  routing, document.getElementById('root')
);
reportWebVitals();
