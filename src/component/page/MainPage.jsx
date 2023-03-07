import React from 'react';
import styled from 'styled-components';
import MainPostListItem from '../list/MainPostListItem';
import Advertisement from '../ui/Advertisement';
import data from '../../data.json';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faBaseball,faArrowRight,faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
const Wrapper = styled.div`
    padding: 16px 0;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1380px;
    display: flex;
    flex-direction: column;

`;

const MainImg = styled.div`
    width: 1380px;
    height: 16em;
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
        /* border: 1px solid black; */
        box-shadow: 0.3em 0.3em 2em rgba(0, 0, 0, 0.150000006);
        border-radius: 4em;
        width: 60%;
        height: 6em;
        position: absolute;
        top: -3em;
        left: auto;
        background: white;
        display: flex;
        padding: 10px;
    }

    .main-icon-wrap {
        width: calc(100% / 3);
        display: flex;
        align-items: center;
    }

    
    .main-icon-circle {
        width: 75px;
        height: 75px;
        background: #f1f3f5;
        border-radius: 3em;        
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3.2em;
        color: #37b24d;
    }

    .main-icon-content-wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .main-icon-title {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 0.3em;
    }

    .main-icon-content {
        color: #868e96;
        font-size: 1em;
        margin-bottom: 0.2em;
    }

    .main-iconBtn {
        display: flex;
        align-items: center;
        border: none;
        background: none;
        padding: 0;
        font-size: 0.9em;
        cursor: pointer;
    }

    .main-iconBtn:hover {
        font-weight: bold;
        color:#37b24d;
    }

    .main-iconBtn div:first-child {
        margin-right: 0.5em;
    }
    
`;

const MainContentWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
    }

    .write-board-title {
        
    }

    .grid {
        display: flex;
        justify-content: center;
    }

    .recruitment-wrap,
    .notice-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .recruitment-wrap {
        margin-top: 9em;
    }
    .notice-wrap {
        margin: 5em 0;
    }

    .recruitment-title,
    .notice-title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 1em;
    }
    
`;

function MainPage(props) {


    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                
                <Advertisement />

                <MainImg>
                    <img src="/img/mainImg.jpg" alt="" />
                </MainImg>

                <MainIconWrap>
                    <div className='main-icon-list'>
                        <div className='main-icon-wrap'>
                            <div className='main-icon-circle'>
                                <FontAwesomeIcon icon={faClipboard} />
                            </div>
                            <div className="main-icon-content-wrap">
                                <div className='main-icon-title'>
                                    기록
                                </div>
                                <div className='main-icon-content'>내 경기기록 보기</div>
                                <button className='main-iconBtn'>
                                    <div>바로가기</div>
                                    <FontAwesomeIcon icon={faArrowRight} />    
                                </button>
                            </div>
                        </div>
                        <div className='main-icon-wrap'>
                            <div className='main-icon-circle'>
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </div>
                            <div className="main-icon-content-wrap">
                                <div className='main-icon-title'>
                                    팀 창단
                                </div>
                                <div className='main-icon-content'>팀 페이지 만들기</div>
                                <button className='main-iconBtn'>
                                    <div>바로가기</div>
                                    <FontAwesomeIcon icon={faArrowRight} />    
                                </button>
                            </div>
                        </div>
                        <div className='main-icon-wrap'>
                            <div className='main-icon-circle'>
                                <FontAwesomeIcon icon={faBaseball} />
                            </div>
                            <div className="main-icon-content-wrap">
                                <div className='main-icon-title'>
                                    경기일정
                                </div>
                                <div className='main-icon-content'>경기일정 확인하기</div>
                                <button className='main-iconBtn'>
                                    <div>바로가기</div>
                                    <FontAwesomeIcon icon={faArrowRight} />    
                                </button>
                            </div>
                        </div>
                    </div>
                </MainIconWrap>

                <MainContentWrap>
                    <div className='recruitment-wrap'>
                        <div className='recruitment-title'>게임모집</div>

                        <div className='grid'>
                            {data.filter((post) => post.id < 5).map((post) => {
                                return (
                                    <MainPostListItem
                                        key={post.id}
                                        post={post}
                                        region={true}
                                        img={true}
                                        content={true}
                                        onClick={(item) => {
                                            navigate('/post/${item.id}');
                                        }}
                                    />
                                )
                            })}
                        </div>
                    </div>

                    <div className='notice-wrap'>
                        <div className='notice-title'>공지사항</div>
                        <div className='grid'>
                            {data.filter((post) => post.id < 5).map((post) => {
                                return (
                                    <MainPostListItem
                                        key={post.id}
                                        post={post}
                                        division={true}
                                        content={true}
                                        onClick={(item) => {
                                            navigate('/post/${item.id}');
                                        }}
                                    />
                                )
                            })}
                        </div>

                    </div>
                </MainContentWrap>

            </Container>
        </Wrapper>
    );
}

export default MainPage;