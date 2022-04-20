import { Redirect, useHistory } from "react-router-dom";
import Footer from "../../components/footer"
import "../../assets/css/rankingAcompanhar.css"
import estrela from '../../assets/img/estrelaRanking.svg'
import 'animate.css';
import HeaderFuncionario from "../../components/header/headerFuncionario";

export default function rankingAcompanhar() {


    return (
        <body>
            <HeaderFuncionario />
            <main>
                <div className='container g3_boxOrganizadoraRanking'>
                    <span className='g3_boldRanking'>Ranking</span>
                    <div className='g3_navRanking'>
                        <span className='g3_spanNavRanking'>Posição</span>
                        <span className='g3_spanNavRanking'>Foto</span>
                        <span className='g3_spanNavRanking'>Nome</span>
                        <span className='g3_spanNavRanking'>Satisfação</span>
                        <span className='g3_spanNavRanking'>Nota</span>
                    </div>
                    <div className='g3_cardsRanking'>
                        <span className='g3_spanNavRanking'>Posição</span>
                        <span className='g3_spanNavRanking'>Foto</span>
                        <span className='g3_spanNavRanking'>&#x1F621;</span>
                        
                        <img className='g3_notaRanking' src={estrela} />
                    </div>
                    <div className='g3_cardsRanking'>
                        <span className='g3_spanNavRanking'>Posição</span>
                        <span className='g3_spanNavRanking'>Foto</span>
                        <span className='g3_spanNavRanking'>&#x1F92C;</span>
                        
                        <img className='g3_notaRanking' src={estrela} />
                    </div>
                    <div className='g3_cardsRanking'>
                        <span className='g3_spanNavRanking'>Posição</span>
                        <span className='g3_spanNavRanking'>Foto</span>
                        <span className='g3_spanNavRanking'>&#x1F92C;</span>
                        
                        <img className='g3_notaRanking' src={estrela} />
                    </div>
                    <div className='g3_cardsRanking'>
                        <span className='g3_spanNavRanking'>Posição</span>
                        <span className='g3_spanNavRanking'>Foto</span>
                        <span className='g3_spanNavRanking'>&#x1F921;</span>
                        
                        <img className='g3_notaRanking' src={estrela} />
                    </div>
                    <div className='g3_cardsRanking'>
                        <span className='g3_spanNavRanking'>Posição</span>
                        <span className='g3_spanNavRanking'>Foto</span>
                        <span className='g3_spanNavRanking'>&#x1F921;</span>
                        
                        <img className='g3_notaRanking' src={estrela} />
                    </div>
                </div>
            </main>
            <Footer />
        </body>
    );

}