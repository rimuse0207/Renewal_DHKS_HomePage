import React from 'react';
import styled from 'styled-components';

const FourthPageMainPageMainDivBox = styled.div`
    border: 1px solid black;
    height: 100vh;
    position: relative;
    z-index: 1;
    ::after {
        width: 100%;
        height: 100%;
        content: '';
        background: linear-gradient(to bottom right, #fab709, #f96710);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.9;
    }
`;

const FourthPageMainPage = () => {
    return <FourthPageMainPageMainDivBox>FAA509</FourthPageMainPageMainDivBox>;
};

export default FourthPageMainPage;
