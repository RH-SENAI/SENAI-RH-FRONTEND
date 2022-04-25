import HeaderAdm from "../../components/header/headerAdm";
import cadastroEmpresa from '../../assets/img/cadastroEmpresa.svg'
import '../../assets/css/cadastroEmpresa.css'
import iconeEnviarArquivo from '../../assets/img/iconeEnviarArquivo.png'
import Footer from "../../components/footer";

export default function CadastrarEmpresa() {
    return (

        <div>
            <HeaderAdm />

            <div className="container container_forms_cadastroEmpresa_g2">
                <div className="box_img_cadastroEmpresa_g2">
                    <img src={cadastroEmpresa} alt="imagemCadastroEmpresa" />
                </div>

                <form action="">
                    <div className="box_forms_cadastroEmpresa_g2">
                        <div className="title_cadastroEmpresa_g2">
                            <h1>Cadastrar Empresa</h1>
                        </div>


                        <div className="box_inputs_cadastroEmpresa_g2">
                            <div>
                                <div className="container_cadastroEmpresa_inputs_g2">
                                    <div>
                                        <label htmlFor="nomeDesconto" ></label>
                                        <input
                                            id="nomeDesconto"
                                            // onChange={(campo) => setNomeDesconto(campo.target.value)}
                                            // value={nomeDesconto}
                                            type="text"
                                            name="nomeDesconto"
                                            placeholder="Nome da Empresa"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="nomeDesconto" ></label>
                                        <input
                                            id="nomeDesconto"
                                            // onChange={(campo) => setNomeDesconto(campo.target.value)}
                                            // value={nomeDesconto}
                                            type="text"
                                            name="nomeDesconto"
                                            placeholder="Descrição"
                                        />
                                    </div>

                                    <div>
                                        <label></label>
                                        <label className="label_arquivo_cadastroEmpresa_g2" htmlFor="fotoDesconto">  <img className="img_file_cadastro_empresa_g2" src={iconeEnviarArquivo} alt="" />Enviar arquivo</label>
                                        <input
                                            accept="image/png, image/jpeg"
                                            id="fotoDesconto"
                                            name="arquivo"
                                            className="input_file_cadastroEmpresa_g2"
                                            type="file"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="nomeDesconto" ></label>
                                    <input
                                        id="nomeDesconto"
                                        // onChange={(campo) => setNomeDesconto(campo.target.value)}
                                        // value={nomeDesconto}
                                        type="text"
                                        name="nomeDesconto"
                                        placeholder="CNPJ"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="nomeDesconto" ></label>
                                    <input
                                        id="nomeDesconto"
                                        // onChange={(campo) => setNomeDesconto(campo.target.value)}
                                        // value={nomeDesconto}
                                        type="text"
                                        name="nomeDesconto"
                                        placeholder="$Cashes"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="nomeDesconto" ></label>
                                    <input
                                        id="nomeDesconto"
                                        // onChange={(campo) => setNomeDesconto(campo.target.value)}
                                        // value={nomeDesconto}
                                        type="text"
                                        name="nomeDesconto"
                                        placeholder="CEP"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="btn_cadastroEmpresa_g2">
                            <button type="submit" className="botaoCadastroEmpresa_g2">Cadastrar</button>
                        </div>
                    </div>
                </form>

            </div>

            <Footer />
        </div>

    )
}