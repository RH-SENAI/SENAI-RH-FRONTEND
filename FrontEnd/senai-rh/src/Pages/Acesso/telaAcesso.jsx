import { Redirect, useHistory } from "react-router-dom";
import HeaderLogin from "../../components/HeaderLogin";
import Footer from "../../components/Footer"
import "../../Assets/Css/acesso.css"
import imagemAcesso from "../../Assets/img/telaDeAcessoLight.svg"

export default function Acesso() {

    let history = useHistory()
    function redirecionarLogin() {

        history.push('/Login')
    }

    return (
        <div>
            <HeaderLogin></HeaderLogin>
            <div className="container">
                <div className="todosOsTextos">
                    <div className="spans">
                        <span className="nonBold">
                            SENAI-SP
                        </span>
                        <span className="bold">
                            RECURSOS HUMANOS
                        </span>
                    </div>
                    <div>
                        <p className="primeiroTexto">Desenvolvido para facilitar o trabalho de todos na rede, o SENAI RH tem o objetivo de deixar o ambiente de trabalho mais confortável de trabalhar!</p>
                        <p className="segundoTexto">Acesse sua conta e veja todo seu Dashboard e o da sua equipe!</p>
                    </div>
                
            </div>
            <button type="submit" className='btnRedLogin' onClick={redirecionarLogin}>FAZER LOGIN</button>
            </div>
            <img className="imagemAcesso" src={imagemAcesso} alt="Imagem de acesso" />

            <Footer></Footer>
        </div>
    )
}