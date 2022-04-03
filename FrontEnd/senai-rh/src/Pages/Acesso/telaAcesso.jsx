import { Redirect, useHistory } from "react-router-dom";
import HeaderLogin from "../../Components/Header/HeaderLogin";
import Footer from "../../Components/Footer"
import "../../Assets/Css/acesso.css"
import imagemAcesso from "../../Assets/Img/telaDeAcessoLight.svg"

export default function Acesso() {

    let history = useHistory()
    function redirecionarLogin() {

        history.push('/Login')
    }

    return (
        <div>
            <HeaderLogin />
            <div className="container">
                <div className='containerOrganizacao'>
                    <div className='imgAcesso'>
                        <img className="imagemAcesso" src={imagemAcesso} alt="Imagem de acesso" />
                    </div>
                    <div className='conteudoAcesso'>
                        <div className="textoEBotao">
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
                                    <p className="primeiroTexto">Desenvolvido para facilitar o trabalho de todos na rede, o <br />SENAI RH tem o objetivo de deixar o ambiente de trabalho<br /> mais confortável de trabalhar!</p>
                                    <p className="segundoTexto">Acesse sua conta e veja todo seu Dashboard e o da sua equipe!</p>
                                </div>
                            </div>
                            <div className="botao">
                                <button type="submit" className='btnRedLogin' onClick={redirecionarLogin}>FAZER LOGIN</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <Footer/>
        </div>
    )
}