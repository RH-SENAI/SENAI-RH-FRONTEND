import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useParams } from 'react-router';
import "../../assets/css/democratizacao.css";
import Footer from '../../components/footer';
import FotoPerfil from '../../assets/img/perfilVazio.svg'
import Header from '../../components/header/headerFuncionario'
import ImgDemocratizacao from '../../assets/img/ImgDemocratizacao.svg'
import moment from 'moment';
import { parseJwt } from '../../services/auth';

export default function Democratizacao() {

    //States 
    const idDecisao = useParams();
    const [idUsuario, setIdUsuario] = useState(103);
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


        axios.post("https://apigrupo3.azurewebsites.net/api/Feedbacks/Cadastrar", cadastro, {

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

        axios.get('https://apigrupo3.azurewebsites.net/api/Decisoes/Listar', {
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
        axios.get('https://apigrupo3.azurewebsites.net/api/Feedbacks/Listar', {
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
                <div className='container g3_containerOrganizador'>
                    <div className='g3_containerDecisao'>
                        <div className='g3_organizadorDecisao'>
                            <span className='g3_boldDecisao'>ÁREA DE</span>
                            <span className='g3_nonBoldDecisao'>DEMOCRATIZAÇÃO</span>
                            {
                                listaDecisao.map((decisao) => {
                                    if (decisao.idDecisao == idDecisao.idDecisao) {
                                        return (
                                            <div key={decisao.idDecisao} className='g3_decisao'>
                                                <div className='g3_boxDecisao'>
                                                    <span className='g3_tituloDecisao'>o gerente tomou a seguinte decisao:</span>
                                                    <p className='g3_paragrafoDecisao'>{decisao.descricaoDecisao}</p>
                                                </div>

                                            </div>
                                        )
                                    }
                                })

                            }
                            <form className='g3_formCadastroFeedback' onSubmit={cadastrarFeedback}>
                                <input className='g3_inputCadastroFeedback' type='text' value={comentarioFeedback} onChange={(event) => setComentarioFeedback(event.target.value)} placeholder='Deseja adicionar alguma sugestão de melhora ou feedback?'></input>
                                <input className='g3_inputCadastroFeedback' type='number' value={notaDecisao} onChange={(event) => setNotaDecisao(event.target.value)} placeholder='Insira uma nota para a decisão'></input>
                                <button className='g3_btnCadastroFeedback' type="submit">Cadastrar</button>
                            </form>

                        </div>
                        <div className='g3_bannerDemocratizacao'>
                            <img className='g3_imgDemocratizacao' src={ImgDemocratizacao} />
                        </div>

                    </div>

                    <span className='g3_boldFeedback'>Feedbacks</span>
                    <div className='g3_containerFeedback'>
                        {

                            listaFeedbacks.map((feedback) => {
                                if (feedback.idDecisao == idDecisao.idDecisao) {
                                    return (
                                        <div key={feedback.idFeedBack} className='g3_feedback'>
                                            <div className='g3_fotoPerfilFeedback'>
                                                <img className='g3_imgFotoFeedback' src={'http://localhost:5000/StaticFiles/Images/' + 'imagem-padrao.png'} />
                                            </div>
                                            <div className='g3_boxFeedback'>
                                                <span className='g3_tituloDecisao'>{feedback.idUsuarioNavigation.nome} comentou:</span>
                                                <p className='g3_paragrafoDecisao'>{feedback.comentarioFeedBack}</p>
                                            </div>

                                        </div>
                                    )
                                }
                            })
                        }

                    </div>
                </div>

            </main>
            <Footer />
        </body>
    )

}