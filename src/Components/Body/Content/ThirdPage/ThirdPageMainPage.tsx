import React, { useState } from 'react';
import styled from 'styled-components';

const ThirdPageMainPageMainDivBox = styled.div`
    height: 100vh;
    position: relative;
    z-index: 1;
    ::after {
        width: 100%;
        height: 100%;
        content: '';
        /* background: url('/asset/daww.png');
        background-repeat: no-repeat;
        background-size: cover; */
        background: linear-gradient(to bottom right, #189cbe, #19328c);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.9;
    }
    .ThirdPage_Main_Cotainer {
        width: 80%;
        margin: 0 auto;
        max-width: 1300px;
        padding-top: 10vh;
        height: 100%;
        position: relative;
        @media only screen and (max-width: 1000px) {
            width: 90%;
        }

        .Position_Top_Cotainer {
            position: absolute;
            top: 130px;
            @media only screen and (max-width: 800px) {
                top: 100px;
                width: 100%;
            }
        }
        .Position_Bottom_Cotainer {
            position: absolute;
            bottom: 50px;
            width: 100%;
            @media only screen and (max-width: 1500px) {
                bottom: 30px;
            }
        }
        .Proccess_Main_Page_Container {
            display: flex;
            justify-content: space-between;
            @media only screen and (max-width: 800px) {
                display: flex;
                flex-flow: wrap;
                justify-content: center;
                .Proccess_Main_Page_Content {
                    width: 33% !important;
                    margin: 0;
                    .inner_box {
                        height: 85px !important;
                        background-size: 100% 85px !important;
                    }
                }
            }
            .Proccess_Main_Page_Content {
                position: relative;
                width: 16.66%;
                text-align: center;
                margin: 0 -9px;
                min-width: 130px;

                .inner_box {
                    display: table;
                    width: 100%;
                    height: 115px;
                    /* background-image: url('/asset/we.png'); */

                    background-size: 100% 115px;
                    background-repeat: no-repeat;
                    .inner {
                        display: table-cell;
                        vertical-align: middle;

                        h5 {
                            font-size: 14px;
                            color: rgba(255, 255, 255, 0.7);
                            font-weight: 600;
                        }
                        h4 {
                            display: block;
                            margin-top: 10px;
                            font-size: 18px;
                            line-height: 1.44;
                            color: #fff;
                            font-family: GangwonEduPowerExtraBoldA;
                        }
                        @media only screen and (min-width: 800px) and (max-width: 1500px) {
                            h5 {
                                font-size: 12px;
                            }
                            h4 {
                                font-size: 15px;
                            }
                        }
                        @media only screen and (max-width: 800px) {
                            h5 {
                                font-size: 10px;
                            }
                            h4 {
                                font-size: 12px;
                            }
                        }
                    }
                }
                .bottom-logo {
                    display: inline-block;
                    margin-top: 10px;
                    padding-top: 7px;
                    background: url('/asset/www.png') top center no-repeat;
                    animation: motionss 1s infinite alternate;
                    filter: drop-shadow(5px 5px 5px #000);
                    @keyframes motionss {
                        0% {
                            transform: translateY(0);
                        }
                        100% {
                            transform: translateY(4px);
                        }
                    }
                    img {
                        border: 0;
                        /* filter: drop-shadow(5px 5px 5px #000); */
                    }
                }
            }
        }
        strong {
            margin-top: 100px;
            margin-bottom: 20px;
            width: 100%;
            display: block;
            text-align: start;
            color: #fff;
            @media only screen and (min-width: 800px) and (max-width: 1320px) {
                font-size: 1em;
            }
            @media only screen and (max-width: 800px) {
                font-size: 0.9em;
            }
        }
        .ThirdPage_Main_Title {
            text-align: start;
            font-size: 2em;
            color: #fff;

            h2 {
                font-family: ChosunSm;
                line-height: 70px;
                @media only screen and (max-width: 1000px) {
                    line-height: 50px;
                }
            }
            @media only screen and (max-width: 1000px) {
                h2,
                div {
                    display: inline !important;
                }
            }
            .Text_Next {
                display: inline;
            }

            .Typing_Text {
                white-space: nowrap;
                margin: 0;
                color: transparent;
                display: inline;
                position: relative;
                font-family: '윤고딕218', '맑은고딕';
            }
            .on {
                white-space: nowrap;
                margin: 0;
                color: transparent;
                display: inline;
                position: relative;
                font-family: '윤고딕218', '맑은고딕';
                .Company_name_UnderLine {
                    /* width: 100%; */
                    position: absolute;
                    height: 3px;
                    left: 0px;
                    bottom: 0px;
                    animation-name: underLine;
                    animation-delay: 3s;
                    animation-fill-mode: forwards;
                    background-color: orange;
                    animation-duration: 1s;
                    border-radius: 10px;

                    @keyframes underLine {
                        0% {
                            width: 0%;
                        }
                        100% {
                            width: 100%;
                            /* box-shadow: inset 0 -10px 0 orange; */
                        }
                    }
                }

                ::before {
                    content: '디에이치케이솔루션';
                    position: absolute;
                    color: #fff;
                    overflow: hidden;

                    width: 100%;

                    animation: typing 5s steps(31);

                    @keyframes typing {
                        0% {
                            width: 0%;
                        }
                        50% {
                            width: 100%;
                        }
                        100% {
                            width: 100%;
                        }
                    }

                    @keyframes delayCheck {
                        0% {
                            width: 0%;
                        }
                        100% {
                            width: 100%;
                            box-shadow: inset 0 -10px 0 orange;
                        }
                    }
                }
                ::after {
                    content: '';
                    position: absolute;
                    color: #fff;
                    overflow: hidden;
                    /* box-shadow: inset 0 -10px 0 orange; */
                    width: 100%;
                }
            }

            @media only screen and (min-width: 1200px) and (max-width: 1320px) {
                font-size: 1.8em;
            }
            @media only screen and (min-width: 1000px) and (max-width: 1200px) {
                font-size: 1.5em;
            }
            @media only screen and (min-width: 865px) and (max-width: 1000px) {
                font-size: 1.3em;
            }
            @media only screen and (min-width: 500px) and (max-width: 865px) {
                font-size: 1em;
                .Text_Next {
                    display: block;
                }
            }
            @media only screen and (max-width: 500px) {
                font-size: 0.8em;
                .Text_Next {
                    display: block;
                }
            }
        }
        .ThirdPage_Sub_Title {
            text-align: start;
            color: lightgray;
            font-weight: bolder;
            padding-top: 30px;
            margin-bottom: 10px;
        }
    }
`;

