import { IPaperStyle } from "@/ts/interface";
import styled from "styled-components";

export const CarouselComponent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;

    #carousel{
        display: flex;
        align-self: center;
        height: auto;
        gap: 10px;
        width: 40%;
        min-height: 80vh;
        height: auto;
        /* justify-content: space-between; */

        & button{
            margin: auto 0;
            z-index: 111;
        }
    }

    #list-songs-empty{
        align-self: center;
        display: flex;
        align-items: center;
        text-align: center;

        background-color: var(--black-color);
        padding: 30px 10px;
        height: min-content;
        width: 90%;
        margin: 10px auto;

        font-weight: 400;
        font-family: var(--font-spline-sans-mono);
        color: var(--white-color);
        z-index: 111;
    }

    #carousel-mark{
        display: flex;
        gap: 10px;
        align-self: center;
        
        span{
            height: 10px;
            width: 10px;
            background-color: #666666;
            border-radius: 50%;
        }

        span.current-page{
            background-color: #FFFFFF;
        }
    }

    @media screen and (max-width: 992px){
        #carousel{
            width: 60%;
        }
    }

    @media screen and (max-width: 600px){
        #carousel{
            width: 100%;
        }
    }
`

export const CarouselViewStyled = styled.section<{$paperTheme?: IPaperStyle}>`
    background-color: ${props => props.$paperTheme?.color};
    color: #1A1B1C;
    width: 100%;
    transition: all ease-in .2s;
    border-radius: 4px;
    position: relative;

    display: grid;
    grid-template-columns: 60px auto;
`