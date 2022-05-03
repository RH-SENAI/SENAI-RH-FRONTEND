import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Assets/css/gp1style.css'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../../Assets/img/logo1.svg"
import bannerCadastrarAtividade from "../../Assets/img/bannerCadastrarAtividade.svg"
import { Modall } from '../../components/modalUsuarios'
import {
    parseJwt
    // usuarioAutenticado
} from '../../services/auth';


export default function CadastrarAtividades() {
    const [listaAtividades, setListaAtividades] = useState([]);
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [listaUsuarioSelecionados, setListaUsuarioSelecionados] = useState([]);
    const [listaAtividadesValidar, setListaAtividadesValidar] = useState([]);
    const [idAtividade, setIdAtividade] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModalValidar, setShowModalValidar] = useState(false);
    const [idUsuarioModal, setIdUsuarioModal] = useState()
    const [idSetor, setIdSetor] = useState('');
    const [nomeAtividade, setNomeAtividade] = useState('');
    const [recompensaMoeda, setRecompensaMoeda] = useState('');
    const [recompensaTrofeu, setRecompensaTrofeu] = useState('');
    const [descricaoAtividade, setDescricaoAtividade] = useState('');
    const [necessarioValidar, setNecessarioValidar] = useState(false);
    
    const notify_cadastrar = () => toast.success("Atividade Cadastrada!");
    // const notify_validar = () => toast.success("Atividade Validada!");
    const notify_erroCadastrar = () => toast.error("Preencha todos os campos!");

    const [isLoading, setIsLoading] = useState(false);

    const OpenModal = () => {
        setShowModal(prev => !prev);
        console.log('abriuuu')
    }

    function listarUsuarios() {
        axios("http://localhost:5000/api/Usuarios/Funcionarios"
            , {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaUsuarios(resposta.data)
                    console.log(resposta.data)
                }
            })

            .catch(erro => console.log(erro))
    };

    useEffect(listarUsuarios, []);

    async function CadastrarAtividade(evento) {
        setIsLoading(true);
        evento.preventDefault()

        let idGestorCadastro = parseJwt().jti;
        console.log("id do gestor aqui em baixo");

        console.log(idGestorCadastro);

        await axios
            .post('http://localhost:5000/api/Atividades', {
                idAtividade: idAtividade,
                idSetor: idSetor,
                nomeAtividade: nomeAtividade,
                recompensaMoeda: recompensaMoeda,
                recompensaTrofeu: recompensaTrofeu,
                descricaoAtividade: descricaoAtividade,
                necessarioValidar: necessarioValidar,
                idGestorCadastro: idGestorCadastro

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
                    notify_cadastrar();
                }

            })
            .catch(erro => console.log(erro), setIsLoading(false), notify_erroCadastrar());


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
            <Modall usuarios={listaUsuarios} showModal={showModal} setShowModal={setShowModal} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <main className="container_">
                <div className="G1_Left_CadastroAtividade">
                    <div className="G1_banner_CadastroAtividade">
                        <img src={Logo} alt="Logo do senai" className="G1_logo_CadastroAtividade" />
                        <img src={bannerCadastrarAtividade} className="G1_bannerCadastroAtividade" alt="" />
                        <p className="G1_p_senai">© 2022 Sesi Senai RH</p>
                    </div>
                </div>
                <div className="G1_Right_CadastroAtividade">
                    <div className="G1_textCadastrar">
                        <h1>CADASTRO</h1>
                        <h2>DE ATIVIDADE</h2>
                    </div>
                    <form className="G1_form_Cadastrar" onSubmit={CadastrarAtividade} >
                        <div className='G1_organizar_form'>
                            <div className='G1_organizar_inputs'>
                                <div className="G1_inputLabel_Cadastrar">
                                    <input value={nomeAtividade}
                                        onChange={(campo) => setNomeAtividade(campo.target.value)} type="text" name="titulo" placeholder="Digite o título da atividade" />
                                    <label for="titulo">Título da atividade</label>
                                </div>
                                <div className="G1_inputLabel_Cadastrar">
                                    <input value={recompensaMoeda}
                                        onChange={(campo) => setRecompensaMoeda(campo.target.value)} type="number" name="moedas" placeholder="Digite a premiação em moedas" />
                                    <label for="moedas">Prêmio em moedas</label>
                                </div>
                            </div>
                            <div className='G1_organizar_inputs'>
                                <div className="G1_inputLabel_Cadastrar">
                                    <input value={descricaoAtividade}
                                        onChange={(campo) => setDescricaoAtividade(campo.target.value)} type="text" name="titulo" placeholder="Digite seu email" />
                                    <label for="titulo">Descrição da atividade</label>
                                </div>
                                <div className="G1_inputLabel_Cadastrar">
                                    <input value={recompensaTrofeu}
                                        onChange={(campo) => setRecompensaTrofeu(campo.target.value)} type="number" name="moedas" placeholder="Digite sua senha" />
                                    <label for="moedas">Prêmio em troféus</label>
                                </div>
                            </div>
                            <div className='G1_organizar_inputs'>
                                <button className='G1_btn_modal' onClick={OpenModal} type="button" >Selecione um Usuário</button>
                            </div>
                        </div>
                        <div className='G1_div_ToggleValidar'>
                            <label classname="G1_label_precisaValidar">Precisa Validar</label>
                            <div className='G1_organizar_switchBtn'>
                                <input className="checkbox_switch"
                                    type="checkbox"
                                    id="switch"
                                    name="validar"
                                    value={necessarioValidar}
                                    onClick={checkValidar}
                                />
                                <label className='label_switch' htmlFor="switch">Toggle</label>
                                {necessarioValidar && (
                                    <p className='text_switch'>
                                        SIM
                                    </p>
                                )}
                                {!necessarioValidar && (
                                    <p className='text_switch'>
                                        NÃO
                                    </p>
                                )}
                            </div>
                        </div>
                        {isLoading && (
                            <button className='G1_btn_Cadastrar' type="submit">Carregando...</button>
                        )}
                        {!isLoading && (
                            <button className='G1_btn_Cadastrar' type="submit">Cadastrar</button>
                        )}
                    </form>
                </div>
            </main>
        </div>
    );
}

