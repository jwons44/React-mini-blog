import React, { useState } from 'react';
import styled from 'styled-components';
import { faAngleRight, faAnglesRight, faAngleLeft, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from 'react-js-pagination';
const StyledPageButton = styled.div`
    display: flex;
    justify-content: center;

    .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  
  ul.pagination li {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
  }

  
  
  ul.pagination li a {
    color: #868e96;
    font-size: 1em;
  }
  
  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li:hover,
  ul.pagination li.active {
    background-color: #37b24d;
    border-radius: 0.5em;
  }
  
  ul.pagination li:hover a,
  /* ul.pagination li a:hover, */
  ul.pagination li a.active {
    color: white;
  }
  
`;

function PageButton(props) {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
        console.log(page);
    }
    return (
        <StyledPageButton>
            <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={70}
                pageRangeDisplayed={5}
                prevPageText={<FontAwesomeIcon icon={faAngleLeft} />}
                firstPageText={<FontAwesomeIcon icon={faAnglesLeft} />}
                nextPageText={<FontAwesomeIcon icon={faAngleRight} />}
                lastPageText={<FontAwesomeIcon icon={faAnglesRight} />}
                onChange={handlePageChange}
                // onChange={setPage}
            />
        </StyledPageButton>
    );
}

export default PageButton;