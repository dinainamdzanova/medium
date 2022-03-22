import React from 'react';

import StyledText from './style.js';

const Text = ({children, color, size, weight, height}) => {
    return (
        <StyledText color={color} size={size} weight={weight} height={height}>{children}</StyledText>
    )
}

export default Text;