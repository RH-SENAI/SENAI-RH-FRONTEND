import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './Pages/Login/login.jsx';
import CadastrarAtividades from './Pages/CadastrarAtividades/cadastrarAtividades.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CadastrarAtividades />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
