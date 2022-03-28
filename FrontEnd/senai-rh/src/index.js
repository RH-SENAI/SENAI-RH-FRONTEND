import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import './index.css';
import './index.css'
// import App from './Pages/Home/App';
>>>>>>> 530dd429cebc9ad16affb098fbf1acf030ca5017
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
<<<<<<< HEAD
import './index.css';
import CadastrarAtividades from './Pages/CadastrarAtividades/cadastrarAtividades.jsx';
import Login from './Pages/Login/login.jsx';
import reportWebVitals from './reportWebVitals';
=======
import reportWebVitals from './reportWebVitals';
import HeaderFuncionario from './Components/Header/headerFuncionario';
import HeaderAdm from './Components/Header/headerAdm';
import CursosRapidos from './Pages/Cursos/cursosRapidos';
>>>>>>> 530dd429cebc9ad16affb098fbf1acf030ca5017

const routing = (
  <Router>
    <div>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={CadastrarAtividades}/>
        <Route path="/Login" component={Login}/>
=======
        <Route exact path="/" component={HeaderFuncionario} />
        <Route  path="/Adm" component={HeaderAdm} />
        <Route  path="/CursosRapidos" component={CursosRapidos} />
>>>>>>> 530dd429cebc9ad16affb098fbf1acf030ca5017
      </Switch>
    </div>
  </Router>
)

<<<<<<< HEAD
ReactDOM.render(routing, document.getElementById('root')
);

=======
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> 530dd429cebc9ad16affb098fbf1acf030ca5017
reportWebVitals();
