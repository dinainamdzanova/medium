import styled from "styled-components";

const StyledButton = styled.button`
    color: ${props => props.color};
    border: ${props => props.border};
    background-color: ${props => props.bg};
    padding: ${props => props.padding};
    border-radius: ${props => props.bradius};
    font-size: 16px;
    font-weight: 600;
`

export default StyledButton;