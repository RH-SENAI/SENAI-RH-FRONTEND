import React, {useState, useEffect} from "react"
import Logo from "../../Assets/img/Logo_SENAI_PRINCIPAL_VERMELHO2.png"
import bannerLogin from "../../Assets/img/undraw_login_re_4vu2 1.svg"

export const Login = () =>{
    const[emailUsuario, setEmailUsuario] = useState('');
    const[senhaUsuario, setSenhaUsuario] = useState('');
    
    const FazerLogin = (event) =>{
        //event.preventDefault();
    } 

    return(
        <div>
            <header className="container_header">
                <img src={Logo} alt="Logo do senai" className="logo"/>                
            </header>
            <main className="container_main">

                    <div>
                        <p id="titulo_Senai">Senai-SP</p>                     
                        <h1 id="titulo_Login">Login</h1>
                        <img src={bannerLogin} className="bannerLogin" alt="" />
                    </div>

                    <form className="form_Login">
                        <input type="text" />
                        <input type="text" />
                        <input type="button" value="logar" />
                    </form>
            </main>
        </div>
    )
}
