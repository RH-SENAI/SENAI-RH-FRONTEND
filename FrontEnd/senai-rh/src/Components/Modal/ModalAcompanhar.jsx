import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  VictoryLine, VictoryPie, VictoryChart, VictoryAxis,
  VictoryTheme
} from 'victory'
// import Modal from 'react-modal';
import '../../assets/css/modalAcompanhar.css'

export const ModalAcompanhar = ({ showModal, setShowModal, usuario }) => {
  const modalRef = useRef();
  const [listaFuncionarios, setListaFuncionarios] = useState([]);


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
  function ListarUsuario() {

    let idUsuario = usuario.idUsuario
    console.log('Olha')
    console.log(idUsuario)
    axios.get(`http://localhost:5000/api/Usuarios/Listar/${idUsuario}`, {

      headers: {

        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
      }

    })

      .then((resposta) => {

        if (resposta.status === 200) {
          setListaFuncionarios([resposta.data])
          console.log(resposta)

        }

      })

      .catch(erro => console.log(erro))

  }
  useEffect(ListarUsuario, [])


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
        <button className="background_modal" onClick={closeModal}
        >
          <div className="g3_modal-body">
            <div className='g3_containerOrganizacaoModal'>
              <div className='g3_graficosModal'>
                {
                  listaFuncionarios.map((usuario) => {
                    return (
                      <div className='g3_organizadorGraficosModal'>
                        <span>{usuario.nome}</span>
                        <div className='g3_graficoSatisfacaoModal'>
                          <span  className='g3_spanGraficos'>Satisfação do Usuario</span>
                          <VictoryPie
                            events={[{
                              target: "data",
                              eventHandlers: {
                                onClick: () => {
                                  return [
                                    {
                                      target: "data",
                                      mutation: ({ style }) => {
                                        return style.fill === "#2A2E32" ? null : { style: { fill: "#C20004" } };
                                      }
                                    }, {
                                      target: "labels",
                                      mutation: ({ text }) => {
                                        return text === "clicked" ? null : { text: "satisfação" };
                                      }
                                    }
                                  ];
                                }
                              }
                            }]}

                            data={[
                              { x: 1, y: usuario.nivelSatisfacao * 100 },
                              { x: 2, y: 100 - usuario.nivelSatisfacao * 100 },


                            ]}
                          />
                        </div>
                        <div className='g3_graficoProdutividadeModal'>
                        <span className='g3_spanGraficos'>Produtividade do Usuario</span>
                          <VictoryChart

                          >
                            <VictoryLine
                              style={{
                                data: { stroke: "#C20004" },
                                parent: { border: "3px solid #b3b3b3" },


                              }}
                              interpolation="natural"

                              data={[
                                { x: 1, y: usuario.nivelSatisfacao * 100 },
                                { x: 2, y: usuario.nivelSatisfacao * 102 },
                                { x: 3, y: usuario.nivelSatisfacao + 100 },
                                { x: 4, y: usuario.nivelSatisfacao * 100 },
                                { x: 5, y: usuario.nivelSatisfacao * 101 },
                              ]}
                            />
                          </VictoryChart>
                        </div>
                      </div>
                    )
                  }
                  )
                }
              </div>
              <div className='g3_organizarBtn'>
                <button className="btn_fechar_modal" onClick={closeModal}>Atualizar Perfil</button>
                <button className="btn_fechar_modal" onClick={closeModal}>Fechar</button>
              </div>

            </div>

          </div>
        </button>
      ) : null}
    </>
  );

}