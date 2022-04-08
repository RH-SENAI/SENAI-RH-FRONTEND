import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import relogio from '../../Assets/img/relogio.svg'
import local from '../../Assets/img/local.svg'
import data from '../../Assets/img/data.svg'

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
                    <div className='box_title'>
                        {<img key={curso.idCurso} id='imagem' className='modal_img' src={'https://raw.githubusercontent.com/RH-SENAI/Senai_Rh_Api_G2/back-end-g2/StaticFiles/Images/' + curso.caminhoImagemCurso} alt="Imagem do curso" />}
                        <div>

                            <div className='title_modal'>
                                {<h1> {curso.nomeCurso}  </h1>}
                            </div>

                            <div className='dados'>
                                {/* <p><img src={relogio} alt="" /> 1000 Horas</p> */}
                                {<p><img src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>}
                                <p><img src={data} alt="" /> {curso.dataFinalizacao} </p>
                            </div>
                            {<p><img src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}  </p>}
                        </div>
                    </div>
                    <div className='container_modal'>

                        <div className='box_descricao'>
                            <h2>Descrição:</h2>
                            {<p>{curso.descricaoCurso}</p>}

                            <h4>Empresa:</h4>
                            {<p>{curso.idEmpresaNavigation.nomeEmpresa}</p>}

                        </div>
                        <div className='btn_inscreva'>
                            <button>Inscreva-se</button>
                        </div>
                        <hr />
                        <div className='box_cometarios'>
                            <h2>Comentario:</h2>
                            <p></p>
                        </div>

                    </div>
                    <div>
                    </div>
                </Modal>
            ) : null}
        </>
    );

}