import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import "../../Assets/Css/democratizacao.css";
import Footer from '../../Components/Footer';
import FotoPerfil from '../../Assets/img/perfilVazio.svg'

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
            <main>
                <div className='container containerOrganizador'>
                    <span className='nonBold'>Area de</span>
                    <span className='bold'>Democratização</span>
                    <div className='containerDecisoes'>
                        <div className='boxDecisao'>

                        </div>
                        <div className='boxCadastroFeedback'>

                        </div>

                    </div>
                    <div className='containerFeedbacks'>
                        <div className='fotoPerfilFeedback'>
                            <img className='imgFotoFeedback' src={FotoPerfil} />
                        </div>
                        <div className='boxFeedback'>

                        </div>


                    </div>
                </div>
            </main>
            <Footer/>
        </body>
    )

}