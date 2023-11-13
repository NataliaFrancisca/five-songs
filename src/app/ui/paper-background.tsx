import styled from "styled-components";

const PaperBackgroundComponent = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
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