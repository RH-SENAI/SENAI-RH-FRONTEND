import HeaderFuncionario from '../../components/Header/headerFuncionario'
import curso from '../../Assets/img/cursosRapidos.svg'
import '../../Assets/Css/cursosRapidos.css'
import '../../Assets/Css/style.css'
import logica from '../../Assets/img/logica.png'
import coracao from '../../Assets/img/coracao.svg'
import relogio from '../../Assets/img/relogio.svg'
import local from '../../Assets/img/local.svg'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default function CursosRapidos() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
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

    const custonModal = {
        content: {
            left: '5%',
            top: '10%',
            background: 'f2f2f2',
            bottom: 'auto',
            borderRadius: '20px',
            width: '90%',
            height: '80%',
            
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


                        <section className='box_cursos'>
                            <img className='banner' src={logica} alt="" />
                            <h2>Logica de Programação</h2>
                            <p> <img src={relogio} alt="duracao" /> 20 Horas </p>
                            <p><img src={local} alt="local" /> EAD</p>
                            <div className='circulo_coracao'>
                                <img className='coracao' src={coracao} alt="" />
                            </div>
                            <button onClick={openModal}>Modal</button>

                            <Modal
                                style={custonModal}
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                            >
                                <button onClick={closeModal}>Close</button>
                                <img src={logica} alt="" />
                                <h3>Opa</h3>
                            </Modal>
                        </section>
                        <section className='box_cursos'>
                            <img className='banner' src={logica} alt="" />
                            <h2>Logica de Programação</h2>
                            <p> <img src={relogio} alt="duracao" /> 20 Horas </p>
                            <p><img src={local} alt="local" /> EAD</p>
                            <div className='circulo_coracao'>
                                <img className='coracao' src={coracao} alt="" />
                            </div>
                            <button onClick={openModal}>Modal</button>

                            <Modal
                                style={custonModal}
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                            >
                                <button onClick={closeModal}>Close</button>
                                <img src={logica} alt="" />
                                <h3>Opa</h3>
                            </Modal>
                        </section>
                        <section className='box_cursos'>
                            <img className='banner' src={logica} alt="" />
                            <h2>Logica de Programação</h2>
                            <p> <img src={relogio} alt="duracao" /> 20 Horas </p>
                            <p><img src={local} alt="local" /> EAD</p>
                            <div className='circulo_coracao'>
                                <img className='coracao' src={coracao} alt="" />
                            </div>
                            <button onClick={openModal}>Modal</button>

                            <Modal
                                style={custonModal}
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                            >
                                <button onClick={closeModal}>Close</button>
                                <img src={logica} alt="" />
                                <h3>Opa</h3>
                            </Modal>
                        </section>


                    </div>
                </div>

                <div className='container_img'>
                    <img src={curso} alt="Ver Cursos" />
                </div>
            </section >
        </div >
    )
} 