import React from 'react';
import styled from 'styled-components';
const StyledPageTitleWrap = styled.div`
    
`



const TitleH1 = styled.h1`
    
`

function PageTitle(props) {

    const { title } = props;
    return (
        <StyledPageTitleWrap>            
            <TitleH1>{title}</TitleH1>
        </StyledPageTitleWrap>
    );
}

export default PageTitle;