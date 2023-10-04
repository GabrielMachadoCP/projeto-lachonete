import { Link } from "react-router-dom";
import { Cabec, Container } from "../Styles"
export default function Cabecalho() {

  return (
    <>
      <Container>
        <Cabec>
          <nav>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/cardapio">CARDÁPIO</Link></li>
            </ul>
          </nav>
        </Cabec>
      </Container>
    </>
  )
}