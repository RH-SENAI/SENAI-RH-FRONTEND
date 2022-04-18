import HeaderFuncionario from "../../components/header/headerFuncionario";
import '../../assets/css/cursosRapidos.css'
import '../../assets/css/listaBeneficios.css'
import '../../assets/css/style.css'
import telaBeneficios from '../../assets/img/telaBeneficios.svg'
import data from '../../assets/img/data.svg'
import coracao from '../../assets/img/coracao.svg'
import relogio from '../../assets/img/relogio.svg'
import local from '../../assets/img/local.svg'
import estrelaSozinha from '../../assets/img/estrelaSozinha.svg'
import React, { useEffect, useState } from 'react';
import { ModallBeneficio } from "../../components/modalListaBeneficios/modalListaBeneficios";
import api from "../../services/api";


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
                    console.log('Vantagem Excluido!')
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
            <div className='caixa_g2'>
                <form>
                    <label ></label>
                    <input type="search" placeholder='Pesquisar' />
                </form>
            </div>

            <div className='titulo_beneficio_g2'>
                <h1>Beneficios</h1>
            </div>
            <section className="container_cursos_g2">
                <div className="container_img_g2">
                    <img src={telaBeneficios} alt="" />
                </div>

                <div className='wrap_beneficio_g2'>
                    <div className='container_wrap_beneficio_g2'>
                        {
                            listaBeneficios.map((beneficio) => {
                                return (
                                    <div className='espacamento_g2'>


                                        <section alt={beneficio.idDesconto} key={beneficio.idDesconto} id='imagem' className='box_cursos_g2'>
                                            <div className='banner_img_beneficio_g2'>
                                                {<img onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='banner_g2' src={'http://localhost:5000/img/' + beneficio.caminhoImagemDesconto} alt="imagem do curso" />}
                                                {/* {<img  onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idCurso)} className='banner' src={'https://raw.githubusercontent.com/RH-SENAI/Senai_Rh_Api_G2/back-end-g2/StaticFiles/Images/' + beneficio.caminhoImagemCurso} alt="imagem do curso" />} */}
                                            </div>
                                            {<span className="title_beneficios_g2" onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)}> {beneficio.nomeDesconto}</span>}

                                            {<p><img onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='box_dados_curso_g2' src={data} alt="duracao" /> {Intl.DateTimeFormat("pt-BR", {
                                                year: 'numeric', month: 'numeric', day: 'numeric'
                                            }).format(new Date(beneficio.validadeDesconto))} </p>}
                                            {<p><img onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='box_dados_curso_g2' src={local} alt="duracao" /> {beneficio.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}  </p>}

                                            <div className="box_baixo_section_g2">

                                                {<div className='circulo_coracao2_g2'>
                                                    <img className='coracao_g2' src={coracao} alt="favorito" />
                                                </div>}
                                                <div className="media_beneficio_g2">
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