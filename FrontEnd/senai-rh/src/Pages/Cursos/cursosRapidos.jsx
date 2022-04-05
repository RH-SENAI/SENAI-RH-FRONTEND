import HeaderFuncionario from '../../components/Header/headerFuncionario'
import curso from '../../Assets/img/cursosRapidos.svg'
import '../../Assets/Css/cursosRapidos.css'
import '../../Assets/Css/style.css'
import logica from '../../Assets/img/logica.png'
import coracao from '../../Assets/img/coracao.svg'
import relogio from '../../Assets/img/relogio.svg'
import local from '../../Assets/img/local.svg'
import data from '../../Assets/img/data.svg'
import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import api from '../../Services/api'

export default function CursosRapidos() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [listaCursos, setListaCursos] = useState([]);
    let subtitle;


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function listarCursos() {
        api('/Cursos')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Lista')
                    console.log(resposta)
                    setListaCursos(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(listarCursos, []);


    const custonModal = {
        content: {
            left: '5%',
            top: '10%',
            background: 'f2f2f2',
            bottom: 'auto',
            borderRadius: '20px',
            width: '90%',
            height: '80%',
            transition: '.2s'
        }
    }



    return (
        <div>
            <HeaderFuncionario />

            <div className='caixa'>
                <form>
                    <label ></label>
                    <input type="search" placeholder='Pesquisar' />
                </form>
            </div>

            <h1>Cursos</h1>
            <section className='container_cursos '>

                <div className='wrap'>
                    <div className='container_wrap'>
                        {/* <section className='box_cursos'>
                            <img onClick={openModal} className='banner' src={logica} alt="" />
                            <h2 onClick={openModal}>Logica de Programação</h2>
                            <p><img className='test' onClick={openModal} src={relogio} alt="duracao" /> 20 Horas </p>
                            <p><img className='test' onClick={openModal} src={local} alt="local" /> EAD</p>
                            <div className='circulo_coracao'>
                                <img className='coracao' src={coracao} alt="" />
                            </div>
                        </section> */}
                        {
                            listaCursos.map((curso) => {
                                return (
                                    <section id='imagem' className='box_cursos'>
                                        {<img onClick={openModal} className='banner' src={curso.caminhoImagemCurso} alt="imagem do curso" />}
                                        {<h2 onClick={openModal}> {curso.nomeCurso} </h2>}
                                        {<p><img className='box_dados_curso' onClick={openModal} src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>}
                                        {<p><img className='box_dados_curso' onClick={openModal} src={local} alt="duracao" /> {curso.idLogradouroNavigation}  </p>}
                                        {<div className='circulo_coracao'>
                                            <img className='coracao' src={coracao} alt="" />
                                        </div>}
                                    </section>
                                )
                            })
                        }
                        {/* <img onClick={openModal} className='banner' src={logica} alt="" />
                            <h2 onClick={openModal}>Logica de Programação</h2>
                            <p><img className='test' onClick={openModal} src={relogio} alt="duracao" /> 20 Horas </p>
                            <p><img className='test' onClick={openModal} src={local} alt="local" /> EAD</p>
                            <div className='circulo_coracao'>
                                <img className='coracao' src={coracao} alt="" />
                            </div> */}


                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                        >
                            <div className='box_title'>
                                <img className='modal_img' id='imagem' src={logica} alt="" />
                                <div>

                                    <div className='title_modal'>
                                        <h1>Lógica de Programação</h1>
                                    </div>

                                    <div className='dados'>
                                        <p><img src={relogio} alt="" /> 1000 Horas</p>
                                        <p><img src={data} alt="" /> 15/01/2023 </p>
                                    </div>
                                    <p className='p'><img className='p_img' src={local} alt="" />Alameda Barão de Limeira, 539 - Santa Cecília</p>
                                </div>
                            </div>
                            <div className='container_modal'>

                                <div className='box_descricao'>
                                    <h2>Descrição:</h2>
                                    <p>O curso habilita profissionais técnicos de nível médio em Desenvolvimento de Sistemas, visando suprir a demanda do mercado por profissionais qualificados para atuarem em programação e desenvolvimento de software com condições técnico-tecnológicas para atender às exigências e evolução do segmento.Com uma equipe de professores capacitados para contribuir na formação do técnico, o curso conta com uma completa infraestrutura, incluindo laboratórios de informática, necessários para o aperfeiçoamento do programador.</p>

                                    <h4>Empresa:</h4>
                                    <p>Senai-Santa Cecília</p>

                                </div>
                                <div className='btn_inscreva'>
                                    <button>Inscreva-se</button>
                                </div>
                                <hr />
                                <div className='box_cometarios'>
                                    <h2>Comentario:</h2>
                                    <p></p>
                                </div>

                            </div>
                            <div>
                            </div>
                        </Modal>

                    </div>
                </div>

                <div className='container_img'>
                    <img src={curso} alt="Ver Cursos" />
                </div>
            </section >
        </div >
    )
} 