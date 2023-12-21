import styled from "styled-components";

export const ViewComponentStyled = styled.main`
    min-height: 100vh;
    height: auto;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    position: relative;
    padding: 16px 0;
    
    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        height: min-content;

        :hover{
            filter: brightness(80%);
        }
    }
`