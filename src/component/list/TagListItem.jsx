import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    /* width: 8em; */
    border: 1px solid #F1F3F5;
    border-radius: 3em;
    background: #F1F3F5;
    display: flex;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
    padding: 0 1.5em;
    margin: 0 0.2em;
    cursor: context-menu;

    .tag-content {
        border: 1px solid #F1F3F5;
    }
`

function TagListItem(props) {
    const { tag } = props;
    return (
        <Wrapper>
            <div className="tag-content">{tag.content}</div>
        </Wrapper>
    );
}

export default TagListItem;