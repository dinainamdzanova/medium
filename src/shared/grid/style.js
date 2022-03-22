import styled from "styled-components";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.grid};
    grid-gap: ${props => props.ggap};
`

export default StyledGrid;