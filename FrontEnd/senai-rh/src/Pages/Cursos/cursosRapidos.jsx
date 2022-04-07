import HeaderFuncionario from '../../components/Header/headerFuncionario'
import curso from '../../Assets/img/cursosRapidos.svg'
import '../../Assets/Css/cursosRapidos.css'
import '../../Assets/Css/style.css'
import logica from '../../Assets/img/logica.png'
import coracao from '../../Assets/img/coracao.svg'
import relogio from '../../Assets/img/relogio.svg'
import local from '../../Assets/img/local.svg'
import data from '../../Assets/img/data.svg'
import React, { useEffect, useState } from 'react';
import api from '../../Services/api'
import { Modall } from '../../components/ModalListaCursos/modalListaCursos'

export default function CursosRapidos() {
    const [listaCursos, setListaCursos] = useState([]);
    let subtitle;

    function listarCursos() {
        api('/Cursos')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Lista')
                    console.log(resposta)
                    setListaCursos(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(listarCursos, []);



    return (
        <div>
            <HeaderFuncionario />

            <div className='caixa'>
                <form>
                    <label ></label>
                    <input type="search" placeholder='Pesquisar' />
                </form>
            </div>

            <h1>Cursos</h1>
            <section className='container_cursos '>

                <div className='wrap'>
                    <div className='container_wrap'>
                        {
                            listaCursos.map((curso) => {
                                return (
                                    <div className='espacamento'>
                                        <Modall />

                                        <section key={curso.idCurso} id='imagem' className='box_cursos'>
                                            <div className='banner_img'>
                                                {<img className='banner' src={'https://raw.githubusercontent.com/RH-SENAI/Senai_Rh_Api_G2/back-end-g2/StaticFiles/Images/' + curso.caminhoImagemCurso} alt="imagem do curso" />}
                                            </div>
                                            {<h2> {curso.nomeCurso} </h2>}
                                            {<p><img className='box_dados_curso' src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>}
                                            {<p><img className='box_dados_curso' src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}  </p>}
                                            {<div className='circulo_coracao'>
                                                <img className='coracao' src={coracao} alt="" />
                                            </div>}
                                        </section>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='container_img'>
                    <img src={curso} alt="Ver Cursos" />
                </div>
            </section >
        </div >
    )
} 