import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export const Modall = ({ showModal, setShowModal, usuario }) => {
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
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <div className='box_modal'>
                  <div className='box_foto_nome_modal'>
                    <div className='foto_perfil_modal'>
                      <img className='foto_modal' src={"data:image/png;base64,"} />
                    </div>
                    <h1>{usuario.nome}</h1>


                    <button > Deletar</button>
                    <button onClick={() => history.push(`/atualizar/${usuario.idUsuario}`)}> Atualizar Dados</button>


                  </div>



                  <div className='box_informações_modal'>
                    <div className='box_span'>
                      <span className='box_span_key'>CPF: </span>
                      <span className='span_value_modal'>{usuario.cpf}</span>
                    </div>

                    <div className='box_span'>
                      <span className='box_span_key_modal'>Cargo: </span>
                      <span className='span_value_modal'>{usuario.idCargoNavigation.nomeCargo}</span>
                    </div>


                    <div className='box_span'>
                      <span className='box_span_key'>Unidade: </span>
                      <span className='span_value_modal'>{usuario.idUnidadeNavigation.nomeUnidade}</span>

                    </div>

                    <div className='box_span'>
                      <span className='box_span_key'>Endereço: </span>
                      <span className='span_value_modal'>{usuario.localizacaoUsuario}</span>
                    </div>

                  </div>
                </div>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};