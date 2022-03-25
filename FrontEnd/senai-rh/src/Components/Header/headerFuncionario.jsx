import { Link } from 'react-router-dom'
import '../../Assets/Css/header.css'
import logo from '../../Assets/Img/logo_senai.svg'
import Perfil from '../../Assets/Img/Perfil.svg'
import logout from '../../Assets/Img/logout.png'
import setaBaixo from '../../Assets/Img/seta-para-baixo.png'
import seta from '../../Assets/Img/seta.svg'
import { useState } from 'react'


export default function HeaderFuncionario() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <header>
            <div className='container container_header' >
                <img className='logo' src={logo} alt="" />


                <div class='select'>
                    <p class='input'>Vantagens <img src={setaBaixo} /></p>
                    <input type='hidden' name='some_name_tosetaBaixosetaBaixo_form' />
                    <div class='hidden'>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Adm' > <img className='seta' src={seta} alt="Seta" /> Vantagens</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='#' > <img className='seta' src={seta} alt="Seta" /> Cursos</Link>
                        
                    </div>
                </div>
                <div class='select'>
                    <p class='input'>Acompanhar <img  src={setaBaixo} /> </p>
                    <input type='hidden' name='some_name_to_form' />
                    <div class='hidden'>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='#' > <img className='seta' src={seta} alt="Seta" /> Carômetro</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} > <img className='seta' src={seta} alt="Seta" /> Dashboard</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} > <img className='seta' src={seta} alt="Seta" /> Democratização</Link>
                    </div>
                </div>
                <div class='select'>
                    <Link class='input input_motivacao'>Motivações</Link>
                    <input type='hidden' name='some_name_to_form' />
                </div>
                <div className='circulo'>
                    <img className='img_perfil' src={Perfil} alt="" />
                </div>

                <img className='img_logout' src={logout} alt="" />
            </div>
        </header>
    )
}