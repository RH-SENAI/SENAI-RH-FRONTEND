import { useState, useEffect } from "react";
import axios from 'axios';
import '../../Assets/Css/atualizarUsuario.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header/headerAdm'
import { Navigate, useNavigate } from 'react-router-dom';

// Vai precisar da auth para puxar as informações do usuário pertencente do perfil
// img perfil

export default function AtualizarPerfil() {

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [idCargo, setIdCargo] = useState(0)
    const [idUnidade, setIdUnidade] = useState(0)
    const [listaUnidade, setListaUnidade] = useState([])

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
    }

    useEffect(BuscarFuncionarios, [])

    return (
        <div>

            <Header />

            <div className="main">
                <div className="container">
                    <div className="textoEFoto">
                        <div className="fotoPerfilVazia">
                            <img src="/static/media/Perfil.665c6f4f69a27632e71f989e2539ea7e.svg" alt="Imagem de perfil vazia" />
                        </div>
                        <h6>Atualizar Foto</h6>
                    </div>

                    <form onSubmit={AtualizarPerfil}>
                        <label className="labelCadastro">Nome</label>
                        <input type="text" className="inputCadastro" name="nomeUsuario" placeholder="Digite aqui nome do funcionário" value={nomeUsuario} onChange={(event) => setNomeUsuario(event.target.value)} />

                        <label className="labelCadastro">Endereço</label>
                        <input type="text" className="inputCadastro" name="endereco" placeholder="Digite aqui o endereço do funcionário" value={endereco} onChange={(event) => setEndereco(event.target.value)} />

                        <label className="labelCadastro">Email</label>
                        <input type="text" className="inputCadastro" name="email" placeholder="Digite aqui o email do funcionário" value={email} onChange={(event) => setEmail(event.target.value)} />

                        <label className="labelCadastro">Unidade</label>
                        <select name="Unidade"
                            value={idUnidade}
                            onChange={event => setIdCargo(event.target.value)}
                            className="inputCadastroSelect"

                        >
                            <option value="#">Unidade</option>
                            {listaUnidade.map((event) => {
                                return (

                                    <option key={event.idUnidade} value={event.idUnidade}>{event.idUnidade}
                                    </option>
                                );
                            })}

                        </select>
                        <button onClick={() => AtualizarPerfil} type="submit" className="botaoAtualizar"
                                >Atualizar</button>
                    </form>

                </div>
            </div>
            <footer>
                <Footer />
            </footer>



        </div>

    )
}
