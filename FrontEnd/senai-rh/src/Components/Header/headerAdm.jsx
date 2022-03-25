// import '../../Assets/Css/header.css'

import logo from '../../Assets/Img/logo_senai.svg'

export default function HeaderAdm() {
    return (
        <header>
        <div class="grid container_header">
            <img src={logo} alt="" />
            <nav class="nav_header">
                <a href="#">inicio</a>
                <a href="#">horarios</a>
                <a href="#">campeonato</a>
                <a href="#">resultados</a>
                <a href="#">noticias</a>
            </nav>
        </div>
    </header>
    )
}