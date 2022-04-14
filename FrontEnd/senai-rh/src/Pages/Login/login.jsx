import React, { useState, useEffect } from "react"
import Logo from "../../Assets/img/Logo_SENAI_PRINCIPAL_VERMELHO2.png"
import bannerLogin from "../../Assets/img/undraw_login_re_4vu2 1.svg"
import Footer from "../../components/Footer"
import axios from 'axios';
import '../../Assets/css/login.css'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const notify_Logar_Success = () => toast.success("Usuario Logado!");
    const notify_Logar_Failed = () => toast.error("Email ou Senha inválidos!")
    const history = useHistory();
    
    const notify_Logar = () => toast.success("Usuario logado!");


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
                    notify_Logar_Success()
                    localStorage.setItem('usuario-login', resposta.data.token)

                    let base64 = localStorage.getItem('usuario-login').split('.')[1];

                    console.log(base64)

                    history.push('/CadastrarAtividades')
                }

                if (resposta.status === 400){
                    notify_Logar_Failed()
                }
            })
        
    }

    return (
        <div className="page">
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                        <input type="password" name="senha" placeholder="Digite sua senha" value={senhaUsuario} onChange={(evt) => setSenhaUsuario(evt.target.value)} />
                    </div>
                    
                        <button type="submit">Login</button>
                    
                </form>
            </main>
            <Footer />
        </div>
    )
}
