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
    const [numeroCupom, setNumeroCupom] = useState('')
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
        formData.append('numeroCupom', numeroCupom);

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

            <div className="container_forms_cursos_g2">
                <div className="box_img_cadastroCurso_g2">

                    <img src={telaCadastroVantagens} alt="imagemCadastro" />
                </div>
                <form onSubmit={efetuarCadastroBeneficio} className="box_forms_cursos_g2" action="">
                    <div className="inputCadastro_cursos_g2">
                        <div className="title_cadastro_g2">
                            <h1>Cadastrar Vantagens</h1>
                        </div>

                        <div className="dis_g2">
                            <div className="flex_co_g2">
                                <label htmlFor="nomeDesconto" ></label>
                                <input
                                    id="nomeDesconto"
                                    onChange={(campo) => setNomeDesconto(campo.target.value)}
                                    value={nomeDesconto}
                                    type="text"
                                    name="nomeDesconto"
                                    placeholder="Vantagem"
                                />
                            </div>

                            <div className="flex_co_g2">
                                <label htmlFor="validadeDesconto"></label>
                                <input
                                    id="validadeDesconto"
                                    onChange={(campo) => setValidadeDesconto(campo.target.value)}
                                    name="validadeDesconto"
                                    value={validadeDesconto}
                                    type="date"
                                />
                            </div>
                        </div>

                        <div className="dis_g2">
                            <div className="descricao_g2">
                                <label htmlFor="descricaoDesconto" ></label>
                                <input
                                    onChange={(campo) => setDescricaoDesconto(campo.target.value)}
                                    value={descricaoDesconto}
                                    id='descricaoDesconto'
                                    name="descricaoDesconto"
                                    type="text"
                                    placeholder="Descrição"
                                />
                            </div>
                        </div>
                        <div className="dis_g2">
                            <div className="flex_co_g2">
                                <label htmlFor="idEmpresaB"></label>
                                <select
                                    className="inputCadastroSelect_curso_g2"
                                    id="idEmpresaB"
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

                            <div className="dis_g2">
                                <div className="flex_co_g2">
                                    <label htmlFor="valorDesconto"></label>
                                    <input
                                        onChange={(campo) => setValorDesconto(campo.target.value)}
                                        className="flex_co"
                                        value={valorDesconto}
                                        id="valorDesconto"
                                        placeholder="Desconto"
                                        type="number"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="dis_g2">
                            <div className="flex_co_g2">
                                <label></label>
                                <label className="label_arquivo_g2" htmlFor="fotoDesconto">Imagem</label>
                                <input
                                    accept="image/png, image/jpeg"
                                    id="fotoDesconto"
                                    name="arquivo"
                                    className="input_file_g2"
                                    type="file"
                                />
                            </div>
                            <div className="flex_co_g2 ">
                                <label htmlFor="Cupom"></label>
                                <input
                                    id="Cupom"
                                    value={numeroCupom}
                                    onChange={(campo) => setNumeroCupom(campo.target.value)}
                                    type="text"
                                    placeholder="Cupom"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex_co_g2 btn_g2">
                        <button type="submit" className="botaoCadastro_g2">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}