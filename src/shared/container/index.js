import React from "react";
import StyledContainer from "./style.js";

const Container = ({margin, width, children}) => {
    return (
        <StyledContainer width={width} margin={margin}>{children}</StyledContainer>
    )
}

export default Container;