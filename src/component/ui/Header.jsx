import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes, faMagnifyingGlass, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import DropdownMenu from "./DropdownMenu";
import useDetectClose from "../../hooks/useDetectClose";
import UserWrap from "../ui/UserWrap";
import TeamWrap from "./TeamWrap";
import UserInfoWrap from "./UserInfoWrap";

const HeaderWrap = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #ced4da;

body, html {
  width: 100%;
  min-width: 320px;
  height: auto;
  min-height: 100%;
  font-family: "Nanum Gothic", sans-serif;
}
ul, ol, dl, li {
  list-style: none; 
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
img {
  max-width: 100%; 
  height: auto; 
}
a {
  color: black;
  border: none;
  text-decoration: none;
}

  .header__logo {
    width: 11em;
    padding: 0.5em 0 0.5em 0;
  }

  .header__menulist {
    list-style: none;
    display: flex;
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
  }

  

  li {
    padding: 0 1rem;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .header-search {
    align-items: center;
    background: #f1f3f5;
    border: solid 0.1em #f1f3f5;
    border-radius: 3em;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    height: 100%;
    padding: 0.5em 1em 0.5em 0.8em;
  }
  .header-search:hover,
  .header-search:focus,
  .header-search:active
   {
    border: 2px solid #37b24d;
  }
  .header-search input {
    color: black;
    border: none;
    background: none;
    margin-left: 1em;
  }
  .header-search input:hover, 
  .header-search input:focus,
  .header-search input:active
   {
    outline: none;
  }

  .header-search input::placeholder {
    color: #adb5bd;
  }

  .header__right .header-join-wrap {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    height: 100%;
    position: relative;
    width: 3em;
    margin-right: 2em;
}


.header__right .team-logo-wrap {
    border-radius: 2em;
    left: 0;
    position: absolute;
    top: -0.6em;
    width: 4em;
    height: 2.5em;
    margin: 0;
}

.header__right .team-logo {
    background-image: url("img/team.png");
    background-size: contain;
    height: 2.5em;
    width: 2.5em;
    margin: 0;
    cursor: pointer;
}


.header__right .user-logo {
    background-color: #f6dbec;
    border-radius: 2em;
    left: 1.5em;
    position: absolute;
    top: -0.6em;
    height: 2.8em;
    width: 2.8em;
    margin: 0;
    cursor: pointer;
}

.header__right li {
    margin: 0;
    padding: 0;
}

.header__right li.user-info-wrap {
  position: relative;
  margin-left: 0.5em;
  cursor: pointer;
}

.header__right-wrap {
        display: flex;
        align-items: center;
        margin-left: 10em;
    }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;

    .header__logo {
        width: 8em;
    }

    .header__right-wrap {
        display: flex;
        align-items: center;
    }

    .header__right {
      display: ${(props) => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header-search input {
        display: ${(props) => (props.searchToggled ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        background-color: black;
    }

    .header__menulist li,
    .header__right li,
    .header-search input {
      padding: 0;
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }

    .header-search {
        display: block;
    }

    .header-search input {
        display: none;
    }
  }
`;


function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [searchToggled, setSearchToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [userInfoView, setUserInfoView] = useState(false);


  return (
    <HeaderWrap isToggled={isToggled} userToggled={userToggled} serchToggled={searchToggled}>
      {/* 햄버거 버튼(bar) */}
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
      </div>

      {/* 로고 */}
      <div className="header__logo">
        <a href="#"><img src="img/1.png" alt="matchup-logo" /></a>
      </div>



      

      <DropdownMenu />


      <div className="header__right-wrap">
        {/* 검색 버튼*/}
        <div className="header-search" onClick={() => {
          setSearchToggled(!searchToggled);
        }}>
          <FontAwesomeIcon icon={!searchToggled ? faMagnifyingGlass : faMagnifyingGlass} />
          <input type="text" placeholder="Search..." onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          />
        </div>
        {/* User 버튼 */}
        <div
          className="user"
          onClick={() => {
            setUserToggled(!userToggled);
          }}
        >
          <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
        </div>
      </div>

      {/* User 메뉴 리스트 */}
      <ul className="header__right">
        <li className="header-join-wrap">
          <div className="team-logo-wrap">
            <div className="team-logo"></div>
          </div>
          <div className="user-logo"></div>
        </li>
        <li><a href="">로그인</a></li>
        <li className="user-info-wrap">
          <div onClick={() => {
            setUserInfoView(!userInfoView)
          }}>
            {userInfoView ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            {userInfoView && 
              <UserInfoWrap />
            }
          </div>
        </li>
      </ul>
    </HeaderWrap>
  );
}

export default Header;