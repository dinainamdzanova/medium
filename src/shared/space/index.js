import React from 'react';
import SpaceStyle from './style.js';

const Space = ({top, left, bottom, right, ptop, pleft, pbottom, pright}) => {
    return (
        <SpaceStyle top={top} left={left} bottom={bottom} right={right} ptop={ptop} pleft={pleft} pbottom={pbottom} pright={pright}></SpaceStyle>
    )
}

export default Space;