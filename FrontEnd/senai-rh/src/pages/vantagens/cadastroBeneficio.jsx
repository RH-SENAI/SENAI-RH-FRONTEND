import HeaderAdm from "../../components/header/headerAdm";
import cadastroCurso from '../../assets/img/cadastroCurso.svg'
import telaCadastroVantagens from '../../assets/img/telaCadastroVantagens.svg'
import '../../assets/css/cadastroCursos.css'
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../services/api";

export default function CadastrarBeneficio() {
    const [idEmpresa, setIdEmpresa] = useState(0)
    const [nomeDesconto, setNomeDesconto] = useState('')
    const [descricaoDesconto, setDescricaoDesconto] = useState('')
    const [numeroCupom , setNumeroCupom ] = useState('')
    const [valorDesconto, setValorDesconto] = useState(0)
    const [validadeDesconto, setValidadeDesconto] = useState(new Date())
    const [fotoDesconto, setFotoDesconto] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [erroMensagem, setErroMensagem] = useState(false);
    const [msgSucesso, setMsgSucesso] = useState(false);
    const [caminhoImagemDesconto, setCaminhoImagemDesconto] = useState('');
    const [listaEmpresa, setListaEmpresa] = useState([])



    

    function buscarEmpresas() {
        api('/Empresas', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    setListaEmpresa(resposta.data)
                    console.log('Aqui resposta')
                    console.log(resposta)
                }
            })
            .catch(erro => console.log(erro))
    }
    useEffect(buscarEmpresas, [])

    const efetuarCadastroBeneficio = (event) => {

        event.preventDefault();

        var formData = new FormData();

        const element = document.getElementById('fotoDesconto')
        const file = element.files[0]
        formData.append('fotoDesconto', file, file.name)

        formData.append('idEmpresa', idEmpresa);
        formData.append('nomeDesconto', nomeDesconto);
        formData.append('descricaoDesconto', descricaoDesconto);
        formData.append('caminhoImagemDesconto', caminhoImagemDesconto);
        formData.append('validadeDesconto', validadeDesconto);
        formData.append('valorDesconto', valorDesconto);
        formData.append('numeroCupom', numeroCupom );

        axios({
            method: "post",
            // url: "https://apibackgrupo2.azurewebsites.net/api/Cursos/Cadastrar",
            url: "http://localhost:5000/api/Descontos/Cadastrar",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response);
                setMsgSucesso(true);
                setFotoDesconto();
            })
            .catch((erro) => console.log(erro),
                setErroMensagem(true));
    }

    return (
        <div>
            <HeaderAdm />

            <div className="container_forms_cursos">
                <div className="box_img_cadastroCurso">
                    <div className="container_cadastroCursos">
                        <p>Senai-Sp</p>
                        <h1>Cadastro de Beneficios</h1>
                    </div>
                    <img src={telaCadastroVantagens} alt="imagemCadastro" />
                </div>
                <form onSubmit={efetuarCadastroBeneficio} className="box_forms_cursos" action="">
                    <div className="inputCadastro_cursos">

                        <div className="dis">
                            <div className="flex_co">
                                <label htmlFor="nomeDesconto" >Beneficio</label>
                                <input id="nomeDesconto" onChange={(campo) => setNomeDesconto(campo.target.value)} value={nomeDesconto} type="text" name="nomeDesconto" placeholder="Digite o nome do beneficio" />
                            </div>

                            <div className="flex_co">
                                <label htmlFor="validadeDesconto">Data de Validade</label>
                                <input id="validadeDesconto" onChange={(campo) => setValidadeDesconto(campo.target.value)} name="validadeDesconto" value={validadeDesconto} type="date" />
                            </div>
                        </div>

                        <div className="dis">
                            <div className="descricao">
                                <label htmlFor="descricaoDesconto" >Descrição</label>
                                <input onChange={(campo) => setDescricaoDesconto(campo.target.value)} value={descricaoDesconto} id='descricaoDesconto' name="descricaoDesconto" type="text" placeholder="Digite aqui os detalhes do seu beneficio" />
                            </div>

                        </div>

                        <div className="dis">
                            <div className="flex_co">
                                <label htmlFor="idEmpresaB" >Empresa</label>
                                <select className="inputCadastroSelect_curso" id="idEmpresaB"
                                    onChange={(campo) => setIdEmpresa(campo.target.value)}
                                    value={idEmpresa}
                                >

                                    <option value="0">Selecione a Sua Empresa</option>

                                    {
                                        listaEmpresa.map((empresa) => {
                                            return (
                                                <option key={empresa.idEmpresa} value={empresa.idEmpresa}>
                                                    {empresa.nomeEmpresa}
                                                </option>
                                            )
                                        })
                                    }



                                </select>
                            </div>

                            <div className="dis">
                                <div className="flex_co">
                                    <label htmlFor="valorDesconto">Valor Desconto</label>
                                    <input onChange={(campo) => setValorDesconto(campo.target.value)} className="flex_co" value={valorDesconto} id="valorDesconto" placeholder="Digite o seu desconto" type="number" />
                                </div>
                            </div>
                        </div>

                        <div className="dis">
                            <div className="flex_co">
                                <label>Imagem</label>
                                <label className="label_arquivo" htmlFor="fotoDesconto">Imagem do curso</label>
                                <input accept="image/png, image/jpeg" id="fotoDesconto" name="arquivo" className="input_file" type="file" />



                            </div>

                            <div className="flex_co ">
                                <label htmlFor="Cupom">Cupom</label>
                                <input id="Cupom" value={numeroCupom} onChange={(campo) => setNumeroCupom(campo.target.value)} type="text" placeholder="Digite o seu cupom aqui!" />
                            </div>


                        </div>
                        
                    </div>

                    {/* {
                        msgSucesso === true & erroMensagem === false ?
                        <span className='green'>Curso Cadastrado!</span> 
                        
                        :

                       <span className='green'>Curso não cadastrado!</span>
                    }

                     */}




                    <div className="flex_co btn">
                        <button type="submit" className="botaoCadastro">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}