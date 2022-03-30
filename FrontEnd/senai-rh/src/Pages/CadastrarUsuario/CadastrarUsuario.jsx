import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";
import CadastroLight from "../../Assets/img/ImgCadastroLight.png";
import "../../Assets/Css/cadastro.css"
import "../../Assets/Css/footer.css"
import "../../Assets/Css/styleG3.css"
import Footer from "../../Components/Footer";


export default function Cadastro() {

    const [listaCargo, setListaCargo] = useState([])
    const [listaSetor, setListaSetor] = useState([])
    const [listaUnidade, setListaUnidade] = useState([])
    const [idUsuario, setIdUsuario] = useState(0)
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [CPF, setCPF] = useState('')
    const [idSetor, setIdSetor] = useState(0)
    const [idCargo, setIdCargo] = useState(0)
    const [idUnidade, setIdUnidade] = useState(0)
    const [dataNascimento, setDataNascimento] = useState(new Date())



    function cadastrarUsuario(event) {
        event.preventDefault();

        let cadastro = {
            idUsuario: idUsuario,
            nomeUsuario: nomeUsuario,
            endereco: endereco,
            email: email,
            senha: senha,
            CPF: CPF,
            idUnidade: idUnidade,
            idCargo: idCargo,
            idSetor: idSetor,
            dataNascimento: dataNascimento
        }


        axios.post("", cadastro, {

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }



        })
            .then(response => {
                if (response.status === 201) {

                    console.log('usuario cadastrado')
                }
            })
            .catch(erro => console.log(erro))

    }


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
                                <input type="text" className="inputCadastro" name="CPF" placeholder="CPF" value={CPF} onChange={(event) => setCPF(event.target.value)} />

                                {/* <label className="labelCadastro">Setor</label> */}
                                <select
                                    name="idSetor"
                                    value={idSetor}
                                    className="inputCadastroSelect"
                                    onChange={(event) => setIdSetor(event.target.value)}

                                >

                                    <option value="#">Setor</option>
                                    {listaSetor.map((event) => {
                                        return (

                                            <option key={event.idSetor} value={event.idSetor}>{event.idSetor}
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
                                <input className="inputCadastroData" value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)} type="datetime-local" />
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