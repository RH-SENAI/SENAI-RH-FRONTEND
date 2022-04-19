import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Assets/css/gp1style.css'
import Rodape from '../../components/Footer';
import Header from '../../components/Header/headerFuncionario';
import { Link, useHistory } from 'react-router-dom'
import img_olho from '../../Assets/img/Olho_Atividades.png'
import Modal from 'react-modal';
import { Modall } from '../../components/Modal'
import { ModallValidar } from '../../components/modalValidar'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CadastrarAtividades() {
    const [listaAtividades, setListaAtividades] = useState([]);
    const [listaAtividadesValidar, setListaAtividadesValidar] = useState([]);
    const [idAtividade, setIdAtividade] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModalValidar, setShowModalValidar] = useState(false);
    const [idAtividadeModal, setIdAtividadeModal] = useState()
    const [idSetor, setIdSetor] = useState('');
    const [nomeAtividade, setNomeAtividade] = useState('');
    const [recompensaMoeda, setRecompensaMoeda] = useState('');
    const [recompensaTrofeu, setRecompensaTrofeu] = useState('');
    const [descricaoAtividade, setDescricaoAtividade] = useState('');
    const [necessarioValidar, setNecessarioValidar] = useState(false);
    const notify_cadastrar = () => toast.success("Atividade Cadastrada!");
    // const notify_validar = () => toast.success("Atividade Validada!");
    const notify_Logar = () => toast.success("Usuario logado!");

    const [isLoading, setIsLoading] = useState(false);

    async function CadastrarAtividade(evento) {
        setIsLoading(true);
        evento.preventDefault()

        await axios
            .post('http://localhost:5000/api/Atividades', {
                idAtividade: idAtividade,
                idSetor: idSetor,
                nomeAtividade: nomeAtividade,
                recompensaMoeda: recompensaMoeda,
                recompensaTrofeu: recompensaTrofeu,
                descricaoAtividade: descricaoAtividade,
                necessarioValidar: necessarioValidar
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
            .then((resposta) => {
                if (resposta.status === 201) {
                    console.log('Atividade cadastrada');
                    setIdAtividade('');
                    setIdSetor('');
                    setNomeAtividade('');
                    setRecompensaMoeda('');
                    setRecompensaTrofeu('');
                    setRecompensaTrofeu('');
                    setDescricaoAtividade('');
                    setNecessarioValidar(false);
                    setIsLoading(false);
                    // setListaSetores([]);
                }
            })
            .catch(erro => console.log(erro), setIdAtividade(''), setIdSetor(''), setNomeAtividade(''), setInterval(() => {
                setIsLoading(false)
            }, 5000));
        notify_cadastrar();


    }

    function checkValidar() {
        console.log(necessarioValidar + " - Anterior")
        setNecessarioValidar(!necessarioValidar)
        console.log(necessarioValidar + " - Atual")
    }

    // useEffect(notify_Logar, []);
    // useEffect(listarAtividades, cadastrarAtividade);

    return (
        <div className="div_container">
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Header />
            <div className="container_"> 

            </div>
            <Rodape />
        </div>
    );
}

