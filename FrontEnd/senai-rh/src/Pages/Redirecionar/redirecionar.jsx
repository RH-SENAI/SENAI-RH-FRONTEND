import React from "react";
import "../../Assets/Css/redirecionar.css";
import img1 from "../../Assets/img/1.png";
import img2 from "../../Assets/img/2.png";
import img3 from "../../Assets/img/3.png";
import Footer from "../../Components/Footer";
import HeaderFuncionario from "../../Components/Header/headerFuncionario";

export const Redirecionar = () => {

    return (
        <main>
            <HeaderFuncionario />
            <section className="container_total">
                <div>
                    <h1 class="titulo">qual seu</h1>
                    <h2 class="titulo_2">interesse</h2>
                </div>
                <div>
                    <div class="container_minhasVantagens">
                        <div class="box_numero">
                            <img className="img_numero" src={img1} alt="1°" />
                        </div>
                        <div class="box_texto">
                            <a href="https://www.w3schools.com" class="textoRedirecionar">minhas vantagens</a>
                        </div>
                    </div>
                    <div class="container_motivacoes">
                        <div class="box_numero">
                            <img className="img_numero" src={img2} alt="2°" />
                        </div>
                        <div class="box_texto">
                            <a href="#" class="textoRedirecionar">motivações</a>
                        </div>
                    </div>
                    <div class="container_acompanhamento">
                        <div class="box_numero">
                            <img className="img_numero" src={img3} alt="3°" />
                        </div>
                        <div class="box_texto">
                            <a href="#" class="textoRedirecionar">acompanhamento</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Redirecionar;