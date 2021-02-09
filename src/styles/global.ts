import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    font-family: Montserrat;
    font-weight: 400;
    background: no-repeat linear-gradient(#B4DCED, #BCD6F7, #B6BDE0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
      font-weight: 400;
      font-size: 80px;
    }

    p{
      font-weight: 400;
      font-size: 70px;
    }
  }
`;
