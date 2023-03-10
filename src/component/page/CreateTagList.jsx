import React from 'react';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
const Wrapper = styled.div`
    .tag-list-wrap {
        border: 1px solid #CCCED1;
        border-radius: 2em;
        width: 100%;
        height: 2.8em;
        display: flex;
        align-items: center;
    }

    .tag-list {
        display: flex;
        margin: 0;
        padding: 0;
        padding-left: 20px;
        
    }

    .tag-list li {
        margin-right: 5px;
    }

    .tag-list li span {
        font-size: 1.1em;
    }


    .remove-tagBtn {
        font-size: 1.5em;
        border: none;
        background: none;
        color: #37b24d;
        padding: 0 0 0 3px;
    }
`
function Tag({ tag, onRemove }) {
    const { tagname, id } = tag;
    return (
        <li>
            <span>#{tagname}</span>
            <button className="remove-tagBtn" onClick={() => onRemove(id)}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
        </li>

    )
}

function CreateTagList({ tags, onRemove }) {
    return (
        <Wrapper>
            <div className="tag-list-wrap">
                <ul className="tag-list">
                    {
                        tags.map(
                            tag => (<Tag tag={tag} key={tag.id} onRemove={onRemove} />)
                        )
                    }
                </ul>
            </div>
        </Wrapper>
    );
}

export default CreateTagList;