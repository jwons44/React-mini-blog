import React from 'react';
import styled from 'styled-components';
import WriteBoardListItem from './WriteBoardListItem';
import data from '../../data.json';
import { useNavigate } from 'react-router-dom';


const Wrapper = styled.div`
    border-left: 1px solid #ced4da ;
    padding: 0 1.6em;
    width: 200px;
    margin-left: 2em;
    display: flex;
    flex-direction: column;
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
`;

const WriteBoardListWrap = styled.div`
`;

const TopKeyWordWrap = styled.div`
  display: flex;
  flex-direction: column;

  .tags-wrap {
  }

  .tag {
    display: flex;
    margin-bottom: 10px;
  }

  .tag-content {
    border: 1px solid #F1F3F5;
    border-radius: 3em;
    background: #F1F3F5;
    padding: 5px 10px 5px 10px;
    font-size: 0.9em;
  }
`;



function RightBar(props) {
  const { reply } = props;
  const navigate = useNavigate();
  const tags = data[0].tags;



  return (
    <Wrapper>
      <UserWrap>
        <div className="user-img">
          <img src="/img/user.png" alt="user" />
        </div>
        <div className="user-name">kim1234@nave.com</div>
      </UserWrap>


      
        

      {/* 내가 쓴글 리스트 */}
      <WriteBoardListWrap>
        <h3>내가 쓴글</h3>

        {data.map((post) => {
          return (
            <WriteBoardListItem
              key={post.id}
              post={post}
              onClick={(item) => {
                navigate(`/post/${item.id}`);
              }}
            />
          )
        })}
      </WriteBoardListWrap>

      <TopKeyWordWrap>
        <h3>TOP KEYWORDS</h3>
        <div className='tags-wrap'>
          {tags.map((tag) => {
            return (
              <div className='tag'
                key={tag.id}
                tag={tag}
              >
                <div className="tag-content">{tag.content}</div>
              </div>
            )
          })}
        </div>
      </TopKeyWordWrap>

    </Wrapper>
  );
}

export default RightBar;