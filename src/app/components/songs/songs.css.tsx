import { handleStickerColor } from "@/styles/theme.css";
import styled from "styled-components";

export const SongsComponent = styled.section`
    display: grid;
    grid-template-rows: repeat(10, 68px);
    margin-left: 10px;
    padding-right: 20px;
    align-items: center;
    z-index: 11;
    width: 100%;

    aside{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1{
        font-family: var(--font-londrina);
        text-transform: uppercase;
        font-weight: 300;
        font-size: 34px;
        text-align: center;
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


export const ImageElement = styled.div<{$url: string, $stickerColor: string}>`
    width: 165px;
    height: 148px;
    object-fit: cover;
    box-shadow: 2px 1px 1px 0px rgba(0, 0, 0, 0.25);
    justify-self: center;
    display: flex;
    background-image: url(${props => props.$url});
    position: relative;

    &::before, &::after{
        content: "";
        background-image: ${props => handleStickerColor(props.$stickerColor)};
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
 
        width: 63px;
        flex-shrink: 0;
        position: relative;
    }

    &::before{
        top: -18px;
        left: -18px;
        transform: rotate(-5.613deg);
    }

    &::after{
        top: 128px;
        left: 70px;
        transform: rotate(-1.613deg);
    }

    @media screen and (max-width: 376px){
        width: 145px;

        &::after{
            top: 128px;
            left: 40px;
            transform: rotate(-1.613deg);
        }
    }
`