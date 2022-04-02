import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import "../../Assets/Css/democratizacao.css";
import Footer from '../../components/Footer';
import FotoPerfil from '../../Assets/img/perfilVazio.svg'
import Header from '../../components/Header/headerFuncionario'
import ImgDemocratizacaoAdm from '../../Assets/img/democraAdm.svg'

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
                            <span className='nonBoldDecisao'>Compartilhe suas decisões</span>
                            <span className='boldDecisao'>com sua equipe! </span>
                            <div className='containerDecisoes'>
                            </div>
                            <input className='inputCadastroFeedback' type='text' placeholder='Compartilhe aqui a sua ideia:'></input>
                            <button className='btnCadastroFeedback' type="submit">Cadastrar</button>
                        </div>
                        <div className='bannerDemocratizacao'>
                            <img className='imgDemocratizacao' src={ImgDemocratizacaoAdm} />
                        </div>

                    </div>

                    <div className='containerFeedback'>
                        <span className='boldFeedback'>Suas ideias</span>
                        <div className='feedback'>
                            <div className='fotoPerfilFeedback'>
                                <img className='imgFotoFeedback' src={FotoPerfil} />
                            </div>
                            <div className='boxFeedback'>
                                <span className='tituloDecisao'>Você tomou a seguinte decisão:</span>
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