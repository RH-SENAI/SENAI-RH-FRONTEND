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
import { ModalAcompanhar } from '../../components/modal/modalAcompanhar';
import {
    parseJwt
    // usuarioAutenticado
} from '../../services/auth';

//import Modal from 'react-modal';

// import 'bootstrap/dist/css/bootstrap.min.css';



export default function Carometro() {

    //States

    const [idUsuarioAvaliador, setIdUsuarioAvaliador] = useState(parseJwt.jti);
    const [idCargo, setIdCargo] = useState(0);
    const [nivelSatisfacao, setNivelSatisfacao] = useState(0);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [listaCargo, setListaCargo] = useState([]);
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [idUsuarioModal, setIdUsuarioModal] = useState([]);
    const [active, setMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const OpenModal = () => {

        setShowModal(prev => !prev);
        console.log('abriuuu')
        console.log('abriuuu')
        
        console.log(idUsuarioModal)

        // console.log(idUsuario)

        
    }
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
    // function BuscarCargos() {
    //     axios.get('http://localhost:5000/api/Cargos/Listar', {
    //         headers: {

    //             Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
    //         }
    //     }
    //     )

    //         .then((resposta) => {
    //             if (resposta.status === 200) {
    //                 setListaCargo(resposta.data)
    //                 console.log(resposta)
    //             }
    //         })

    //         .catch(erro => console.log(erro))
    // }

    function ExcluirPerfil(idUsuario) {
        axios.delete('http://localhost:5000/api/Excluir/' + idUsuario, {
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

    const [procurarUsuarios, setProcurarUsuarios] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);


    const searchItems = (searchValue) => {
        setProcurarUsuarios(searchValue)
        if (procurarUsuarios !== '') {
            const filteredData = listaFuncionarios.filter((item) => {
                return Object.values(item.nome).join('').toLowerCase().includes(procurarUsuarios.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(listaFuncionarios)
        }
    }

    // const [procurarCargo, setProcurarCargo] = useState([]);

    // const searchCargo = (searchValue) => {
    //     setProcurarCargo(searchValue)
    //     if (procurarCargo !== 0) {
    //         const filteredData = listaCargo.filter((item) => {
    //             return Object.values(item.idCargoNavigation.idCargo).join().includes(procurarCargo)
    //         })
    //         setFilteredResults(filteredData)
    //     } else {
    //         setFilteredResults(listaCargo)
    //     }
    // }








    useEffect(BuscarFuncionario, [])
    // useEffect(BuscarCargos, [])

    return (
        <body>
            {/* <Modall atividade={listaAtividades.find(atividade => atividade.idAtividade == idAtividadeModal)} showModal={showModal} setShowModal={setShowModal} /> */}
            {/* <ModalAcompanhar usuario={listaFuncionarios.find(usuario => usuario.idUsuario == idFuncionarioModal)} showModal={showModal} setShowModal={setShowModal} />  */}
            <ModalAcompanhar idUsuarioAvaliador={idUsuarioAvaliador} usuario={listaFuncionarios.find(usuario => usuario.idUsuario == idUsuarioModal)} showModal={showModal} setShowModal={setShowModal} /> 
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
            
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
                                    <label ></label>
                                    <input
                                        className='g3_inputPesquisaCarometro'
                                        type="search"
                                        placeholder='Pesquisar'
                                        // autoComplete='off'
                                        list='usuario'
                                        onChange={(e) => searchItems(e.target.value)}
                                    />

                                    {/* <select
                                            name="Cargo"
                                            value={idCargo}
                                            onChange={(e) => searchCargo(e.target.value)}
                                            list='cargo'
                                            className="g3_inputCadastroSelect"

                                        >
                                            <option value="#">Cargo</option>
                                            {
                                                listaCargo.map((event) => {
                                                    return (

                                                        <option key={event.idCargo} value={event.idCargo}>{event.nomeCargo}
                                                        </option>
                                                    );
                                                })}

                                        </select> */}
                                </div>
                            </div>
                            <div className='g3_cardsCarometro animate__animated animate__fadeInUp'>
                                {

                                    procurarUsuarios.length > 0 ?



                                        filteredResults.map((usuario) => {
                                            return (
                                                <button className='g3_abrirModal' onClick={OpenModal} onClickCapture = {() =>setIdUsuarioModal(usuario.idUsuario)} type="button">
                                                    <div className='g3_cardUsuario'>
                                                        <img className='g3_fotoCarometro' src={"https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples/" + usuario.caminhoFotoPerfil} alt="fotoPerfilCarometro" />
                                                        <span className="g3_spanCarometro">{usuario.nome}</span>
                                                        <span className="g3_spanCarometro">{usuario.idCargoNavigation.nomeCargo}</span>
                                                    </div>
                                                </button>
                                            )
                                        })

                                        :
                                        listaFuncionarios.map((usuario) => {
                                            return (
                                                <button className='g3_abrirModal' onClick={OpenModal} onClickCapture = {() =>setIdUsuarioModal(usuario.idUsuario)} type="button">
                                                    <div className='g3_cardUsuario'>
                                                        <img className='g3_fotoCarometro' src={"https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples/" + usuario.caminhoFotoPerfil} alt="fotoPerfilCarometro" />
                                                        <span className="g3_spanCarometro">{usuario.nome}</span>
                                                        <span className="g3_spanCarometro">{usuario.idCargoNavigation.nomeCargo}</span>
                                                    </div>
                                                </button>

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