import React from 'react';
import styled from 'styled-components';
import TagListItem from './TagListItem';

const Wrapper = styled.div`
    display: flex;
    margin: 2.2em 0 0.7em 0;
`

function TagList(props) {
    const { tags } = props;
    return (
        <Wrapper>
            {tags.map((tag) => {
                return(
                    <TagListItem
                        key={tag.id}
                        tag={tag}
                    />    
                )
            })}
            
        </Wrapper>
    );
}

export default TagList;