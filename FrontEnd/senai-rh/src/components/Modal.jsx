import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../Assets/css/gp1style.css'

export const Modall = ({ showModal, setShowModal, atividade }) => {
    const modalRef = useRef();
    // const [nomeGestor, setNomeGestor] = useState('');    

    // function listarGestor() {
    //     let idGestor = atividade.idGestorCadastro
    //     axios.get("http://localhost:5000/api/Usuarios/BuscarUsuario/" + idGestor
    //         , {
    //             headers: {
    //                 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
    //             }
    //         })
    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 setNomeGestor(resposta.data.nome)
    //                 console.log(resposta.data.nome)
    //             }
    //         })

    //         .catch(erro => console.log(erro))
    // };

    // useEffect( () => {listarGestor()}, []);

    const closeModal = e => {
        setShowModal(false);
        console.log('showModal antes:' + showModal)

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

    return (
        <>
            {showModal ? (
                <Modal
                    isOpen={showModal}
                    onRequestClose={closeModal}
                >
                        <div className="G1_header_atividade"></div>
                    <div class="modal-body">
                        <h2 className="titulo_atividade_modal">{atividade.nomeAtividade}</h2>
                        <div className='organizar_sessao_modal'>
                            <div>
                                <label className='label_modal'>Descrição</label>
                                <p className="descricao_atividade_modal">{atividade.descricaoAtividade}</p>
                            </div>
                            <div>
                                <label className='label_modal'>Gestor Criador</label>
                                <p className="descricao_atividade_modal">{atividade.idGestorCadastro}</p>
                            </div>
                        </div>
                        {/* <p className="descricao_atividade_modal">{atividade.descricaoAtividade}</p>
                        <p className="descricao_atividade_modal">{atividade.descricaoAtividade}</p> */}
                        <div className="organizar_btn">
                            <button className="G1_btn_vizualizar" onClick={closeModal}>Fechar</button>
                            {/* {atividade.necessarioValidar && (
                                <button className="btn_validar_modal" onClick={validarAtividades(atividade)}>Validar</button>
                            )} */}
                        </div>
                    </div>
                </Modal>
            ) : null}
        </>
    );

}
