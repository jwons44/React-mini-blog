import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import BoardEditor from "../ui/BoardEditor";
import CreateTag from "../list/CreateTag";
import CreateTagList from "../list/CreateTagList";


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
        font-size: 2.8em;
        margin-left: 5px;
        margin-bottom: 0.5em;
    }
    .post-title-input {
        width: 100%;
        height: 70px;
        border: 1px solid #CCCED1;
        border-radius: 1em;
        padding: 0;
        box-sizing: border-box;
        padding-left: 20px;
        font-size: 1.5em;
    }
    .post-title-input:focus {
       outline-color: #37b24d;
    }
    .post-title-input::placeholder {
        font-size: 0.6em;
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

`;



function PostWritePage(props) {
    const navigate = useNavigate();

    const [inputs, setInpus] = useState({
        tagname: ''
    })
    const { tagname } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInpus({
            ...inputs,
            [name]: value
        })
    }
    const [tags, setTags] = useState([

    ]);
    const nextId = useRef(1);
    const onCreate = () => {
        const tag = {
            id: nextId.current, tagname
        }
        if(tags.length <= 4){
            setTags([...tags, tag])
        } else {
            alert("??? ?????? ????????? ??? ????????????.")
        }
        
        setInpus({
            tagname: ''
        })
        console.log(nextId.current);
        console.log("tags",tags.length);
        nextId.current += 1;

    }
    const onRemove = id => {
        setTags(tags.filter(tag => tag.id !== id));
    }

    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            onCreate();
        }
    }

    return (
        <Wrapper>
            <Container>
                <PostTitleWrap>
                    <div className="post-title">???????????????</div>

                    <input className="post-title-input" placeholder="????????? ??????????????????."></input>
                </PostTitleWrap>

                <BoardEditor />

                <TagInputWrap>
                    <div className="tag-title-wrap">
                        <div className="tag-title">????????? ??????</div>
                        <div className="tag-limit">?????? 5???</div>
                    </div>
                    <CreateTag
                        tagname={tagname}
                        onChange={onChange}
                        onCreate={onCreate}
                        onKeyDown={onKeyDown}
                    />
                    <CreateTagList tags={tags} onRemove={onRemove} />

                </TagInputWrap>


                <div className="button-wrap">
                    <Button
                        title="??? ????????????"
                        background="true"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <Button
                        title="??????"
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