import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) => props.height && `height: ${props.height}px;`}
    padding: 16px;
    font-size: 1.9em;
    font-weight: bold;
    line-height: 1.9em;
    resize: none;
    border-radius: 0.5em;
    background: #e9ecef;
    border: none;

    
`;




  

function TextTitleInput(props) {
    const { height, value, onChange } = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} placeholder="제목을 입력하세요."/>;
}

export default TextTitleInput;