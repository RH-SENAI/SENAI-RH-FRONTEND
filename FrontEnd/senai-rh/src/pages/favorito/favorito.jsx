import HeaderFuncionario from '../../components/header/headerFuncionario'
import "../../assets/css/favorito.css"
import Footer from '../../components/footer'

export default function MeusFavoritos() {

    // const [searchInput, setSearchInput] = useState([]);
    // const [filteredResults, setFilteredResults] = useState([]);

    // const searchItems = (searchValue) => {
    //     console.log(searchValue)
    //     setSearchInput(searchValue)
    //     if (searchInput !== '') {
    //         const filteredData = listaBeneficios.filter((item) => {
    //             return Object.values(item.nomeDesconto).join('').toLowerCase().includes(searchInput.toLowerCase())
    //         })
    //         setFilteredResults(filteredData)
    //     } else {
    //         setFilteredResults(listaBeneficios)
    //     }
    // }


    return (
        <div className="geral_g2">
            <HeaderFuncionario />


            <div className="container">
                <div className='title_caixa_meusFavoritos_g2'>
                    <h1 className='h1_meusFavoritos_g2'>Meus Favoritos</h1>
                    <div className='caixa_meusFavoritos_g2'>
                        <label ></label>
                        <input
                            type="search"
                            placeholder='Pesquisar'
                            // autoComplete='off'
                            list='curso'
                        // onChange={(e) => searchItems(e.target.value)}
                        />
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}