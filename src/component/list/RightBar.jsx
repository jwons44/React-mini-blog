import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-left: 1px solid #ced4da ;
    padding: 0 1.6em;
    width: 345px;
    margin-left: 2em;
    display: flex;
    /* justify-content: center; */
`;

const UserWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
  .user-img {
    background-color: salmon;
    border-radius: 3em;
    flex-shrink: 0;
    width: 5.5em;
    height: 5.5em;
    margin-bottom: 1em;
  }
  .user-name {
    color: #100d16;
    flex-shrink: 0;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.02rem;
    line-height: 1.5;
    white-space: nowrap;
  }
`

function RightBar(props) {
    return (
        <Wrapper>
            <UserWrap>
                <div className="user-img"></div>
                <div className="user-name">kim1234@nave.com</div>
            </UserWrap>
        </Wrapper>
    );
}

export default RightBar;