import { useState, useEffect } from "react";
import "../../assets/css/dashboard.css"
import Header from "../../components/header/headerFuncionario"
import Footer from "../../components/footer"
import grafico from "../../assets/img/grafico.png"
import estrela from "../../assets/img/star.png"
import iconPerfil from "../../assets/img/telaPerfil.png"

export default function Dashboard() {
    const [Nome, setNome] = useState('')

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

                            </div>
                            <span>Produtividade Pessoal</span>
                            <div className="g3_boxGraficosBaixo">
                                <div className="g3_containerGraficoLeft">
                                    <div className="g3_graficoSatisfacaoPessoal">

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
