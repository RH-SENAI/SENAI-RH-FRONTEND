import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import "../../Assets/Css/democratizacao.css";
import Footer from '../../components/Footer';
import FotoPerfil from '../../Assets/img/perfilVazio.svg'
import Header from '../../components/Header/headerFuncionario'
import ImgDemocratizacao from '../../Assets/img/ImgDemocratizacao.png'

export default function Democratizacao() {

    //States 
    const [idFeedback, setIdFeedback] = useState(0);
    const [idDecisao, setIdDecisao] = useState(0);
    const [listaFeedbacks, setListaFeedbacks] = useState([]);
    const [listaDecisao, setListaDecisao] = useState([]);
    const [nomeFuncionario, setNomeFuncionario] = useState('');

    // function ListarFeedback() {
    //     axios.get('', {
    //         headers: {

    //             Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
    //         }
    //     }
    //     )

    //         .then((resposta) => {
    //             if (resposta.status === 200) {
    //                 setListaSala(resposta.data)
    //                 console.log(resposta)
    //             }
    //         })

    //         .catch(erro => console.log(erro))
    // }

    return (
        <body>
            <Header />
            <main>
                <div className='container containerOrganizador'>
                    <div className='containerDecisao'>
                        <div className='organizadorDecisao'>
                            <span className='nonBoldDecisao'>Área de</span>
                            <span className='boldDecisao'>Democratização</span>
                            <div className='containerDecisoes'>
                                <div className='boxDecisao'>
                                    <span className='tituloDecisao'>Seu gerente tomou a seguinte decisão:</span>
                                    <p className='paragrafoDecisao'>“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...”:</p>

                                </div>
                            </div>
                            <input className='inputCadastroFeedback' type='text' placeholder='Deseja adicionar alguma sugestão de melhora ou feedback?'></input>
                            <button className='btnCadastroFeedback' type="submit">Cadastrar</button>
                        </div>
                        <div className='bannerDemocratizacao'>
                            <img className='imgDemocratizacao' src={ImgDemocratizacao} />
                        </div>

                    </div>

                    <div className='containerFeedback'>
                        <span className='boldFeedback'>Feedbacks</span>
                        <div className='feedback'>
                            <div className='fotoPerfilFeedback'>
                                <img className='imgFotoFeedback' src={FotoPerfil} />
                            </div>
                            <div className='boxFeedback'>
                                <span className='tituloDecisao'>Seu gerente tomou a seguinte decisão:</span>
                                <p className='paragrafoDecisao'>“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...”:</p>
                            </div>

                        </div>


                    </div>
                </div>

            </main>
            <Footer />
        </body>
    )

}