import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    }

    html{
    scroll-behavior: smooth;
    }

    body{
    font-family: 'Poppins', sans-serif;
    }

    a{
        text-decoration: none; 
    }

    button{
        border: none;
        outline: none;
        background: none;
    }
`;

export default GlobalStyles;