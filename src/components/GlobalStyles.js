import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --black:#0f0e0e;
  --burlywood:#f6c9a0;
  --grey:#866c55;
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, a{
  color:var(--black);
  font-family: Anton;
}

li{
  list-style: none;
}

a{
  mix-blend-mode:difference;
  text-transform:uppercase;
  outline:none;
  text-decoration:none;
  font-weight:800;
}

html{
  overflow:hidden;
}

body{
  background: var(--burlywood);
}
`

export default GlobalStyles;