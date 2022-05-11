import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { parseJwt } from "../../services/auth";
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
import ReactStars from "react-rating-stars-component";


export const ModallCurso = ({ showModal, setShowModal, curso, comentarios }) => {

    const [listaComentarioCurso, setListaComentarioCurso] = useState([])
    const [idCurso, setIdCurso] = useState(0)
    const [comentarioCurso1, setComentarioCurso1] = useState('')
    const [valorAvalicao, setValorAvalicao] = useState(1)

    const avaliacao2 = () => {
        setValorAvalicao(2)
    }
    const avaliacao3 = () => {
        setValorAvalicao(3)
    }
    const avaliacao4 = () => {
        setValorAvalicao(4)
    }
    const avaliacao5 = () => {
        setValorAvalicao(5)
    }


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

    function cadastrarComentario(event) {
        event.preventDefault();

        let comentarios = {
            idUsuario: parseJwt().jti,
            avaliacaoComentario: valorAvalicao,
            comentarioCurso1: comentarioCurso1,
            idCurso: curso.idCurso
        }
        console.log('Comentario idDesconto')
        // console.log(comentario)

        api.post('/ComentarioCursos', comentarios, {
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

                                <div>
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={30}
                                        edit={false}
                                        value={curso.mediaAvaliacaoCurso}
                                        activeColor="#C20004"
                                    />
                                </div>
                                {/* {curso.mediaAvaliacaoCurso} */}
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
                                                    {/* <p>
                                                    <ReactStars
                                                            count={5}
                                                            size={15}
                                                            edit={false}
                                                            value={c.avaliacaoComentario}
                                                            activeColor="#C20004"
                                                        />
                                                    </p> */}
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            <div>
                                <form onSubmit={cadastrarComentario} className='input_modal_comentario_beneficio_g2'>


                                    <div class="rating_g2">
                                        <input type="radio" value={valorAvalicao} onChange={(e) => setValorAvalicao(e.target.value)} name="rating" id="rating-1_cadastro_beneficio" />
                                        <label for="rating-1_cadastro_beneficio"></label>

                                        <input type="radio" name="rating" value={valorAvalicao} onChange={(e) => avaliacao2(e.target.value)} id="rating-2_cadastro_beneficio" />
                                        <label for="rating-2_cadastro_beneficio"></label>

                                        <input type="radio" name="rating" value={valorAvalicao} onChange={(e) => avaliacao3(e.target.value)} id="rating-3_cadastro_beneficio" />
                                        <label for="rating-3_cadastro_beneficio"></label>

                                        <input type="radio" value={valorAvalicao} onChange={(e) => avaliacao4(e.target.value)} name="rating" id="rating-4_cadastro_beneficio" />
                                        <label for="rating-4_cadastro_beneficio"></label>

                                        <input type="radio" value={valorAvalicao} onChange={(e) => avaliacao5(e.target.value)} name="rating" id="rating-5_cadastro_beneficio" />
                                        <label for="rating-5_cadastro_beneficio"></label>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder='Comente'
                                        value={comentarioCurso1}
                                        onChange={(e) => setComentarioCurso1(e.target.value)}
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