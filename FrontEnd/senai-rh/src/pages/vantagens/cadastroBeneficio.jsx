import HeaderAdm from "../../components/header/headerAdm";
import cadastroCurso from '../../assets/img/cadastroCurso.svg'
import telaCadastroVantagens from '../../assets/img/telaCadastroVantagens.svg'
import iconeEnviarArquivo from '../../assets/img/iconeEnviarArquivo.png'
import '../../assets/css/cadastroCursos.css'
import '../../assets/css/cadastroBeneficio.css'
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
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
        formData.append('valorDesconto', valorDesconto );

        api({
            method: "post",
            // url: "https://apibackgrupo2.azurewebsites.net/api/Cursos/Cadastrar",
            url: "/Descontos/Cadastrar",
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
        <div className="geral_g2">
            <HeaderAdm />

            <div className=" container_cadastrarBeneficio container_forms_cadastroBeneficio_g2">
                <div className="box_img_cadastroBeneficio_g2">
                    <img src={telaCadastroVantagens} alt="imagemCadastroBeneficio" />
                </div>
                <form onSubmit={efetuarCadastroBeneficio} action="">
                    <div className="box_forms_cadastroBeneficio_g2">
                        <div className="title_cadastroBeneficio_g2">
                            <h1>Cadastro de  Vantagens</h1>
                        </div>
                        <div className="box_inputs_cadastroBeneficio_g2">
                            <div>
                                <div className="container_cadastroBeneficio_inputs_g2">
                                    <div>
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

                                    <div>
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

                                    <div>
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

                                    <div>
                                        <label></label>
                                        <label className="label_arquivo_cadastroBeneficio_g2" htmlFor="fotoDesconto">  <img className="img_file_cadastro_empresa_g2" src={iconeEnviarArquivo} alt="" />Enviar arquivo</label>
                                        <input
                                            accept="image/png, image/jpeg"
                                            id="fotoDesconto"
                                            name="arquivo"
                                            className="input_file_cadastroBeneficio_g2"
                                            type="file"
                                        />
                                    </div>

                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="validadeDesconto"></label>
                                    <input
                                        id="validadeDesconto"
                                        onChange={(campo) => setValidadeDesconto(campo.target.value)}
                                        name="validadeDesconto"
                                        value={validadeDesconto}
                                        type="date"
                                    />
                                </div>


                                <div>
                                    <div>
                                        <label htmlFor="idEmpresaB"></label>
                                        <select
                                            className="inputCadastroBeneficioSelect_g2"
                                            id="idEmpresaB"
                                            onChange={(campo) => setIdEmpresa(campo.target.value)}
                                            value={idEmpresa}
                                        >

                                            <option value="0">Empresa</option>

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

                                    <div>
                                        <label htmlFor="cashes" ></label>
                                        <input
                                            // onChange={(campo) => setDescricaoDesconto(campo.target.value)}
                                            // value={}
                                            id='cashes'
                                            name="cashes"
                                            type="number"
                                            placeholder="$ Cashes"
                                        />
                                    </div>

                                </div>
                                <div>

                                    <div>
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
                        </div>
                        <div className="btn_cadastroBeneficio_g2">
                            <button type="submit" className="botaoCadastroBeneficio_g2">Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}