import React from 'react';
import styled from 'styled-components';


const Userwrap = styled.div`
    
 
    display: flex;
    align-items: center;
    
  .user-img {
    background-color: salmon;
    border-radius: 1.4rem;
    flex-shrink: 0;
    width: 2.3em;
    height: 2.3em;
    margin-right: 0.5em;
  }
  .user-name {
    color: #100d16;
    flex-shrink: 0;
    font-family: Spoqa Han Sans Neo, 'Source Sans Pro';
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: -0.02rem;
    line-height: 1.5;
    white-space: nowrap;
  }
`;

function UserWrap(props) {
    const { post, onClick } = props;
    return (
        <Userwrap onClick={onClick}>
            <div className="user-img"></div>
            <div className="user-name">
              {post.user == null ? post :post.user}           
            </div>
        </Userwrap>
    );
}

export default UserWrap;