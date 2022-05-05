import { Link } from 'react-router-dom'
import '../../Assets/css/header.css'
import logo from "../../Assets/img/logo1.svg"
import logout from '../../Assets/img/logout.png'
import setaBaixo from '../../Assets/img/seta-para-baixo.png'
import seta from '../../Assets/img/seta.svg'
import { useState } from 'react'


export default function HeaderAdm() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <header>
            <div className='container container_header' >

                <Link to="/"> <img className='logo' src={logo} alt="" /></Link>

                <div class='select'>

                    <p class='input'>Vantagens <img src={setaBaixo} /></p>

                    <input type='hidden' name='some_name_tosetaBaixosetaBaixo_form' />

                    <div class='hidden'>

                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/BeneficiosCadastrar' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Vantagem</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/CadastrarCursos' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Cursos</Link>
                        <Link onClick={ToggleMode} className={active ? "textLink" : "text_link"} to='/cadastrarEmpresa' > <img className='seta' src={seta} alt="Seta" /> Cadastrar Empresa</Link>

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
                
                

                <img className='img_logout' src={logout} alt="logout" />

            </div>

        </header>
    )
}