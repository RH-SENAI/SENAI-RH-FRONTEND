import React, {useState, useEffect} from "react"
import bannerLogin from "../../Assets/Img/undraw_login_re_4vu2 1.svg"
import Footer from "../../Components/Footer"
import HeaderLogin from "../../Components/Header/HeaderLogin";
import '../../Assets/Css/login.css'
import { Redirect, useHistory } from "react-router-dom";


export default function Login() {
    const[emailUsuario, setEmailUsuario] = useState('');
    const[senhaUsuario, setSenhaUsuario] = useState('');
    
    const FazerLogin = (event) =>{
        //event.preventDefault();
    } 

    let history = useHistory()
    function redirecionar() {

        history.push('/redirecionar')
    }

    return(
        <div className="page">
            <HeaderLogin></HeaderLogin>
            <main className="container_main">

                    <div className="bannerNome">
                        <p id="titulo_Senai">SENAI-SP</p>                     
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
                        <button type="submit" onClick={redirecionar}>LOGIN</button>
                    </form>
            </main>
            <Footer/>
        </div>
    )
}
