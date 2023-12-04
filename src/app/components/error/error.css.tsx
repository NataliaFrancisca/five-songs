import styled from "styled-components";

export const ErrorMessageStyle = styled.div`
    background-color: var(--white-color);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    padding: 20px 10px;
    margin: 0 auto;

    #message-error{
        display: flex;
        flex-direction: column;
        width: 100%;
        border-left: 10px solid #FF0C38;
        padding-left: 10px;
    }

    h1{
        font-size: 18px;
        font-weight: 400;
        display: flex;
    }

    button{
        width: 60%;
        padding: 16px 10px;
        margin: 0 auto;
        background-color: #FF0C38;
        border-radius: 4px;
        font-weight: bold;
        color: var(--white-color);
        font-size: 14px;
        border: none;

        &:hover{
            background-color: #a70926;
        }
    }
`