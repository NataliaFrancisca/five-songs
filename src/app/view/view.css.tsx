import { IViewTheme } from "@/ts/interface";
import styled from "styled-components";

export const ViewComponent = styled.main<{ $theme?: IViewTheme; }>`
    background-color: ${props => props.$theme?.paper_color};
    height: 100vh;
    height: auto;
    display: grid;
    position: relative;
    color: ${props => props.$theme?.text_color};
    grid-template-columns: 80px auto;
    transition: all ease-in-out .5s;

    #lines{
        display: grid;
        position: absolute;
        grid-template-rows: repeat(14, 60px);
        width: 100%;

        span{
            height: 100%;
            border-bottom: solid 2px ${props => props.$theme?.paper_line_color ? props.$theme.paper_line_color : 'rgba(26, 27, 28, 0.70)'}
        }

        span:last-child{
            border-bottom: none;
        }
    }

    #punched-paper-column{
        display: grid;
        grid-template-rows: repeat(14, 60px);
        border-right: 2px solid rgba(194, 45, 45, 0.57);

        & span{
            width: 24px;
            height: 24px;
            margin: 18px 30px 18px 30px;
            border-radius: 50%;
            background-color: ${props => props.$theme?.punched_color};
        }
    }
`