import React from 'react';
import styled from 'styled-components';
import TeamWrap from './TeamWrap';

const Wrapper = styled.div`

    .user-info-menu {
        position: absolute;
        top: 45px;
        right: -60px;
        background: white;
        width: 273px;
        border: 1px solid #37b24d;
        padding: 10px;
        cursor: context-menu;
    }

    .logout-button-wrap {
        display: flex;
        justify-content: flex-end;
    }

    .logout-button {
        border: none;
        background: none;
        color: #495057;
    }

    .logout-button:hover {
        color: black;
        font-weight: bold;
    }

    .user-img-wrap {
        display: flex;
        align-items: center;
    }
    .user-img {
        border-radius: 1.4rem;
        flex-shrink: 0;
        width: 6em;
        height: 6em;
        margin-right: 0.5em;
        border: 1px solid lightgray;
        border-radius: 3em;
        overflow: hidden;
    }
    .user-img img {
        width: 100%;
        height: 100%;
    }

    .user-name {
        font-size: 1.5em;
        font-weight: bold;
    }

    .user-info-menu ul {
        padding: 0;
    }
  
   .user-info-menu-ul {
        display: flex;
        justify-content: center;
        margin: 0.5em 0 1.2em 0;
    }
`;

function UserInfoWrap(props) {
    return (
        <Wrapper>
            <div className="user-info-menu">
                <div className="logout-button-wrap"><button className='logout-button'>로그아웃</button></div>

                <div className="user-info-menu-ul">
                    <div className="user-img-wrap">
                        <div className="user-img">
                            <img src="/img/user.png" alt="" />
                        </div>
                        <div className="user-name-wrap">
                            <div className="user-name">
                                kim12345
                            </div>
                            <div>마이페이지</div>
                        </div>
                    </div>
                </div>
                <ul>
                    <li><TeamWrap /></li>
                    <li><TeamWrap /></li>
                    <li><TeamWrap /></li>
                </ul>
            </div>
        </Wrapper>
    );
}

export default UserInfoWrap;