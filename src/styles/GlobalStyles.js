import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}


body,
input,
button {
  font-size: 1.6rem;
  line-height: 2rem;
}

body {
  background-color: #070417;
  color: #ffffff;
}

`;
