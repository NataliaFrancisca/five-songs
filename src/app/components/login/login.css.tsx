import styled from "styled-components";

export const LoginComponent = styled.main`
    padding: 0 30px;
    background-color: var(--black-color);
    height: 100vh; 
    display: flex;

    .box-login{
        width: 40%;
        align-self: center;
        margin: 0 auto;
    }

    h1{
        font-size: 64px;
        font-family: var(--font-spline-sans-mono);
        font-weight: 700;
        color: #FCFE06;
        letter-spacing: 1px;
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

    @media screen and (max-width: 992px){
        .box-login{
            width: 60%;
        }
    }

    @media screen and (max-width: 576px){
        padding: 0 20px;

        .box-login{
            width: 100%;
            align-self: flex-end;
        }

        #logo-image{
            width: 200px;
            height: 200px;
        }

        h1{
            font-size: 54px;
        }

        h2{
            font-size: 18px;
        }

        span#subtitle_styled{
            font-size: 44px;
        }
    }
`

