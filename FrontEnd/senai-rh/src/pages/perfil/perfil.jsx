import HeaderFuncionario from "../../components/header/headerFuncionario"
import Footer from "../../components/footer"
import "../../assets/css/perfil.css"
import { useEffect, useState } from "react"
import api from "../../services/api"


export default function Perfil() {
    const [listaUsuarios, setListaUsuario] = useState([])
    const [idUsuario, setIdUsuario]=useState(0)


    

    // function listarUsuario() {
    //     api('http://apirhsenaigp1.azurewebsites.net/api/Usuarios/BuscarUsuario', {
    //         headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
    //         },
    //     }
    //     )
    //         .then(resposta => {
    //             if (resposta.status === 200) {
    //                 // console.log('Lista')
    //                 console.log(resposta)
    //                 setListaUsuario(resposta.data)
    //                 // console.log('aqui' + resposta.data)
    //             }
    //         })
    //         .catch(erro => console.log(erro))
    // }
    // useEffect(listarUsuario, [])

    return (
        <div className="geral_g2">

            <HeaderFuncionario />

            <div className="container_meuPerfil container_perfil_g2">
                <div>
                    <h1>Perfil</h1>
                </div>

                <div className="box_perfil_g2">

                    <div>
                        <div>
                            <p className="p_perfil_g2">Foto Perfil</p>

                            <div className="foto_perfil_g2">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className="p_perfil_g2">Informações Gerais </p>
                        </div>

                        <div className="box_dados_perfil_g2">

                            <span></span>
                            <span>Email </span>
                            <span> CPF </span>
                            <span>Endereço</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}