import HeaderAdm from "../../components/Header/headerAdm";
import cadastroCurso from '../../Assets/img/cadastroCurso.svg'
import '../../Assets/Css/cadastroCursos.css'

import api from '../../Services/api'
import { useState } from "react";

export default function CadastrarCursos() {
    const [idEmpresa, setIdEmpresa] = useState(0)
    const [nomeCurso, setNomeCurso] = useState('')
    const [descricaoCurso, setDescricaoCurso] = useState('')
    const [siteCurso, setSiteCurso] = useState('')
    const [modalidadeCurso, setModalidadeCurso] = useState([])
    const [dataFinalização, setDataFinalizacao] = useState(new Date())
    const [caminhoImagemCurso, setCaminhoImagemCurso] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const [erroMensagem, setErroMensagem] = useState('');



    function efetuarCadastro(event) {
        event.preventDefault();
        api.post('/Usuarios', {
            idEmpresa: idEmpresa,
            nomeCurso: nomeCurso,
            descricaoCurso: descricaoCurso,
            siteCurso: siteCurso,
            modalidadeCurso: modalidadeCurso,
            dataFinalização: dataFinalização,
            imagem: caminhoImagemCurso

        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Cadastro Realizado')
                }
            })
            .catch(() => {
                setErroMensagem('Cadastro não realizado!')

                setisLoading(false)

            });
    }

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
                <form onSubmit={efetuarCadastro} className="box_forms_cursos" action="">
                    <div className="inputCadastro_cursos">

                        <div className="dis">
                            <div className="flex_co">
                                <label>Cursos</label>
                                <input  onChange={(campo) => setNomeCurso(campo.target.value)} value={nomeCurso} type="text" name="nomeCurso" placeholder="Digite o nome do curso" />
                            </div>

                            <div className="flex_co">
                                <label>Data de finalizar</label>
                                <input  onChange={(campo) => setDataFinalizacao(campo.target.value)} name="data" value={dataFinalização} type="date" />
                            </div>
                        </div>

                        <div className="flex_co largura">
                            <label>Descrição</label>
                            <input  onChange={(campo) => setDescricaoCurso(campo.target.value)} value={descricaoCurso} name="descricaoCurso" type="text" placeholder="Digite aqui a detalhes do seu curso" />
                        </div>

                        <div className="dis">
                            <div className="flex_co">
                                <label>Imagem</label>
                                <label className="label_arquivo" htmlFor="arquivo">Imagem do curso</label>
                                <input  onChange={(campo) => setCaminhoImagemCurso(campo.target.value)} value={caminhoImagemCurso} id="arquivo" name="caminhoImagemCurso" className="input_file" type="file" />
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
                        <div className="flex_co largura">
                            <label>Site do Curso</label>
                            <input value={siteCurso} name="siteCurso" onChange={(campo) => setSiteCurso(campo.target.value)} type="text" placeholder="Coloque aqui o link para inscrever-se no seu curso " />
                        </div>
                    </div>
                    <div className="flex_co btn">
                        <button type="submit" className="botaoCadastro">Inscreva-se</button>
                    </div>
                </form>
            </div>
        </div>
    )
}