import styled from "styled-components";

export const SwitchThemeComponent = styled.div<{ $lighter: boolean}>`
    display: flex;
    gap: 10px;
    background-color: ${props => props.$lighter == true  ? 'rgba(255, 255, 255, 0.384)' : 'rgba(10, 10, 10, 0.384)'};
    padding: 10px;
    border-radius: 4px;
    transition: all ease-in-out .2s;

    button{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: transparent;
        display: flex;
    }

    
`