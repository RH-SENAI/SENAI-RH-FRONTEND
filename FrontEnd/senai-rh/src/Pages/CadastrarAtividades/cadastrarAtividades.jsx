// import { useState, useEffect } from 'react';
// import axios from 'axios';
import '../../Assets/Css/gp1style.css'
import Rodape from '../../components/Footer';
import { Link } from 'react-router-dom'

export default function CadastrarAtividades() {

    return (
        <div className="container_">
            <div className="container_cards">
                <div className="container_cadastro">
                    <div className="container_navs">
                        <nav className="nav_links">
                            <Link className="links">Cadastrar Atividades</Link>
                            <Link className="links">Validar Atividades</Link>
                            <Link className="links">Marketplace</Link>
                            <Link className="links">Usuários</Link>
                            <Link className="links">Ranking</Link>
                        </nav>
                    </div>
                    <h1>Cadastrar Atividade</h1>
                    <form className="form_cadastro">
                        {/* <div className="container_form"> */}
                            <label className="label_form">Título da Atividade</label>
                            <input placeholder="Digite o título da atividade" type="text"></input>

                            <label className="label_form">Descrição da Atividade</label>
                            <input placeholder="Digite a descição da atividade" type="text"></input>

                            <label className="label_form">Premiação da Atividade</label>
                            <input placeholder="Insira a premiação pela atividade" type="text"></input>

                            <label className="label_form">Setor da Atividade</label>
                            <select placeholder="Selecione o setor da atividade" type="text"></select>

                            <label className="label_form">Precisa Validar</label>
                            <div className="container_btn">
                                <div className="toggle-btn acstive">
                                    <input type="checkbox" checked class="cb-value" />
                                    <span className="round-btn"></span>
                                </div>
                            </div>
                        {/* </div> */}
                        <input type="checkbox" id="switch" /><label className='label_switch' for="switch">Toggle</label>
                        <button className="btn_cadastrar">Cadastrar</button>
                    </form>
                </div>
                <div>
                    <div>
                        <h1>Todas Atividades</h1>

                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    );
}