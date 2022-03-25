import { Link } from 'react-router-dom'
import '../../Assets/Css/header.css'
import logo from '../../Assets/Img/logo_senai.svg'
import Perfil from '../../Assets/Img/Perfil.png'
import logout from '../../Assets/Img/logout.png'

export default function HeaderFuncionario() {
    return (
        <header>
            <div className='container container_header'>
                <img className='logo' src={logo} alt="" />


                <div class='select'>
                    <p class='input'>Vantagens</p>
                    <input type='hidden' name='some_name_to_form' />
                    <div class='hidden'>
                        <Link className='text_link' to='#' >Vantagens</Link>
                        <Link className='text_link' to='#' >Cursos</Link>
                        {/* <Link to='#' ></Link> */}
                    </div>
                </div>
                <div class='select'>
                    <p class='input'>Motivações</p>
                    <input type='hidden' name='some_name_to_form' />
                    <div class='hidden'>
                        <Link className='text_link' to='#' >option long value</Link>
                        <Link className='text_link' to='#' >option 2</Link>
                        <Link className='text_link' to='#' >option 3</Link>
                    </div>
                </div>
                <div class='select'>
                    <p class='input'>Acompanhar</p>
                    <input type='hidden' name='some_name_to_form' />
                    <div class='hidden'>
                        <Link className='text_link' to='#' >option long value</Link>
                        <Link className='text_link' to='#' >option 2</Link>
                        <Link className='text_link' to='#' >option 3</Link>
                    </div>
                </div>
                <img className='img_perfil' src={Perfil} alt="" />

                <img  className='img_logout' src={logout} alt="" />
            </div>
        </header>
    )
}