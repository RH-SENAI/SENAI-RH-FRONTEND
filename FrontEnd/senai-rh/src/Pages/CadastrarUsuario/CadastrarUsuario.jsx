import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import loginLight from "../../assets/img/loginLight";
import "../../assets/Css/style.css"


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
        <main>
            <div className="container boxCadastro">
                <form className="formCadastro" onSubmit={cadastrarUsuario}>
                    <div className="bodyCadastro">
                        <label className="labelCadastro">Nome Do Usuario</label>
                        <input type="text" className="inputCadastro" name="nomeUsuario" placeholder="Nome do Usuario" value={nomeUsuario} onChange={(event) => setNomeUsuario(event.target.value)} />

                        <label className="labelCadastro">Endereço</label>
                        <input type="text" className="inputCadastro" name="endereco" placeholder="Endereço do Usuario" value={endereco} onChange={(event) => setEndereco(event.target.value)} />

                        <label className="labelCadastro">Email</label>
                        <input type="text" className="inputCadastro" name="email" placeholder="Email do Usuario" value={email} onChange={(event) => setEmail(event.target.value)} />

                        <label className="labelCadastro">Senha</label>
                        <input type="text" className="inputCadastro" name="senha" placeholder="Senha do Usuario" value={senha} onChange={(event) => setSenha(event.target.value)} />

                        <label className="labelCadastro">CPF</label>
                        <input type="text" className="inputCadastro" name="CPF" placeholder="CPF do Usuario" value={CPF} onChange={(event) => setCPF(event.target.value)} />
                        
                        <label className="labelCadastro">Setor</label>
                        <select
                            name="idSetor"
                            value={idSetor}
                            className="inputCadastro"
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
                        
                        <label className="labelCadastro">Cargo</label>
                        <select name="Cargo"
                            value={idCargo}
                            onChange={event => setIdCargo(event.target.value)}
                            className="inputCadastro"

                        >
                            <option>Cargo</option>

                            {listaCargo.map((event) => {
                                return (

                                    <option key={event.idCargo} value={event.idCargo}>{event.idCargo}
                                    </option>
                                );
                            })}

                        </select>
                        <select name="Unidade"
                            value={idUnidade}
                            onChange={event => setIdCargo(event.target.value)}
                            className="inputCadastro"

                        >

                            {listaUnidade.map((event) => {
                                return (

                                    <option key={event.idUnidade} value={event.idUnidade}>{event.idUnidade}
                                    </option>
                                );
                            })}

                        </select>
                        <input className="inputCadastro" value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)} type="datetime-local" />
                    </div>
                </form>
                <div className="boxImg">
                    <img classname="imgLogin" src={loginLight} alt="ImgLogin"/>
                </div>
            </div>
        </main>
    );
}