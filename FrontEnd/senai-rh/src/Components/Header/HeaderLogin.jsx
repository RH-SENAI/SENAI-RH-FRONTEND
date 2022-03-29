import React, { Component } from "react"
import Logo from "../../Assets/img/Logo.png"
import '../../Assets/Css/headerLogin.css'

export default class HeaderLogin extends Component {
    render() {
        return (
            <header className="container_header_login">
            <img src={Logo} alt="Logo do senai" className="logoLogin"/>
        </header>
        )
    }
}