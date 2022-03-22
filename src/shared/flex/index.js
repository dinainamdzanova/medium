import React from 'react';

import StyledFlex from "./style.js"

const Flex = ({items, content, direction, backColor, position, padding, top, left, transform, children}) => {
    return (
        <StyledFlex items={items} direction={direction} content={content} position={position} backColor={backColor} padding={padding} top={top} left={left} transform={transform}>{children}</StyledFlex>
    )
}

export default Flex;