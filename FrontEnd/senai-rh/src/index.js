import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Cadastro from './Pages/CadastrarUsuario/CadastrarUsuario';
import reportWebVitals from './reportWebVitals';






const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Cadastro}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

reportWebVitals();
