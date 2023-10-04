import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import "./Home.css"

export default function Principal(){

    return(
        <>
            <h1 className="titulo">Lanchonete do Sabor</h1>
            <h2>Venha se surpreender com o nosso sabor!</h2>
            <Cabecalho/>
            <div className="propaganda">
                <p>Venha experimentar o nosso famoso X - SALADA por: R$ 24,00</p>
                <img src="/src/assets/img/propaganda.jpg" alt="x-salada" />
            </div>
            <Rodape/>
        </>
    )
}