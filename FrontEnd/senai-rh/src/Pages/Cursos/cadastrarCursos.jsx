import HeaderAdm from "../../components/Header/headerAdm";
import cadastroCurso from '../../Assets/img/cadastroCurso.svg'
import '../../Assets/Css/cadastroCursos.css'

export default function CadastrarCursos() {
    return (
        <div>
            <HeaderAdm />

            <div className="container_cadastroCursos">
                <p>Senai-Sp</p>
                <h1>Cadastro de Cursos</h1>
            </div>
            <div className="container_forms_cursos">
                <div className="box_img_cadastroCurso">
                    <img src={cadastroCurso} alt="" />
                </div>
                <form className="box_forms_cursos" action="">
                    <div className="inputCadastro_cursos">

                        <div className="dis">
                            <div className="flex_co">
                                <label>Cursos</label>
                                <input type="text" placeholder="Digite o nome do curso" />
                            </div>

                            <div className="flex_co">
                                <label>Data de finalizar</label>
                                <input type="date" />
                            </div>
                        </div>

                        <div className="flex_co">
                            <label>Descrição</label>
                            <input type="text" placeholder="Digite aqui a detalhes do seu curso"/>
                        </div>

                        <div className="dis">
                            <div className="flex_co">
                                <label>Imagem</label>
                                <label className="label_arquivo" htmlFor="arquivo">Imagem do curso</label>
                                <input id="arquivo" className="input_file" type="file"  />
                            </div>

                            {/* <div className="flex_co ">
                                    <label htmlFor="Presencial">Modelo</label>
                                <div>
                                    <input id="Presencial" type="radio" name="web" />Presencial <br />
                                </div>
                                <div className="radio">
                                    <label></label>
                                    <input type="radio" name="web" /> EAD <br />

                                </div>
                            </div> */}

                            <div className="container_radio">
                                <h2>Modelo</h2>
                                <label htmlFor="">
                                    <input type="radio" name="r1" id="radio1"
                                    className="ativo" checked />
                                    Presencial
                                    <span className="check"></span>
                                </label>
                                <label htmlFor="">
                                    <input type="radio" name="r1" id="radio2"
                                    className="ativo" checked />
                                    EAD
                                    <span className="check"></span>
                                </label>
                            </div>

                        </div>
                        <div className="flex_co">
                            <label>Site do Curso</label>
                            <input type="text" placeholder="Coloque aqui o link para inscrever-se no seu curso " />
                        </div>
                    </div>
                         <button className="botaoCadastro">Inscreva-se</button>
                </form>
            </div>
        </div>
    )
}