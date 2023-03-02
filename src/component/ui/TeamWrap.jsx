import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5em 0 0.5em 0;

    .team-img-wrap {
        display: flex;
        align-items: center;
    }
    .team-img {
        border-radius: 1.4rem;
        flex-shrink: 0;
        width: 3.3em;
        height: 3.3em;
        margin-right: 0.5em;
        border: 1px solid lightgray;
        border-radius: 3em;
        overflow: hidden;
    }
    .team-img img {
        width: 100%;
        height: 100%;
    }
    .team-name {
        font-size: 15px;
        font-weight: bold;
    }

    .team-personnel {
        font-size: 13px;
    }

    .team-site-button-wrap {
        display: flex;
        align-items: center;
    }

    .team-site-button {
        width: 75px;
        height: 30px;
        border-radius: 0.8em;
        background: white;
        /* color: white; */
        border: 2px solid #37b24d;
        cursor: pointer;
    }

    .team-site-button:hover {
        background: #37b24d;
        color: white;
    }
`   


function TeamWrap(props) {
    return (
        <Wrapper>
            <div className="team-img-wrap">
                <div className="team-img">
                    <img src="/img/ssg.png" alt="" />
                </div>
                <div className="team-name-wrap">
                    <div className="team-name">
                      SSG 랜더스
                    </div>
                    <div className='team-personnel'>
                        15/30
                    </div>
                </div>
            </div>
            <div className="team-site-button-wrap">
                <button className='team-site-button'>팀 페이지</button>
            </div>          
        </Wrapper>
    );
}

export default TeamWrap;