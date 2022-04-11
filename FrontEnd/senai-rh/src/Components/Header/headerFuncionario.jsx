import { Link } from 'react-router-dom'
import '../../Assets/Css/header.css'
import logo from '../../Assets/img/logo_senai.svg'
import Perfil from '../../Assets/img/Perfil.svg'
import logout from '../../Assets/img/logout.png'
import setaBaixo from '../../Assets/img/seta-para-baixo.png'
import seta from '../../Assets/img/seta.svg'
import sino from '../../Assets/img/sino.svg'
import { useState } from 'react'


export default function HeaderFuncionario() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <header>
            <div className='container container_header' >
                <Link to="/"> <img className='logo' src={logo} alt="" /></Link>


                <div class='select'>
                    <p class='input'>Beneficios <img src={setaBaixo} /></p>
                    <input type='hidden' name='some_name_tosetaBaixosetaBaixo_form' />
                    <div class='hidden'>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Beneficios' > <img className='seta' src={seta} alt="Seta" /> Beneficios</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/CursosRapidos' > <img className='seta' src={seta} alt="Seta" /> Cursos</Link>

                    </div>
                </div>
                <div class='select'>
                    <p class='input'>Acompanhar <img src={setaBaixo} /> </p>
                    <input type='hidden' name='some_name_to_form' />
                    <div class='hidden'>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Adm' > <img className='seta' src={seta} alt="Seta" /> Carômetro</Link>
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