import { Link } from 'react-router-dom'
import '../../Assets/Css/header.css'
import logo from '../../Assets/img/logo_senai.svg'
import Perfil from '../../Assets/img/Perfil.svg'
import logout from '../../Assets/img/logout.png'
import setaBaixo from '../../Assets/img/seta-para-baixo.png'
import seta from '../../Assets/img/seta.svg'
import { useState } from 'react'


export default function HeaderFuncionario() {
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
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Adm' > <img className='seta' src={seta} alt="Seta" /> Vantagens</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/CursosRapidos' > <img className='seta' src={seta} alt="Seta" /> Cursos</Link>

                    </div>
                </div>
                <div class='select'>
                    <p class='input'>Acompanhar <img src={setaBaixo} /> </p>
                    <input type='hidden' name='some_name_to_form' />
                    <div class='hidden'>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Carometro' > <img className='seta' src={seta} alt="Seta" /> Carômetro</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Cadastro' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Usuario</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/Decisao' > <img className='seta' src={seta} alt="Seta" /> Decisões</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/DemocratizacaoADM' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Decisão</Link>
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