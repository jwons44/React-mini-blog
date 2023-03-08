import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import TextTitleInput from "../ui/TextTitleInput";
import Editor from "./Editor";

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



function PostWritePage(props) {
    const navigate = useNavigate();

    const { title, setTitle } = useState("");
    const { content, setContent } = useState("");

    return (
        <Wrapper>
            <Container>
                <TextTitleInput
                    height={80}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                {/* <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                /> */}
                <Editor />




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