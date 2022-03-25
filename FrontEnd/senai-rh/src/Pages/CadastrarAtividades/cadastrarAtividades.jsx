// import { useState, useEffect } from 'react';
// import axios from 'axios';
import '../../assets/Css/style.css'
import Rodape from '../../components/Footer';
import { Link } from 'react-router-dom'

export default function CadastrarAtividades() {

    return (
        <div>
            <div>
                <div>
                    <nav>
                        <Link>Cadastrar Atividades</Link>
                        <Link>Validar Atividades</Link>
                        <Link>Marketplace</Link>
                        <Link>Usuários</Link>
                        <Link>Ranking</Link>
                    </nav>
                </div>
                <div>
                    <h1>Cadastrar Atividade</h1>
                    <form action="">
                        <label></label>
                        <input></input>
                        <label></label>
                        <input></input>
                        <label></label>
                        <input></input>
                        <label></label>
                        <input></input>
                        <label></label>
                        <div class="toggle-btn active">
                            <input type="checkbox" checked class="cb-value" />
                            <span class="round-btn"></span>
                        </div>

                        <input type="checkbox" id="switch" /><label className='label_switch' for="switch">Toggle</label>
                        <button></button>
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