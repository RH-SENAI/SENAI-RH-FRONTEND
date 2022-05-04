import { useState, useEffect } from "react";
import "../../assets/css/dashboard.css"
import Header from "../../components/header/headerFuncionario"
import Footer from "../../components/footer"
import grafico from "../../assets/img/grafico.png"
import estrela from "../../assets/img/star.png"
import iconPerfil from "../../assets/img/telaPerfil.png"
import axios from "axios";
import {
    VictoryLine, VictoryPie, VictoryChart, VictoryAxis,
    VictoryTheme
} from 'victory';

export default function Dashboard() {
    const [idUsuario, setIdUsuario] = useState(1);
    const [nivelSatisfacao, setNivelSatisfacao] = useState(0);
    const [usuario, setUsuario] = useState([])
    const [notaProdutividade, setNotaProdutividade] = useState(0);


    function ListarUsuario() {

        axios.get(`http://localhost:5000/api/Usuarios/Listar/${idUsuario}`, {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })

            .then((resposta) => {

                if (resposta.status === 200) {
                    setUsuario([resposta.data])

                    console.log(resposta)

                }

            })

            .catch(erro => console.log(erro))

    }

    useEffect(ListarUsuario, [])

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
                        <div className="g3_boxGraficosLeft">
                            <div className="g3_graficoProdutividade">

                                <VictoryChart

                                >
                                    <VictoryLine
                                        style={{
                                            data: { stroke: "#C20004" },
                                            parent: { border: "3px solid #b3b3b3" },


                                        }}
                                        interpolation="natural"

                                        data={[
                                            { x: 1, y: 2 },
                                            { x: 2, y: 3 },
                                            { x: 3, y: 5 },
                                            { x: 4, y: 4 },
                                            { x: 5, y: 7 },
                                        ]}
                                    />
                                </VictoryChart>
                            </div>
                            <span>Produtividade Pessoal</span>
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
                                                { x: 1, y: usuario.nivelSatisfacao},

 
                                            ]}
                                        />
                                    </div>
                                    <span>Satisfação Pessoal</span>
                                </div>
                                <div className="g3_containerGraficoRight">
                                    <div className="g3_graficoProdutividadeUnidade">

                                    </div>
                                    <span>Produtividade Pessoal</span>
                                </div>

                            </div>
                        </div>
                        <div className="g3_boxGraficosRight">

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div >
    )
}
