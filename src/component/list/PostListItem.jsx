import React from "react";
import styled from "styled-components";
import UserWrap from "../ui/UserWrap";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid gray;
    cursor: pointer;
    :hover {
        background: lightgray;
    }

    
`;

const TitleText = styled.div`
    font-size: 1.1em;

    /* .user-wrap {
      display: flex;
      align-items: center;
      }
    .user-img {
      background-color: salmon;
      border-radius: 1.4rem;
      flex-shrink: 0;
      height: 2.8rem;
      margin-right: 0.8rem;
      width: 2.8rem;
    }
    .user-name {
      color: #100d16;
      flex-shrink: 0;
      font-family: Spoqa Han Sans Neo, 'Source Sans Pro';
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: -0.02rem;
      line-height: 1.5;
      white-space: nowrap;
    } */

    .post-title {
        font-weight: bold;
        margin: 1em 0 1em 0;
    }

    .post-content {
        font-size: 0.85em;
        color: gray;
    }

    .post-regdate {
        margin-top: 1em;
        font-size: 0.8em;
        color: lightgray;
    }
    
`;

function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>
                {/* <div className="user-wrap">
                    <div className="user-img"></div>
                    <div className="user-name">{post.user}</div>
                </div> */}
                <UserWrap post={post}/>
                <div className="post-title">{post.title}</div>
                <div className="post-content">{post.content}</div>
                <div className="post-regdate">{post.regDate}</div>
            </TitleText>
        </Wrapper>
    );

}

export default PostListItem;