type ThirdPageMainPagePropsType = {
    currentPage: number;
};

const ThirdPageMainPage = ({ currentPage }: ThirdPageMainPagePropsType) => {
    const [SemiconStep, setSemiconStep] = useState([
        {
            index: 1,
            desc: 'SILICON',
            sub_desc: 'PROCESS',
            stateCheck: false,
        },
        {
            index: 2,
            desc: 'FAB',
            sub_desc: 'PROCESS',
            stateCheck: true,
        },
        {
            index: 3,
            desc: 'WAFER TEST',
            sub_desc: 'PROCESS',
            stateCheck: false,
        },
        {
            index: 4,
            desc: 'ASSEMBLY',
            sub_desc: 'PROCESS',
            stateCheck: true,
        },
        {
            index: 5,
            desc: 'PACKAGING',
            sub_desc: 'PROCESS',
            stateCheck: false,
        },
        {
            index: 6,
            desc: 'PACKAGING',
            sub_desc: 'TEST PROCESS',
            stateCheck: false,
        },
    ]);

    return (
        <ThirdPageMainPageMainDivBox>
            <div className="ThirdPage_Main_Cotainer">
                <div>
                    {/* <ul>
                    <li>경영목적</li>
                    <li>경영문화</li>
                    <li>경영목표</li>
                    <li>경영전략</li>
                </ul> */}
                </div>
                <div>
                    <div className="Position_Top_Cotainer">
                        <div className="ThirdPage_Sub_Title">ABOUT</div>
                        <div className="ThirdPage_Main_Title">
                            <h2>
                                반도체 산업의 핵심역할을 담당해 <div className="Text_Next">나아갈 수 있는</div>
                            </h2>
                            <h2>
                                {currentPage === 2 ? (
                                    <div className="on">
                                        디에이치케이솔루션<span className="Company_name_UnderLine"></span>
                                    </div>
                                ) : (
                                    <div className="Typing_Text ">
                                        디에이치케이솔루션<span className="Company_name_UnderLine"></span>
                                    </div>
                                )}
                                이 되겠습니다.
                            </h2>
                        </div>
                    </div>
                    <div className="Position_Bottom_Cotainer">
                        <strong>Semiconductor Manufacturing Process</strong>
                        <div className="Proccess_Main_Page_Container">
                            {SemiconStep.map((list, i) => {
                                return (
                                    <div className="Proccess_Main_Page_Content">
                                        <div
                                            className="inner_box"
                                            style={
                                                list.stateCheck
                                                    ? { backgroundImage: 'url(/asset/main_about_content_bg_on.png)' }
                                                    : { backgroundImage: 'url(/asset/we.png)' }
                                            }
                                        >
                                            <div className="inner">
                                                <h5>STEP {list.index}</h5>
                                                <h4>
                                                    {list.desc} <br />
                                                    {list.sub_desc}
                                                </h4>
                                            </div>
                                        </div>
                                        {list.stateCheck ? (
                                            <span className="bottom-logo animationOn">
                                                <img src={'/asset/main_about_content_dhk_logo.png'}></img>
                                            </span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </ThirdPageMainPageMainDivBox>
    );
};

export default ThirdPageMainPage;
