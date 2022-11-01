import React, { useState } from 'react';
import styled from 'styled-components';

const FourthPageMainPageMainDivBox = styled.div<{ currentPage: number }>`
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
        opacity: 0.8;
    }

    .FourthPage_Main_Title {
        font-size: 2em;
        color: #464646;
        margin-bottom: 30px;
    }

    .SecondPage_Relative_Container {
        width: 100%;
        margin: 0 auto;
        transform: translateY(100px);
        opacity: 0;
        ${props =>
            props.currentPage === 4
                ? `
                    animation-name:slideUpDown;
                    animation-duration:1s;
                   animation-fill-mode: forwards;
        `
                : ``}

        @keyframes slideUpDown {
            0% {
                transform: translateY(100px);
                opacity: 0;
            }

            100% {
                transform: translateY(0px);
                opacity: 1;
            }
        }

        @media only screen and (max-width: 1100px) {
            width: 90%;
        }
        @media only screen and (max-width: 800px) {
            width: 90%;
            margin-top: 30px;
            min-width: 500px;
            .con-box {
                display: grid !important;
                .tit-box {
                    width: 90% !important;
                    height: 50px;
                    line-height: 50px;
                    margin: 0 auto;
                }
                .logo-box {
                    width: 90% !important;
                    /* min-width: 500px; */
                    margin: 0 auto;
                    .logo-list {
                        padding: 0px !important;
                        li {
                            min-width: 90px !important;
                            img {
                                width: 80% !important;
                            }
                        }
                    }
                }
            }
        }
        .con-box {
            display: table;
            width: 100%;
            .logo-box {
                display: table-cell;
                vertical-align: middle;
                width: calc(100% - 140px);
                background-color: #fff;
                border: 1px solid #cecece;
                border-left: 0;
                .logo-list {
                    display: flex;
                    border-top: 1px solid #cecece;
                    padding: 0 30px 0 60px;
                    height: 110px;
                    li {
                        width: 20%;
                        min-width: 120px;
                        position: relative;
                        .logo-wrap {
                            position: relative;
                            top: 0px;
                            left: 0px;
                            width: 100%;
                            height: 100%;
                            .img-center {
                                position: absolute;
                                top: 0px;
                                left: 0px;
                                right: 0px;
                                bottom: 0px;
                                max-width: 100%;
                                max-height: 100%;
                                margin: auto;
                            }
                        }
                    }
                }
            }
        }
        .relative-con {
            .tit-box {
                display: table-cell;
                vertical-align: middle;
                width: 140px;
                background-color: #3077ae;
                text-align: center;
                .font-nexen {
                    font-size: 24px;
                    letter-spacing: -0.5px;
                    color: #fff;
                    font-weight: 400;
                }
            }
        }
    }
`;

const FourthPageMainPage = () => {
    const [FirstCompanyData, setFirstCompanyData] = useState([
        {
            name: 'YIKC',
            imgSrc: 'yikc_logo.png',
        },
        {
            name: 'EXICON',
            imgSrc: 'exicon_logo.jpg',
        },
        {
            name: 'SEMCNS',
            imgSrc: 'semcns_logo.jpg',
        },
        {
            name: 'SEMTEK',
            imgSrc: 'semtek_logo.jpg',
        },
        {
            name: 'DDDIA',
            imgSrc: 'dddia_logo.jpg',
        },
    ]);
    const [SecondCompanyData, setSecondCompanyData] = useState([
        {
            name: 'YIKJ',
            imgSrc: 'yikj_logo.jpg',
        },
        {
            name: 'SEMDIAMOND',
            imgSrc: 'semdiamond_logo.jpg',
        },
        {
            name: 'SEMMICRO',
            imgSrc: 'semmicro_logo.jpg',
        },
        {
            name: 'DISCO',
            imgSrc: 'disco_logo.jpg',
        },
        {
            name: 'DAS',
            imgSrc: 'das_logo.jpg',
        },
    ]);
    return (
        <FourthPageMainPageMainDivBox currentPage={4}>
            <div style={{ height: '20vh' }}></div>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <div style={{ color: 'gray', fontWeight: 'bolder', marginTop: '5px', marginBottom: '5px' }}>관계사</div>
                <div className="FourthPage_Main_Title">
                    <h2>
                        디에이치케이솔루션은 하단의
                        <br />
                        관계사와 일을 함께하고 있습니다.
                    </h2>
                </div>
                <div className="SecondPage_Relative_Container">
                    <div className="con-box relative-con">
                        <div className="tit-box">
                            <strong className="font-nexen">국내</strong>
                            <br />
                            <strong className="font-nexen">관계사</strong>
                        </div>
                        <div className="logo-box">
                            <ul className="logo-list">
                                {FirstCompanyData.map((list, i) => {
                                    return (
                                        <li>
                                            <div className="logo-wrap">
                                                <img className="img-center" src={`/logo/${list.imgSrc}`}></img>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* <ul className="logo-list">
                                {SecondCompanyData.map((list, i) => {
                                    return (
                                        <li>
                                            <div className="logo-wrap">
                                                <img className="img-center" src={`/logo/${list.imgSrc}`}></img>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div className="SecondPage_Relative_Container" style={{ marginTop: '10px' }}>
                    <div className="con-box relative-con">
                        <div className="tit-box" style={{ background: '#368' }}>
                            <strong className="font-nexen">해외</strong>
                            <br />
                            <strong className="font-nexen">관계사</strong>
                        </div>
                        <div className="logo-box">
                            {/* <ul className="logo-list">
                                {FirstCompanyData.map((list, i) => {
                                    return (
                                        <li>
                                            <div className="logo-wrap">
                                                <img className="img-center" src={`/logo/${list.imgSrc}`}></img>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul> */}
                            <ul className="logo-list">
                                {SecondCompanyData.map((list, i) => {
                                    return (
                                        <li>
                                            <div className="logo-wrap">
                                                <img className="img-center" src={`/logo/${list.imgSrc}`}></img>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </FourthPageMainPageMainDivBox>
    );
};

export default FourthPageMainPage;
