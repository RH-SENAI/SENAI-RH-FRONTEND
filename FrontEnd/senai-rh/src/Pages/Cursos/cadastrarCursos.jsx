import HeaderAdm from "../../components/Header/headerAdm";
import cadastroCurso from '../../Assets/img/cadastroCurso.svg'
import '../../Assets/Css/cadastroCursos.css'

import api from '../../Services/api'
import { useEffect, useState } from "react";
import axios from "axios";

export default function CadastrarCursos() {
    const [idEmpresa, setIdEmpresa] = useState(0)
    const [idCurso, setIdCurso] = useState(0)
    const [nomeCurso, setNomeCurso] = useState('')
    const [descricaoCurso, setDescricaoCurso] = useState('')
    const [siteCurso, setSiteCurso] = useState('')
    const [cargaHoraria, setCargaHoraria] = useState(0)
    const [modalidadeCurso, setModalidadeCurso] = useState(false)
    const [dataFinalizacao, setDataFinalizacao] = useState(new Date())
    const [fotoCurso, setFotoCurso] = useState('')
    const [caminhoImagemCurso, seCaminhoImagemCurso] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const [erroMensagem, setErroMensagem] = useState('');
    const [msgSucesso, setMsgSucesso] = useState('');

    const [listaEmpresa, setListaEmpresa] = useState([])

    const presencial = () => {
        setModalidadeCurso(true);
    }


    function checkCurso() {
        console.log(modalidadeCurso + " - Anterior")
        setModalidadeCurso(!modalidadeCurso)
        console.log(modalidadeCurso + " - Atual")
    }

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

    const efetuarCadastro = (event) => {

        // event.preventDefault();

        var formData = new FormData();

        const element = document.getElementById('arquivo')
        const file = element.files[0]
        formData.append('arquivo', file, file.name)


        
        formData.append('idEmpresa', idEmpresa);
        formData.append('nomeCurso', nomeCurso);
        formData.append('descricaoCurso', descricaoCurso);
        formData.append('siteCurso', siteCurso);
        formData.append('modalidadeCurso', modalidadeCurso);
        formData.append('cargaHoraria', cargaHoraria);
        formData.append('dataFinalizacao', dataFinalizacao);
        formData.append('fotoCurso', fotoCurso);

        axios({
            method: "post",
            url: "https://apibackgrupo2.azurewebsites.net/api/Cursos/Cadastrar",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response);
                setMsgSucesso();
            })
            .catch( (erro) => console.log(erro), setErroMensagem());
    }

    return (
        <div>
            <HeaderAdm />

            <div className="container_forms_cursos">
                <div className="box_img_cadastroCurso">
                    <div className="container_cadastroCursos">
                        <p>Senai-Sp</p>
                        <h1>Cadastro de Cursos</h1>
                    </div>
                    <img src={cadastroCurso} alt="imagemCadastro" />
                </div>
                <form onSubmit={efetuarCadastro} className="box_forms_cursos" action="">
                    <div className="inputCadastro_cursos">

                        <div className="dis">
                            <div className="flex_co">
                                <label htmlFor="nomeCurso" >Cursos</label>
                                <input id="nomeCurso" onChange={(campo) => setNomeCurso(campo.target.value)} value={nomeCurso} type="text" name="nomeCurso" placeholder="Digite o nome do curso" />
                            </div>

                            <div className="flex_co">
                                <label htmlFor="dataFinalizacao">Data de finalizar</label>
                                <input id="dataFinalizacao" onChange={(campo) => setDataFinalizacao(campo.target.value)} name="data" value={dataFinalizacao} type="date" />
                            </div>
                        </div>

                        <div className="dis">
                            <div className="descricao">
                                <label>Descrição</label>
                                <input onChange={(campo) => setDescricaoCurso(campo.target.value)} value={descricaoCurso} name="descricaoCurso" type="text" placeholder="Digite aqui a detalhes do seu curso" />
                            </div>

                        </div>

                        <div className="dis">
                            <div className="flex_co">
                                <label htmlFor="idEmpresa" >Empresa</label>
                                <select className="inputCadastroSelect_curso" id="idEmpresa"
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
                                    <label htmlFor="cargaHoraria">Carga Horaria</label>
                                    <input onChange={(campo) => setCargaHoraria(campo.target.value)} className="flex_co" value={cargaHoraria} id="cargaHoraria" placeholder="Digite a carga horaria do seu curso" type="number" />
                                </div>
                            </div>
                        </div>

                        <div className="dis">
                            <div className="flex_co">
                                <label>Imagem</label>
                                <label className="label_arquivo" htmlFor="arquivo">Imagem do curso</label>
                                <input  value={fotoCurso} onChange={(campo) => setFotoCurso(campo.target.value)}  id="arquivo" name="caminhoImagemCurso" className="input_file" type="file" />



                            </div>

                            <div className="flex_co ">  
                                    <label htmlFor="Presencial">Modelo</label>
                                <div>
                                    <input id="Presencial" type="radio" name="web" />Presencial <br />
                                </div>
                                <div className="radio">
                                    <label></label>
                                    <input type="radio" name="web" /> EAD <br />

                                </div>
                            </div>

                            {/* <div className="container_radio">

                                <h2>Modelo</h2>
                                <label htmlFor="r1">
                                    <input type="radio" name="r1" id="radio1"
                                        className="ativo" value={modalidadeCurso} onChange={(e) => setModalidadeCurso(e.target.checked)} />
                                    Presencial
                                    <span className="check"></span>
                                </label>
                                <label htmlFor="r2">
                                    <input type="radio" name="r1" id="radio2"
                                        className="ativo" value={modalidadeCurso} onChange={(e) => presencial(e.target.checked)} />
                                    EAD
                                    <span className="check"></span>
                                </label>    



                            </div> */}
                            {/* <div className="container_btn">
                                <input type="checkbox"
                                    id="switch"
                                    name="validar"
                                    value={modalidadeCurso}
                                    onClick={checkCurso}
                                /><label className='label_switch' htmlFor="switch">Modalidade</label>
                                {modalidadeCurso && (
                                    <p className='text_switch'>
                                        Presencial
                                    </p>
                                )}
                                {!modalidadeCurso && (
                                    <p className='text_switch'>
                                        EAD
                                    </p>
                                )}


                            </div> */}

                            {/* <div className="flex_co">
                                <label>Modelo</label>
                                <select onChange={(campo) => setModalidadeCurso(campo.target.value)} value={modalidadeCurso} name="modalidadeCurso">
                                    {
                                        
                                    }
                                </select>
                            </div> */}


                        </div>
                        <div className="flex_co largura">
                            <label>Site do Curso</label>
                            <input value={siteCurso} name="siteCurso" onChange={(campo) => setSiteCurso(campo.target.value)} type="text" placeholder="Coloque aqui o link para inscrever-se no seu curso " />
                        </div>
                    </div>

                    <span className='green'>{msgSucesso === '' ? '' : 'Curso cadastrado!'}</span>

                    <div className="flex_co btn">
                        <button type="submit" className="botaoCadastro">Inscreva-se</button>
                    </div>
                </form>
            </div>
        </div>
    )
}