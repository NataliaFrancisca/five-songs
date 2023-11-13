import styled from "styled-components";

export const SongsComponent = styled.section`
    display: grid;
    grid-template-rows: repeat(9, 68px);
    align-items: center;
    z-index: 11;
    width: 100%;

    aside{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1#user-title{
        font-size: 20px;
        font-family: var(--font-spline-sans-mono);
        font-weight: bold;
        color: #1A1B1C;
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

export const ImageElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-self: center;

    #album-cover-img{
        width: 174px;
        height: 172px;
    }

    .sticker-img:first-child{
        position: absolute;
        top: -10px;
    }

    .sticker-img:last-child{
        position: absolute;
        bottom: -10px;
    }
`