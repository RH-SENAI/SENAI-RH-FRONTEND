import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import "../../Assets/Css/democratizacao.css";
import "../../Assets/Css/democratizacaoAdm.css";
import Footer from '../../components/Footer';
import FotoPerfil from '../../Assets/img/perfilVazio.svg'
import Header from '../../components/Header/headerFuncionario'
import ImgDemocratizacaoAdm from '../../Assets/img/democraAdm.svg'

export default function Decisao() {

    //States 
    const [idDecisao, setIdDecisao] = useState(0);
    const [idUsuario, setIdUsuario] = useState(0);
    const [resultadoDecisao, setResultadodecisao] = useState(0);
    const [descricaoDecisao, setDescricaoDecisao] = useState('');
    const [listaDecisao, setListaDecisao] = useState([]);
    const [dataValidade, setDataValidade] = useState(new Date())
    const [dataCadastroDecisao] = useState(moment().format("YYYY-MM-DD"));

    function ListarDecisao() {
        axios.get('http://localhost:5000/api/Decisoes/Listar', {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    setListaDecisao(resposta.data)
                    console.log(resposta)
                }
            })

            .catch(erro => console.log(erro))
    }

    useEffect(ListarDecisao, [])

    return (
        <body>
            <Header />
            <main>
                <div className='container containerOrganizadorDecisao'>
                    <div className='containerDecisao'>
                        <div className='organizadorDecisao'>
                            <span className='nonBoldDecisao'>Compartilhe suas decisões</span>
                            <span className='boldDecisao'>com sua equipe! </span>
                            <div className='containerDecisoes'>
                            </div>
                        </div>
                        <div className='bannerDemocratizacao'>
                            <img className='imgDemocratizacao' src={ImgDemocratizacaoAdm} />
                        </div>

                    </div>

                    <span className='boldFeedback'>Ultimas Decisoes</span>
                    <div className='containerFeedback'>
                        {
                            listaDecisao.map((decisao) => {
                                return (
                                    <div className='feedback'>
                                        <div className='fotoPerfilFeedback'>
                                            <img className='imgFotoFeedback' src={FotoPerfil} />
                                        </div>
                                        <Link to={"Democratizacao/" + decisao.idDecisao} className='btnRedirectDecisao'>
                                            <div className='boxDecisaoLista'>
                                                <span className='tituloDecisao'>O gerente tomou a seguinte decisão:</span>
                                                <p className='paragrafoDecisao'>{decisao.descricaoDecisao}</p>
                                            </div>
                                        </Link>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </main>
            <Footer />
        </body>
    )

}