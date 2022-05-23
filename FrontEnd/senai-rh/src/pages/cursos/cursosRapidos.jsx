import HeaderFuncionario from '../../components/header/headerFuncionario'
import curso from '../../assets/img/cursosRapidos.svg'
import Footer from '../../components/footer'
import '../../assets/css/cursosRapidos.css'
import coracao from '../../assets/img/coracao.svg'
import relogio from '../../assets/img/relogio.svg'
import local from '../../assets/img/local.svg'
import coin from '../../assets/img/coin 1.png'
import estrelaSozinha from '../../assets/img/estrelaSozinha.svg'
import React, { useEffect, useMemo, useState } from 'react';
import { ModallCurso } from '../../components/modalListaCursos/modalListaCursos'
import api from '../../services/api'
import apiMaps from '../../services/apiMaps'
import axios from 'axios'
import { parseJwt } from "../../services/auth";
import ReactStars from "react-rating-stars-component";
import Heart from "react-heart"



export default function CursosRapidos() {
    const [listaUsuario, setListaUsuario] = useState([]);
    const [listaComentarioCurso, setListaComentarioCurso] = useState([])
    const [listaCursos, setListaCursos] = useState([]);
    const [initialRepos, seInitialRepos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [switchAtive, setSwitchAtive] = useState(false);
    const [idCursoModal, setIdCursoModal] = useState()
    const [modalIsOpen, setIsOpen] = React.useState(false);
    // const [UserLongitude, setLongitude] = useState(null)
    // const [UserLatitude, setLatitude] = useState(null)
    const [userDistance, setUserDistance] = useState('');
    let subtitle;
    const delay = require('delay');

    // function geolocation() {

    // }

    // useEffect(geolocation, []);

    // function listarComentarioCurso() {
    //     console.log(idCursoModal)
    //     api('/ComentarioCursos/Comentario/' + idCursoModal)
    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 console.log('Lista comentario')
    //                 console.log(resposta)
    //                 setListaComentarioCurso(resposta.data)
    //             }
    //         })
    //         .catch(erro => console.log(erro))
    // }

    // useEffect(listarComentarioCurso, []);

    const apiMap = axios.create({
        baseURL: 'https://maps.googleapis.com/maps/api/distancematrix'
    });

    function closeModal() {
        setIsOpen(false);
    }

    const time = async () => {
        await delay(3000);
    }

    const OpenModal = () => {
        setShowModal(prev => !prev);
    }

    function listarCursos() {
        var longitude;
        var latitude
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude é :", position.coords.latitude);
            console.log("Longitude é :", position.coords.longitude);
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
        });
        time();
        var distanceBase = 150000;
        if (userDistance != 0) {
            distanceBase = userDistance * 1000
        }
        api('/Cursos')
            .then(resposta => {
                if (resposta.status === 200) {
                    const dadosCurso = resposta.data;
                    console.log(dadosCurso)
                    var tamanhoJson = Object.keys(dadosCurso).length;
                    console.log(tamanhoJson);

                    var i = 0

                    do {
                        let stringLocalCurso = JSON.stringify(dadosCurso);
                        let objLocalCurso = JSON.parse(stringLocalCurso);
                        // console.log(objLocalCurso);
                        var localCurso = objLocalCurso[i]['idEmpresaNavigation']['idLocalizacaoNavigation']['idCepNavigation'].cep1

                        // ----> Localização 

                        var stringProblematica = `/json?origins=${longitude}, ${latitude}&destinations=${localCurso}&units=km&key=AIzaSyB7gPGvYozarJEWUaqmqLiV5rRYU37_TT0`
                        console.log(stringProblematica)
                        console.log('localCurso')
                        console.log(localCurso)

                        const respostaLocal = apiMaps(stringProblematica, {
                            headers: {
                                "Access-Control-Allow-Credentials": 'true',
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Headers": "Authorization",
                                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                        });
                        let string = JSON.stringify(respostaLocal.data);
                        let obj = JSON.parse(string);
                        // console.log(obj)

                        let distance = obj['rows'][0]['elements'][0]['distance'].value
                        // console.log(distance)
                        if (respostaLocal.status == 200) {
                            // console.log('Localização encontrada!');
                            if (distance <= distanceBase) {
                                console.log(distance);
                                //this.setState({ localizacaoCurso: dadosLocalizacao })
                                // console.log(distance);
                                // console.log('Localização está no alcance');
                                // console.log(this.state.listaCurso);

                                let stringCurso = JSON.stringify(dadosCurso);
                                var objCurso = JSON.parse(stringCurso);
                                //var lugarCurso = objCurso[u]['idEmpresaNavigation']['idLocalizacaoNavigation']['idCepNavigation'].cep1

                                var curso = objCurso[i]
                                // console.log(curso)
                                listaCursos.push(curso);

                            }
                            else if (distance > distanceBase) {
                                console.log('distance');
                                console.log(distance);
                                console.log('Localização fora do alcance');
                            }
                        }
                        // console.log('Curso encontrado');

                        i++
                    } while (i < tamanhoJson);

                    if (listaCursos == '') {
                        setSwitchAtive(true)
                    }
                    else {
                        setSwitchAtive(false)
                    }

                    // this.setState({ contadorCurso: i })
                    // console.log(this.state.contadorCurso)
                    // console.log('Lista')
                    // console.log(resposta)
                    // setListaCursos(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    useEffect(listarCursos, []);

    function requisicaoCurso(event) {
        event.preventDefault();

        let requisicao = {
            idUsuario: parseJwt().jti,
            idCurso: curso.idCurso,
        }
        // console.log('Requisição de curso feita!')
        console.log('curso.idCurso!')
        console.log(curso.idCurso)

        api.post('/ComentarioCursos', requisicao, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }

        )
            .then(function (response) {
                console.log(response);
                setListaComentarioCurso(response.data)
            })
            .catch(erro => console.log(erro))
    }


    function Excluir(idCurso) {

        api.delete('/Cursos/Deletar/' + idCurso)

            .then(resposta => {
                if (resposta.status === 204) {
                    console.log('Curso Excluido')
                    listarCursos()

                }
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    const [searchInput, setSearchInput] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = listaCursos.filter((item) => {
                return Object.values(item.nomeCurso).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(listaCursos)
        }
    }

    function listarUsuario() {
        axios('https://apigrupo3.azurewebsites.net/api/Usuarios/Listar/' + parseJwt().jti, {
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
                    console.log(resposta.data)
                    // setNome(resposta.data.nome)
                    // console.log('aqui' + resposta.data)

                }
            })
            .catch(erro => console.log(erro))
    }
    useEffect(listarUsuario, [])

    // function limitaTotal (evt) {
    //     var input = evt.target;
    //     var value = input.value;

    //     if (value.length <= 3) {
    //         return;
    //     }

    //     input.value = input.value.substr(0, 3); 
    // }


    //Favoritos
    const [active, setActive] = useState(false)
    const [favorito, setFavorito] = useState([]);
    // favorito = () => {
    //     setFavorito(curso.idCurso)
    // }


    function favoritarCurso(curso) {

        api.post('/FavoritosCursos', {
            idCurso: curso.idCurso,
            idUsuario: parseJwt().jti,
        })
        console.log("Id Curso modal aqui")
        console.log(curso.idCurso)
            .then(resposta => {
                if (resposta.status === 200) {
                    // console.log('Lista de favoritos descontos')
                    console.log(resposta)
                    setFavorito(resposta.data)
                    setActive(!active)
                }
            })
            .catch(erro => console.log(erro))
    }

    return (
        <div className="geral_g2">

            <ModallCurso comentarios={listaComentarioCurso} curso={listaCursos.find(curso => curso.idCurso == idCursoModal)} showModal={showModal} setShowModal={setShowModal} />
            <HeaderFuncionario />


            <div className='container'>
                <div className='title_caixa_curso_g2'>
                    <h1 className='h1_curso_g2'>Cursos</h1>
                    <div className='caixa_curso_g2'>
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

                    <input
                        id='5'
                        type="number"
                        placeholder='150 km'
                        value={userDistance}
                        name="distancia"
                        onChange={(evt) => setUserDistance(evt.target.value)}
                    />
                </div>

                <section className='container_curso_g2'>

                    <div className='wrap_curso_g2'>
                        <ul className='container_wrap_curso_g2'>
                            {
                                searchInput.length > 0 ?

                                    filteredResults.map((curso) => {
                                        return (
                                            <div className='espacamento_curso_g2'>
                                                <section alt={curso.idCurso} key={curso.idCurso} id='imagem' className='box_curso_g2'>
                                                    <div className='banner_img_curso_g2'>
                                                        {/* {<img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='curso_banner_g2' src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + curso.caminhoImagemCurso} alt="imagem do curso" />} */}
                                                    </div>

                                                    <div className='dados_curso_gp2'>

                                                        {/* {<span onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)}> {curso.nomeCurso}</span>} */}
                                                        {/* <div className='estrelas_g2'>
                                                            <ReactStars
                                                                count={5}
                                                                size={20}
                                                                edit={false}
                                                                value={curso.mediaAvaliacaoCurso}
                                                                activeColor="#C20004"
                                                            />
                                                        </div> */}

                                                        {/* {<p><img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>} */}
                                                        {/* {<p><img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}   </p>} */}
                                                        <div className="box_baixo_section_curso_g2">

                                                            {<div className='circulo_moeda_curso_g2'>
                                                                <img className='coin_curso_g2' src={coin} alt="favorito" /> {curso.valorCurso}
                                                            </div>}
                                                            <div className="media_beneficio_g2">
                                                                <img src={coracao} alt="favoritar" />
                                                            </div>
                                                            {/* <div> <button onClick={ () => Excluir(curso.idCurso)} >Excluir</button></div> */}
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        )
                                    })
                                    :
                                    listaCursos.map((curso) => {
                                        return (
                                            <div className='espacamento_curso_g2'>
                                                <section alt={curso.idCurso} key={curso.idCurso} id='imagem' className='box_curso_g2'>
                                                    <div className='banner_img_curso_g2'>
                                                        {/* {<img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='curso_banner_g2' src={'https://armazenamentogrupo3.blob.core.windows.net/armazenamento-simples-grp2/' + curso.caminhoImagemCurso} alt="imagem do curso" />} */}
                                                    </div>

                                                    <div className='dados_curso_gp2'>

                                                        {/* {<span onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)}> {curso.nomeCurso}</span>} */}
                                                        {/* <div className='estrelas_cursos_g2'>
                                                            <ReactStars
                                                                count={5}
                                                                size={20}
                                                                edit={false}
                                                                value={curso.mediaAvaliacaoCurso}
                                                                activeColor="#C20004"
                                                            />
                                                        </div> */}
                                                        <div>
                                                            {/* {<p><img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>} */}
                                                            {/* {<p><img onClick={() => { OpenModal(); listarComentarioCurso() }} onClickCapture={() => setIdCursoModal(curso.idCurso)} className='box_dados_curso_g2' src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}   </p>} */}
                                                        </div>
                                                        <div className="box_baixo_section_curso_g2">

                                                            {<div className='circulo_moeda_curso_g2'>
                                                                <img className='coin_curso_g2' src={coin} alt="favorito" /> {curso.valorCurso}
                                                            </div>}
                                                            <div className="media_beneficio_g2">
                                                                <img src={coracao} alt="favoritar" />

                                                                <Heart
                                                                    isActive={active}
                                                                    onClick={() => { favorito(!active); favoritarCurso(curso) }}
                                                                    animationTrigger="both"
                                                                    inactiveColor="#C20004"
                                                                    activeColor="#C20004"
                                                                    className='favorito_g2'
                                                                    animationDuration={0.1}
                                                                    size={30}
                                                                />
                                                            </div>
                                                            {/* <div> <button onClick={ () => Excluir(curso.idCurso)} >Excluir</button></div> */}
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        )
                                    })
                            }
                        </ul>
                    </div>
                </section >
            </div>
            <Footer />
        </div >
    )
} 