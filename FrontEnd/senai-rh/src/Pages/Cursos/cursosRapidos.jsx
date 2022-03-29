import HeaderFuncionario from '../../components/Header/headerFuncionario'
import curso from '../../Assets/img/cursosRapidos.svg'
import '../../Assets/Css/cursosRapidos.css'
import '../../Assets/Css/style.css'
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

            <h1>Cursos</h1>
            <section className='container_cursos '>
                
                <div className='wrap'>
                    <div className='container_wrap'>

                    
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

                        <section className='box_cursos'>
                            <img className='banner' src={logica} alt="" />
                            <h2>Logica de Programação</h2>
                            <p> <img src={relogio} alt="duracao" /> 20 Horas </p>
                            <p> <img src={local} alt="local" /> EAD</p>
                            <div className='circulo_coracao'>
                                <img className='coracao' src={coracao} alt="" />
                            </div>
                            {/* <img src={} alt="" /> */}
                        </section>
                        
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

                </div>
                </div>

                <div className='container_img'>
                    <img src={curso} alt="Ver Cursos" />
                </div>
            </section >
        </div >
    )
} 