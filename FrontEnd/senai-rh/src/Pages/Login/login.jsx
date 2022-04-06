import React, { useState, useEffect } from "react"
import Logo from "../../Assets/img/Logo_SENAI_PRINCIPAL_VERMELHO2.png"
import bannerLogin from "../../Assets/img/undraw_login_re_4vu2 1.svg"
import Footer from "../../components/Footer"
import axios from 'axios';
import '../../Assets/css/login.css'
import { Link, Redirect } from 'react-router-dom'


export default function Login() {
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

    const FazerLogin = (event) => {
        console.log(emailUsuario)
        event.preventDefault();


        axios.post('http://localhost:5000/api/Login', {
            email: emailUsuario,
            senha: senhaUsuario
        }
        )
            .then(resposta => {
                if (resposta.status === 200) {
                    localStorage.setItem('usuario-login', resposta.data.token)

                    let base64 = localStorage.getItem('usuario-login').split('.')[1];
                    
                    console.log(base64)
                }
            })
    }

    return (
        <div className="page">
            <header className="container_header">
                <img src={Logo} alt="Logo do senai" className="logo" />
            </header>
            <main className="container_main">

                <div className="bannerNome">
                    <p id="titulo_Senai">Senai-SP</p>
                    <h1 id="titulo_Login">Login</h1>
                    <img src={bannerLogin} className="bannerLogin" alt="" />
                </div>

                <form className="form_Login" onSubmit={(event) => FazerLogin(event)}>
                    <div className="inputLabel">
                        <label for="email">Email</label>
                        <input type="text" name="email" placeholder="Digite seu email" value={emailUsuario} onChange={(evt) => setEmailUsuario(evt.target.value)} />
                    </div>

                    <div className="inputLabel">
                        <label for="senha">Senha</label>
                        <input type="text" name="senha" placeholder="Digite sua senha" value={senhaUsuario} onChange={(evt) => setSenhaUsuario(evt.target.value)} />
                    </div>
                    {/* <Link type="submit" to="/CadastrarAtividades"> */}
                    <button type="submit">Login</button>
                    {/* </Link> */}
                </form>
            </main>
            <Footer />
        </div>
    )
}
