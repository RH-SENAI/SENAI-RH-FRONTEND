import HeaderFuncionario from '../../components/header/headerFuncionario'
import curso from '../../assets/img/cursosRapidos.svg'
import Footer from '../../components/footer'
import '../../assets/css/cursosRapidos.css'
import '../../assets/css/style.css'
import coracao from '../../assets/img/coracao.svg'
import relogio from '../../assets/img/relogio.svg'
import estrelaSozinha from '../../assets/img/estrelaSozinha.svg'
import local from '../../assets/img/local.svg'
import coin from '../../assets/img/coin 1.png'
import React, { useEffect, useMemo, useState } from 'react';
import { ModallCurso } from '../../components/modalListaCursos/modalListaCursos'
import api from '../../services/api'


export default function CursosRapidos() {
    const [listaCursos, setListaCursos] = useState([]);
    const [initialRepos, seInitialRepos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idCursoModal, setIdCursoModal] = useState()
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let subtitle;

    function closeModal() {
        setIsOpen(false);
    }

    const OpenModal = () => {
        setShowModal(prev => !prev);
    }

    function listarCursos() {
        api('/Cursos')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Lista')
                    console.log(resposta)
                    setListaCursos(resposta.data)
                    // seInitialRepos(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(listarCursos, []);


    function Excluir(idCurso) {

        api.delete('/Cursos/Deletar/' + idCurso)

            .then(resposta => {
                if (resposta.status === 204) {
                    console.log('Curso Excluido')
                    listarCursos()

                }
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    const [searchInput, setSearchInput] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = listaCursos.filter((item) => {
                return Object.values(item.nomeCurso).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(listaCursos)
        }
    }


    return (
        <div >

            <ModallCurso curso={listaCursos.find(curso => curso.idCurso == idCursoModal)} showModal={showModal} setShowModal={setShowModal} />
            <HeaderFuncionario />


            <div className='container'>
                <div className='title_caixa_g2'>
                    <h1 className='h1_g2'>Cursos</h1>
                    <div className='caixa_g2'>
                        <label ></label>
                        <input
                            type="search"
                            placeholder='Pesquisar'
                            // autoComplete='off'
                            list='curso'
                            onChange={(e) => searchItems(e.target.value)}
                        />
                    </div>
                </div>

                <section className='container_cursos_g2'>

                    <div className='wrap_g2'>
                        <ul className='container_wrap_g2'>
                            {

                                searchInput.length > 0 ?

                                    filteredResults.map((curso) => {
                                        return (
                                            <div className='espacamento_g2'>
                                                <section alt={curso.idCurso} key={curso.idCurso} id='imagem' className='box_cursos_g2'>
                                                    <div className='banner_img_g2'>
                                                        {<img onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='banner_g2' src={'http://localhost:5000/img/' + curso.caminhoImagemCurso} alt="imagem do curso" />}
                                                        {/* {<img  onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='banner_g2' src={'https://raw.githubusercontent.com/RH-SENAI/Senai_Rh_Api_G2/back-end-g2/StaticFiles/Images/' + curso.caminhoImagemCurso} alt="imagem do curso" />} */}
                                                    </div>
                                                    {<span onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)}> {curso.nomeCurso}</span>}
                                                    {<p><img onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>}
                                                    {<p><img onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}  </p>}
                                                    {/* {<div className='circulo_coracao'>
                                                <img className='coracao' src={coracao} alt="" />
                                            </div>} */}
                                                    {/* <div> <button onClick={ () => Excluir(curso.idCurso)} >Excluir</button></div> */}
                                                    <div className="box_baixo_section_g2">

                                                        {<div className='circulo_coracao_g2'>
                                                            <img className='coracao_g2' src={coin} alt="favorito" />
                                                        </div>}
                                                        <div className="media_beneficio_g2">
                                                            <img src={estrelaSozinha} alt="" /> <p>{curso.mediaAvaliacaoCurso}</p>
                                                        </div>
                                                        {/* <div> <button onClick={ () => Excluir(curso.idCurso)} >Excluir</button></div> */}
                                                    </div>
                                                </section>
                                            </div>
                                        )
                                    })
                                    :
                                    listaCursos.map((curso) => {
                                        return (
                                            <div className='espacamento_g2'>
                                                <section alt={curso.idCurso} key={curso.idCurso} id='imagem' className='box_cursos_g2'>
                                                    <div className='banner_img_g2'>
                                                        {<img onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='banner_g2' src={'http://localhost:5000/img/' + curso.caminhoImagemCurso} alt="imagem do curso" />}
                                                        {/* {<img  onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='banner_g2' src={'https://raw.githubusercontent.com/RH-SENAI/Senai_Rh_Api_G2/back-end-g2/StaticFiles/Images/' + curso.caminhoImagemCurso} alt="imagem do curso" />} */}
                                                    </div>
                                                    {<span onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)}> {curso.nomeCurso}</span>}
                                                    {<p><img onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>}
                                                    {<p><img onClick={OpenModal} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}  </p>}
                                                    {/* {<div className='circulo_coracao'>
                                                <img className='coracao' src={coracao} alt="" />
                                            </div>} */}
                                                    {/* <div> <button onClick={ () => Excluir(curso.idCurso)} >Excluir</button></div> */}
                                                    <div className="box_baixo_section_g2">

                                                        {<div className='circulo_coracao_g2'>
                                                            <img className='coracao_g2' src={coin} alt="favorito" />
                                                        </div>}
                                                        <div className="media_beneficio_g2">
                                                            <img src={estrelaSozinha} alt="" /> <p>{curso.mediaAvaliacaoCurso}</p>
                                                        </div>
                                                        {/* <div> <button onClick={ () => Excluir(curso.idCurso)} >Excluir</button></div> */}
                                                    </div>
                                                </section>
                                            </div>
                                        )
                                    })
                            }
                        </ul>
                    </div>
                </section >
            </div>
            <Footer />
        </div >
    )
} 