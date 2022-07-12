import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Inter var', sans-serif;
  color: #101015;
}

.overlay {
  padding: 40px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}

a {
  pointer-events: all;
  position: absolute;
  top: 40px;
  left: 40px;
  color: #101015;
  text-decoration: none;
}

a.right {
  left: unset;
  right: 40px;
}

h1 {
  text-transform: uppercase;
  text-align: center;
  font-size: 5em;
  letter-spacing: -3px;
  font-weight: 500;
  padding: 0;
  margin: 0;
  line-height: 0.9em;
}

h1 > span {
  font-weight: 200;
}

h2 {
  margin-top: 1em;
  text-align: center;
  font-weight: 400;
  font-size: 0.9em;
  line-height: 1.4em;
  letter-spacing: 2px;
}

`;

export default GlobalStyles;