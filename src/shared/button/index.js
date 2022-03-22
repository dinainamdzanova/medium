import React from "react";

import StyledButton from "./style.js";

const ButtonPublic = ({text, bg, bradius, color, padding, border, onClick}) => {
    return (
        <StyledButton onClick={onClick} color={color} padding={padding} bradius={bradius} border={border} bg={bg}>{text}</StyledButton>
    )
}

export default ButtonPublic;