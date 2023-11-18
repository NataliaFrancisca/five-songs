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
            font-size: 18px;
            font-weight: 300;
            flex-wrap: wrap;
        }

        h2.bold{
            font-weight: bold;
        }

        h2.artist-name{
            display: flex;
            gap: 2px;

            span:not(:last-child):after{
                content: ",";
            }
        }
    }

    @media screen and (max-width: 600px){
        .group-artist-info{
            h2{
                font-size: 16px;
            }
        }
    }

    @media screen and (max-width: 400px){
        gap: 10px;
        
        h1{
            font-size: 52px;
        }

        .group-artist-info{
            h2{
                font-size: 14px;
            }
        }
    }

`