import HeaderFuncionario from "../../components/Header/headerFuncionario";
import '../../Assets/Css/cursosRapidos.css'
import '../../Assets/Css/listaBeneficios.css'
import '../../Assets/Css/style.css'
import telaBeneficios from '../../Assets/img/telaBeneficios.svg'
import data from '../../Assets/img/data.svg'
import coracao from '../../Assets/img/coracao.svg'
import relogio from '../../Assets/img/relogio.svg'
import local from '../../Assets/img/local.svg'
import estrelaSozinha from '../../Assets/img/estrelaSozinha.svg'
import React, { useEffect, useState } from 'react';
import api from '../../Services/api'
import { ModallBeneficio } from "../../components/ModalListaBeneficios/modalListaBeneficios";


export default function ListaBeneficios() {
    const [listaBeneficios, setListaBeneficios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idDescontoModal, setIdDescontoModal] = useState()
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const OpenModal = () => {
        setShowModal(prev => !prev);
    }

    function listarBeneficios() {
        api('http://localhost:5000/api/Descontos')
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Lista')
                    console.log(resposta)
                    setListaBeneficios(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(listarBeneficios, []);

    function Excluir(idDesconto) {

        api.delete('http://localhost:5000/api/Descontos/Deletar/' + idDesconto)

            .then(resposta => {
                if (resposta.status === 204) {
                    console.log('Beneficio Excluido')
                    listarBeneficios()

                }
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    return (
        <div>
            <ModallBeneficio beneficio={listaBeneficios.find(beneficio => beneficio.idDesconto == idDescontoModal)} showModal={showModal} setShowModal={setShowModal} />
            <HeaderFuncionario />
            <div className='caixa'>
                <form>
                    <label ></label>
                    <input type="search" placeholder='Pesquisar' />
                </form>
            </div>

            <div className='titulo_beneficio'>
                <h1>Beneficios</h1>
            </div>
            <section className="container_cursos">
                <div className="container_img">
                    <img src={telaBeneficios} alt="" />
                </div>

                <div className='wrap_beneficio'>
                    <div className='container_wrap_beneficio'>
                        {
                            listaBeneficios.map((beneficio) => {
                                return (
                                    <div className='espacamento'>


                                        <section alt={beneficio.idDesconto} key={beneficio.idDesconto} id='imagem' className='box_cursos'>
                                            <div className='banner_img_beneficio'>
                                                {<img onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='banner' src={'http://localhost:5000/img/' + beneficio.caminhoImagemDesconto} alt="imagem do curso" />}
                                                {/* {<img  onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idCurso)} className='banner' src={'https://raw.githubusercontent.com/RH-SENAI/Senai_Rh_Api_G2/back-end-g2/StaticFiles/Images/' + beneficio.caminhoImagemCurso} alt="imagem do curso" />} */}
                                            </div>
                                            {<span className="title_beneficios" onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)}> {beneficio.nomeDesconto}</span>}

                                            {<p><img onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='box_dados_curso' src={data} alt="duracao" /> {Intl.DateTimeFormat("pt-BR", {
                                                year: 'numeric', month: 'numeric', day: 'numeric'
                                            }).format(new Date(beneficio.validadeDesconto))} </p>}
                                            {<p><img onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='box_dados_curso' src={local} alt="duracao" /> {beneficio.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}  </p>}

                                            <div className="box_baixo_section">

                                                {<div className='circulo_coracao2'>
                                                    <img className='coracao' src={coracao} alt="favorito" />
                                                </div>}
                                                <div className="media_beneficio">
                                                    <img src={estrelaSozinha} alt="" /> <p>{beneficio.mediaAvaliacaoDesconto}</p>
                                                </div>
                                                {/* <div> <button onClick={ () => Excluir(beneficio.idDesconto)} >Excluir</button></div> */}
                                            </div>
                                        </section>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </div>
    )
}