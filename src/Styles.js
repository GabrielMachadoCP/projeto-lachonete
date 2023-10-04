import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(76, 2, 2);
`;

export const Cabec = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  nav {
    padding: 20px 0;
    width: 100%; /* Ocupa toda a largura da tela */
  }

  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav ul li:hover {
    background-color: rgb(125, 32, 32);
  }

  nav ul li {
    padding: 10px;
    border-radius: 5px;
    background-color: grey;
    text-align: center;
    border: solid black 2px;
    margin-right: 10px; /* Espaçamento entre os itens */
  }

  a {
    color: white;
    text-decoration: none;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
  }

  /* Estilos para telas menores (exemplo: dispositivos móveis) */
  @media (max-width: 500px) {
    flex-direction: column; /* Coloca os itens em uma coluna */
    
    nav ul {
      flex-direction: column; /* Coloca os itens em uma coluna */
      align-items: center; /* Centraliza os itens verticalmente */
    }

    nav ul li {
      margin: 5px 0; /* Espaçamento entre os itens na vertical */
      margin-right: 0; /* Remove o espaçamento horizontal */
    }
  }
`;

export const Rod = styled.div`
    
    height: 9vh;
    background-color: gray;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
`