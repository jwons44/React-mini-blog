import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "../../hooks/useDetectClose";
const DropdownMenu = () => {
  const [bookingIsOpen, bookingRef, bookingHandler] = useDetectClose(false);
  const [recruitmentIsOpen, recruitmentRef, recruitmentHandler] = useDetectClose(false);
  const [currentSituationIsOpen, currentSituationRef, currentSituationHandler] = useDetectClose(false);
  const [promotionIsOpen, promotionRef, promotionHandler] = useDetectClose(false);
  const [boardIsOpen, boardRef, boardHandler] = useDetectClose(false);


  // const logoutClickHandler = () => {
  //   console.log("logout");
  // };

  return (
    <Wrapper>
      <div className="DropdownContainer">
        <DropdownButton onClick={bookingHandler} ref={bookingRef}>
          부킹
        </DropdownButton>
        <Menu isDropped={bookingIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="#">야구장부킹</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#1-2">연습장부킹</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </div>

      <div className="DropdownContainer">
        <DropdownButton onClick={recruitmentHandler} ref={recruitmentRef}>
          모집
        </DropdownButton>
        <Menu isDropped={recruitmentIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="#2-1">게임모집</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#2-2">선수모집</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#2-3">캐치볼모집</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </div>

      <div className="DropdownContainer">
        <DropdownButton onClick={currentSituationHandler} ref={currentSituationRef}>
          팀/선수 현황
        </DropdownButton>
        <Menu isDropped={currentSituationIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="#2-1">팀</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#2-2">선수</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </div>

      <div className="DropdownContainer">
        <DropdownButton onClick={promotionHandler} ref={promotionRef}>
          홍보
        </DropdownButton>
        <Menu isDropped={promotionIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="#2-1">야구장홍보</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#2-2">연습장홍보</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </div>

      <div className="DropdownContainer">
        <DropdownButton onClick={boardHandler} ref={boardRef}>
          커뮤니티
        </DropdownButton>
        <Menu isDropped={boardIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="/post">자유게시판</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="#2-2">공지사항</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </div>

      {/* <Logout onClick={logoutClickHandler}>로그아웃</Logout> */}
    </Wrapper>
  );
};

export default DropdownMenu;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2em;
  /* width: 400px; */
  /* height: 50px; */
  font-weight: bold;

  .DropdownContainer {
    position: relative;
  text-align: center;
  margin-right: 1.2em;
  }

`;


const DropdownButton = styled.div`
  cursor: pointer;

  :hover {
    color: #37b24d;
  }

  :active {
    color: #37b24d;
  }
`;

const Menu = styled.div`
  background: white;
  border: 2px solid #37b24d;
  position: absolute;
  top: 47px;
  left: 50%;
  width: 150px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #37b24d;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }


  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
`;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;

  :hover {
    color: #37b24d;
  }
`;

// const Logout = styled.div`
//   cursor: pointer;
//   font-size: 16px;
//   display: block;
//   text-decoration: none;
//   /* color: white; */
//   font-size: 19px;
// `;
