import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    /* width: 100%; */
    padding: 8px 16px;
    font-size: 1em;
    border: none;
    /* background: #37b24d; */
    border: 1px solid #37b24d;
    border-radius: 3em;
    cursor: pointer;
    /* background에 따라서 색상변경*/
    background : ${(props) => props.background ? '#37b24d' : 'white'};
    color: ${(props) => props.background ? 'white' : 'black'};
`;

function Button(props) {
    const { title, background ,onClick } = props;

    return <StyledButton background={background} onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;