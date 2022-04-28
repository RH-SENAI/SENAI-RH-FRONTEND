import HeaderFuncionario from "../../components/header/headerFuncionario"
import Footer from "../../components/footer"
import "../../assets/css/perfil.css"


export default function Perfil() {
    return (
        <div>

            <HeaderFuncionario />

            <div className="container container_perfil_g2">
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

                            <span>Nome do Usuário</span>
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