import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Assets/css/gp1style.css'
import Rodape from '../../components/Footer';
import Header from '../../components/Header/headerFuncionario';
import { Link } from 'react-router-dom'
import img_olho from '../../Assets/img/Olho_Atividades.png'

export default function CadastrarAtividades() {
    const [listaAtividades, setListaAtividades] = useState([]);
    // const [listaSetores, setListaSetores] = useState([]);
    const [idAtividade, setIdAtividade] = useState('');
    const [idSetor, setIdSetor] = useState('');
    const [nomeAtividade, setNomeAtividade] = useState('');
    // const [dataInicio, setDataInicio] = useState('');
    // const [dataConclusao, setDataConclusao] = useState('');
    // const [dataCriacao, setDataCriacao] = useState('');
    const [recompensaMoeda, setRecompensaMoeda] = useState('');
    const [recompensaTrofeu, setRecompensaTrofeu] = useState('');
    const [descricaoAtividade, setDescricaoAtividade] = useState('');
    const [necessarioValidadar, setNecessarioValidar] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function listarAtividades() {
        axios('http://localhost:5000/api/Atividades', {
            headers: {
                // 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaAtividades(resposta.data)
                }
            })

            .catch(erro => console.log(erro))
    };

    useEffect(listarAtividades, []);

    // function listarSetores() {
    //     axios('http://localhost:5000/api/Setores', {
    //         headers: {
    //             // 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
    //         }
    //     })
    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 setListaSetores(resposta.data)
    //             }
    //         })

    //         .catch(erro => console.log(erro))
    // };

    // useEffect(listarSetores, []);

    function cadastrarAtividade(evento) {
        setIsLoading(true);

        evento.preventDefault()

        axios
            .post('http://localhost:5000/api/Atividades', {
                idAtividade: idAtividade,
                idSetor: idSetor,
                nomeAtividade: nomeAtividade,
                recompensaMoeda: recompensaMoeda,
                recompensaTrofeu: recompensaTrofeu,
                descricaoAtividade: descricaoAtividade,
                necessarioValidadar: necessarioValidadar
            }, {
                headers: {
                    // 'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
            .then((resposta) => {
                if (resposta.status === 201) {
                    console.log('Atividade cadastrada');
                    setIdAtividade('');
                    setIdSetor('');
                    setNomeAtividade('');
                    setRecompensaMoeda('');
                    setRecompensaTrofeu('');
                    setRecompensaTrofeu('');
                    setDescricaoAtividade('');
                    setNecessarioValidar(false);
                    setIsLoading(false);
                    // setListaSetores([]);
                }
            })
            .catch(erro => console.log(erro), setIdAtividade(''), setIdSetor(''), setNomeAtividade(''), setInterval(() => {
                setIsLoading(false)
            }, 5000));
    }

    return (
        <div className="div_container">
            <Header />
            <div className="container_">
                <div className="container_cards">
                    <div className="container_cadastro">
                        <div className="container_navs">
                            <nav className="nav_links">
                                <Link to="/" className="links">Cadastrar Atividades</Link>
                                <Link to="/" className="links">Validar Atividades</Link>
                                <Link to="/" className="links">Marketplace</Link>
                                <Link to="/" className="links">Usuários</Link>
                                <Link to="/" className="links">Ranking</Link>
                            </nav>
                        </div>
                        <h1>Cadastrar Atividade</h1>
                        
                        <form onSubmit={cadastrarAtividade} className="form_cadastro">  
                            <label className="label_form">Título da Atividade</label>
                            <input placeholder="Digite o título da atividade"
                                className="input_text"
                                type="text"
                                name="nome"
                                value={nomeAtividade}
                                onChange={(campo) => setNomeAtividade(campo.target.value)}
                            />

                            <label className="label_form">Descrição da Atividade</label>
                            <input placeholder="Digite a descição da atividade"
                                className="input_text"
                                type="text"
                                name="descricao"
                                value={descricaoAtividade}
                                onChange={(campo) => setDescricaoAtividade(campo.target.value)}
                            />

                            <label className="label_form">Premiação em moedas</label>
                            <input placeholder="Insira a premiação pela atividade"
                                className="input_text"
                                type="text"
                                name="moedas"
                                value={recompensaMoeda}
                                onChange={(campo) => setRecompensaMoeda(campo.target.value)}
                            />

                            <label className="label_form">Premiação em troféus</label>
                            <input placeholder="Insira a premiação pela atividade"
                                className="input_text"
                                type="text"
                                name="trofeu"
                                value={recompensaTrofeu}
                                onChange={(campo) => setRecompensaTrofeu(campo.target.value)}
                            />
                            {/* <select placeholder="Selecione o setor da atividade"
                                className="input_select"
                                name="setor"
                                id="setor"
                                value={idSetor}
                                onChange={(campo) => setIdSetor(campo.target.value)}>

                                <option value="0" >Selecione o setor da atividade</option>

                                {listaSetores.map((setor) => {
                                    return (
                                        <option key={setor.idSetor} value={setor.idSetor}>
                                            {setor.nomeSetor}
                                        </option>
                                    )
                                })}
                            </select> */}
                            <label className="label_form">Precisa Validar</label>
                            <div className="container_btn">
                                <input type="checkbox"
                                    id="switch"
                                    name="validar"
                                    value={necessarioValidadar}
                                    onClick={() => setNecessarioValidar(true)}
                                /><label className='label_switch' htmlFor="switch">Toggle</label>
                            </div>
                            {isLoading && (
                                <button disabled className='btn_cadastrar' type='submit'>
                                    Carregando...
                                </button>
                            )}
                            {!isLoading && (
                                <button className='btn_cadastrar' type='submit'>
                                    Cadastrar
                                </button>
                            )}
                        </form>
                    </div>
                    <div>
                        <div className="container_card_atividades">
                            <h1>Todas Atividades</h1>
                            <div className='container_atividades'>

                                {listaAtividades.map((atividade) => {

                                        return (
                                            <div key={atividade.idAtividade}>
                                                <div className='box_atividade'>
                                                    <div className='organizar_atividade'>
                                                        <h2 className='titulo_atividade'>{atividade.nomeAtividade}</h2>
                                                        <p className='descricao_atividade'>{atividade.descricaoAtividade}</p>
                                                    </div>
                                                    <img className='img_olho' src={img_olho} alt="Icone de um olho"/>
                                                </div>
                                                <hr className='linha_atividade'/>
                                            </div>
                                        )
                                })}



                                <div className='box_atividade'>
                                    <div className='organizar_atividade'>
                                        <h2 className='titulo_atividade'>Titulo da Atividade</h2>
                                        <p className='descricao_atividade'>Descrição da Atividade ....</p>
                                    </div>
                                    <img className='img_olho' src={img_olho} alt="Icone de um olho" />
                                </div>
                                <hr className='linha_atividade' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    );
}