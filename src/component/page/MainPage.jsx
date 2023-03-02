import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostLIst";
import Button from "../ui/Button";
import data from '../../data.json';
import PageTitle from "../ui/PageTitle";
import Search from "../ui/Search";
import SelectBox from "../ui/SelectBox";
import Advertisement from "../ui/Advertisement";
import PageButton from "../ui/PageButton";
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

    .title-wrap {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .search-wrap {
        display: flex;
        align-items: center;
    }
`;




// 요청사항 폼
// function RequestForm(props) {
//     const [value1, setValue] = useState('요청사항을 ');

//     const handleChange = (event) => {
//         setValue(event.target.value);
//     }

//     const handleSubmit = (event) => {
//         alert('입력한 요청사항: ' + value1);
//         event.preventDefault();
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 요청사항:
//                 <textarea value={value1} onChange={handleChange} />
//             </label>
//             <button type="submit">제출</button>
//         </form>
//     )
// }


function MainPage(props) {
    const { } = props;

    // SelectBox option
    const POSTOPTIONS = [
        { value: "titleWriter", name: "제목+작성자" },
        { value: "title", name: "제목" },
        { value: "writer", name: "작성자" }
    ];

    const navigate = useNavigate();

    return (
        <Wrapper>
            <div className="wrap">
            <Container>
                <Advertisement /> {/* 광고 */}

                {/* 페이지 제목 */}
                <div className="title-wrap">
                    <PageTitle title="자유게시판" />
                    <div className="search-wrap">
                        <SelectBox options={POSTOPTIONS} />
                        <Search />
                    </div>
                </div>

                {/* 게시물 목록 */}
                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />

                {/* 페이지버튼 */}
                {/* <PageButton page={1} count={50} setPage={10}/> */}
                <PageButton />
                <Button
                    title="글 작성하기"
                    background="true"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                {/* 사이드바 */}

            </Container>
            <RightBar />
            {/* <RequestForm /> */}
            </div>
        </Wrapper>
    )
}

export default MainPage;