import { Link } from 'react-router-dom'
import '../../assets/css/header.css'
import logo from '../../assets/img/logo_senai.svg'
import Perfil from '../../assets/img/Perfil.svg'
import logout from '../../assets/img/logout.png'
import setaBaixo from '../../assets/img/seta-para-baixo.png'
import seta from '../../assets/img/seta.svg'
import { useState } from 'react'


export default function HeaderAdm() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <header>
            <div className='container container_header' >

                <Link to='/Redirecionar'><img className='logo' src={logo} alt="logoHeader" /></Link>

                <div class='select'>

                    <p class='input'>Vantagens <img src={setaBaixo} /></p>

                    <input type='hidden' name='some_name_tosetaBaixosetaBaixo_form' />

                    <div class='hidden'>

                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Adm' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Vantagens</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='#' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Cursos</Link>
                        
                    </div>

                </div>

                <div class='select'>
                    <p class='input'>Acompanhar <img  src={setaBaixo} /> </p>
                    <input type='hidden' name='some_name_to_form' />
                    <div class='hidden'>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Carometro' > <img className='seta' src={seta} alt="Seta" /> Carômetro</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Cadastro' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Usuario</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Decisao' > <img className='seta' src={seta} alt="Seta" /> Decisões</Link>
                    </div>

                </div>

                <div class='select'>
                    <Link class='input input_motivacao'>Motivações</Link>
                    <input type='hidden' name='some_name_to_form' />
                </div>

                <div className='circulo'>
                    <img className='img_perfil' src={Perfil} alt="perfil" />
                </div>

                <img className='img_logout' src={logout} alt="logout" />

            </div>

        </header>
    )
}