import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

export const Modall = ({ showModal, setShowModal, curso }) => {

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


    return (
        <>
            {showModal ? (
                <Modal
                    isOpen={showModal}
                    onRequestClose={closeModal}
                >
                    <div class="modal-">
                        <h2 className="">{curso.nomeCurso}</h2>
                        <p className="">{curso.descricaoAtividade}</p>
                        <p className="">{curso.descricaoAtividade}</p>
                        <p className="">{curso.descricaoAtividade}</p>
                        <div className="">
                            <button className="" onClick={closeModal}>Fechar</button>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </>
    );

}