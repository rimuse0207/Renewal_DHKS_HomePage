import React, { useEffect, useState } from 'react';
import FirstPageMainPage from './Content/FirstPage/FirstPageMainPage';
import { SlidesDataTypes } from './Content/FirstPage/FirstPageMainPageTypes';
import styled from 'styled-components';
import SecondPageMainPage from './Content/SecondPage/SecondPageMainPage';
import ThirdPageMainPage from './Content/ThirdPage/ThirdPageMainPage';
import FourthPageMainPage from './Content/FourthPage/FourthPageMainPage';

const BodyMainPageMainDivBox = styled.div`
    border: 1px solid black;
`;
type windowSizeTypes = {
    width: number;
    height: number;
};
const BodyMainPage = () => {
    const [SlidesData, setSlidesData] = useState<SlidesDataTypes[]>([
        {
            country: 'DHKS',
            city: '디에이치케이솔루션',
            img: '/asset/maxence-pira-INphxuo4xCA-unsplash.jpg',
        },
        {
            country: 'DHKS',
            city: '반도체산업 핵심역할',
            img: '/asset/maxence-pira-aNaq4lbX99E-unsplash.jpg',
        },
        {
            country: 'DHKS',
            city: 'TOTAL SOLUTION 제공',
            img: '/asset/fabio-oyXis2kALVg-unsplash.jpg',
        },
        {
            country: 'DHKS',
            city: '고객만족 실현',
            img: '/asset/nasa-Q1p7bh3SHj8-unsplash.jpg',
        },
    ]);
    const [ScrollY, setScrollY] = useState(0);
    const [windowSize, setWindowSize] = useState<windowSizeTypes>({
        width: 0,
        height: 0,
    });
    const [PageOverNowCheck, setPageOverNowChech] = useState(false);

    const handleFollow = () => {
        setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    };

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        };
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        };
    });

    useEffect(() => {
        console.log('ScrollY is ', ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
        console.log('windowSize.height', windowSize.height);
    }, [ScrollY]);

    return (
        <BodyMainPageMainDivBox>
            <FirstPageMainPage slides={SlidesData} PageOverNowCheck={PageOverNowCheck}></FirstPageMainPage>
            <SecondPageMainPage></SecondPageMainPage>
            <ThirdPageMainPage></ThirdPageMainPage>
            <FourthPageMainPage></FourthPageMainPage>
        </BodyMainPageMainDivBox>
    );
};

export default BodyMainPage;
