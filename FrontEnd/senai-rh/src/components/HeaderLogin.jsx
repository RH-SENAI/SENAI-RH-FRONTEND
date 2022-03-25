import React, { Component } from "react"
import Logo from "../assets/img/Logo.png"
import '../assets/css/headerLogin.css'

export default class HeaderLogin extends Component {
    render() {
        return (
            <header className="container_header">
            <img src={Logo} alt="Logo do senai" className="logo"/>
        </header>
        )
    }
}

