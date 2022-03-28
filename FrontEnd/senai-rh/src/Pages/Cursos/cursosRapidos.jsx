import HeaderFuncionario from '../../Components/Header/headerFuncionario'
import curso from '../../Assets/Img/cursosRapidos.svg'
import '../../Assets/Css/cursosRapidos.css'
import '../../Assets/Css/style.css'
import logica from '../../Assets/Img/logica.png'
import coracao from '../../Assets/Img/coracao.svg'
import relogio from '../../Assets/Img/relogio.svg'
import local from '../../Assets/Img/local.svg'

export default function CursosRapidos() {
    return (
        <div>
            <HeaderFuncionario />

            <div className='caixa'>
                <form>
                    <label ></label>
                    <input type="search" placeholder='Pesquisar' />
                </form>
            </div>

            <h1>Cursos</h1>
            <section className='container_cursos'>

                <section className='box_cursos'>
                    <img className='banner' src={logica} alt="" />
                    <h2>Logica de Programação</h2>
                    <p> <img src={relogio} alt="duracao" /> 20 Horas </p>
                    <p><img src={local} alt="local" /> EAD</p>
                    <div className='circulo_coracao'>
                        <img className='coracao' src={coracao} alt="" />
                    </div>

                    {/* <img src={} alt="" /> */}
                </section>

                <div className='container_img'>
                    <img src={curso} alt="Ver Cursos" />
                </div>

            </section>
        </div>
    )
} 