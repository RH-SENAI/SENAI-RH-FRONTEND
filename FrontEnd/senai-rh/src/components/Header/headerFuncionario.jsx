import { Link } from 'react-router-dom'
import '../../Assets/css/header.css'
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
        <header className="header_style">
                <div className='container container_header2' >
                    <Link to="/"> <img className='logo' src={logo} alt="" /></Link>


                    <div className='select'>
                        <p className='input'>Vantagens <img src={setaBaixo} /></p>
                        <input type='hidden' name='some_name_tosetaBaixosetaBaixo_form' />
                        <div className='hidden'>
                            <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/' > <img className='seta' src={seta} alt="Seta" /> Vantagens</Link>
                            <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/' > <img className='seta' src={seta} alt="Seta" /> Cursos</Link>

                        </div>
                    </div>
                    <div className='select'>
                        <p className='input'>Acompanhar <img src={setaBaixo} /> </p>
                        <input type='hidden' name='some_name_to_form' />
                        <div className='hidden'>
                            <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/' > <img className='seta' src={seta} alt="Seta" /> Carômetro</Link>
                            <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/' > <img className='seta' src={seta} alt="Seta" /> Dashboard</Link>
                            <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/' > <img className='seta' src={seta} alt="Seta" /> Democratização</Link>
                        </div>
                    </div>
                    <div className='select'>
                        <Link to='/' className='input input_motivacao'>Motivações</Link>
                        <input type='hidden' name='some_name_to_form' />
                    </div>

                    <div className='circulo'>
                        <img className='img_perfil' src={sino} alt="perfil" />
                    </div>

                    <div className='circulo'>
                        <img className='img_perfil' src={Perfil} alt="" />
                    </div>

                    <img className='img_logout' src={logout} alt="" />
                </div>
        </header>
    )
}