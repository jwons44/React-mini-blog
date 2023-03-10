import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import Button from "../ui/Button";
import data from '../../data.json';
import TextInput from "../ui/TextInput";
import UserWrap from "../ui/UserWrap";
import TagList from "../list/TagList";
import RightBar from "../list/RightBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PageButton from "../ui/PageButton";

const Wrapper = styled.div`
    padding: 16px;
    width: 100%;
    display: flex;
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

    

    .btnWrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
`;
const PageBtnWrap = styled.div`
  
  margin: 1.5em 0;
  .pageMoveBtn-wrap {
    display: flex;
    justify-content: space-between;
  }

  .pre-pageBtn,
  .next-pageBtn {
    width: 49%;
    height: 4em;
    font-size: 1.5em;
    border:1px solid #f1f3f5 ;
    background: #f1f3f5;
    border-radius: 1em;
    cursor: pointer;
    box-shadow: 0.1em 0.1em 0.1rem rgba(0, 0, 0, 0.150000006);
  }

  .pre-pageBtn:hover,
  .next-pageBtn:hover {
    border: 2px solid #37b24d;
    box-shadow: 0.3em 0.3em 2em rgba(0, 0, 0, 0.150000006);
  }

  .pre-pageBtn {
    display: flex;
    align-items: center;
  }

  .next-pageBtn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
  }

  .pageBtn-title {
    font-size: 0.6em;
  }

  .pageBtn-content {
    font-size: 22px;
  }
  
  .pre-page-content-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0.5em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .next-page-content-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0.5em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .pageBtn-icon {
    font-size: 1.5em;
    color: #37b24d;
  }
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");
    const [commentModal, setCommentModal] = useState(false);

    const prePost = data.find((item) => {
        return item.id == postId-1;
    });
    const nextPost = data.find((item) => {
        return item.id > postId;
    });
    return (
        <Wrapper>
            <div className="wrap">
                <Container>
                    <PostContainer>
                        <TitleText>{post.title}</TitleText>
                        <UserWrap post={post} />
                        <ContentText>
                            {post.content}
                            {post.tags ? 
                            <TagList
                                tags={post.tags}
                            /> : null}
                        </ContentText>
                    </PostContainer>
                    <PageBtnWrap>
                        <div className="pageMoveBtn-wrap">

                            {prePost ?
                                <button className='pre-pageBtn'>
                                    <div className='pageBtn-icon'>
                                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                                    </div>
                                    <div className='pre-page-content-wrap'>
                                        <div className='pageBtn-title'>이전 글</div>
                                        <div className='pageBtn-content'>{prePost.title}</div>
                                    </div>
                                </button>
                                : <div></div>}
                            {nextPost ?
                                <button className='next-pageBtn'>
                                    <div className='next-page-content-wrap'>
                                        <div className='pageBtn-title'>다음 글</div>
                                        <div className='pageBtn-content'>{nextPost.title}</div>
                                    </div>
                                    <div className='pageBtn-icon'>
                                        <FontAwesomeIcon icon={faCircleArrowRight} />
                                    </div>
                                </button> : <div></div>
                            }
                        </div>
                    </PageBtnWrap>
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

                    <div className="btnWrap">
                        <div></div>
                        {/* 페이지버튼 */}
                        {/* <PageButton page={1} count={50} setPage={10}/> */}
                        <PageButton />
                        <div className="button-wrap">
                            <Button
                                title="뒤로 가기"
                                onClick={() => {
                                    navigate("/post");
                                }}
                            />
                        </div>
                    </div>
                </Container>
                <RightBar />
            </div>
        </Wrapper>
    )
}

export default PostViewPage;