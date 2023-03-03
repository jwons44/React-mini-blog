import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import TeamWrap from './TeamWrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`

    .user-info-menu {
        position: absolute;
        top: 45px;
        right: -60px;
        background: white;
        width: 300px;
        border: 2px solid #37b24d;
        border-radius: 1em;
        /* padding: 10px; */
        cursor: context-menu;
        /* box-sizing: border-box; */
    }

    .user-info-back {
        background: #37b24d;
        border-top-left-radius: 0.8em;
        border-top-right-radius: 0.8em;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
    }

    .logout-button-wrap {
        display: flex;
        justify-content: flex-end;
        margin: 10px 10px 0 0;        
    }

    .logout-button {
        border: none;
        background: none;
        color: white;
        cursor: pointer;
    }

    .logout-button:hover {
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
        color: white;
    }

    .user-info-mypage {
        border: none;
        background: none;
        color: white;
        cursor: pointer;
        padding: 0;
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
    const [userInfoView, setUserInfoView] = useState(false);
    const node = useRef();

    useEffect(() => {
        const clickOutside = (e) => {
            if (userInfoView && node.current && !node.current.contains(e.target)) {
                setUserInfoView(false);
            }
        };

        document.addEventListener("mousedown", clickOutside);

        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [userInfoView]);

    return (
        <Wrapper>
            <div onClick={() => {
                setUserInfoView(!userInfoView) //true
            }} ref={node}>
                {userInfoView ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                {userInfoView &&
                    <div className="user-info-menu">
                        <div className="user-info-back">
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
                                        <button className='user-info-mypage'>
                                            마이페이지
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li><TeamWrap /></li>
                            <li><TeamWrap /></li>
                            <li><TeamWrap /></li>
                        </ul>
                    </div>
                }
            </div>

        </Wrapper>
    );
}

export default UserInfoWrap;