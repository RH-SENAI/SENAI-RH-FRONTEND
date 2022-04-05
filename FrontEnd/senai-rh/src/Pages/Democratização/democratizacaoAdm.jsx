import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import moment from 'moment';
import "../../Assets/Css/democratizacao.css";
import "../../Assets/Css/democratizacaoAdm.css";
import Footer from '../../components/Footer';
import FotoPerfil from '../../Assets/img/perfilVazio.svg'
import Header from '../../components/Header/headerFuncionario'
import ImgDemocratizacaoAdm from '../../Assets/img/democraAdm.svg'

export default function Democratizacao() {

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

    function cadastrarDecisao(event) {
        event.preventDefault();


        let cadastro = {
            idUsuario: idUsuario,
            descricaoDecisao: descricaoDecisao,
            dataDecisao: dataCadastroDecisao,
            prazoDeAvaliacao: dataValidade,
            resultadoDecisao: resultadoDecisao
        }
        console.log(idUsuario)
        console.log(dataCadastroDecisao)
        console.log(dataValidade)
        console.log(resultadoDecisao)

        axios.post("http://localhost:5000/api/Decisoes/Cadastrar", cadastro, {

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }



        })
            .then(response => {
                if (response.status === 201) {

                    console.log('decisao cadastrada')
                }
            })
            .catch(erro => console.log(erro))

    }
    useEffect(ListarDecisao, [])


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
                            <form className='formCadastroDecisao' onSubmit={cadastrarDecisao}>
                                <input className='inputCadastroFeedback' value={descricaoDecisao} onChange={(event) => setDescricaoDecisao(event.target.value)} type='text' placeholder='Compartilhe aqui a sua ideia:'></input>
                                <input className="inputCadastroFeedback" value={dataValidade} onChange={(event) => setDataValidade(event.target.value)} type="date" />
                                <button className='btnCadastroFeedback' type="submit">Cadastrar</button>
                            </form>
                        </div>
                        <div className='bannerDemocratizacao'>
                            <img className='imgDemocratizacao' src={ImgDemocratizacaoAdm} />
                        </div>

                    </div>

                    <div className='containerFeedback'>
                        <span className='boldFeedback'>Ultimas Ideias</span>
                        {
                            listaDecisao.map((decisao) => {
                                return (
                                    <div className='feedback'>
                                        <div className='fotoPerfilFeedback'>
                                            <img className='imgFotoFeedback' src={FotoPerfil} />
                                        </div>
                                        <div className='boxFeedback'>
                                            <span className='tituloDecisao'>Você tomou a seguinte decisão:</span>
                                            <p className='paragrafoDecisao'>{decisao.descricaoDecisao}</p>
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