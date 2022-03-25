import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import "../../assets/css/styleG3.css";
import Footer from '../../components/Footer';

export default function Carometro() {

    //States 
    const idSala = useParams();
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [ListarSetor, setListaSetor] = useState([]);
    const [nomeFuncionario, setNomeFuncionario] = useState('');
    const [idFuncionarioModal, setIdFuncionarioModal] = useState(0)
    const [listaFuncionariosAchados, setListaFuncionariosAchados] = useState([])
    const OpenModal = () => {
        setShowModal(prev => !prev);
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

                    setListaAlunos(resposta.data)
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
                    setListaSala(resposta.data)
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
            <main>
                <div className="container">
                    <div className="containerCarometro">
                        <div className="sidebarCarometro">
                            <div className="headerSidebar">
                                <img src={iconFoto} alt="fotoPerfilCarometro" />
                                <span className="spanSidebar">Username</span>
                                <span className="spanSidebar">Cargo:</span>
                            </div>
                            <div className="bodySidebar">
                                <span className="spanSidebar">Equipes</span>
                                <img src={setaSelect} alt="setaSelect" />
                            </div>
                            <div className="footerSidebar">
                                <span className="spanSidebar">Logout</span>
                                <img src={iconLogout} alt="iconLogout" />
                            </div>

                        </div>
                        <div className="CardsCarometro">
                            <h1 className="tituloTelas">Carômetro</h1>
                            <div className="CardFuncionario">
                                <img src={iconFoto} alt="fotoPerfilCarometro" />
                                <span className="spanCarometro">Username</span>
                                <span className="spanCarometro">Cargo:</span>
                                <img src={seta} alt="setaCard"/>
                            </div>
                        </div>
                    </div>  
                </div>
            </main>
            <Footer />
        </body>
    )
}