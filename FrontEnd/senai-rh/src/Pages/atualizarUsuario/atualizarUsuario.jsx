import { useState, useEffect } from "react";
import axios from 'axios';
import '../../assets/css/atualizarUsuario.css'
import Footer from '../../components/footer';
import Header from '../../components/header/headerAdm'
import { Navigate, useNavigate } from 'react-router-dom';
import fotoAtualizar from "../../assets/img/atualizarLight.svg"

// Vai precisar da auth para puxar as informações do usuário pertencente do perfil
// img perfil

export default function AtualizarPerfil() {

    const [idUsuario, setIdUsuario] = useState(1)
    const [listaCargo, setListaCargo] = useState([])
    const [listaUnidade, setListaUnidade] = useState([])
    const [usuario, setUsuario] = useState([])
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [salario, setSalario] = useState(0)
    const [trofeu, setTrofeu] = useState(0)
    const [saldoMoeda, setSaldoMoeda] = useState(0)
    const [nivelSatisfacao, setNivelSatisfacao] = useState(0)
    const [vantagens, setVantagens] = useState(0)
    const [cpf, setCPF] = useState('')
    const [idCargo, setIdCargo] = useState(0)
    const [idUnidade, setIdUnidade] = useState(0)
    const [dataNascimento, setDataNascimento] = useState(new Date())
    const [fotoPerfil, setFotoPerfil] = useState('')

    //Função de Buscar funcionário por ID
    function BuscarFuncionarios() {
        axios.get('http://localhost:5000/api/Usuarios/Listar', {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })



    }
    function BuscarCargos() {
        axios.get('http://localhost:5000/api/Cargos/Listar', {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    setListaCargo(resposta.data)
                    console.log(resposta)
                }
            })

            .catch(erro => console.log(erro))
    }

    function BuscarUnidade() {
        axios.get('http://localhost:5000/api/Unidadesenais/Listar', {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    setListaUnidade(resposta.data)
                    console.log(resposta)
                }
            })

            .catch(erro => console.log(erro))
    }

    function AtualizarUsuario(event) {

        event.preventDefault()

        axios.put(`http://localhost:5000/api/Usuarios/Atualizar/${idUsuario}`, {

            idUsuario: idUsuario,
            nome: nomeUsuario,
            email: email,
            dataNascimento: dataNascimento,
            cpf: cpf,
            idCargo: idCargo,
            idUnidadeSenai: idUnidade,
            localizacaoUsuario: endereco,
            salario: salario,
        }, 
        {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            },

        })
        
            .then((resposta) => {
                if (resposta.status === 200) {
                    BuscarFuncionarios();
                    BuscarCargos();
                    BuscarUnidade();
                    console.log('foi')
                    console.log(email)
                }
            })

                .catch(erro => console.log(erro))

        }



    useEffect(BuscarFuncionarios, [])
    useEffect(BuscarCargos, [])
    useEffect(BuscarUnidade, [])

    return (
            <div>

                <Header />

                <div className="main">
                    <div className="container boxOrganizar">

                        <div className="textoEFoto">
                            <div className="fotoPerfilVazia">
                                <img src={"http://localhost:5000/StaticFiles/Images/" + usuario.caminhoFotoPerfil} alt="Imagem de perfil vazia" />
                            </div>
                            <label className="labelCadastro" for="fotoPerfil">Inserir foto</label>
                            <input className="inputCadastroFile" value={fotoPerfil} name='fotoPerfil' id='fotoPerfil' onChange={(event) => setFotoPerfil(event.target.value)} type="file" />
                        </div>


                        <form className="formOrganizar" onSubmit={AtualizarUsuario}>
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

                            <label className="labelAtualizar">Salario</label>
                            <input type="number" className="inputAtualizar" name="salario" placeholder="Digite aqui o salario do funcionário" value={salario} onChange={(event) => setSalario(event.target.value)} />

                            <label className="labelAtualizar">Unidade</label>
                            <select name="Unidade"
                                value={idUnidade}
                                onChange={event => setIdUnidade(event.target.value)}
                                className="inputAtualizarSelect"

                            >
                                <option value="#">Selecione a Unidade</option>
                                {listaUnidade.map((event) => {
                                    return (

                                        <option key={event.idUnidade} value={event.idUnidadeSenai}>{event.nomeUnidadeSenai}
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

                                        <option key={event.idCargo} value={event.idCargo}>{event.nomeCargo}
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
