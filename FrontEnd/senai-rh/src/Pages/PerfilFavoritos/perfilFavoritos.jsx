import React from "react";
import HeaderFuncionario from "../../Components/Header/headerFuncionario";
import Footer from "../../Components/Footer";
import Perfil from "../../Assets/img/perfil.png"
import FundoFavorito from "../../Assets/img/fundoFavorito.png";
import Relogio from "../../Assets/img/relogio.png";
import Localizacao from "../../Assets/img/localizacao.png";
import AvisoTempo from "../../Assets/img/avisoTempo.png";
import Favoritar from "../../Assets/img/favoritar.png";
import Star from "../../Assets/img/starAvaliacao.png";
import '../../Assets/Css/perfilFavoritos.css';

export const PerfilFavoritos = () => {

    return (
        <main>
            <HeaderFuncionario />
            <section className="container_perfilFavoritos">
                <section className="container_perfil">
                    <div className="box_perfil">
                        <h1 className="tituloPerfil">seu perfil</h1>
                        <div className="fundoImagem_perfil">
                            <img className="imagemPerfil" src={Perfil} alt="Imagem Perfil" />
                        </div>
                    </div>
                    <div className="box_dadosPerfil">
                        <span className="titulo_dadosPerfil">nome:</span>
                        <input className="inputGrande" type="text" />

                        <div className="box_Ajuste">
                            <div className="box_dados">
                                <span className="titulo_dadosPerfil">idade:</span>
                                <input className="inputPeqn" type="text" />
                            </div>

                            <div className="box_dados">
                                <span className="titulo_dadosPerfil">data de nascimento:</span>
                                <input className="inputMedio" type="text" />
                            </div>
                        </div>

                        <div className="box_Ajuste">
                            <div className="box_dados">
                                <span className="titulo_dadosPerfil">estado:</span>
                                <input className="inputPeqn" type="text" />
                            </div>

                            <div className="box_dados">
                                <span className="titulo_dadosPerfil">cpf:</span>
                                <input className="inputMedio" type="text" />
                            </div>
                        </div>

                        <span className="titulo_dadosPerfil">cidade:</span>
                        <input className="inputGrande" type="text" />

                        <span className="titulo_dadosPerfil">cargo:</span>
                        <input className="inputGrande" type="text" />

                    </div>
                </section>
                <hr className="divisaoPerfil" />
                <section className="container_favoritos">
                    <h2>favoritos</h2>
                    <div>
                        <div>
                            <img src={FundoFavorito} alt="Imagem da vantagem" />
                            <h3>técnico de desenvolvimento de sistemas</h3>
                        </div>

                        <div>
                            <img src={Relogio} alt="Relógio" />
                            <span>1000 horas</span>
                        </div>

                        <div>
                            <img src={Localizacao} alt="Localização" />
                            <span>alameda barão de limeira, 539 - santa cecília</span>
                        </div>

                        <div>
                            <img src={AvisoTempo} alt="Aviso do tempo restante" />
                            <span>15/01/2023</span>
                        </div>

                        <div>
                            <img src={Favoritar} alt="Favoritar" />
                        </div>

                        <div>
                            <img src={Star} alt="Estrela" />
                            <img src={Star} alt="Estrela" />
                            <img src={Star} alt="Estrela" />
                            <img src={Star} alt="Estrela" />
                            <img src={Star} alt="Estrela" />
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </main>
    );
}

export default PerfilFavoritos;