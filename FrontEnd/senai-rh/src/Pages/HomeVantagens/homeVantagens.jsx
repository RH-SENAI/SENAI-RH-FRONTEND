import React from "react";
import { Carousel } from '@trendyol-js/react-carousel';
// import { Item } from './yourItem';
import "../../Assets/Css/homeVantagens.css";
import HeaderFuncionario from "../../Components/Header/headerFuncionario";
import Footer from "../../Components/Footer";
import imgHome from "../../Assets/img/imgHomeVantagem.png";
import img1 from "../../Assets/img/shopee.png";
import img2 from "../../Assets/img/casasBahia.png";
import img3 from "../../Assets/img/mcDonalds.png";
import img4 from "../../Assets/img/pontoFrio.png";
import img5 from "../../Assets/img/americanAirlines.png";
import imgSeta1 from "../../Assets/img/setaEsquerda.svg";
import imgSeta2 from "../../Assets/img/setaDireita.svg";

export const HomeVantagens = () => {

    return (
        <main>
            <HeaderFuncionario />
            <section>
                <div className="container_principal">
                    <img className="imgHome" src={imgHome} alt="Imagem Home" />
                    <div className="box_conteudo">
                        <h1 className="tituloHome">senai-sp</h1>
                        <h2 className="tituloHome2">benefício</h2>
                        <span className="text_principal">Capacite bem os seus colaboradores para que eles possam partir. Trate-os bem para que eles prefiram ficar.</span>
                    </div>
                </div>
            </section>
            <section>
                <div className="container_empresas">
                    <div className="box_empresas">
                        <img className="imgSetaEsq" src={imgSeta1} alt="Seta para esquerda" />
                        <rightArrow />
                        <img className="imgSetaDir" src={imgSeta2} alt="Seta para direita" /> 
                        <leftArrow /> 
                        
                        <Carousel show={3.5} slide={1} infinite={true} transition={0.5}>
                            <img className="imagemEmpresa" src={img1} alt="Imagem empresa" />
                            {/* <hr className="barraDivisao" /> */}
                            <img className="imagemEmpresa_casasBahia" src={img2} alt="Imagem empresa" />
                            {/* <hr className="barraDivisao" /> */}
                            <img className="imagemEmpresa" src={img3} alt="Imagem empresa" />
                            {/* <hr className="barraDivisao" /> */}
                            <img className="imagemEmpresa" src={img4} alt="Imagem empresa" />
                            {/* <hr className="barraDivisao" /> */}
                            <img className="imagemEmpresa_airline" src={img5} alt="Imagem empresa" />
                        </Carousel>      
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default HomeVantagens;