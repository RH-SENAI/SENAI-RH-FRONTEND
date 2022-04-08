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
import Modal from 'react-modal';
import { ModalAcompanhar } from '../../components/Modal/ModalAcompanhar';




export default function Carometro() {

    //States
    const [idCargo, setIdCargo] = useState(0);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [listaCargo, setListaCargo] = useState([]);
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [idFuncionarioModal, setIdFuncionarioModal] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    const openModal = () => {
        setShowModal(prev => !prev);
    }




    function BuscarFuncionario() {

        axios.get('http://localhost:5000/api/Usuarios/Listar', {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })

            .then((resposta) => {

                if (resposta.status === 200) {

                    setListaFuncionarios(resposta.data)
                    console.log(resposta)
                    console.log(idCargo)

                }

            })

            .catch(erro => console.log(erro))

    }
    function ExcluirPerfil(idUsuario) {
        axios.delete('http://localhost:5000/api//Excluir/' + idUsuario, {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    console.log('usuario deletado')
                }
            })

            .catch(erro => console.log(erro))
    }




    useEffect(BuscarFuncionario, [])

    return (
        <body>
            <ModalAcompanhar usuario={listaFuncionarios.find(usuario => usuario.idUsuario == idFuncionarioModal)} showModal={showModal} setShowModal={setShowModal} /> 
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

                                            <Link onClick={ToggleMode} className={active ? "textLinkCarometro" : "text_linkCarometro"} to='#' >  Desenvolvedores</Link>
                                            <Link onClick={ToggleMode} className={active ? "textLinkCarometro" : "text_linkCarometro"} to='#' >  Administradores</Link>
                                            <Link onClick={ToggleMode} className={active ? "textLinkCarometro" : "text_linkCarometro"} to='#' >  Gestão</Link>

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
                                {

                                    listaFuncionarios.reverse().map((usuario) => {

                                        return (
                                                <div className="cardFuncionario">
                                                    <img className='fotoCarometro' src={'http://localhost:5000/StaticFiles/Images/' + usuario.caminhoFotoPerfil} alt="fotoPerfilCarometro" />
                                                    <span className="spanCarometro">{usuario.nome}</span>
                                                    <span className="spanCarometro">{usuario.idCargoNavigation.nomeCargo}</span>
                                                    <a onClick={openModal} onClickCapture = {() =>setIdFuncionarioModal(usuario.idUsuario)} className='seta_funcionario_carometro'>
                                                        <img className='setaCarometro' src={SetaCarometro} alt="setaCard" />
                                                    </a>

                                                </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </body>
    )
}