import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Assets/css/gp1style.css'
import { Link, useHistory } from 'react-router-dom'
import { Modall } from '../../components/Modal'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/headerAdm'
import moedas from '../../Assets/img/moedinha.svg'


export default function TodasAtividades() {
    const [listaAtividades, setListaAtividades] = useState([]);
    const [idAtividade, setIdAtividade] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModalValidar, setShowModalValidar] = useState(false);
    const [idAtividadeModal, setIdAtividadeModal] = useState()
    const [isLoading, setIsLoading] = useState(false);

    const OpenModal = () => {
        setShowModal(prev => !prev);
    }

    function listarAtividades() {
        axios.get("http://apirhsenaigp1.azurewebsites.net/api/Atividades"
            , {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaAtividades(resposta.data)
                    console.log(resposta.data)
                }
            })

            .catch(erro => console.log(erro))
    };


    useEffect(listarAtividades, []);

    return (
        <div className="div_container G1_tela_atividades_container">
            <Modall atividade={listaAtividades.find(atividade => atividade.idAtividade == idAtividadeModal)} showModal={showModal} setShowModal={setShowModal} />
            <Header />
            <main className="container_atividades">
                <div className="G1_organizar_main">
                    <h1 className="G1_titulo_atividades">Todas Atividades</h1>
                    <div className="G1_container_atividades">
                        {listaAtividades.map((atividade) => {
                            return (
                                <div key={atividade.idAtividade}>
                                    <div className="G1_atividade_box">
                                        <div className="G1_header_atividade"></div>
                                        <div className="G1_box_container">
                                            <div className="G1_organizar_spams">
                                                <span className="G1_titulo_atividade_box">{atividade.nomeAtividade}</span>
                                                <span className="G1_recompensa_box">{atividade.recompensaMoeda} CashS <img src={moedas} alt="moedas" /></span>
                                            </div>
                                            <p className="G1_descricao_atividade">{atividade.descricaoAtividade}</p>
                                            <div className="G1_organizar_btn">
                                                <button onClick={OpenModal} onClickCapture={() => setIdAtividadeModal(atividade.idAtividade)} className="G1_btn_vizualizar">Visualizar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    );

}