import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import relogio from '../../assets/img/relogio.svg'
import local from '../../assets/img/local.svg'
import data from '../../assets/img/data.svg'
import estrelaSozinha from '../../assets/img/estrelaSozinha.svg'
import modelo from '../../assets/img/modelo.svg'
import "../../assets/css/modalListaCursos.css"
import api from '../../services/api';
import coin from "../../assets/img/coin 1.png"
import calendar from '../../assets/img/calendar.svg'
import map from '../../assets/img/map.svg'
import coracao from '../../assets/img/coracao.svg'

export const ModallCurso = ({ showModal, setShowModal, curso, comentarios }) => {

    const [listaComentarioCurso, setListaComentarioCurso] = useState([])
    const [idCurso, setIdCurso] = useState(0)


    const closeModal = e => {
        // console.log('showModal antes:' + showModal)
        setShowModal(false);

        // console.log('showModal depois:' + showModal)
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                // console.log('I pressed');
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

    // function listarComentarioCurso(cursoss) {
    //     api('/ComentarioCursos/Comentario/' + cursoss.idCurso)
    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 console.log('Lista cursos comen')
    //                 console.log(resposta)
    //                 setListaComentarioCurso(resposta.data)
    //             }
    //         })
    //         .catch(erro => console.log(erro))
    // }

    // useEffect(listarComentarioCurso, []);


    return (
        <>
            {showModal ? (
                <Modal
                    isOpen={showModal}
                    onRequestClose={closeModal}
                >

                   {/* Parte 1 */}
                   <div className='container_modal_beneficio_g2'>
                            <div className='box_img_modal_beneficio_g2'>
                                <img src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + curso.caminhoImagemCurso} alt="Foto do Desconto" />
                            </div>

                            <div className='box_cima_modal_beneficio_g2'>
                                <div className='title_modal_beneficio_g2'>
                                    <h1>{curso.nomeCurso}</h1>
                                </div>

                                <div>
                                    {curso.mediaAvaliacaoCurso}
                                </div>

                                <div className='dados_modal_beneficio_g2'>

                                    <div className='icone_center_modal_beneficio_g2'>
                                        <img src={calendar} alt="calendário" /> <p>

                                            {Intl.DateTimeFormat("pt-BR", {
                                                year: 'numeric', month: 'numeric', day: 'numeric',
                                            }).format(new Date(curso.dataFinalizacao))}
                                        </p>


                                    </div>

                                    <div className='icone_center_modal_beneficio_g2'>
                                        <img src={map} alt="mapa" /> <p> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro} </p>
                                    </div>

                                </div>

                                <div className='container_registro_beneficio_g2'>
                                    <div className='box_dados_registro_beneficio_g2'>
                                        <span> Adicionado por: </span> <p>{curso.idEmpresaNavigation.nomeEmpresa}</p>
                                    </div>
                                    <div className='box_dados_registro_beneficio_g2'>
                                        <span>Empresa:</span> <p>{curso.idEmpresaNavigation.nomeEmpresa}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='circulo_icone_coin_beneficio_g2'>
                                    <img className='icone_modal_coin_g2' src={coin} alt="preço da vantagem" /> <p> {curso.valorCurso} </p>
                                </div>
                            </div>
                        </div>


                        {/* parte 2 */}
                        <div className='modal_baixo_beneficio_g2'>
                            <div className='container_lista_comentario_beneficio_g2'>
                                <h2>Comentários:</h2>
                                <div className='wrap_modal_comentario_beneficio_g2'>
                                    {
                                        comentarios.map((c) => {
                                            return (
                                                <div className='container_lista_comentario_g2'>
                                                    <div className='box_lista_comentario_g2'>
                                                        <span>{c.idUsuarioNavigation.nome}:</span>
                                                        <p>{c.comentarioCurso1}</p>
                                                        <p>{c.avaliacaoComentario}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    {/* {beneficio.comentariodescontos} */}
                                </div>

                                <div>
                                    <form  className='input_modal_comentario_beneficio_g2'>
                                        <input
                                            type="number"
                                            placeholder='Avaliação 0 a 5'
                                            // value={avaliacaoDesconto}
                                            // onChange={(e) => setAvaliacaoDesconto(e.target.value)}
                                        />

                                        <input
                                            type="text"
                                            placeholder='Comente'
                                            // value={comentarioDesconto1}
                                            // onChange={(e) => setComentarioDesconto1(e.target.value)}
                                        />
                                        <button type="submit" className="botaoCadastroComentarioBeneficio_g2">Enviar</button>

                                    </form>
                                </div>
                            </div>
                            <hr className='hr_modal_beneficio_g2' />
                            <div className='container_descricao_beneficio_g2'>
                                <h2>Descrição</h2>

                                <div className='lista_descricao_beneficio_g2'>
                                    {curso.descricaoCurso}
                                </div>

                                <div className='btn_cadastrarComentario_beneficio_g2'>
                                    <img src={coracao} alt="" />
                                    <button type="submit" className="botaoCadastroComentarioBeneficio_g2">Inscrever-se</button>
                                </div>
                            </div>
                        </div>

                </Modal>
            ) : null
            }
        </>
    );

}