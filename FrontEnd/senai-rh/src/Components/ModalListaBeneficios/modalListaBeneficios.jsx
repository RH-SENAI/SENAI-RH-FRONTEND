import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import relogio from '../../Assets/img/relogio.svg'
import local from '../../Assets/img/local.svg'
import data from '../../Assets/img/data.svg'
import estrelaSozinha from '../../Assets/img/estrelaSozinha.svg'
import modelo from '../../Assets/img/modelo.svg'
import "../../Assets/Css/modalListaCursos.css"
import "../../Assets/Css/modalListaBeneficios.css"
import api from '../../Services/api';

export const ModallBeneficio = ({ showModal, setShowModal, beneficio }) => {

    const [listaComentarioBeneficio, setListaComentarioBeneficio] = useState([])
    const [idDesconto, setIdDesconto] = useState(0)


    const closeModal = e => {
        console.log('showModal antes:' + showModal)
        setShowModal(false);

        console.log('showModal depois:' + showModal)
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );



    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    function listarComentarioBeneficio() {
        api('http://localhost:5000/api/ComentarioDescontos')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Lista')
                    console.log(resposta)
                    setListaComentarioBeneficio(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(listarComentarioBeneficio, []);


    return (
        <>
            {showModal ? (
                <Modal
                    isOpen={showModal}
                    onRequestClose={closeModal}
                >

                    <div className='container_modal_cima'>
                        <div className='container_img_modal'>
                            <img className='img_modal_beneficios' src={'http://localhost:5000/img/' + beneficio.caminhoImagemDesconto} alt="" />
                            {/* <img className='img_modal' src={'https://raw.githubusercontent.com/RH-SENAI/Senai_Rh_Api_G2/back-end-g2/StaticFiles/Images/' + beneficio.caminhoImagemDesconto} alt="" /> */}
                            <div className='media_Avaliacao'>  <img src={estrelaSozinha} alt="" /> <p> {beneficio.mediaAvaliacaoDesconto} </p> </div>
                        </div>
                        <div className='container_dados_modal'>
                            <div className='container_title_modal'>
                                <span>{beneficio.nomeDesconto} </span>
                            </div>
                            <div className='dados_geral'>
                                <div className='box_dados_modal'>

                                    <div> <img src={data} alt="data" /> <p>
                                        {/* {curso.dataFinalizacao}  */}
                                        {Intl.DateTimeFormat("pt-BR", {
                                            year: 'numeric', month: 'numeric', day: 'numeric'
                                        }).format(new Date(beneficio.validadeDesconto))}
                                    </p></div>
                                </div>
                                <div className='box_dados_modal2'>
                                    <div>
                                        <img src={local} alt="local" /> <p>{beneficio.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro} </p>
                                    </div>
                                    {/* <div>
                                        <img src={modelo} alt="" /> <p>{beneficio.modalidadeCurso === true ? 'Presencial' : 'EAD'}</p>
                                    </div> */}
                                </div>
                            </div>

                        </div>


                    </div>
                    <section className='container_modal_baixo'>


                        <div className='container_descricao'>
                            <span>Descrição:</span>
                            <p className='texto_descricao'>{beneficio.descricaoDesconto}</p>
                            <div className='box_empresa_modal'>
                                <span>Empresa:</span>
                                <p className='texto_empresa'>{beneficio.idEmpresaNavigation.nomeEmpresa}<button className='btn_inscreva'><a href='#'>Cupom</a></button> </p>

                            </div>
                        </div>

                        <div>

                            <hr className='vertical' />
                        </div>

                        <div className='container_comentario'>
                            <div>
                                <span>Comentario: </span>
                                <div className='box_comentarios'>

                                    {
                                        listaComentarioBeneficio.map((comentario) => {
                                            return (
                                                <div>
                                                    <div>

                                                        {comentario.avaliacaoDesconto}
                                                    </div>
                                                    {comentario.idUsuarioNavigation.nome} :
                                                    {comentario.comentarioDesconto1}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <hr className='horizontal' />
                                <form action="">
                                    <div className=''>
                                        <label htmlFor=""></label>
                                        <input className='input_comentario_avaliacao' type="number" placeholder='De 0 a 5, qual a nota para esse curso' />
                                    </div>
                                    <div className='container_input_modal'>

                                        <label htmlFor=""></label>
                                        <input className='input_comentario_modal' type="text" placeholder='Adicione um comentario' />
                                        <button className='btn_comentario'>Enviar</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </section>
                </Modal>
            ) : null
            }
        </>
    );

}