import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostLIst";
import Button from "../ui/Button";
import data from '../../data.json';
import TextInput from "../ui/TextInput";
import TextTitleInput from "../ui/TextTitleInput";
import MainPostListItem from '../list/MainPostListItem';
import Advertisement from '../ui/Advertisement';

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

    /* & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    } */

    /* .button-wrap {
        display: flex;
        justify-content: center;
    } */

    /* Button {
        margin-right: 10px;
    } */
`;
// const Container = styled.div`
//     width: 1380px;
//     display: flex;
//     flex-direction: column;

// `;

const MainImg = styled.div`
    width: 1380px;
    height: 14em;
    display: flex;
    justify-content: center;
    
    margin-top: 0.5em;

    img {
        width: 100%;
    }
`;

const MainIconWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    

    .main-icon-list {
        border: 1px solid black;
        border-radius: 1em;
        width: 60%;
        height: 6em;
        position: absolute;
        top: -3em;
        left: auto;
        background: #37b24d;
    }
`;

const MainContentWrap = styled.div`
    width: 100%;
    height: 16em;
    box-sizing: border-box;

    border: 1px solid;

    img {
        width: 50px;
        /* height: 1em; */
    }
    
`;


function PostWritePage(props) {
    const navigate = useNavigate();

    const { title, setTitle } = useState("");
    const { content, setContent } = useState("");

    return (
        <Wrapper>
            <Container>

                <Advertisement />

                <MainImg>
                    <img src="/img/mainImg.jpg" alt="" />

                </MainImg>
                <MainIconWrap>
                    <div className='main-icon-list'>
                        dhdh
                    </div>
                </MainIconWrap>

                <MainContentWrap>
                    <div>
                        <div>모집</div>

                        <div>
                            <MainPostListItem img={true} />
                            <MainPostListItem img={false} />
                        </div>
                    </div>

                    <div>
                        <div>공지</div>
                        <div>

                        </div>

                    </div>
                </MainContentWrap>
                <TextTitleInput
                    height={80}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

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
                            navigate("/");
                        }}
                    />
                </div>
            </Container>
        </Wrapper>
    )
}

export default PostWritePage;