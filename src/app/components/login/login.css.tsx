import styled from "styled-components";

export const LoginComponent = styled.main`
    padding: 0 30px;
    background-color: var(--black-color);
    height: 100vh; 
    display: flex;
    align-items: flex-end;

    .box-login{
        width: 30%;
        margin-bottom: 70px;
        align-items: flex-end;
    }

    .message-login{
        align-items: center;
        color: var(--white-color);
        display: flex;
        font-size: 24px;
        gap: 17px;

        & img{
            height: 56px;
            width: 34px;
        }
    }

    img{
        width: 180px;
    }

    button{
        background-color: #FFFFFF;
        border: none;
        border-radius: 20px;
        color: var(--black-color);
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        margin-top: 30px;
        padding: 24px 0;
        transition: all ease-in-out .2s;
        width: 100%;

        &:hover{
            background-color: var(--primary-color);
            transition: all ease-in-out .6s;
        }
    }

    @media screen and (max-width: 600px){
        .box-login{
            width: 100%;
        }
    }
`