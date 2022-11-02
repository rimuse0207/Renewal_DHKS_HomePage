import React, { useEffect, useState, useRef } from 'react';
import FirstPageMainPage from './Content/FirstPage/FirstPageMainPage';
import { SlidesDataTypes } from './Content/FirstPage/FirstPageMainPageTypes';
import styled from 'styled-components';
import SecondPageMainPage from './Content/SecondPage/SecondPageMainPage';
import ThirdPageMainPage from './Content/ThirdPage/ThirdPageMainPage';
import FourthPageMainPage from './Content/FourthPage/FourthPageMainPage';
import NavigationMainPage from './Navigation/NavigationMainPage';
import ReactPageScroller from 'react-page-scroller';
import FivePageMainPage from './Content/FivePage/FivePageMainPage';

const BodyMainPageMainDivBox = styled.div`
    overflow-y: auto !important;
    ::-webkit-scrollbar {
        display: none;
    }
`;
type windowSizeTypes = {
    width: number;
    height: number;
};

type PageScrollingTypes = {
    currentPage: number;
};

const BodyMainPage = () => {
    const outerDivRef = useRef<any>();
    let _pageScroller: any = null;
    const [scrollIndex, setScrollIndex] = useState(3);
    const [SlidesData, setSlidesData] = useState<SlidesDataTypes[]>([
        {
            country: '-',
            city: '디에이치케이솔루션',
            img: '/asset/carl-newton-2C6kAtCXf6U-unsplash.jpg',
        },
        {
            country: '디에이치케이솔루션',
            city: '토탈 솔루션 제공',
            img: '/asset/pawel-chu-ULh0i2txBCY-unsplash.jpg',
        },
        {
            country: '디에이치케이솔루션',
            city: '반도체산업 핵심역할',
            img: '/asset/maxence-pira-aNaq4lbX99E-unsplash.jpg',
        },

        {
            country: '디에이치케이솔루션',
            city: '고객만족 실현',
            img: '/asset/dadadad.png',
        },
    ]);
    const [ScrollY, setScrollY] = useState(0);
    const [windowSize, setWindowSize] = useState<windowSizeTypes>({
        width: 0,
        height: 0,
    });
    const [PageOverNowCheck, setPageOverNowChech] = useState(false);
    const [PageScrolling, setPageScrolling] = useState<PageScrollingTypes>({
        currentPage: 1,
    });
    const [currentPage, setCurrentPage] = useState<number>(0);

    const handlePageChange = (number: any) => {
        console.log(number);
        setCurrentPage(number);
    };
    const [blockScroll, setBlockScroll] = useState(true);
    function allowScrollDown() {
        setBlockScroll(false);
    }
    return (
        <BodyMainPageMainDivBox id="Test" ref={outerDivRef}>
            <NavigationMainPage currentPage={currentPage}></NavigationMainPage>

            <ReactPageScroller
                animationTimerBuffer={0}
                animationTimer={700}
                pageOnChange={handlePageChange}
                customPageNumber={currentPage}
                // blockScrollDown={blockScroll}
            >
                <FirstPageMainPage slides={SlidesData} PageOverNowCheck={PageOverNowCheck}></FirstPageMainPage>
                <SecondPageMainPage currentPage={currentPage}></SecondPageMainPage>
                <ThirdPageMainPage currentPage={currentPage}></ThirdPageMainPage>
                <FourthPageMainPage></FourthPageMainPage>
                <FivePageMainPage></FivePageMainPage>
            </ReactPageScroller>
        </BodyMainPageMainDivBox>
    );
};

export default BodyMainPage;
