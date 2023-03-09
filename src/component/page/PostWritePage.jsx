import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import TextTitleInput from "../ui/TextTitleInput";
import BoardEditor from "./BoardEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

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

    .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 400px;
  margin-bottom: 20px;
}
`;

const PostTitleWrap = styled.div`
width: 100%;
    .post-title {
        font-size: 1.5em;
        margin-left: 5px;
        margin-bottom: 0.5em;
        font-weight: bold;
    }
    .post-title-input {
        width: 100%;
        height: 2em;
        border: 1px solid #CCCED1;
        border-radius: 0.8em;
        padding: 0;
        box-sizing: border-box;
        padding-left: 20px;
        font-size: 2.2em;
    }
    .post-title-input::placeholder {
        color: #868e96;
    }
`

const TagInputWrap = styled.div`
    width: 100%;

    .tag-title-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5em;
    }

    .tag-title {
        font-size: 1.5em;
        margin-left: 5px;
    }

    .tag-limit {
        font-size: 0.9em;
        color:#495057;
        margin-right: 15px;
    }

    .tag-input-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.8em;
        margin-bottom: 0.5em;
    }

    .tag-input {
        width: 83%;
        height: 100%;
        border: 1px solid #CCCED1;
        border-radius: 2em;
        padding-left: 20px;
    }

    .tag-input::placeholder {
        color: #868e96;
        font-size: 1.1em;
    }
    
    .add-tagBtn {
        color: white;
        padding: 8px 16px;
        font-size: 1em;
        border: none;
        background: #37b24d;
        /* border: 1px solid #37b24d; */
        border-radius: 3em;
        cursor: pointer;
        display: flex;
        align-items: flex-end;
    }

    .add-tagBtn span {
        margin-right: 0.3em;
    }

    .tag-list-wrap {
        border: 1px solid #CCCED1;
        border-radius: 2em;
        width: 100%;
        height: 2.8em;
        display: flex;
        align-items: center;
    }

    .tag-list {
        display: flex;
        margin: 0;
        padding: 0;
        padding-left: 20px;
        
    }

    .tag-list li {
        margin-right: 5px;
    }

    .tag-list li span {
        font-size: 1.1em;
    }


    .remove-tagBtn {
        font-size: 1.5em;
        border: none;
        background: none;
        color: #37b24d;
        padding: 0 0 0 3px;
    }
`;



function PostWritePage(props) {
    const navigate = useNavigate();

    const { title, setTitle } = useState("");
    const { content, setContent } = useState("");

    return (
        <Wrapper>
            <Container>
                <PostTitleWrap>
                    <div className="post-title">게시글 제목</div>
                        
                    <input className="post-title-input" placeholder="제목을 입력해주세요."></input>
                </PostTitleWrap>
                
                <BoardEditor />

                <TagInputWrap>
                    <div className="tag-title-wrap">
                        <div className="tag-title">게시글 태그</div>
                        <div className="tag-limit">최대 5개</div>
                    </div>

                    <div className="tag-input-wrap">
                        <input type="text" className="tag-input" placeholder="주요 특징들을 키워드로 입력해주세요."></input>
                        <button className="add-tagBtn">
                            <span>추가</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    </div>

                    <div className="tag-list-wrap">
                        <ul className="tag-list">
                            <li>
                                <span>#태그</span>
                                <button className="remove-tagBtn">
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </li>
                            <li>
                                <span>#태그</span>
                                <button className="remove-tagBtn">
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </li>
                            <li>
                                <span>#태그</span>
                                <button className="remove-tagBtn">
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </TagInputWrap>


                <div className="button-wrap">
                    <Button
                        title="글 등록하기"
                        background="true"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <Button
                        title="취소"
                        background=""
                        onClick={() => {
                            navigate("/post");
                        }}
                    />
                </div>

            </Container>
        </Wrapper>
    )
}

export default PostWritePage;