import styled from "styled-components";

const CircleComponent = styled.div`
    width: 20px;
    height: 20px;
    margin: 18px 30px 18px 30px;
    border-radius: 50%;
    background-color: var(--black-color);
`

const Circle = () => {

    return <CircleComponent />
}

export default Circle;