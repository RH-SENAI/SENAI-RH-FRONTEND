import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";
import CadastroLight from "../../Assets/img/ImgCadastroLight.png";
import "../../Assets/Css/cadastro.css"
import "../../Assets/Css/footer.css"
import "../../Assets/Css/styleG3.css"
import Footer from "../../components/Footer";


export default function Cadastro() {

    const [listaCargo, setListaCargo] = useState([])
    const [listaUnidade, setListaUnidade] = useState([])
    const [listaTipoUsuario, setListaTipoUsuario] = useState([])
    const [idUsuario, setIdUsuario] = useState(0)
    const [idTipoUsuario, setIdTipoUsuario] = useState(0)
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [salario, setSalario] = useState(0)
    // const [trofeu, setTrofeu] = useState(0)
    // const [saldoMoeda, setSaldoMoeda] = useState(0)
    // const [nivelSatisfacao, setNivelSatisfacao] = useState(0)
    // const [vantagens, setVantagens] = useState(0)
    const [senha, setSenha] = useState('')
    const [CPF, setCPF] = useState('')
    const [idCargo, setIdCargo] = useState(0)
    const [idUnidade, setIdUnidade] = useState(0)
    const [dataNascimento, setDataNascimento] = useState(new Date())

    function BuscarCargos() {
        axios.get('http://localhost:5000/api/', {
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
        axios.get('http://localhost:5000/api/', {
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
        axios.get('http://localhost:5000/api/', {
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
    

    const cadastrarUsuario = (event) => {

        event.preventDefault();

        var formData = new FormData();

        const element = document.getElementById('fotoPerfil')
        const file = element.files[0]
        formData.append('fotoDePerfil', file, file.name)

        formData.append('idUsuario', idUsuario,);
        formData.append('', );
        formData.append('', );
        formData.append('', );
        formData.append('', );
        formData.append('', );

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

    useEffect(BuscarCargos, [])
    useEffect(BuscarUnidade, [])
    useEffect(BuscarTipoUsuario, [])

    return (
        <body>
            <main>
                <div className="container">
                    <div className="boxCadastro">
                        <form className="formCadastro" onSubmit={cadastrarUsuario}>
                            <div className="bodyCadastro">
                                {/* <label className="labelCadastro">Nome Do Usuario</label> */}
                                <input type="text" className="inputCadastro" name="nomeUsuario" placeholder="Nome Do Usuario" value={nomeUsuario} onChange={(event) => setNomeUsuario(event.target.value)} />

                                {/* <label className="labelCadastro">Endereço</label> */}
                                <input type="text" className="inputCadastro" name="endereco" placeholder="Endereço" value={endereco} onChange={(event) => setEndereco(event.target.value)} />

                                {/* <label className="labelCadastro">Email</label> */}
                                <input type="text" className="inputCadastro" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />

                                {/* <label className="labelCadastro">Senha</label> */}
                                <input type="text" className="inputCadastro" name="senha" placeholder="Senha" value={senha} onChange={(event) => setSenha(event.target.value)} />

                                {/* <label className="labelCadastro">CPF</label> */}
                                <input type="text" className="inputCadastro" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" name="CPF" placeholder="CPF" value={CPF} onChange={(event) => setCPF(event.target.value)} />
                                
                                {/* <label className="labelCadastro">Salario</label> */}
                                <input type="number" className="inputCadastro" name="salario" placeholder="Salario" value={salario} onChange={(event) => setSalario(event.target.value)} />

                                {/* <label className="labelCadastro">Setor</label> */}
                                <select
                                    name="idTipoUsuario"
                                    value={idTipoUsuario}
                                    className="inputCadastroSelect"
                                    onChange={(event) => setListaTipoUsuario(event.target.value)}

                                >

                                    <option value="#">Tipo de Usuario</option>
                                    {listaTipoUsuario.map((event) => {
                                        return (

                                            <option key={event.idTipoUsuario} value={event.idTipoUsuario}>{event.idTipoUsuario}
                                            </option>
                                        );
                                    })}

                                </select>

                                {/* <label className="labelCadastro">Cargo</label> */}
                                <select name="Cargo"
                                    value={idCargo}
                                    onChange={event => setIdCargo(event.target.value)}
                                    className="inputCadastroSelect"

                                >
                                    <option value="#">Cargo</option>
                                    {listaCargo.map((event) => {
                                        return (

                                            <option key={event.idCargo} value={event.idCargo}>{event.idCargo}
                                            </option>
                                        );
                                    })}

                                </select>
                                {/* <label className="labelCadastro">Unidade</label> */}
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
                                {/* <label className="labelCadastro">Data de nascimento</label> */}
                                <input className="inputCadastroData" value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)} type="date" />
                                <button onClick={() => cadastrarUsuario} type="submit" className="botaoCadastro"
                                >Cadastrar</button>
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