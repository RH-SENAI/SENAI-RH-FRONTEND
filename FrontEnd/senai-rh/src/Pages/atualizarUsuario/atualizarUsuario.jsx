import { useState, useEffect } from "react";
import axios from 'axios';
import '../../Assets/Css/atualizarUsuario.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header/headerAdm'
import { Navigate, useNavigate } from 'react-router-dom';
import fotoAtualizar from "../../Assets/img/atualizarLight.svg"

// Vai precisar da auth para puxar as informações do usuário pertencente do perfil
// img perfil

export default function AtualizarPerfil() {

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [cpf, setCPF] = useState('');
    const [dataNascimento, setDataNascimento] = useState(Date);
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [idCargo, setIdCargo] = useState(0)
    const [idUnidade, setIdUnidade] = useState(0)
    const [listaUnidade, setListaUnidade] = useState([])
    const [listaCargo, setListaCargo] = useState([])

    //Função de Buscar funcionário por ID
    function BuscarFuncionarios() {
        axios.get('link com o endpoint', {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })

        //Função para Atualizar o nome do funcionário
        function AtualizarNomeFuncionario(event) {
            event.preventDefault()

            axios.put("link com o endpoint",
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
                    }
                }
            )

                .then((resposta) => {
                    if (resposta.status === 200) {
                        BuscarFuncionarios()
                    }
                })
        }


        //Função para Atualizar o CPF do funcionário
        function AtualizarCpfFuncionario(event) {
            event.preventDefault()

            axios.put("link com o endpoint",
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
                    }
                }
            )

                .then((resposta) => {
                    if (resposta.status === 200) {
                        BuscarFuncionarios()
                    }
                })
        }


        //Função para Atualizar a data de nascimento do funcionário
        function AtualizarDataNascimento(event) {
            event.preventDefault()

            axios.put("link com o endpoint",
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
                    }
                }
            )

                .then((resposta) => {
                    if (resposta.status === 200) {
                        BuscarFuncionarios()
                    }
                })
        }


        //Função para Atualizar o cargo do funcionário
        function AtualizarCargoFuncionario(event) {
            event.preventDefault()

            axios.put("link com o endpoint",
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
                    }
                }
            )

                .then((resposta) => {
                    if (resposta.status === 200) {
                        BuscarFuncionarios()
                    }
                })
        }

        //Função para Atualizar o endereço do funcionário
        function AtualizarEnderecoFuncionario(event) {
            event.preventDefault()

            axios.put("link com o endpoint",
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
                    }
                }
            )

                .then((resposta) => {
                    if (resposta.status === 200) {
                        BuscarFuncionarios()
                    }
                })
        }

        //Função para Atualizar o Email do funcionário
        function AtualizarEmailFuncionario(event) {
            event.preventDefault()

            axios.put("link com o endpoint",
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
                    }
                }
            )

                .then((resposta) => {
                    if (resposta.status === 200) {
                        BuscarFuncionarios()
                    }
                })
        }

        //Função para Atualizar a Unidade do funcionário
        function AtualizarUnidadeFuncionario(event) {
            event.preventDefault()

            axios.put("link com o endpoint",
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
                    }
                }
            )

                .then((resposta) => {
                    if (resposta.status === 200) {
                        BuscarFuncionarios()
                    }
                })
        }

    }

    useEffect(BuscarFuncionarios, [])

    return (
        <div>

            <Header />

            <div className="main">
                <div className="container boxOrganizar">

                    <div className="textoEFoto">
                        <div className="fotoPerfilVazia">
                            <img src="/static/media/Perfil.665c6f4f69a27632e71f989e2539ea7e.svg" alt="Imagem de perfil vazia" />
                        </div>
                        <h6>Atualizar Foto</h6>
                    </div>


                    <form className="formOrganizar" onSubmit={AtualizarPerfil}>
                        <label className="labelAtualizar">Nome</label>
                        <input type="text" className="inputAtualizar" name="nomeUsuario" placeholder="Digite aqui nome do funcionário" value={nomeUsuario} onChange={(event) => setNomeUsuario(event.target.value)} />

                        <label className="labelAtualizar">CPF</label>
                        <input type="text" className="inputAtualizar" name="cpf" placeholder="Digite os numeros de seu CPF" value={cpf} onChange={(event) => setCPF(event.target.value)} />

                        <label className="labelAtualizar">Data de nascimento</label>
                        <input type="date" className="inputAtualizar" name="dataNascimento" value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)} />

                        <label className="labelAtualizar">Endereço</label>
                        <input type="text" className="inputAtualizar" name="endereco" placeholder="Digite aqui o endereço do funcionário" value={endereco} onChange={(event) => setEndereco(event.target.value)} />

                        <label className="labelAtualizar">Email</label>
                        <input type="text" className="inputAtualizar" name="email" placeholder="Digite aqui o email do funcionário" value={email} onChange={(event) => setEmail(event.target.value)} />

                        <label className="labelAtualizar">Unidade</label>
                        <select name="Unidade"
                            value={idUnidade}
                            onChange={event => setIdUnidade(event.target.value)}
                            className="inputAtualizarSelect"

                        >
                            <option value="#">Selecione a Unidade</option>
                            {listaUnidade.map((event) => {
                                return (

                                    <option key={event.idUnidade} value={event.idUnidade}>{event.idUnidade}
                                    </option>
                                );
                            })}

                        </select>
                        <label className="labelAtualizar">Cargo</label>
                        <select name="Cargo"
                            value={idCargo}
                            onChange={event => setIdCargo(event.target.value)}
                            className="inputAtualizarSelect"

                        >
                            <option value="#">Selecione o Cargo</option>
                            {listaCargo.map((event) => {
                                return (

                                    <option key={event.idCargo} value={event.idCargo}>{event.idCargo}
                                    </option>
                                );
                            })}

                        </select>
                        <button type="submit" className="botaoAtualizar"
                        >Atualizar</button>
                    </form>
                    <div className="boxImgAtualizar">
                        <img className="imgAtualizar" src={fotoAtualizar} alt="" />
                    </div>
                </div>
            </div>
            <Footer />



        </div>

    )
}
