import HeaderFuncionario from "../../components/header/headerFuncionario";
import '../../assets/css/cursosRapidos.css'
import '../../assets/css/listaBeneficios.css'
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
import axios from "axios";
import { parseJwt } from "../../services/auth";
import ReactStars from "react-rating-stars-component";
import Heart from "react-heart"


export default function ListaBeneficios() {
    const [listaComentarioBeneficio, setListaComentarioBeneficio] = useState([])

    const [listaBeneficios, setListaBeneficios] = useState([]);
    const [listaUsuario, setListaUsuario] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idDescontoModal, setIdDescontoModal] = useState()
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = useState(0);


    const [active, setActive] = useState(false)

    const OpenModal = () => {
        setShowModal(prev => !prev);

    }


    function listarComentarioBeneficio() {
        console.log(idDescontoModal)
        api('/ComentarioDescontos/Comentario/' + idDescontoModal)
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Lista comentario')
                    console.log(resposta)
                    setListaComentarioBeneficio(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(listarComentarioBeneficio, []);

    function listarBeneficios() {
        api('/Descontos')
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


    function listarUsuario() {
        axios('http://apirhsenaigp1.azurewebsites.net/api/Usuarios/BuscarUsuario/' + parseJwt().jti, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
            },
        }
        )
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('listarUsuario')
                    console.log(resposta)
                    setListaUsuario(resposta.data)
                    // setNome(resposta.data.nome)
                    // console.log('aqui' + resposta.data)

                }
            })
            .catch(erro => console.log(erro))
    }
    useEffect(listarUsuario, [])

    function Excluir(idDesconto) {

        api.delete('/Descontos/Deletar/' + idDesconto)

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
        <div className="geral_g2">
            <ModallBeneficio comentario={listaComentarioBeneficio} beneficio={listaBeneficios.find(beneficio => beneficio.idDesconto == idDescontoModal)} showModal={showModal} setShowModal={setShowModal} />
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

                    <div className=' moeda_cima_g2'>
                        <p>Minhas moedas:</p> <img className='coin_beneficio_cima_g2' src={coin} alt="coin" /> <p>{listaUsuario.saldoMoeda}</p>
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
                                                        {<img onClick={() => { OpenModal(); listarComentarioBeneficio() }} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='beneficio_banner_g2' src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + beneficio.caminhoImagemDesconto} alt="imagem do desconto" />}
                                                    </div>

                                                    <div className="dados_beneficio_gp2">

                                                        <div className="title_estrelas_g2">
                                                            {<span className="title_beneficios_g2" onClick={() => { OpenModal(); listarComentarioBeneficio() }} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)}> {beneficio.nomeDesconto}</span>}

                                                            <div>
                                                                <ReactStars
                                                                    count={5}
                                                                    // onChange={ratingChanged}
                                                                    size={30}
                                                                    edit={false}
                                                                    value={beneficio.mediaAvaliacaoDesconto}
                                                                    activeColor="#C20004"
                                                                />
                                                            </div>
                                                        </div>



                                                        <div className="box_baixo_section_beneficio_g2">
                                                            {<div className='circulo_moeda_beneficio_g2'>
                                                                <img className='coin_beneficio_g2' src={coin} alt="coin" />  {beneficio.valorDesconto}
                                                            </div>}
                                                            <div>
                                                                {/* <img src={coracao} alt="favorito" />; */}
                                                                <Heart isActive={active} onClick={() => setActive(!active)} />
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
                                                        {<img onClick={() => { OpenModal(); listarComentarioBeneficio() }} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)} className='beneficio_banner_g2' src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + beneficio.caminhoImagemDesconto} alt="imagem do desconto" />}
                                                    </div>

                                                    <div className="dados_beneficio_gp2">

                                                        <div className="title_estrelas_g2">
                                                            {<span className="title_beneficios_g2" onClick={() => { OpenModal(); listarComentarioBeneficio() }} onClickCapture={() => setIdDescontoModal(beneficio.idDesconto)}> {beneficio.nomeDesconto}</span>}

                                                            <div>
                                                                <ReactStars
                                                                    count={5}
                                                                    // onChange={ratingChanged}
                                                                    size={30}
                                                                    edit={false}
                                                                    value={beneficio.mediaAvaliacaoDesconto}
                                                                    activeColor="#C20004"
                                                                />
                                                            </div>
                                                        </div>



                                                        <div className="box_baixo_section_beneficio_g2">
                                                            {<div className='circulo_moeda_beneficio_g2'>
                                                                <img className='coin_beneficio_g2' src={coin} alt="coin" />  {beneficio.valorDesconto}
                                                            </div>}
                                                            <div>
                                                                {/* <img src={coracao} alt="favorito" /> */}
                                                                <div>
                                                                    <Heart isActive={active} onClick={() => setActive(!active)} /> 
                                                                </div>
                                                            </div>
                                                            {/* <div> <button onClick={(b) => Excluir(beneficio.idDesconto)} >Excluir</button></div> */}
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