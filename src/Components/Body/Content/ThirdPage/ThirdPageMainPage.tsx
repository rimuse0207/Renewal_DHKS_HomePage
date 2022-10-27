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
        .Position_Top_Cotainer {
            position: absolute;
            top: 130px;
        }
        .Position_Bottom_Cotainer {
            position: absolute;
            bottom: 120px;
            width: 100%;
        }
        .Proccess_Main_Page_Container {
            display: flex;
            .Proccess_Main_Page_Content {
                position: relative;
                width: 16.66%;
                text-align: center;
                margin: 0 -9px;
                .inner_box {
                    display: table;
                    width: 100%;
                    height: 115px;
                    background-image: url('/asset/we.png');
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
                            font-weight: 400;
                        }
                    }
                }
                .bottom-logo {
                    display: inline-block;
                    margin-top: 10px;
                    padding-top: 7px;
                    background: url('/asset/www.png') top center no-repeat;
                    animation: motionss 1s infinite alternate;
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
        }
        .ThirdPage_Main_Title {
            text-align: start;
            font-size: 2em;
            color: #fff;
        }
        .ThirdPage_Sub_Title {
            text-align: start;
            color: lightgray;
            font-weight: bolder;
            padding-top: 30px;
            margin-bottom: 30px;
        }
    }
`;

const ThirdPageMainPage = () => {
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
                            <h2>반도체 산업의 핵심역할을 담당해 나아갈 수 있는</h2>
                            <h2>디에이치케이솔루션이 되겠습니다.</h2>
                        </div>
                    </div>
                    <div className="Position_Bottom_Cotainer">
                        <strong>Semiconductor Manufacturing Process</strong>
                        <div className="Proccess_Main_Page_Container">
                            {SemiconStep.map((list, i) => {
                                return (
                                    <div className="Proccess_Main_Page_Content">
                                        <div className="inner_box">
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
