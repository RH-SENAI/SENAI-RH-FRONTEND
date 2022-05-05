import logout from '../../Assets/img/logout.png'
import logo from "../../Assets/img/logo1.svg"
import Footer from "../../components/Footer.jsx";
import laptop from '../../Assets/img/Laptop.png'
import pig from '../../Assets/img/Pig.png'
import tag from '../../Assets/img/tag.png'
import "../../Pages/Redirecionamento/redirecionamento.css"
import { Link } from 'react-router-dom';

export default function Redirect() {


    return (
        <div className="G1_Redirect_Body">
            <header className='G1_Redirect_Header header_redirect'>
                <div className='G1_Redirect_containerHeader'>   

                    <img src={logo} className="G1_Redirect_Logo" alt="Logo Sesi Senai" />
                    <img src={logout} alt="ícone de logout" />
                </div>
            </header>

            <main>
                <div className="G1_box_titulo">
                    <h1 className="G1_titulo_redirecionamento">Qual seu </h1>
                    <h2 className="G1_titulo2_redirecionamento">Interesse </h2>
                </div>

                <div className='G1_containerContentMain'>

                    <div className='G1_containerRedirects'>
                        <article className="G1_box_Article">
                            <img src={laptop} alt="Icone de laptop" />
                            <div className='G1_ArticleText'>
                                <h3> Acompanhamento </h3>
                                <p>Acesse aqui para acompanhar seus funcionários, vizualizando seus respectivos níveis de satifação e muito mais!</p>
                                <Link to='/'><button className='G1_btn_Cadastrar' type="button"> Entrar </button></Link>
                            </div>
                        </article>
                        <article className="G1_box_Article">
                        <img src={pig} alt="Icone de cofre em formato de porco" />
                            <div className='G1_ArticleText'>
                                <h3> Motivações </h3>
                                <p> Acesse aqui para vizualizar as atividades do sistema e gerenciar seus pontos!</p>
                                <Link to='/TodasAtividades'><button className='G1_btn_Cadastrar' type="button"> Entrar </button></Link>
                            </div>
                        </article>
                        <article className="G1_box_Article">
                            <img src={tag} alt="Icone de etiqueta de desconto" />
                            <div className='G1_ArticleText'>
                                <h3> Minhas Vantagens </h3>
                                <p> Acesse aqui para vizualizar suas vantagens disponíveis e garantir seus descotnos e vantagens!</p>
                                <Link to='/'><button className='G1_btn_Cadastrar' type="button"> Entrar </button></Link>
                            </div>
                        </article>
                    </div>
                </div>

            </main>

            <Footer></Footer>
        </div>
    )
}