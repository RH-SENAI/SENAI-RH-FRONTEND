import React, {useState, useEffect} from "react"
import Logo from "../../Assets/img/Logo_SENAI_PRINCIPAL_VERMELHO2.png"
import bannerLogin from "../../Assets/img/undraw_login_re_4vu2 1.svg"
import Footer from "../../components/Footer"
import "../../Assets/Css/login.css"
import axios from "axios"
import { parseJwt } from "../../Services/auth"

export default function Login() {
    const[emailUsuario, setEmailUsuario] = useState('');
    const[senhaUsuario, setSenhaUsuario] = useState('');
    
     const FazerLogin = (event) =>{
        event.preventDefault();
        

        axios.post('http://localhost:5000/api/Login',{
            email: emailUsuario,
            senha: senhaUsuario
        })
        .then(resposta => {
            if(resposta.status === 200){
                localStorage.setItem('usuario-login', resposta.data.token)
                localStorage.setItem('idUsuario', parseJwt().idUsuario)
                
                let base64 = localStorage.getItem('usuario-login');

             console.log(base64);   
            }
        })
    } 

    return(
        <div className="page">
            <header className="container_header_login">
                <img src={Logo} alt="Logo do senai" className="logo_Header"/>                
            </header>
            <main className="container_main">

                    <div className="bannerNome">
                        <p id="titulo_Senai">Senai-SP</p>                     
                        <h1 id="titulo_Login">Login</h1>
                        <img src={bannerLogin} className="bannerLogin" alt="" />
                    </div>

                    <form className="form_Login" onSubmit={FazerLogin}>
                        <div className="inputLabel">
                            <label for="email">Email</label>
                            <input type="email" name="email" value={emailUsuario} onChange={(event) => setEmailUsuario(event.target.value)} placeholder="Digite seu email"/>
                        </div>

                        <div className="inputLabel">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" value={senhaUsuario} onChange={(event) => setSenhaUsuario(event.target.value)} placeholder="Digite sua senha"/>
                        </div>
                        <button type="submit" >Login</button>
                    </form>
            </main>
            <Footer/>
        </div>
    )
}