import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../Assets/css/gp1style.css'

export const Modall = ({ showModal, setShowModal, atividade }) => {
    const modalRef = useRef();

    let history = useHistory();

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
                    <div class="modal-body">
                        <h2 className="titulo_atividade_modal">{atividade.nomeAtividade}</h2>
                        <p className="descricao_atividade_modal">{atividade.descricaoAtividade}</p>
                        <p className="descricao_atividade_modal">{atividade.descricaoAtividade}</p>
                        <p className="descricao_atividade_modal">{atividade.descricaoAtividade}</p>
                        <div className="organizar_btn">
                            <button className="btn_fechar_modal" onClick={closeModal}>Fechar</button>
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
