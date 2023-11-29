import styled from "styled-components";

export const SongComponent = styled.article`
    display: grid;
    grid-template-columns: 30px auto;
    align-items: center;
    margin-left: 10px;
    gap: 20px;
    width: 100%;

    h1{
        font-size: 58px;
        font-family: var(--font-spline-sans-mono);
        font-weight: bold;
        color: #1A1B1C;
    }

    h2{
        display: flex;
        font-size: 18px;
        font-weight: 400;

        &.bold{
            font-weight: bold;
        }
    }

    h2.artist-name{
        /* width: 300px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
        background-color: red; */
    }

    @media screen and (max-width: 600px){
        h1{
            font-size: calc(56px + 6 * ((100vw - 320px) / 680));
        }

        h2{
            font-size: calc(16px + 6 * ((100vw - 320px) / 680));
        }
    }

    @media screen and (max-width: 400px){
        gap: 10px;
    }

    @media screen and (max-width: 360px){
        gap: 6px;
    }

`