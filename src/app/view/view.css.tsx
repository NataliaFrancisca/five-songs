import { IPaperStyle } from "@/ts/interface";
import styled from "styled-components";

export const ViewComponentStyled = styled.main`
    min-height: 100vh;
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
    justify-content: center;
    position: relative;
    
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

export const NotebookSheetBG = styled.section<{$paperTheme?: IPaperStyle}>`
    background-color: ${props => props.$paperTheme?.color};
    color: #1A1B1C;
    width: 100%;
    transition: all ease-in .2s;
    position: relative;
    display: grid;
    grid-template-columns: 60px auto;
    border-radius: 4px;
    
    #paper-lines{
        display: grid;
        position: absolute;
        grid-template-rows: repeat(9, 70px);
        width: 100%;

        span{
            height: 100%;
            border-bottom: solid 2px rgba(26, 27, 28, 0.70);
        }

        span:last-child{
            border-bottom: none;
        }
    }

    #punched-paper-column{
        display: grid;
        grid-template-rows: repeat(9, 70px);
        border-right: 2px solid rgba(194, 45, 45, 0.57);
        align-items: center;
        justify-content: center;

        & span{
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #1A1B1C;
        }
    }
`
