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

export const ModalAcompanhar = ({ showModal, setShowModal, usuario, idUsuarioAvaliador }) => {
  const modalRef = useRef();
  const [listaFuncionarios, setListaFuncionarios] = useState([]);
  const [avaliacao, setAvaliacao] = useState([]);
  const [idUsuarioAvaliado, setIdUsuarioAvaliado] = useState(0);
  let history = useHistory();
  // const [nivelSatisfacao, setNivelSatisfacao] = useState(usuario.nivelSatisfacao);



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

  function cadastrarAvaliacao(event) {
    event.preventDefault();
    axios.post("https://apigrupo3.azurewebsites.net/api/AvaliacaoUsuarios/Cadastrar", {
      idUsuarioAvaliado: idUsuarioAvaliado,
      idUsuarioAvaliador: idUsuarioAvaliador,
      avaliacao: avaliacao
    }, {

      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }



    })
      .then(response => {
        if (response.status === 201) {
          console.log(response)
        }
      })
      .catch(erro => console.log(erro))
  }

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

  // function ListarUsuario() {

  //     let idUsuario = usuario.idUsuario
  //     console.log('Olha')
  //     console.log(idUsuario)
  //     axios.get(`http://localhost:5000/api/Usuarios/Listar/${idUsuario}`, {

  //       headers: {

  //         Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
  //       }

  //     })

  //       .then((resposta) => {

  //         if (resposta.status === 200) {
  //           setListaFuncionarios(resposta.data)
  //           console.log(resposta.data)


  //         }

  //       })

  //       .catch(erro => console.log(erro))

  //   }

  // useEffect(() => ListarUsuario(), [])

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      console.log(usuario)
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <div className="background_modal"
        >
          <div className="g3_modal-body">
            <div className='g3_containerOrganizacaoModal'>
              <div className='g3_graficosModal'>
                {/* {
                  listaFuncionarios.map((usuario) => {
                    return ( */}
                <div className='g3_organizadorGraficosModal'>
                  <div className='g3_graficoSatisfacaoModal'>
                    <span>{usuario.nivelSatisfacao}</span>
                    <span className='g3_spanGraficos'>Satisfação do Usuario</span>
                    <VictoryPie
                      events={[{
                        target: "data",
                        eventHandlers: {
                          onClick: () => {
                            return [
                              {
                                target: "data",
                                mutation: ({ style }) => {
                                  return style.fill === "#b3b3b3" ? null : { style: { fill: "#b3b3b3" } };
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
                {/* )
                  }
                  )
                }  */}
              </div>
              <div className='g3_organizarBtn'>
                <form className='g3_formModal' onSubmit={cadastrarAvaliacao}>
                  <input type="text" className="g3_inputCadastro" name="avaliacao" placeholder="avaliacao" value={avaliacao} onChange={(event) => setAvaliacao(event.target.value)} />
                  <button type="submit" className="g3_botaoCadastro">Cadastrar</button>
                </form>
                <button className="btn_fechar_modal" onClick={() => history.push(`/atualizar/${usuario.idUsuario}`)}>Atualizar Perfil</button>
                <button className="btn_fechar_modal" onClick={closeModal}>Fechar</button>
              </div>

            </div>

          </div>
        </div>
      ) : null}
    </>
  );

}