import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/img/Logo_SENAI_PRINCIPAL_VERMELHO2.png"
import bannerLogin from "../../assets/img/undraw_login_re_4vu2 1.svg"
import Footer from "../../components/Footer"
import Header from "../../components/Header/headerFuncionario"
import "../../assets/Css/usuario.css"

export default function Usuario() {
    

    return(
        <div>
            <Header/>
            <main className="main_Cadastro">
            <div className="container_cadastro">
                    <div className="container_navs">
                        <nav className="nav_links">
                            <Link className="links">Cadastrar Atividades</Link>
                            <Link className="links">Validar Atividades</Link>
                            <Link className="links">Marketplace</Link>
                            <Link className="links">Usuários</Link>
                            <Link className="links">Ranking</Link>
                        </nav>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <h1>Todas Atividades</h1>

                    </div>
                </div>
                    
            </main>
            <Footer/>
        </div>
    )
}

