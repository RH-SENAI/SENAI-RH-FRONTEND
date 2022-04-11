import React from "react";
import HeaderFuncionario from "../../Components/Header/headerFuncionario";
import Footer from "../../Components/Footer";
import "../../Assets/Css/perfilFavoritos.css";

export const PerfilFavoritos = () => {

    return (
        <main>
            <HeaderFuncionario />
            <section>
                <div className="box_perfil">
                    <h1>seu perfil</h1>
                    <div className="fundoImagem_perfil">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="box_dadosPerfil">
                    <span className="titulo_dadosPerfil">nome:</span>
                    <input className="inputGrande" type="text" />

                    <span className="titulo_dadosPerfil">idade:</span>
                    <input className="inputPeqn" type="text" />

                    <span className="titulo_dadosPerfil">data de nascimento:</span>
                    <input className="inputMedio" type="text" />

                    <span className="titulo_dadosPerfil">estado:</span>
                    <input className="inputPeqn" type="text" />

                    <span className="titulo_dadosPerfil">cpf:</span>
                    <input className="inputMedio" type="text" />

                    <span className="titulo_dadosPerfil">cidade:</span>
                    <input className="inputGrande" type="text" />

                    <span className="titulo_dadosPerfil">cargo:</span>
                    <input className="inputGrande" type="text" />

                </div>
            </section>
            <hr />
            <section>
                <h2>favoritos</h2>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h3>técnico de desenvolvimento de sistemas</h3>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <span>1000 horas</span>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <span>alameda barão de limeira, 539 - santa cecília</span>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <span>15/01/2023</span>
                    </div>

                    <div>
                        <img src="" alt="" />
                    </div>

                    <div>
                        
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default PerfilFavoritos;