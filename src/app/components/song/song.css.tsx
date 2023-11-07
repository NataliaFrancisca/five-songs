import styled from "styled-components";

export const SongComponent = styled.article`
    display: flex;
    align-items: center;
    width: 100%;

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

    .album-cover-img{
        display: flex;
        width: 80px;
        height: 100%;
        margin-left: 28px;
        position: absolute;
        right: 0px;
        object-fit: cover;
        border-radius: 4px;
        box-shadow: 2px 1px 6px -3px rgba(10,10,10,.8);
    }


    @media screen and (max-width: 600px){
        .group-artist-info{
            h2{
                font-size: 18px;
            }
        }
    }

`