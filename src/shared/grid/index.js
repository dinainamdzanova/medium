import React from 'react';

import StyledGrid from "./style.js";

const Grid = ({children, grid, ggap}) => {
    return (
        <StyledGrid grid={grid} ggap={ggap}>{children}</StyledGrid>
    )
}

export default Grid;