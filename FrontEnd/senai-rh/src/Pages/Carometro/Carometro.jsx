import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import "../../Assets/Css/carometro.css";
import HeaderFuncionario from '../../components/Header/headerFuncionario';
import Footer from '../../components/Footer';
import PerfilCarometro from '../../Assets/img/PerfilCarometro.png'
import setaSelectLight from '../../Assets/img/SetaSelectLight.png'
import IconLogout from '../../Assets/img/IconLogout.png'
import SetaCarometro from '../../Assets/img/SetaCarometro.png'



export default function Carometro() {

    //States 
    const idSala = useParams();
    const [idSetor, setIdSetor] = useState(0);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [ListaSetor, setListaSetor] = useState([]);
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [idFuncionarioModal, setIdFuncionarioModal] = useState(0)
    const [listaFuncionariosAchados, setListaFuncionariosAchados] = useState([])
    const OpenModal = () => {
        setShowModal(prev => !prev);
    }
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }

    function BuscarFuncionario() {
        console.log(idSetor)
        axios.get('', {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })

            .then((resposta) => {

                if (resposta.status === 200) {

                    setListaFuncionarios(resposta.data)
                    console.log(resposta)

                }

            })

            .catch(erro => console.log(erro))

    }


    function ListarSetor() {
        axios.get('', {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    setListaSetor(resposta.data)
                    console.log(resposta)
                }
            })

            .catch(erro => console.log(erro))
    }

    function BuscarFuncionario(nomeFuncionario) {

        axios.get('' + nomeFuncionario, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then((resposta) => {
                if (resposta.status == 200) {
                    setListaFuncionariosAchados(resposta.data)
                }
            })

    }

    useEffect(BuscarFuncionario, [])
    useEffect(ListarSetor, [])

    return (
        <body>
            <HeaderFuncionario />
            <main>
                <div className="container">
                    <div className="containerCarometro">
                        <div className="sidebarCarometro">
                            <div className='organizacaoSidebar'>
                                <div className="headerSidebar">
                                    <img src={PerfilCarometro} alt="fotoPerfilCarometro" />
                                    <div className="spansSidebar">
                                        <span className="spanSidebar">Username</span>
                                        <span className="spanSidebar">Cargo:</span>
                                    </div>

                                </div>
                                <div className="bodySidebar">
                                    <div class='selectCarometro'>

                                        <span className='SpanSidebar'>Equipes <img className='setaSelect' src={setaSelectLight} /></span>


                                        <input type='hidden' />

                                        <div class='hiddenCarometro'>

                                            <Link onClick={ToggleMode} className={active ? "textLinkCarometro" : "text_linkCarometro"} to='#' >  Gestão</Link>
                                            <Link onClick={ToggleMode} className={active ? "textLinkCarometro" : "text_linkCarometro"} to='#' >  Funcionarios</Link>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="footerSidebar">
                                <span className="spanSidebar">Logout</span>
                                <img className='iconLogout' src={IconLogout} alt="iconLogout" />
                            </div>

                        </div>

                        <div className='conteudoCarometro'>
                            <h1 className="tituloTelas">Carômetro</h1>
                            <div className="cardsCarometro">
                                <div className="cardFuncionario">
                                    <img className='fotoCarometro' src={PerfilCarometro} alt="fotoPerfilCarometro" />
                                    <span className="spanCarometro">Username</span>
                                    <span className="spanCarometro">Cargo:</span>
                                    <a onClick={OpenModal} >
                                        <img className='setaCarometro' src={SetaCarometro} alt="setaCard" />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </body>
    )
}