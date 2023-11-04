import styled from "styled-components";

export const SongsComponent = styled.section`
    display: grid;
    grid-template-rows: repeat(14, 59px);
    margin-left: 10px;
    padding-right: 10px;
    align-items: center;
    z-index: 1;

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
        margin-right: 30px;
        cursor: pointer;
    }


    @media screen and (max-width: 600px){
    }
`