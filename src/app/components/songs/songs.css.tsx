import styled from "styled-components";

export const SongsComponent = styled.section`
    display: grid;
    grid-template-rows: repeat(14, 1fr);
    margin-left: 10px;
    padding-right: 20px;
    align-items: center;
    z-index: 1;

    aside{
        display: flex;
        justify-content: space-between;
    }

    h1{
        font-family: var(--font-londrina);
        text-transform: uppercase;
        font-weight: 300;
        font-size: 34px;
    }

    button{
        background-color: transparent;
        width: auto;
        border: none;
        display: flex;
        justify-self: flex-end;
        cursor: pointer;
    }


    @media screen and (max-width: 600px){
    }
`