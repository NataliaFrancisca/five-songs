import styled from "styled-components";

export const SongComponent = styled.article`
    display: grid;
    grid-template-columns: 30px auto;
    align-items: center;
    width: 100%;
    margin-left: 10px;
    gap: 20px;

    h1{
        font-size: 58px;
        font-family: var(--font-spline-sans-mono);
        font-weight: bold;
        color: #1A1B1C;
    }

    .group-artist-info{
        h2{
            font-size: 14px;
            font-weight: 300;
        }


        h2.bold{
            font-weight: bold;
        }
    }

    @media screen and (max-width: 600px){
        .group-artist-info{
            h2{
                font-size: 16px;
            }
        }
    }

`