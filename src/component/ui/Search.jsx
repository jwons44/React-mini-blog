import React, { useState } from "react";
import styled from 'styled-components';
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledSearchWrap = styled.div`
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
`
function Search(props) {

    const [searchToggled, setSearchToggled] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <StyledSearchWrap>
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
        </StyledSearchWrap>
    );
}

export default Search;