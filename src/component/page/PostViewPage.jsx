import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import Button from "../ui/Button";
import data from '../../data.json';
import TextInput from "../ui/TextInput";
import UserWrap from "../ui/UserWrap";
import TagListItem from "../list/TagListItem";
import TagList from "../list/TagList";
import RightBar from "../list/RightBar";

const Wrapper = styled.div`
    padding: 16px;
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    justify-content: center;

    .wrap {
        width: 70%;
        display: flex;
        justify-content: center;
    }
`;

const Container = styled.div`
    width: 1000px;
    /* max-width: 720px; */

    & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }

    .button-wrap {
        display: flex;
        justify-content: center;
    }

    Button {
        margin-right: 10px;
    }
`;

const PostContainer = styled.div`
    border-radius: 8px;
`;

const TitleText = styled.div`
    font-size: 2em;
    font-weight: bold;
`;

const ContentText = styled.div`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
    margin: 1em 0;
    border-top: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    padding: 0.5em 0;
`;

const CommentLabel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CommentModal = styled.div`
`

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");
    const [commentModal, setCommentModal] = useState(false);

    return (
        <Wrapper>
            <div className="wrap">
                <Container>
                    <PostContainer>
                        <TitleText>{post.title}</TitleText>
                        <UserWrap post={post} />
                        <ContentText>
                            {post.content}
                            <TagList
                                tags={post.tags}
                            />
                        </ContentText>
                    </PostContainer>
                    <CommentLabel>
                        <h3>댓글 {post.comments.length}</h3>
                        <Button
                            title="댓글 작성"
                            background="true"
                            onClick={() => {
                                { setCommentModal(!commentModal) }
                                setComment("");
                            }}
                        />
                    </CommentLabel>
                    {commentModal === true ?
                        <CommentModal>
                            <TextInput
                                height={100}
                                value={comment}
                                onChange={(event) => {
                                    setComment(event.target.value);
                                }}
                            />
                        </CommentModal>
                        : null}
                    <CommentList comments={post.comments} />
                    <div className="button-wrap">
                        <Button
                            title="뒤로 가기"
                            onClick={() => {
                                navigate("/");
                            }}
                        />
                    </div>
                </Container>
                    <RightBar reply={true}/>
            </div>
        </Wrapper>
    )
}

export default PostViewPage;