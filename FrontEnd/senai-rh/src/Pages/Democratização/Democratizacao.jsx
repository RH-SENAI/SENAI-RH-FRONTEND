import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import "../../Assets/Css/democratizacao.css";
import Footer from '../../components/Footer';
import FotoPerfil from '../../Assets/img/perfilVazio.svg'
import Header from '../../components/Header/headerFuncionario'
import ImgDemocratizacao from '../../Assets/img/ImgDemocratizacao.png'
import moment from 'moment';

export default function Democratizacao() {

    //States 
    const [idUsuario, setIdUsuario] = useState(0);
    const [idFeedback, setIdFeedback] = useState(0);
    const [idDecisao, setIdDecisao] = useState(1);
    const [listaFeedbacks, setListaFeedbacks] = useState([]);
    const [listaDecisao, setListaDecisao] = useState([]);
    const [descricaoDecisao, setDescricaoDecisao] = useState('');
    const [comentarioFeedback, setComentarioFeedback] = useState('');
    const [valorMoedas, setValorMoedas] = useState(0);
    const [notaDecisao, setNotaDecisao] = useState(0);
    const [dataPublicacao] = useState(moment().format("YYYY-MM-DD"));
    const [nomeFuncionario, setNomeFuncionario] = useState('');


    function cadastrarFeedback(event) {
        event.preventDefault();


        let cadastro = {
            idUsuario: idUsuario,
            idDecisao: idDecisao,
            comentarioFeedBack: comentarioFeedback,
            dataPublicacao: dataPublicacao,
            valorMoedas: valorMoedas,
            notaDecisao: notaDecisao,
        }
        console.log(idUsuario)
        console.log(idDecisao)
        console.log(comentarioFeedback)
        console.log(dataPublicacao)
        console.log(valorMoedas)
        console.log(notaDecisao)


        axios.post("http://localhost:5000/api/Feedbacks/Cadastrar", cadastro, {

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }



        })
            .then(response => {
                if (response.status === 201) {

                    console.log('feedback cadastrado')
                }
            })
            .catch(erro => console.log(erro))

    }

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

    function ListarFeedback() {
        axios.get('http://localhost:5000/api/Feedbacks/Listar', {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    setListaFeedbacks(resposta.data)
                    console.log(resposta)
                }
            })

            .catch(erro => console.log(erro))
    }

    useEffect(ListarDecisao, [])
    useEffect(ListarFeedback, [])


    return (
        <body>
            <Header />
            <main>
                <div className='container containerOrganizador'>
                    <div className='containerDecisao'>
                        <div className='organizadorDecisao'>
                            <span className='nonBoldDecisao'>Área de</span>
                            <span className='boldDecisao'>Democratização</span>
                            {
                                listaDecisao.map((decisao) => {
                                    return (
                                        <div className='feedback'>
                                            <div className='boxFeedback'>
                                                <span className='tituloDecisao'>o gerente tomou a seguinte decisao:</span>
                                                <p className='paragrafoDecisao'>{decisao.descricaoDecisao}</p>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                            <form className='formCadastroFeedback' onSubmit={cadastrarFeedback}>
                                <input className='inputCadastroFeedback' type='text' value={comentarioFeedback} onChange={(event) => setComentarioFeedback(event.target.value)} placeholder='Deseja adicionar alguma sugestão de melhora ou feedback?'></input>
                                <input className='inputCadastroFeedback' type='number' value={notaDecisao} onChange={(event) => setNotaDecisao(event.target.value)} placeholder='Insira uma nota para a decisão'></input>
                                <button className='btnCadastroFeedback' type="submit">Cadastrar</button>
                            </form>

                        </div>
                        <div className='bannerDemocratizacao'>
                            <img className='imgDemocratizacao' src={ImgDemocratizacao} />
                        </div>

                    </div>

                    <div className='containerFeedback'>
                        <span className='boldFeedback'>Feedbacks</span>
                        {

                            listaFeedbacks.map((feedback) => {
                                return (
                                    <div className='feedback'>
                                        <div className='fotoPerfilFeedback'>
                                            <img className='imgFotoFeedback' src={'https://raw.githubusercontent.com/RH-SENAI/SENAI-RH-BACKEND/back-gp-3-develop/GP3/api-gp3/senai-gp3-webApi/StaticFiles/Images/'+feedback.caminhoFotoPerfil} />
                                        </div>
                                        <div className='boxFeedback'>
                                            <span className='tituloDecisao'>{feedback.idUsuario} comentou:</span>
                                            <p className='paragrafoDecisao'>{feedback.comentarioFeedBack}</p>
                                        </div>

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