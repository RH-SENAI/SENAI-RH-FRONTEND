import HeaderFuncionario from '../../Components/Header/headerFuncionario'
import curso from '../../Assets/Img/cursosRapidos.svg'
import '../../Assets/Css/cursosRapidos.css'
import '../../Assets/Css/style.css'

export default function CursosRapidos() {
    return (
        <div>
            <HeaderFuncionario />

            <div className='caixa'>
                <label ></label>
                <input type="search" placeholder='Pesquisar' />
            </div>

            <div className='container_cursos'>
                <p>Cursos</p>

                <div>
                    
                </div>

            </div>

            <div className='container_img'>
                <img src={curso} alt="Ver Cursos" />
            </div>

        </div>
    )
} 