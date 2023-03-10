import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: 100%;
    ${(props) => props.height && `height: ${props.height}px;`};
    border-radius:0.5em;
    padding: 0.5em;
    font-size: 1em;
    line-height: 20px;
    resize: none;
    overflow: auto;

    /* ::-webkit-scrollbar {
        width:20px;
    } */
    /* ::-webkit-scrollbar-thumb {
        background-color:black;
        border-radius:0.5em;
    }
    ::-webkit-scrollbar-track{
        background-color:gray;
        border-radius:0.5em;
    } */
    :focus,:active {
        outline-color: #37b24d;
    }
`;




  

function TextInput(props) {
    const { height, value, onChange } = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;