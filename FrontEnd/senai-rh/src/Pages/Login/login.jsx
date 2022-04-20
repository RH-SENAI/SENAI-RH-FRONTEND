import React, { useState, useEffect } from "react"
import Logo from "../../assets/img/Logo.png"
import bannerLogin from "../../assets/img/bannerLogin.svg"
import Footer from "../../components/footer";
import axios from 'axios';
import '../../assets/css/login.css'
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
            <main className="container_main">
                <div className="G1_Left">
                    <div className="G1_banner">
                        <img src={Logo} alt="Logo do senai" className="G1_logo" />
                        <img src={bannerLogin} className="G1_bannerLogin" alt="" />
                        <p className="G1_p_senai">© 2022 Sesi Senai RH</p>
                    </div>
                </div>
                <div className="G1_Right">
                    <div className="G1_formText"> 
                        <div className="G1_textLogin">  
                            <h1>Login</h1>
                            <p>Acesse sua conta e veja todo seu Dashboard e o da sua equipe!</p> 
                        </div>  
                        <form className="G1_form_Login" onSubmit={(event) => FazerLogin(event)}>
                            <div className="G1_inputLabel">
                                <input type="text" name="email" placeholder="Digite seu email" value={emailUsuario} onChange={(evt) => setEmailUsuario(evt.target.value)} />
                                <label for="email">Email</label>
                            </div>

                            <div className="G1_inputLabel">
                                <input type="password" name="senha" placeholder="Digite sua senha" value={senhaUsuario} onChange={(evt) => setSenhaUsuario(evt.target.value)} />
                                <label for="senha">Senha</label>
                            </div>
                            <div  className="G1_buttonsLogin">
                                <a href="#">Esqueci a senha</a>
                                <button type="submit">Entrar</button>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>   
            </main>
            
        </div>
    )
}