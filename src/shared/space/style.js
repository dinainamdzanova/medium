import styled from "styled-components";

const SpaceStyle = styled.div`
    margin-top: ${props => props.top};
    margin-left: ${props => props.left};
    margin-bottom: ${props => props.bottom};
    margin-right: ${props => props.right};
    padding-top: ${props => props.ptop};
    padding-left: ${props => props.pleft};
    padding-bottom: ${props => props.pbottom};
    padding-right: ${props => props.pright};
`

export default SpaceStyle;