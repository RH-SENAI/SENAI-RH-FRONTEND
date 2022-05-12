import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import HeaderAdm from "../../components/header/headerAdm";
import api from "../../services/api";
import '../../assets/css/requisicaoFuncionario.css'

export default function RequisicaoFuncionario() {

    const[listaFuncionariosPendentes, setListaFuncionariosPendentes] = useState([])

    function listarFuncionariosPendentes() {
        api('/Registroscursos', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
            },
        }
        )
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('lista de funcionarios pendentes')
                    console.log(resposta)
                    setListaFuncionariosPendentes(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }
    useEffect(listarFuncionariosPendentes, [])


    return (
        <div className="geral_g2">

            <HeaderAdm />

            <div className='container'>
                <div className='title_caixa_requisicaoFuncionario_g2'>
                    <h1 className='h1_requisicaoFuncionario_g2'>Funcionários Pendentes</h1>
                </div>
            </div>

            <div className="container">
            <section className="container_table_g2" >
                        <table className="table_funcionariosPendentes_g2">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Cargo</th>
                                    <th>Site do curso</th>
                                    <th>Situação</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                   listaFuncionariosPendentes.map((fp) => {
                                        return (
                                            <tr key={fp.idRegistroCurso} >
                                                <td>{fp.idUsuarioNavigation.nome}</td>
                                                <td>{fp.idUsuarioNavigation.cpf}</td>
                                                <td>{fp.idUsuarioNavigation.idCargoNavigation.nomeCargo}</td>
                                                <td>{fp.idCursoNavigation.siteCurso}</td>
                                                <td>{fp.idSituacaoAtividadeNavigation.nomeSituacaoAtividade}</td>                                                
                                                <td>
                                                    <button className=''>Validar</button>
                                                    {/* <button className='acoes_btn btn' onClick={() => this.deletarConsulta(consulta)}>Excluir</button> */}
                                                </td>

                                            </tr>


                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
            </div>


            <Footer />
        </div>
    )
}