import HeaderAdm from "../../components/Header/headerAdm";
import cadastroCurso from '../../Assets/img/cadastroCurso.svg'
import '../../Assets/Css/cadastroCursos.css'

export default function CadastrarCursos() {
    return (
        <div>
            <HeaderAdm />

            <div className="container_cadastroCursos">
                <p>Senai-Sp</p>
                <h1>Cadastro de Cursos</h1>
            </div>
            <div className="container_forms_cursos">
            <div className="box_img_cadastroCurso">
                <img src={cadastroCurso} alt="" />
            </div>
                <form className="box_forms_cursos" action="">
                    <div  className="inputCadastro_cursos">

                    <label>Cursos</label>
                    <input type="text" placeholder="Digite o nome do curso" className="inputCadastro_cursos" />
                    <label>Data de finalizar</label>
                    <input type="date" />
                    <label>Descrição</label>
                    <input type="text"  />
                    <label>Imagem</label>
                    <input type="file"  />
                    <label>Modelo</label>
                    <input type="radio" name="Presencial"  /> <br />
                    <label></label>
                    <input type="radio" name="EAD" /> <br />
                    <label>Site do Curso</label>
                    <input type="text"  />
                    </div>
                </form>
            </div>
        </div>
    )
}