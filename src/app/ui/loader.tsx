import styled from "styled-components"

const Loader = styled.span<{$colorTheme?: string}>`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 5px solid ${props => props.$colorTheme};
    border-bottom-color: transparent;
    position: absolute;
    top: 50%;
    left: 45%;
    animation: spin 1s linear infinite;
    
    @keyframes spin{
        to{
            transform: rotate(360deg);
        }
    }
`
export default Loader;