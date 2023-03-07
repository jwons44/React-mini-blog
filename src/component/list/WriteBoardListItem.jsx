import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 1em 0 1em 0;
    
    
    .write-board-title {
        text-overflow: ellipsis;
        white-space : nowrap;
        overflow: hidden;
        cursor: pointer;
    }


    .write-board-regdate {
        margin-top: 0.2em;
        font-size: 0.8em;
        color: #868e96;
    }

`;

function WriteBoardListItem(props) {
    const {post,onClick} = props;
    return (
        <Wrapper onClick={onClick}>
            <div className="write-board-title">{post.title}</div>
            
            <div className="write-board-regdate">{post.regDate}</div>
        </Wrapper>
    );
}

export default WriteBoardListItem;