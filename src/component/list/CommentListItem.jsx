import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import TextInput from "../ui/TextInput";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 0.7em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    background: white;

    .user-wrap {
        display: flex;
        align-items: flex-end;
        margin-bottom: 0.5em;
    }
    
    .content-wrap {
        display: flex;
        justify-content: space-between;
    }
    .svg-inline--fa {
        margin-left: 0.3em;
        font-size: 1.3em;
    }
    
`;

const ContentText = styled.div`
    font-size: 1em;
    white-space: pre-wrap;
`;

const CommentUser = styled.div`
    font-size: 1.1em;
    margin-right: 1em;
`;

const CommentRegDate = styled.div`
    font-size: 0.8em;
    color: gray;

`;

const Reply = styled.button`
    font-size: 0.9em;
    color: #37b24d;
    border: none;
    background: none;
    cursor: pointer;
`;

const CommentModal = styled.div`
    margin: 1.5em 0 0.6em 0;
    display: flex;
    justify-content: center;
`;

function CommentListItem(props) {
    const { comment } = props;
    const [reply, setReply] = useState("");
    const [commentModal, setCommentModal] = useState(false);

    return (
        <Wrapper>
            <div className="user-wrap">
                <CommentUser>{comment.user}</CommentUser>
                <CommentRegDate>{comment.regDate}</CommentRegDate>
            </div>
            <div className="content-wrap">
                <ContentText>{comment.content}</ContentText>
                <Reply onClick={() => {
                    { setCommentModal(!commentModal) }
                    setReply("");
                }}>
                    댓글쓰기
                    <FontAwesomeIcon icon={faCommentDots} />
                </Reply>
            </div>
            {commentModal === true ?
                <CommentModal>
                    <TextInput
                        height={70}
                        value={reply}
                        onChange={(event) => {
                            setReply(event.target.value);
                        }}
                    />
                </CommentModal>
                : null}

        </Wrapper>
    );

}

export default CommentListItem;