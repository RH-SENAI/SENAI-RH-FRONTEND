import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import coracao from '../../assets/img/coracao.svg'
import relogio from '../../assets/img/relogio.svg'
import local from '../../assets/img/local.svg'
import data from '../../assets/img/data.svg'
import estrelaSozinha from '../../assets/img/estrelaSozinha.svg'
import modelo from '../../assets/img/modelo.svg'
import calendar from '../../assets/img/calendar.svg'
import map from '../../assets/img/map.svg'
import "../../assets/css/modalListaCursos.css"
import "../../assets/css/modalListaBeneficios.css"
import api from '../../services/api';
import { parseJwt } from '../../services/auth';
import coin from "../../assets/img/coin 1.png"

export const ModallBeneficio = ({ showModal, setShowModal, beneficio }) => {

    const [listaComentarioBeneficio, setListaComentarioBeneficio] = useState([])
    const [idDesconto, setIdDesconto] = useState(0)
    const [avaliacaoDesconto, setAvaliacaoDesconto] = useState(0)
    const [comentarioDesconto1, setComentarioDesconto1] = useState('')



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

    function cadastrarComentario(event) {
        // event.preventDefault();

        let comentarios = {
            idUsuario: parseJwt.jti,
            avaliacaoDesconto: avaliacaoDesconto,
            comentarioDesconto1: comentarioDesconto1,
            idDesconto: idDesconto
        }

        api('/ComentarioDescontos/' + beneficio.idDesconto , comentarios, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }

        )
            .then(function (response) {
                console.log(response);
                setListaComentarioBeneficio(response.data)

            })
            .catch(erro => console.log(erro))
    }

    function listarComentarioBeneficio() {
        api('/ComentarioDescontos')
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
                    {/* Parte 1 */}

                    <div>
                        <div className='container_modal_beneficio_g2'>
                            <div className='box_img_modal_beneficio_g2'>
                                <img src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + beneficio.caminhoImagemDesconto} alt="Foto do Desconto" />
                            </div>

                            <div className='box_cima_modal_beneficio_g2'>
                                <div className='title_modal_beneficio_g2'>
                                    <h1>{beneficio.nomeDesconto}</h1>
                                </div>

                                <div>
                                    {beneficio.mediaAvaliacaoDesconto}
                                </div>

                                <div className='dados_modal_beneficio_g2'>

                                    <div className='icone_center_modal_beneficio_g2'>
                                        <img src={calendar} alt="calendário" /> <p>

                                            {Intl.DateTimeFormat("pt-BR", {
                                                year: 'numeric', month: 'numeric', day: 'numeric',
                                            }).format(new Date(beneficio.validadeDesconto))}

                                        </p>


                                    </div>

                                    <div className='icone_center_modal_beneficio_g2'>
                                        <img src={map} alt="mapa" /> <p> {beneficio.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro} </p>
                                    </div>

                                </div>

                                <div className='container_registro_beneficio_g2'>
                                    <div className='box_dados_registro_beneficio_g2'>
                                        <span> Adicionado por: </span> <p>{beneficio.idEmpresaNavigation.nomeEmpresa}</p>
                                    </div>
                                    <div className='box_dados_registro_beneficio_g2'>
                                        <span>Empresa:</span> <p>{beneficio.idEmpresaNavigation.nomeEmpresa}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='circulo_icone_coin_beneficio_g2'>
                                    <img className='icone_modal_coin_g2' src={coin} alt="preço da vantagem" /> <p> {beneficio.valorDesconto} </p>
                                </div>
                            </div>
                        </div>


                        {/* parte 2 */}
                        <div className='modal_baixo_beneficio_g2'>
                            <div className='container_lista_comentario_beneficio_g2'>
                                <h2>Comentários:</h2>
                                <div className='wrap_modal_comentario_beneficio_g2'>
                                    {
                                        listaComentarioBeneficio.map((comentario) => {
                                            return (
                                                <div className='container_lista_comentario_g2'>
                                                    <div className='box_lista_comentario_g2'>
                                                        <span>{comentario.idUsuarioNavigation.nome}:</span>
                                                        <p>{comentario.comentarioDesconto1}</p>
                                                        <p>{comentario.avaliacaoDesconto}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    {/* {beneficio.comentariodescontos} */}
                                </div>

                                <div>
                                    <form onSubmit={cadastrarComentario} className='input_modal_comentario_beneficio_g2'>
                                        <input
                                            type="number"
                                            placeholder='Avaliação 0 a 5'
                                            value={avaliacaoDesconto}
                                            onChange={(e) => setAvaliacaoDesconto(e.target.value)}
                                        />

                                        <input
                                            type="text"
                                            placeholder='Comente'
                                            value={comentarioDesconto1}
                                            onChange={(e) => setComentarioDesconto1(e.target.value)}
                                        />
                                        <button type="submit" className="botaoCadastroComentarioBeneficio_g2">Enviar</button>

                                    </form>
                                </div>
                            </div>
                            <hr className='hr_modal_beneficio_g2' />
                            <div className='container_descricao_beneficio_g2'>
                                <h2>Descrição</h2>

                                <div className='lista_descricao_beneficio_g2'>
                                    {beneficio.descricaoDesconto}
                                </div>

                                <div className='btn_cadastrarComentario_beneficio_g2'>
                                    <img src={coracao} alt="" />
                                    <button type="submit" className="botaoCadastroComentarioBeneficio_g2">Inscrever-se</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal>
            ) : null
            }
        </>
    );

}