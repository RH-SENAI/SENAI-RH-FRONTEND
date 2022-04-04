import React, {useState, useEffect} from "react"
import Logo from "../../Assets/img/Logo_SENAI_PRINCIPAL_VERMELHO2.png"
import bannerLogin from "../../Assets/img/undraw_login_re_4vu2 1.svg"
import Footer from "../../components/Footer"
import '../../Assets/css/login.css'

export default function Login() {
    const[emailUsuario, setEmailUsuario] = useState('');
    const[senhaUsuario, setSenhaUsuario] = useState('');
    
    const FazerLogin = (event) =>{
        //event.preventDefault();
    } 

    return(
        <div className="page">
            <header className="container_header">
                <img src={Logo} alt="Logo do senai" className="logo"/>                
            </header>
            <main className="container_main">

                    <div className="bannerNome">
                        <p id="titulo_Senai">Senai-SP</p>                     
                        <h1 id="titulo_Login">Login</h1>
                        <img src={bannerLogin} className="bannerLogin" alt="" />
                    </div>

                    <form className="form_Login">
                        <div className="inputLabel">
                            <label for="email">Email</label>
                            <input type="text" name="email" placeholder="Digite seu email"/>
                        </div>

                        <div className="inputLabel">
                            <label for="senha">Senha</label>
                            <input type="text" name="senha" placeholder="Digite sua senha"/>
                        </div>
                        <button type="submit">Login</button>
                    </form>
            </main>
            <Footer/>
        </div>
    )
}
