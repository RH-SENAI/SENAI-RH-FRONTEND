import HeaderFuncionario from '../../components/header/headerFuncionario'
import curso from '../../assets/img/cursosRapidos.svg'
import Footer from '../../components/footer'
import '../../assets/css/cursosRapidos.css'
import coracao from '../../assets/img/coracao.svg'
import relogio from '../../assets/img/relogio.svg'
import local from '../../assets/img/local.svg'
import coin from '../../assets/img/coin 1.png'
import estrelaSozinha from '../../assets/img/estrelaSozinha.svg'
import React, { useEffect, useMemo, useState } from 'react';
import { ModallCurso } from '../../components/modalListaCursos/modalListaCursos'
import api from '../../services/api'
import axios from 'axios'
import { parseJwt } from "../../services/auth";
import ReactStars from "react-rating-stars-component";



export default function CursosRapidos() {
    const [listaUsuario, setListaUsuario] = useState([]);
    const [listaComentarioCurso, setListaComentarioCurso] = useState([])
    const [listaCursos, setListaCursos] = useState([]);
    const [initialRepos, seInitialRepos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idCursoModal, setIdCursoModal] = useState()
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let subtitle;

    function listarComentarioCurso() {
        console.log(idCursoModal)
        api('/ComentarioCursos/Comentario/' + idCursoModal)
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Lista comentario')
                    console.log(resposta)
                    setListaComentarioCurso(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(listarComentarioCurso, []);

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
                    // console.log('Lista')
                    // console.log(resposta)
                    setListaCursos(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(listarCursos, []);

    function requisicaoCurso(event) {
        event.preventDefault();

        let requisicao = {
            idUsuario: parseJwt().jti,
            idCurso: curso.idCurso,
        }
        // console.log('Requisição de curso feita!')
        console.log('curso.idCurso!')
        console.log(curso.idCurso)

        api.post('/ComentarioCursos', requisicao, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }

        )
            .then(function (response) {
                console.log(response);
                setListaComentarioCurso(response.data)
            })
            .catch(erro => console.log(erro))
    }


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

    function listarUsuario() {
        axios('http://apirhsenaigp1.azurewebsites.net/api/Usuarios/BuscarUsuario/' + parseJwt().jti, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
            },
        }
        )
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('listarUsuario')
                    console.log(resposta)
                    setListaUsuario(resposta.data)
                    // setNome(resposta.data.nome)
                    // console.log('aqui' + resposta.data)

                }
            })
            .catch(erro => console.log(erro))
    }
    useEffect(listarUsuario, [])


    return (
        <div className="geral_g2">

            <ModallCurso comentarios={listaComentarioCurso} curso={listaCursos.find(curso => curso.idCurso == idCursoModal)} showModal={showModal} setShowModal={setShowModal} />
            <HeaderFuncionario />


            <div className='container'>
                <div className='title_caixa_curso_g2'>
                    <h1 className='h1_curso_g2'>Cursos</h1>
                    <div className='caixa_curso_g2'>
                        <label ></label>
                        <input
                            type="search"
                            placeholder='Pesquisar'
                            // autoComplete='off'
                            list='curso'
                            onChange={(e) => searchItems(e.target.value)}
                        />
                    </div>

                    <div className=' moeda_cima_g2'>
                        <p>Minhas moedas:</p> <img className='coin_beneficio_cima_g2' src={coin} alt="coin" /> <p>{listaUsuario.saldoMoeda}</p>
                    </div>
                </div>

                <section className='container_curso_g2'>

                    <div className='wrap_curso_g2'>
                        <ul className='container_wrap_curso_g2'>
                            {
                                searchInput.length > 0 ?

                                    filteredResults.map((curso) => {
                                        return (
                                            <div className='espacamento_curso_g2'>
                                                <section alt={curso.idCurso} key={curso.idCurso} id='imagem' className='box_curso_g2'>
                                                    <div className='banner_img_curso_g2'>
                                                        {<img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='curso_banner_g2' src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + curso.caminhoImagemCurso} alt="imagem do curso" />}
                                                    </div>

                                                    <div className='dados_curso_gp2'>

                                                        {<span onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)}> {curso.nomeCurso}</span>}
                                                        {/* <div className='estrelas_g2'>
                                                            <ReactStars
                                                                count={5}
                                                                size={20}
                                                                edit={false}
                                                                value={curso.mediaAvaliacaoCurso}
                                                                activeColor="#C20004"
                                                            />
                                                        </div> */}

                                                        {<p><img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>}
                                                        {<p><img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}   </p>}
                                                        <div className="box_baixo_section_curso_g2">

                                                            {<div className='circulo_moeda_curso_g2'>
                                                                <img className='coin_curso_g2' src={coin} alt="favorito" /> {curso.valorCurso}
                                                            </div>}
                                                            <div className="media_beneficio_g2">
                                                                <img src={coracao} alt="favoritar" />
                                                            </div>
                                                            {/* <div> <button onClick={ () => Excluir(curso.idCurso)} >Excluir</button></div> */}
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        )
                                    })
                                    :
                                    listaCursos.map((curso) => {
                                        return (
                                            <div className='espacamento_curso_g2'>
                                                <section alt={curso.idCurso} key={curso.idCurso} id='imagem' className='box_curso_g2'>
                                                    <div className='banner_img_curso_g2'>
                                                        {<img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='curso_banner_g2' src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + curso.caminhoImagemCurso} alt="imagem do curso" />}
                                                    </div>

                                                    <div className='dados_curso_gp2'>

                                                        {<span onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)}> {curso.nomeCurso}</span>}
                                                        {/* <div className='estrelas_cursos_g2'>
                                                            <ReactStars
                                                                count={5}
                                                                size={20}
                                                                edit={false}
                                                                value={curso.mediaAvaliacaoCurso}
                                                                activeColor="#C20004"
                                                            />
                                                        </div> */}
                                                        <div>
                                                            {<p><img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>}
                                                            {<p><img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}   </p>}
                                                        </div>
                                                        <div className="box_baixo_section_curso_g2">

                                                            {<div className='circulo_moeda_curso_g2'>
                                                                <img className='coin_curso_g2' src={coin} alt="favorito" /> {curso.valorCurso}
                                                            </div>}
                                                            <div className="media_beneficio_g2">
                                                                <img src={coracao} alt="favoritar" />
                                                            </div>
                                                            {/* <div> <button onClick={ () => Excluir(curso.idCurso)} >Excluir</button></div> */}
                                                        </div>
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