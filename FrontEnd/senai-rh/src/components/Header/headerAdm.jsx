import { Link } from 'react-router-dom'
import '../../Assets/css/header.css'
import logo from '../../Assets/img/logo_senai.svg'
import Perfil from '../../Assets/img/Perfil.svg'
import logout from '../../Assets/img/logout.png'
import setaBaixo from '../../Assets/img/seta-para-baixo.png'
import seta from '../../Assets/img/seta.svg'
import sino from '../../Assets/img/sino.svg'
import { useState } from 'react'

export default function HeaderAdm() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <header>
            <div className='container container_header'>

                <Link to="/"> <img className='logo' src={logo} alt="" /></Link>

                <div class='select'>

                    <p class='input'>Vantagens <img src={setaBaixo} /></p>

                    <input type='hidden' name='some_name_tosetaBaixosetaBaixo_form' />

                    <div class='hidden'>

                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Adm' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Vantagens</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='#' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Cursos</Link>

                    </div>

                </div>

                <div class='select'>
                    <p class='input'>Acompanhar <img src={setaBaixo} /> </p>
                    <input type='hidden' name='some_name_to_form' />
                    <div class='hidden'>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='#' > <img className='seta' src={seta} alt="Seta" /> Carômetro</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} > <img className='seta' src={seta} alt="Seta" /> Dashboard</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} > <img className='seta' src={seta} alt="Seta" /> Democratização</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} > <img className='seta' src={seta} alt="Seta" /> Cadastrar Funcionário</Link>
                    </div>

                </div>

                <div class='select'>
                    <Link class='input input_motivacao'>Motivações</Link>
                    <input type='hidden' name='some_name_to_form' />
                </div>

                <div className='circulo'>
                    <img className='img_perfil' src={sino} alt="perfil" />
                </div>
                
                <div className='circulo'>
                    <img className='img_perfil' src={Perfil} alt="perfil" />
                </div>

                <img className='img_logout' src={logout} alt="logout" />

            </div>

        </header>
    )
}