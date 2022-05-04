import HeaderFuncionario from "../../components/header/headerFuncionario";
import '../../assets/css/cursosRapidos.css'
import '../../assets/css/listaBeneficios.css'
import '../../assets/css/style.css'
import telaBeneficios from '../../assets/img/telaBeneficios.svg'
import data from '../../assets/img/data.svg'
import coracao from '../../assets/img/coracao.svg'
import coin from '../../assets/img/coin 1.png'
import relogio from '../../assets/img/relogio.png'
import local from '../../assets/img/local.png'
import estrelaSozinha from '../../assets/img/estrelaSozinha.svg'
import React, { useEffect, useState } from 'react';
import { ModallBeneficio } from "../../components/modalListaBeneficios/modalListaBeneficios";
import api from "../../services/api";
import Footer from "../../components/footer";


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


    const [searchInput, setSearchInput] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        console.log(searchValue)
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = listaBeneficios.filter((item) => {
                return Object.values(item.nomeDesconto).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(listaBeneficios)
        }
    }



    return (
        <div>
            <ModallBeneficio beneficio={listaBeneficios.find(beneficio => beneficio.idDesconto == idDescontoModal)} showModal={showModal} setShowModal={setShowModal} />
            <HeaderFuncionario />

            <div className="container">
                <div className='title_caixa_beneficio_g2'>
                    <h1 className='h1_beneficio_g2'>Vantagens</h1>
                    <div className='caixa_beneficio_g2'>
                        <label ></label>
                        <input
                            type="search"
                            placeholder='Pesquisar'
                            // autoComplete='off'
                            list='curso'
                            onChange={(e) => searchItems(e.target.value)}
                        />
                    </div>
                </div>


                <section className="container_beneficio_g2">


                    <div className='wrap_beneficio_g2'>
                        <div className='container_wrap_beneficio_g2'>
                            {
                                searchInput.length > 0 ?

                                    filteredResults.map((beneficio) => {
                                        return (
                                            <div className='espacamento_beneficio_g2'>
                                                <section alt={beneficio.idDesconto} key={beneficio.idDesconto} id='imagem' className='box_beneficio_g2'>
                                                    <div className='banner_img_beneficio_g2'>
                                                        {<img onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='beneficio_banner_g2' src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + beneficio.caminhoImagemDesconto} alt="imagem do desconto" />}
                                                    </div>

                                                    <div className="dados_beneficio_gp2">
                                                        {<span className="title_beneficios_g2" onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)}> {beneficio.nomeDesconto}</span>}

                                                        <div>avaliacao</div>

                                                        <div className="box_baixo_section_beneficio_g2">
                                                            {<div className='circulo_moeda_beneficio_g2'>
                                                                <img className='coin_beneficio_g2' src={coin} alt="coin" />  1200
                                                            </div>}
                                                            <div>
                                                                <img src={coracao} alt="favorito" />
                                                            </div>
                                                            {/* <div> <button onClick={(b) => Excluir(beneficio.idDesconto)} >Excluir</button></div> */}
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        )
                                    })

                                    :

                                    listaBeneficios.map((beneficio) => {
                                        return (
                                            <div className='espacamento_beneficio_g2'>


                                                <section alt={beneficio.idDesconto} key={beneficio.idDesconto} id='imagem' className='box_beneficio_g2'>
                                                    <div className='banner_img_beneficio_g2'>
                                                        {<img onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='beneficio_banner_g2' src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + beneficio.caminhoImagemDesconto} alt="imagem do desconto" />}
                                                        {/* {<img  onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idCurso)} className='banner' src={'https://raw.githubusercontent.com/RH-SENAI/Senai_Rh_Api_G2/back-end-g2/StaticFiles/Images/' + beneficio.caminhoImagemCurso} alt="imagem do curso" />} */}
                                                    </div>

                                                    <div className="dados_beneficio_gp2">
                                                        {<span className="title_beneficios_g2" onClick={OpenModal} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)}> {beneficio.nomeDesconto}</span>}

                                                        <div>avaliacao</div>

                                                        <div className="box_baixo_section_beneficio_g2">
                                                            {<div className='circulo_moeda_beneficio_g2'>
                                                                <img className='coin_g2' src={coin} alt="favorito" />  1200
                                                            </div>}
                                                            <div className="media_beneficio_g2">
                                                                <img src={coracao} alt="" />
                                                            </div>
                                                            {/* <div> <button onClick={() => Excluir(beneficio.idDesconto)} >Excluir</button></div> */}
                                                        </div>
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

            <Footer />
        </div>
    )
}