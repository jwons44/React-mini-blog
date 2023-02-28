import React from 'react';
import styled from 'styled-components';
const StyledAdvertisement = styled.div`
    border: 1px solid gray;
    border-radius: 1em;
    width: 100%;
    /* max-width: 720px; */
    height: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(img/ad.png);
    background-size: cover;
`;

function Advertisement(props) {
    return (
        <StyledAdvertisement />
    );
}

export default Advertisement;