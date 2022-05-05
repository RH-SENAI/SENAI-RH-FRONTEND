import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../Assets/css/gp1style.css'

export const Modall = ({ showModal, setShowModal, usuarios }) => {

    const [listaUsuarios, setListaUsuarios] = useState([{}]);
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

    async function setValue(value){
        setListaUsuarios(value)
        console.log(listaUsuarios)
    }   

    return (
        <>
            {showModal ? (
                <Modal
                    isOpen={showModal}
                    onRequestClose={closeModal}
                >
                    <div class="modal-body">
                        <h2 className="titulo_atividade_modal">Selecionar Usuário</h2>
                        <div className='organizar_sessao_modal'>
                            {usuarios.map((usuario) => {
                                return (
                                    <div key={usuario.idUsuario} className="div_map">
                                        <div className='box_atividade'>
                                            <div className='organizar_atividade'>
                                                <h2 className='titulo_atividade'>{usuario.nome}</h2>
                                                <input className="checkbox_usuario" 
                                                    type="checkbox"
                                                    value={listaUsuarios}
                                                    onChange={(e) => setValue(e.target.value)}
                                                />

                                            </div>
                                        </div>
                                        <hr className='linha_atividade' />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="organizar_btn">
                            <button className="btn_fechar_modal" onClick={closeModal}>Fechar</button>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </>
    );

}
