import styled from "styled-components";

export const ViewComponent = styled.main`
    background-color: var(--white-color);
    min-height: 100vh;
    height: auto;
    display: grid;
    position: relative;

    grid-template-columns: 83px auto;

    #lines{
        display: grid;
        position: absolute;
        grid-template-rows: repeat(14, 59px);
        width: 100%;

        .line{
            height: 100%;
            border-bottom: solid 2px rgba(26, 27, 28, 0.70);
        }

        .line:last-child{
            border-bottom: none;
        }
    }

    .column{
        display: grid;
        grid-template-rows: repeat(14, 59px);
    }


    #column-1{
        border-right: 2px solid rgba(194, 45, 45, 0.57);
    }

    #column-2{
        margin-left: 10px;
        align-items: center;
    }


/* 
    display: grid;
    grid-template-columns: 83px auto;

    .row-1{
        border-bottom: solid 2px rgba(26, 27, 28, 0.70);
    }

    #column-2{
        display: grid;
        grid-template-rows: repeat(14, 59px);
    } 

    #column-1{
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-rows: repeat(14, 59px);
    } */

`