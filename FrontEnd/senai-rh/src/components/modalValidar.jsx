import React, { useRef, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../Assets/css/gp1style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { listarAtividadesValidar } from '../Pages/CadastrarAtividades/cadastrarAtividades'

export const ModallValidar = ({ showModalValidar, setShowModalValidar, atividade }) => {
    const modalRef = useRef();
    const notify_validar = () => toast.success("Atividade Validada!");

    console.log(atividade)

    let history = useHistory();

    const closeModal = e => {
        setShowModalValidar(false);
        console.log('showModal antes:' + showModalValidar)

        console.log('showModal depois:' + showModalValidar)
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModalValidar) {
                setShowModalValidar(false);
            }
        },
        [setShowModalValidar, showModalValidar]
    );

    async function validarAtividades(atividade) {
        console.log("validarAtividades chamouuuuu")
        let idAtividade = atividade.idAtividade;
        let idUsuario = atividade.idUsuario;
        await axios.patch("http://apirhsenaigp1.azurewebsites.net/api/Atividades/ValidarAtividade/" + atividade.idAtividade + "/" + atividade.idUsuario, {
            idAtividade: idAtividade,
            idUsuario: idUsuario
        }
            , {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
            .catch(erro => console.log(erro))

        notify_validar()
        // listarAtividadesValidar()
    };

    return (
        <>
            <ToastContainer
                position="top-rigth"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {showModalValidar ? (
                <div className="modal-body">
                    <div className='G1_organizar_modal_titulo'>
                        <div className="G1_header_atividade"></div>
                        <h2 className="titulo_atividade_modal">{atividade.nomeAtividade}</h2>
                    </div>
                    <div className='organizar_sessao_modal'>
                        <div>
                            <label className='label_modal'>Descrição</label>
                            <p className="descricao_atividade_modal">{atividade.descricaoAtividade}</p>
                        </div>
                    </div>
                    <img src={"https://armazenamentogrupo3.blob.core.windows.net/amazenamento-simples-grp1/" +  atividade.idAtividade} alt="" />
                    {/* <p className="descricao_atividade_modal">{atividade.descricaoAtividade}</p>
                <p className="descricao_atividade_modal">{atividade.descricaoAtividade}</p> */}
                    <div className="organizar_btn">
                        <button className="btn_fechar_modal" onClick={closeModal}>Fechar</button>
                        <button className="btn_validar_atividades" onClick={() => {validarAtividades(atividade)}}>Validar</button>
                        {/* {atividade.necessarioValidar && (
                        <button className="btn_validar_modal" onClick={validarAtividades(atividade)}>Validar</button>
                    )} */}
                    </div>
                </div>
            ) : null}
        </>
    );

}
