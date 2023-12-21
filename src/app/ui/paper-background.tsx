import styled from "styled-components";

const PaperBackgroundComponent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 60px auto;

    #paper-lines{
        display: grid;
        position: absolute;
        grid-template-rows: repeat(9, 70px);
        width: 100%;

        span{
            height: 100%;
            border-bottom: solid 2px rgba(26, 27, 28, 0.70);
        }

        span:last-child{
            border-bottom: none;
        }
    }

    #punched-paper-column{
        display: grid;
        grid-template-rows: repeat(9, 70px);
        border-right: 2px solid rgba(194, 45, 45, 0.57);
        align-items: center;
        justify-content: center;

        & span{
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #1A1B1C;
        }
    }
`

const PaperBackground = () => {
    return(
        <PaperBackgroundComponent>
            <div id="punched-paper-column">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            <div id="paper-lines">              
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
        </PaperBackgroundComponent>
    )
}

export default PaperBackground;