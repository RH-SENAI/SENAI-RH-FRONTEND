import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Redirecionar from './Pages/Redirecionar/redirecionar.jsx';
import RedirecionarADM from './Pages/Redirecionar/redirecionarADM.jsx';

import './index.css';
import Cadastro from './Pages/CadastrarUsuario/CadastrarUsuario.jsx';
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Cadastro}/>
        <Route exact path="/redirecionar" component={Redirecionar}/>
        <Route exact path="/redirecionarAdm" component={RedirecionarADM}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

reportWebVitals();
