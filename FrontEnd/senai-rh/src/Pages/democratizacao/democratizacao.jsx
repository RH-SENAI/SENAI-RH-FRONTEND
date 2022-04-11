import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useParams } from 'react-router';
import "../../assets/css/democratizacao.css";
import Footer from '../../components/footer';
import FotoPerfil from '../../assets/img/perfilVazio.svg'
import Header from '../../components/header/headerFuncionario'
import ImgDemocratizacao from '../../assets/img/ImgDemocratizacao.png'
import moment from 'moment';
import { parseJwt } from '../../services/auth';

export default function Democratizacao() {

    //States 
    const idDecisao = useParams();
    const [idUsuario, setIdUsuario] = useState();
    const [idFeedback, setIdFeedback] = useState(0);
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
            idUsuario: parseJwt().jti,
            idDecisao: idDecisao.idDecisao,
            comentarioFeedBack: comentarioFeedback,
            dataPublicacao: dataPublicacao,
            valorMoedas: valorMoedas,
            notaDecisao: notaDecisao,
        }


        axios.post("http://localhost:5000/api/Feedbacks/Cadastrar", cadastro, {

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }



        })
            .then(response => {
                if (response.status === 201) {
                    ListarFeedback();
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

                    <span className='boldFeedback'>Feedbacks</span>
                    <div className='containerFeedback'>
                        {

                            listaFeedbacks.map((feedback) => {
                                return (
                                    <div className='feedback'>
                                        <div className='fotoPerfilFeedback'>
                                            <img className='imgFotoFeedback' src={'http://localhost:5000/StaticFiles/Images/' + 'imagem-padrao.png'} />
                                        </div>
                                        <div className='boxFeedback'>
                                            <span className='tituloDecisao'>{feedback.idUsuarioNavigation.nome} comentou:</span>
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