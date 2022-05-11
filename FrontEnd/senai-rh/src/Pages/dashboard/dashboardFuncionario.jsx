import { useState, useEffect } from "react";
import "../../assets/css/dashboard.css"
import Header from "../../components/header/headerFuncionario"
import Footer from "../../components/footer"
import grafico from "../../assets/img/grafico.png"
import estrela from "../../assets/img/star.png"
import iconPerfil from "../../assets/img/telaPerfil.png"
import axios from "axios";
import {
    VictoryBar, VictoryPie, VictoryChart, VictoryAxis,
    VictoryTheme
} from 'victory';
import ImgDashboard from '../../assets/img/telaDeAcessoLight.svg'
import {
    parseJwt
    // usuarioAutenticado
} from '../../services/auth';

export default function Dashboard() {
    const [idUsuario, setIdUsuario] = useState(0);
    const [nivelSatisfacao, setNivelSatisfacao] = useState(0);
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [listaAtividades, setListaAtividades] = useState([]);
    const [usuario, setUsuario] = useState([])
    const [notaProdutividade, setNotaProdutividade] = useState(0);


    function ListarUsuario() {

        axios.get(`http://apirhsenaigp1.azurewebsites.net/api/Usuarios/BuscarUsuario/${parseJwt().jti}`, {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })

            .then((resposta) => {

                if (resposta.status === 200) {
                    setListaUsuarios([resposta.data])

                    console.log(resposta)

                }

            })

            .catch(erro => console.log(erro))

    }
    function ListarMinhasAtividades() {

        axios.get(`http://apirhsenaigp1.azurewebsites.net/api/Atividades/MinhasAtividade/${idUsuario}`, {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })

            .then((resposta) => {

                if (resposta.status === 200) {
                    setListaAtividades(resposta.data)

                    console.log(resposta)

                }

            })

            .catch(erro => console.log(erro))

    }
    // function ListarMinhasAtividadesExtra() {

    //     axios.get(`http://apirhsenaigp1.azurewebsites.net/api/Atividades/MinhasAtividadeExtra/${idUsuario}`, {

    //         headers: {

    //             Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
    //         }

    //     })

    //         .then((resposta) => {

    //             if (resposta.status === 200) {
    //                 setListaAtividades([resposta.data])

    //                 console.log(resposta)

    //             }

    //         })

    //         .catch(erro => console.log(erro))

    // }

    useEffect(ListarUsuario, [])
    useEffect(ListarMinhasAtividades, [])
    // useEffect(ListarMinhasAtividadesExtra, [])

    // const sampleData = [
    //     { x: 'satisfacao', y: nivelSatisfacao },
    //     { x: 'satisfacao', y: nivelSatisfacao },



    // ];

    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <div className="g3_boxTituloDashboard">
                        <span className="g3_tituloDashboard">DASHBOARD</span>
                    </div>
                    <div className="g3_containerGraficos">
                        {
                            listaUsuarios.map((usuario) => {
                                return (
                                    <div className='g3_organizadorDashboard'>
                                        <div className="g3_boxGraficosLeft">
                                            <div className="g3_graficoProdutividade">
                                                {/* {
                                                    listaAtividades.map((atividade) => {
                                                        return (
                                                            <VictoryChart
                                                            >
                                                                <VictoryLine
                                                                    style={{
                                                                        data: { stroke: "#c20004" },
                                                                        parent: { border: "1px solid #c20004" }
                                                                    }}

                                                                    data=
                                                                    {
                                                                        listaAtividades.filter(a => a.idSituacaoAtividade === 3).map((atividade) => {
                                                                            return (

                                                                                { x: 1, y: atividade.dataConclusao.split('-')[1] }

                                                                            )
                                                                        })}


                                                                />
                                                            </VictoryChart>
                                                        )
                                                    })} */}
                                                <VictoryChart
                                                    domainPadding={{ x: 30 }}
                                                >
                                                    <VictoryBar
                                                        barRatio={0.8}
                                                        style={{
                                                            data: { fill: "#c20004" }
                                                        }}
                                                        data={[
                                                            { x: 1, y: 2},
                                                            { x: 2, y: 3},
                                                            { x: 3, y: 5},
                                                            { x: 4, y: 4},
                                                          ]}
                                                    />
                                                </VictoryChart>


                                            </div>
                                            <span>Tarefas Pessoais</span>
                                            <div className="g3_boxGraficosBaixo">
                                                <div className="g3_containerGraficoLeft">
                                                    <div className="g3_graficoSatisfacaoPessoal">
                                                        <VictoryPie
                                                            events={[{
                                                                target: "data",
                                                                eventHandlers: {
                                                                    onClick: () => {
                                                                        return [
                                                                            {
                                                                                target: "data",
                                                                                mutation: ({ style }) => {
                                                                                    return style.fill === "#000000" ? null : { style: { fill: "#000000" } };
                                                                                }
                                                                            }, {
                                                                                target: "labels",
                                                                            }
                                                                        ];
                                                                    }
                                                                }
                                                            }]}
                                                            innerRadius={100}
                                                            colorScale={["#c20004", "#b3b3b3"]}
                                                            data={[
                                                                { x: usuario.nivelSatisfacao * 100 + '%', y: usuario.nivelSatisfacao * 100 },
                                                                { x: 100 - usuario.nivelSatisfacao * 100 + '%', y: 100 - usuario.nivelSatisfacao * 100 },


                                                            ]}


                                                        />
                                                    </div>
                                                    <span>Satisfação Pessoal</span>
                                                </div>
                                                <div className="g3_containerGraficoRight">
                                                    <div className="g3_graficoProdutividadeUnidade">
                                                        <VictoryPie
                                                            events={[{
                                                                target: "data",
                                                                eventHandlers: {
                                                                    onClick: () => {
                                                                        return [
                                                                            {
                                                                                target: "data",
                                                                                mutation: ({ style }) => {
                                                                                    return style.fill === "#000000" ? null : { style: { fill: "#000000" } };
                                                                                }
                                                                            }, {
                                                                                target: "labels",
                                                                            }
                                                                        ];
                                                                    }
                                                                }
                                                            }]}
                                                            innerRadius={100}
                                                            colorScale={["#c20004", "#b3b3b3"]}
                                                            data={[
                                                                { x: usuario.mediaAvaliacao, y: usuario.mediaAvaliacao * 10 },
                                                                { x: 10 - usuario.mediaAvaliacao, y: 100 - usuario.mediaAvaliacao * 10 },


                                                            ]}


                                                        />
                                                    </div>
                                                    <span>Avaliação Pessoal</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="g3_boxImg">
                                            <img src={ImgDashboard} className='g3_imgDashboard' />
                                        </div>
                                    </div>
                                )
                            }

                            )
                        }


                    </div>
                </div>
            </main>

            <Footer />
        </div >
    )

}
