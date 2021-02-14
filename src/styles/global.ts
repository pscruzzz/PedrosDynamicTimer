import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: Montserrat;
    font-weight: 400;
    background: no-repeat linear-gradient(#B4DCED, #BCD6F7, #B6BDE0);

    h2{
      font-weight: 400;
      font-size: 5rem;
    }

    p{
      font-weight: 400;
      font-size: 4rem;
    }
  }
`;
