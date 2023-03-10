import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styled from 'styled-components';
const Wrapper = styled.div`
    .tag-input-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.8em;
        margin-bottom: 0.5em;
    }

    .tag-input {
        width: 83%;
        height: 100%;
        border: 1px solid #CCCED1;
        border-radius: 2em;
        padding-left: 20px;
    }

    .tag-input:focus {
        outline-color: #37b24d;
    }

    .tag-input::placeholder {
        color: #868e96;
        font-size: 1.1em;
    }
    
    .add-tagBtn {
        color: white;
        padding: 8px 16px;
        font-size: 1em;
        border: none;
        background: #37b24d;
        /* border: 1px solid #37b24d; */
        border-radius: 3em;
        cursor: pointer;
        display: flex;
        align-items: flex-end;
    }

    .add-tagBtn span {
        margin-right: 0.3em;
    }
`;

function CreateTag({ tagname, onChange, onCreate, onKeyDown }) {
    return (
        <Wrapper>
            <div className="tag-input-wrap">
                <input
                    className="tag-input"
                    name="tagname"
                    placeholder="주요 특징들을 키워드로 입력해주세요."
                    onChange={onChange}
                    value={tagname}
                    onKeyDown={(e) => onKeyDown(e)}
                />
                <button className="add-tagBtn" onClick={onCreate}>
                    <span>추가</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                </button>
            </div>
        </Wrapper>
    );
}

export default CreateTag;