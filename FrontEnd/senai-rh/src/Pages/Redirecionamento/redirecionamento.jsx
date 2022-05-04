import logout from '../../Assets/img/logout.png'
import logo from "../../Assets/img/logo1.svg"
import Footer from "../../components/Footer.jsx";

export default function Redirect() {


    return (
        <div className="G1_Redirect_Body">
            <header>
                <img src={logo} alt="ícone de logout" />
                <img src={logout} alt="ícone de logout" />
            </header>

            <main>
                <div className="G1_box_titulo">
                    <h1 className="G1_titulo_redirecionamento">Qual seu </h1>
                    <h2 className="G1_titulo2_redirecionamento">Interesse </h2>
                </div>

                <div className="G1_box_Acompanhar">
                    <span> Acompanhamento </span>
                    <p> Desenvolvido para facilitar o trabalho de todos na rede, o SENAI RH tem o objetivo de deixar o ambiente de trabalho mais confortável de trabalhar!</p>
                    <button className='G1_btn_Cadastrar' type="submit"> Entrar </button>
                </div>

                <div className="G1_box_Motivar">
                    <span> Motivações </span>
                    <p> Desenvolvido para facilitar o trabalho de todos na rede, o SENAI RH tem o objetivo de deixar o ambiente de trabalho mais confortável de trabalhar!</p>
                    <button className='G1_btn_Cadastrar' type="submit"> Entrar </button>
                </div>

                <div className="G1_box_Vantagens">
                    <span> Minhas Vantagens  </span>
                    <p> Desenvolvido para facilitar o trabalho de todos na rede, o SENAI RH tem o objetivo de deixar o ambiente de trabalho mais confortável de trabalhar!</p>
                    <button className='G1_btn_Cadastrar' type="submit"> Entrar </button>
                </div>

            </main>

            <Footer></Footer>
        </div>
    )
}