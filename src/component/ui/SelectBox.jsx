import React, { useState } from 'react';
import styled from 'styled-components';

const StlyedSelectBox = styled.div`
    width: 8em;

    .selectBox-select {
        font-size: 1em;
        height: 1.8em;
        border-radius: 2em;
        padding: 0.2em;
    }
`

// const OPTIONS = [
//     { value: "titleWriter", name: "제목+작성자"},
//     { value: "title", name: "제목"},
//     { value: "writer", name: "작성자"}
// ];

function SelectBox(props) {
    const { options } = props;

    //선택된 값에 접근하는 이벤트
    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <StlyedSelectBox>
            <select className='selectBox-select' onChange={handleChange}>
                {options.map((option) => {
                    return (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                    )
                })}
            </select>
        </StlyedSelectBox>
    );
}

export default SelectBox;
