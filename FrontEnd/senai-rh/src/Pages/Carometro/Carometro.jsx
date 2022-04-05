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




export default function Carometro() {

    //States
    const [idCargo, setIdCargo] = useState(0);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [listaCargo, setListaCargo] = useState([]);
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [idFuncionarioModal, setIdFuncionarioModal] = useState(0);
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let subtitle;


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const custonModal = {
        content: {
            left: '5%',
            top: '10%',
            background: 'f2f2f2',
            bottom: 'auto',
            borderRadius: '20px',
            width: '90%',
            height: '80%',
            transition: '.2s'
        }
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
                                {

                                    listaFuncionarios.map((usuario) => {

                                        return (
                                                <div className="cardFuncionario">
                                                    <img className='fotoCarometro' src={'https://raw.githubusercontent.com/RH-SENAI/SENAI-RH-BACKEND/back-gp-3-develop/GP3/api-gp3/senai-gp3-webApi/StaticFiles/Images/' + usuario.caminhoFotoPerfil} alt="fotoPerfilCarometro" />
                                                    <span className="spanCarometro">{usuario.nome}</span>
                                                    <span className="spanCarometro">{usuario.idCargoNavigation.nomeCargo}</span>
                                                    <a onClick={openModal}>
                                                        <img className='setaCarometro' src={SetaCarometro} alt="setaCard" />
                                                    </a>

                                                </div>
                                        )
                                    })
                                }
                            </div>
                            <Modal isOpen={modalIsOpen}
                            onRequestClose={closeModal}>
                                <div>
                                    <button className='atualizarModal' ><Link className='hrefModal' to='/atualizar'>atualizar</Link></button>
                                    <button className='deletarModal' onClick={() => ExcluirPerfil}>deletar</button>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </body>
    )
}