import React, { useEffect } from 'react'

import axios from 'axios'
import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import "../../assets/css/carometro.css";
import HeaderFuncionario from '../../components/header/headerFuncionario';
import Footer from '../../components/footer';
import PerfilCarometro from '../../assets/img/PerfilCarometro.png'
import setaSelectLight from '../../assets/img/SetaSelectLight.png'
import IconLogout from '../../assets/img/IconLogout.png'
import SetaCarometro from '../../assets/img/SetaCarometro.png'
//import Modal from 'react-modal';
//import { ModalAcompanhar } from '../../components/modal/modalAcompanhar';

import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Carometro() {

    //States
    const [idCargo, setIdCargo] = useState(0);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [listaCargo, setListaCargo] = useState([]);
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [funcionarioModal, setFuncionarioModal] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    // const openModal = () => {
    //     setShowModal(prev => !prev);
    // }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const [funcSelecionado, setFuncionarioSelecionado] = useState({});




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
            {/* <ModalAcompanhar usuario={listaFuncionarios.find(usuario => usuario.idUsuario == idFuncionarioModal)} showModal={showModal} setShowModal={setShowModal} />  */}
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

                                    listaFuncionarios.map((usuario) => {
                                        //const usuarioSelecionado = () => {listaFuncionarios.find(usuario => usuario.idUsuario == idFuncionarioModal)}
                                        return (
                                            <div className="cardFuncionario">
                                                <img className='fotoCarometro' src={'http://localhost:5000/StaticFiles/Images/' + usuario.caminhoFotoPerfil} alt="fotoPerfilCarometro" />
                                                <span className="spanCarometro">{usuario.nome}</span>
                                                <span className="spanCarometro">{usuario.idCargoNavigation.nomeCargo}</span>
                                                {/* <a onClick={openModal} onClickCapture = {() =>setIdFuncionarioModal(usuario.idUsuario)} className='seta_funcionario_carometro'> */}
                                                {/* <a onClick={handleShow} onClickCapture={() => setIdFuncionarioModal(usuario.idUsuario)}  */}
                                                <a onClick={() => {handleShow(); }} onClickCapture={() => setFuncionarioModal(usuario)} 
                                                    
                                                    className='seta_funcionario_carometro'>
                                                    <img className='setaCarometro' src={SetaCarometro} alt="setaCard" />
                                                </a>
                                                <Modal show={show} onHide={handleClose} centered>
                                                    
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Informações pessoais</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>

                                                        Nome:<h4>{funcionarioModal.nome}</h4>
                                                        Email:<h4>{funcionarioModal.email}</h4>    
                                                        CPF:<h4>{funcionarioModal.cpf}</h4>  

                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClose}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>

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