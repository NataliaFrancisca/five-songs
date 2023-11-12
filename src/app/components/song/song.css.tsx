import styled from "styled-components";

export const SongComponent = styled.article`
    display: grid;
    grid-template-columns: 30px auto;
    align-items: center;
    width: 100%;
    margin-left: 10px;
    gap: 20px;

    .group-artist-info{

        h2{
            font-size: 20px;
            font-family: var(--font-londrina);
            font-weight: 300;
        }


        h2.bold{
            font-weight: bold;
        }
    }

    @media screen and (max-width: 600px){
        .group-artist-info{
            h2{
                font-size: 18px;
            }
        }
    }

`