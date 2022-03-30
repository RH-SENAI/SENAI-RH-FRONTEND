// import { useState, useEffect } from 'react';
// import axios from 'axios';
import '../../Assets/css/gp1style.css'
import Rodape from '../../components/Footer';
import { Link } from 'react-router-dom'
import img_olho from '../../Assets/img/Olho_Atividades.png'

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
                        <input placeholder="Digite o título da atividade" className="input_text" type="text"></input>

                        <label className="label_form">Descrição da Atividade</label>
                        <input placeholder="Digite a descição da atividade" className="input_text" type="text"></input>

                        <label className="label_form">Premiação da Atividade</label>
                        <input placeholder="Insira a premiação pela atividade" className="input_text" type="text"></input>

                        <label className="label_form">Setor da Atividade</label>
                        <select placeholder="Selecione o setor da atividade" className="input_select" type="text">
                            <option value="0" >Selecione o setor da atividade</option>
                        </select>
                        <label className="label_form">Precisa Validar</label>
                        {/* </div> */}
                        <div className="container_btn">
                            <input type="checkbox" id="switch" /><label className='label_switch' for="switch">Toggle</label>
                        </div>
                        <button className="btn_cadastrar">Cadastrar</button>
                    </form>
                </div>
                <div>
                    <div className="container_card_atividades">
                        <h1>Todas Atividades</h1>
                        <div className='container_atividades'>
                            <div className='box_atividade'>
                                <div className='organizar_atividade'>
                                    <h2 className='titulo_atividade'>Titulo da Atividade</h2>
                                    <p className='descricao_atividade'>Descrição da Atividade ....</p>
                                </div>
                                <img className='img_olho' src={img_olho} alt="Icone de um olho"/>
                            </div>
                            <hr className='linha_atividade'/>
                            <div className='box_atividade'>
                                <div className='organizar_atividade'>
                                    <h2 className='titulo_atividade'>Titulo da Atividade</h2>
                                    <p className='descricao_atividade'>Descrição da Atividade ....</p>
                                </div>
                                <img className='img_olho' src={img_olho} alt="Icone de um olho"/>
                            </div>
                            <hr className='linha_atividade'/>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    );
}