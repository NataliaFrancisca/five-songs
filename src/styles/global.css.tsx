import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-jetbrains: 'JetBrains Mono', monospace;

        --primary-color: #C6F277;
        --secondary-color: #9974F8;
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
        font-family: var(--font-jetbrains);
        margin: 0;
        padding: 0;
    }
`