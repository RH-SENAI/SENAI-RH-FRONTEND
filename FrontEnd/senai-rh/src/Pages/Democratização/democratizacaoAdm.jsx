import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import moment from 'moment';
import "../../Assets/Css/democratizacao.css";
import "../../Assets/Css/democratizacaoAdm.css";
import Footer from '../../Components/Footer';
import FotoPerfil from '../../Assets/Img/perfilVazio.svg'
import Header from '../../Components/Header/headerFuncionario'
import ImgDemocratizacaoAdm from '../../Assets/Img/democraAdm.svg'

export default function Democratizacao() {

    //States 
    const [idDecisao, setIdDecisao] = useState(0);
    const [idUsuario, setIdUsuario] = useState(1);
    const [descricaoDecisao, setDescricaoDecisao] = useState('');
    const [listaDecisao, setListaDecisao] = useState([]);
    const [dataValidade, setDataValidade] = useState(new Date())
    const [dataCadastroDecisao] = useState(moment().format("YYYY/MM/DD"));

    function ListarDecisao() {
        axios.get('http://localhost:5000/api/Decisoes', {
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
            prazoDeAvaliacao: dataValidade
        }
        console.log(dataCadastroDecisao)
        console.log(dataValidade)

        axios.post("http://localhost:5000/api/Decisoes", cadastro, {

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
                        <span className='boldFeedback'>Suas ideias</span>
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