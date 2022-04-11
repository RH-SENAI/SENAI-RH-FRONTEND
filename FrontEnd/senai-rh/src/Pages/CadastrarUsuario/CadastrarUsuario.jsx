import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";
import CadastroLight from "../../assets/img/ImgCadastroLight.png";
import "../../assets/css/cadastro.css"
import "../../assets/css/footer.css"
import "../../assets/css/styleG3.css"
import Footer from "../../components/footer";
import Perfil from '../../assets/img/Perfil.svg';
import HeaderFuncionario from "../../components/header/headerFuncionario";


export default function Cadastro() {

    const [idUsuario, setIdUsuario] = useState(0)
    const [listaCargo, setListaCargo] = useState([])
    const [listaUnidade, setListaUnidade] = useState([])
    const [listaTipoUsuario, setListaTipoUsuario] = useState([])
    const [usuario, setUsuario] = useState([])
    const [idTipoUsuario, setIdTipoUsuario] = useState(0)
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [salario, setSalario] = useState(0)
    const [trofeu, setTrofeu] = useState(0)
    const [saldoMoeda, setSaldoMoeda] = useState(0)
    const [nivelSatisfacao, setNivelSatisfacao] = useState(0)
    const [vantagens, setVantagens] = useState(0)
    const [senha, setSenha] = useState('')
    const [CPF, setCPF] = useState('')
    const [idCargo, setIdCargo] = useState(0)
    const [idUnidade, setIdUnidade] = useState(0)
    const [dataNascimento, setDataNascimento] = useState(new Date())
    const [fotoPerfil, setFotoPerfil] = useState('')





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

    function BuscarTipoUsuario() {
        axios.get('http://localhost:5000/api/idTipoUsuarios/Listar', {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    setListaTipoUsuario(resposta.data)
                    console.log(resposta)
                }
            })

            .catch(erro => console.log(erro))
    }


    const CadastrarUsuario = (event) => {

        event.preventDefault();

        var formData = new FormData();

        const element = document.getElementById('fotoPerfil')
        const file = element.files[0]
        formData.append('fotoPerfil', file, file.name)

        formData.append('idUsuario', idUsuario);
        formData.append('nome', nomeUsuario);
        formData.append('email', email);
        formData.append('senha', senha);
        formData.append('dataNascimento', dataNascimento);
        formData.append('cpf', CPF);
        formData.append('idCargo', idCargo);
        formData.append('idTipoUsuario', idTipoUsuario);
        formData.append('idUnidadeSenai', idUnidade);
        formData.append('localizacaoUsuario', endereco);
        formData.append('salario', salario);
        formData.append('fotoPerfil', fotoPerfil);



        axios({
            method: "post",
            url: "http://localhost:5000/api/Usuarios/Cadastrar",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response);
                console.log('usuario cadastrado')
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    }
    // function CadastrarUsuario(usuario) {
    //     usuario.preventDefault()

    //     var formData = new FormData();

    //     formData.append('idUsuario', idUsuario);
    //     formData.append('nome', nomeUsuario);
    //     formData.append('email', email);
    //     formData.append('senha', senha);
    //     formData.append('dataNascimento', dataNascimento);
    //     formData.append('cpf', CPF);
    //     formData.append('salario', salario);
    //     formData.append('idCargo', idCargo);
    //     formData.append('idUnidadeSenai', idUnidade);
    //     formData.append('idTipoUsuario', idTipoUsuario);
    //     formData.append('localizacaoUsuario', endereco);
    //     formData.append('caminhoFotoPerfil', "");
    //     formData.append('fotoPerfil', null);
    //     formData.append('trofeu', trofeu)
    //     formData.append('saldoMoeda', saldoMoeda)
    //     formData.append('nivelSatisfacao', nivelSatisfacao)
    //     formData.append('vantagens', vantagens)

    //     fetch(
    //         "http://localhost:5000/api/Usuarios/"+"Cadastrar",
    //         {
    //             method: 'POST',
    //             body: JSON.stringify({ formData }),
    //             headers: { "Content-Type": "multipart/form-data" },
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(response);
    //             console.log('usuario cadastrado')
    //         })
    //         .catch(function (response) {
    //             //handle error
    //             console.log(response);
    //         });
    // }

    useEffect(BuscarTipoUsuario, [])
    useEffect(BuscarCargos, [])
    useEffect(BuscarUnidade, [])


    return (
        <body>
            <HeaderFuncionario />
            <main>
                <div className="container">
                    <div className="boxCadastro">
                        <form className="formCadastro" onSubmit={CadastrarUsuario}>
                            <div className="bodyCadastro">
                                <div className="boxFotoPerfilCadastro">
                                    <img className="fotoPerfilCadastro" src={Perfil}/>
                                </div>
                                
                                <label className="labelCadastro" for="fotoPerfil">Inserir foto</label>
                                <input className="inputCadastroFile" value={fotoPerfil} name='fotoPerfil' id='fotoPerfil' onChange={(event) => setFotoPerfil(event.target.value)} type="file" />
                                {/* <label className="labelCadastro">Nome Do Usuario</label> */}
                                <input type="text" className="inputCadastro" name="nomeUsuario" placeholder="Nome Do Usuario" value={nomeUsuario} onChange={(event) => setNomeUsuario(event.target.value)} />

                                {/* <label className="labelCadastro">Endereço</label> */}
                                <input type="text" className="inputCadastro" name="endereco" placeholder="Endereço" value={endereco} onChange={(event) => setEndereco(event.target.value)} />

                                {/* <label className="labelCadastro">Email</label> */}
                                <input type="text" className="inputCadastro" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />

                                {/* <label className="labelCadastro">Senha</label> */}
                                <input type="text" className="inputCadastro" name="senha" placeholder="Senha" value={senha} onChange={(event) => setSenha(event.target.value)} />

                                {/* <label className="labelCadastro">CPF</label> */}
                                <input type="text" className="inputCadastro" name="CPF" placeholder="CPF" value={CPF} onChange={(event) => setCPF(event.target.value)} />

                                {/* <label className="labelCadastro">Salario</label> */}
                                <input type="number" className="inputCadastro" name="salario" placeholder="Salario" value={salario} onChange={(event) => setSalario(event.target.value)} />

                                {/* <label className="labelCadastro">Setor</label> */}
                                <select
                                    name="idTipoUsuario"
                                    value={idTipoUsuario}
                                    className="inputCadastroSelect"
                                    onChange={(event) => setIdTipoUsuario(event.target.value)}

                                >

                                    <option value="#">Tipo de Usuario</option>
                                    {listaTipoUsuario.map((event) => {
                                        return (

                                            <option key={event.idTipoUsuario} value={event.idTipoUsuario}>{event.nomeTipoUsuario}
                                            </option>
                                        );
                                    })}

                                </select>

                                {/* <label className="labelCadastro">Cargo</label> */}
                                <select
                                    name="Cargo"
                                    value={idCargo}
                                    onChange={(event) => setIdCargo(event.target.value)}
                                    className="inputCadastroSelect"

                                >
                                    <option value="#">Cargo</option>
                                    {
                                        listaCargo.map((event) => {
                                            return (

                                                <option key={event.idCargo} value={event.idCargo}>{event.nomeCargo}
                                                </option>
                                            );
                                        })}

                                </select>
                                {/* <label className="labelCadastro">Unidade</label> */}
                                <select name="Unidade"
                                    value={idUnidade}
                                    onChange={(event) => setIdUnidade(event.target.value)}
                                    className="inputCadastroSelect"

                                >
                                    <option value="#">Unidade</option>
                                    {
                                        listaUnidade.map((event) => {
                                            return (

                                                <option key={event.idUnidade} value={event.idUnidadeSenai}>{event.nomeUnidadeSenai}
                                                </option>
                                            );
                                        })}

                                </select>
                                {/* <label className="labelCadastro">Data de nascimento</label> */}
                                <input className="inputCadastroData" value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)} type="date" />
                                <button type="submit" className="botaoCadastro">Cadastrar</button>
                            </div>
                        </form>

                        <div className="boxImg">
                            <img className="imgCadastro" src={CadastroLight} alt="ImgCadastro" />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </body>

    );
}