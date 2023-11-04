import styled from "styled-components";

export const SongComponent = styled.article`
    display: flex;
    align-items: center;
   
    .group-artist-info{
        margin-left: 20px;

        h2{
            font-size: 20px;
            font-family: var(--font-londrina);
            font-weight: 300;
        }


        h2.bold{
            font-weight: bold;
        }
    }

    img{
        fill: red;
    }


    @media screen and (max-width: 600px){
        .group-artist-info{
            h2{
                font-size: 16px;
            }
        }
    }

`