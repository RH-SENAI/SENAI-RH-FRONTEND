import HeaderFuncionario from '../../Components/Header/headerFuncionario'
import curso from '../../Assets/img/cursosRapidos.svg'
import '../../Assets/Css/cursosRapidos.css'
import logica from '../../Assets/img/logica.png'
import coracao from '../../Assets/img/coracao.svg'
import relogio from '../../Assets/img/relogio.svg'
import local from '../../Assets/img/local.svg'

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

            <h1 className='tituloCurso'>Cursos</h1>
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