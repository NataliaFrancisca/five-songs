import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-spline-sans: 'Spline Sans', sans-serif;
        --font-spline-sans-mono: 'Spline Sans Mono', monospace;
        --black-color:  #16120F;
        --white-color: #FDF6EC;
    }

    body{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: 0;
    }

    body, h1, h2, h3, p, label, button, a, span{
        font-family: var(--font-spline-sans);
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
        transition: all ease-in-out .4s;
    }
`