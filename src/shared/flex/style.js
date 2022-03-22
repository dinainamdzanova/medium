import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: ${props => props.items};
    justify-content: ${props => props.content};
    background: ${props => props.backColor};
    position: ${props => props.position};
    padding: ${props => props.padding};
    top: ${props => props.top};
    left: ${props => props.left};
    transform: ${props => props.transform};
`

export default StyledFlex;