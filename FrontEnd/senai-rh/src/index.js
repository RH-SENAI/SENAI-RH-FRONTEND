import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './index.css';
import Cadastro from './Pages/CadastrarUsuario/CadastrarUsuario';
import TelaAcesso from './Pages/Acesso/telaAcesso'
import reportWebVitals from './reportWebVitals';
import Carometro from './Pages/Carometro/Carometro';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Carometro}/>
        <Route path="/Cadastro" component={Cadastro}/> 
        <Route path="/Acesso" component={TelaAcesso}/> 

      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

reportWebVitals();