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
import topCarometro from '../../assets/img/topCarometro.png'

//import Modal from 'react-modal';
//import { ModalAcompanhar } from '../../components/modal/modalAcompanhar';

// import 'bootstrap/dist/css/bootstrap.min.css';



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

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
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
                    alert("usuario excluido!");
                }
            })

            .catch(erro => console.log(erro))
    }







    useEffect(BuscarFuncionario, [])

    return (
        <body>
            {/* <ModalAcompanhar usuario={listaFuncionarios.find(usuario => usuario.idUsuario == idFuncionarioModal)} showModal={showModal} setShowModal={setShowModal} />  */}
            <div className='g3_whiteBackgroundCarometro'>
                <HeaderFuncionario />
                <main>

                    <div className="container">

                        <div className='g3_conteudoCarometro'>
                            <div className='g3_topCarometro'>
                                <div className='g3_headerCarometro'>
                                    <h1 className="g3_tituloCarometro  animate__animated animate__fadeInUp">Carômetro</h1>
                                    <img className="g3_topImgCarometro  animate__animated animate__fadeInUp" src={topCarometro} />
                                </div>
                                <div className='g3_navBarCarometro  animate__animated animate__fadeInUp'>

                                </div>
                            </div>
                            <div className='g3_cardsCarometro animate__animated animate__fadeInUp'>
                                {
                                    listaFuncionarios.reverse().map((usuario) =>{
                                        return(
                                            <div className='g3_cardUsuario'>
                                                <img className='g3_fotoCarometro' src={'http://localhost:5000/StaticFiles/Images/' + usuario.caminhoFotoPerfil} alt="fotoPerfilCarometro" />
                                                <span className="g3_spanCarometro">{usuario.nome}</span>
                                                <span className="g3_spanCarometro">{usuario.idCargoNavigation.nomeCargo}</span>
                                            </div>

                                        )
                                    }

                                    )
                                }
                            </div>



                        </div>
                    </div>

                </main>
            <Footer />
            </div>
        </body>
    )
}