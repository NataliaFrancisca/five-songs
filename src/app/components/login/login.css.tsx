import { PAPER_THEME } from "@/styles/theme.css";
import styled from "styled-components";

export const LoginComponent = styled.main`
    padding: 0 30px;
    background-color: var(--black-color);
    height: 100vh; 
    display: flex;
    align-items: flex-end;

    h1{
        font-size: 64px;
        font-family: var(--font-spline-sans-mono);
        font-weight: 700;
        color: #FCFE06;
    }

    h2{
        font-size: 24px;
        font-weight: 400;
        color: var(--white-color);

        display: flex;
        align-items: center;
        gap: 6px;

        letter-spacing: 2px;
    }

    span#subtitle_styled{
        font-size: 54px;
        font-family: var(--font-spline-sans-mono);
        font-weight: 700;
        color: #FCFE06
    }

    button{
        background-color: #FFFFFF;
        border: none;
        border-radius: 4px;
        color: var(--black-color);
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        margin: 20px 0;
        padding: 20px 0;
        transition: all ease-in-out .2s;
        width: 100%;

        &:hover{
            background-color: #FCFE06;
            transition: all ease-in-out .6s;
        }
    }

    @media screen and (max-width: 600px){
        .box-login{
            width: 100%;
        }
    }
`

