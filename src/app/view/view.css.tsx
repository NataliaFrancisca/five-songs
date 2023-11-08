import styled from "styled-components";

export const ViewComponent = styled.main`
    min-height: 100vh;
    height: auto;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    justify-content: center;

    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        height: min-content;

        :hover{
            filter: brightness(80%);
        }
    }

    #btn-download{
        display: flex;
        align-self: flex-end;
    }

    #carousel{
        display: flex;
        align-self: center;
        height: auto;
        gap: 10px;
        width: 100%;

        & button{
            margin: auto 0;
        }
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
`