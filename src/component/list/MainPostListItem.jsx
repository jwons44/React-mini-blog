import React, { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    border: 1px solid #ced4da;
    border-radius: 1em;
    width: 300px;
    /* height: 200px; */
    overflow: hidden;
    margin-right: 0.7em;
    padding: 10px;
    cursor: pointer;
    :hover {
        border: 1px solid #37b24d;
        box-shadow: 0.1em 0.1em 0.1rem rgba(0, 0, 0, 0.150000006);
    }
    
    img {
        border-radius: 1em;
        width: 50%;
        margin-right: 5px;
    }

    .write-board-title {
        font-weight: bold;
        font-size: 1.1em;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 0.3em;
    }

    .write-board-content {
        font-size: 0.9em;
        color: #868e96;
        line-height: 1.5em;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        text-align: justify;
    }
    .write-board-regdate {
        margin-top: 0.2em;
        font-size: 0.9em;
        color: #868e96;
    }

    .regdate-wrap{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .region-wrap,
    .division-wrap{
        padding-bottom: 5px;
    }

    
    .region,
    .division {
        border-radius: 3em;
        background: #37b24d;
        padding: 5px 10px;
        color: white;
        font-size: 0.9em;
    }

    .img-wrap {
        display: flex;
    }
`;

function MainPostListItem(props) {

    const { post, img, content, region, division, onClick } = props;


    return (
        <Wrapper onClick={onClick}>
            <div className='regdate-wrap'>
                <div className="write-board-regdate">{post.regDate}</div>
                {region ?
                    <div className='region-wrap'>
                        {/* DB 연동할때 사용 */}
                        {/* {post.region ?  <div>{post.region}</div> : null} */}
                        <div className='region'>{post.region}</div>
                    </div>
                    : null}
                {division ?
                    <div className='division-wrap' division={division}>
                        {/* {post.division ?  <div>{post.division}</div> : null} */}
                        <div className='division'>{post.division}</div>
                    </div>
                    : null}
            </div>
            <div className='img-wrap'>
                {img ? <img src="/img/mainImg.jpg" alt="" /> : null}
                <div>
                    <div className="write-board-title">{post.title}</div>
                    {content ?
                        <div className='write-board-content'>{post.content}</div> : null
                    }
                </div>
            </div>
        </Wrapper>
    );
}

export default MainPostListItem;