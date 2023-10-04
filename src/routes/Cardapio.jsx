import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import "./Cardapio.css"

export default function Cardapio(){
    return(
        <>
            <h1>Nosso Cardápio</h1>
            <Cabecalho/>
            <div className="espaco">
                <table>
                    <thead>
                        <tr>
                            <th>IMAGEM</th>
                            <th>LANCHE</th>
                            <th>INGREDIENTES</th>
                            <th>PREÇO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="/src/assets/img/x-salada.jpg" alt="x-salada" /></td>
                            <td>X-SALADA</td>
                            <td><ul><li>Hambúrgueres de fraldinha</li><li>Fatias de queijo prato</li><li>Pães para hambúrguer</li><li>Folhas de alface americana</li><li>Rodelas de tomate</li><li>Cebola roxa</li></ul></td>
                            <td>R$ 24,00</td>
                        </tr>
                        <tr>
                            <td><img src="/src/assets/img/beirute.jpg" alt="Beirute" /></td>
                            <td>BEIRUTE</td>
                            <td><ul><li>Pães sírios</li><li>Queijo prato</li><li>Alface picada</li><li>Alcatra em tiras</li><li>Rodelas de tomate</li></ul></td>
                            <td>R$ 30,00</td>
                        </tr>
                        <tr>
                            <td><img src="/src/assets/img/natural.jpg" alt="sanduba natural" /></td>
                            <td>SANDUICHE NATURAL</td>
                            <td><ul><li>Frango desfiado pré-cozido</li><li>Tomate picado</li><li>Lata de milho verde</li><li>Pão de forma</li><li>Maionese</li><li>Alface</li></ul></td>
                            <td>R$ 16,00</td>
                        </tr>
                        <tr>
                            <td><img src="/src/assets/img/bauru.webp" alt="Bauru" /></td>
                            <td>BAURU</td>
                            <td><ul><li>Pão francês</li><li> Fatia de prato</li><li>Fatia de estepe</li><li>Fatia de gouda</li><li>Fatia de suíço</li><li>Fatias de rosbife</li><li>Rodelas de tomate</li><li>Picles</li></ul></td>
                            <td>R$ 32,00</td>
                        </tr>
                        <tr>
                            <td><img src="/src/assets/img/misto.jpeg" alt="misto-quente" /></td>
                            <td>MISTO QUENTE</td>
                            <td><ul><li>Presunto</li><li>Pão de forma</li><li>Queijo prato</li><li>Margarina</li></ul></td>
                            <td>R$ 12,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>  
            <Rodape/>
        </>
    )
}