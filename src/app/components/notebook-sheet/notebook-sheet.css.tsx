import { IViewTheme } from "@/ts/interface";
import styled from "styled-components";

export const NotebookSheetComponent = styled.section<{$paperTheme?: IViewTheme}>`
    background-color: ${props => props.$paperTheme?.paper_color};
    color: ${props => props.$paperTheme?.text_color};
    width: 100%;
    transition: all ease-in .2s;
    position: relative;
    display: grid;
    grid-template-columns: 80px auto;
    border-radius: 4px;
    
    #paper-lines{
        display: grid;
        position: absolute;
        grid-template-rows: repeat(10, 68px);
        width: 100%;

        span{
            height: 100%;
            border-bottom: solid 2px ${props => props.$paperTheme?.paper_line_color ? props.$paperTheme.paper_line_color : 'rgba(26, 27, 28, 0.70)'}
        }

        span:last-child{
            border-bottom: none;
        }
    }

    #punched-paper-column{
        display: grid;
        grid-template-rows: repeat(10, 68px);
        border-right: 2px solid rgba(194, 45, 45, 0.57);
        align-items: center;
        justify-content: center;

        & span{
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: ${props => props.$paperTheme?.punched_color};
        }
    }

    @media screen and (max-width: 376px){
        grid-template-columns: 60px auto;
    }
`
