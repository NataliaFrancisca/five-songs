import styled from "styled-components";

export const ViewComponent = styled.main`
    min-height: 100vh;
    height: auto;
    background-color: var(--black-color);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    justify-content: center;

    #btn-download{
        background-color: transparent;
        width: min-content;
        border: none;

        display: flex;
        align-self: flex-end;
    }

    #carousel{
        display: flex;
        align-self: center;
        height: auto;
        width: 100%;
        gap: 10px;

        button{
            background-color: transparent;
            cursor: pointer;
            border: none;
            height: min-content;
            margin: auto;
        }

        button svg{
            fill: #FFFFFF;
        }

        button:disabled svg{
            fill: #666666;
            /* background-color: #666666; */
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