import styled from "styled-components";

const StyledText = styled.h2`
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    line-height: ${props => props.height};
`

export default StyledText;