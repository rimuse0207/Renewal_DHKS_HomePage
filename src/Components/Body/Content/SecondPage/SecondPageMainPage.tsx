import React, { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import styled from 'styled-components';
import { NavigationMainPageProps } from '../../Navigation/NavigationMainPage';

const SecondPageMainPageMainDivBox = styled.div<{ currentPage: number }>`
    height: 100vh;
    background-color: #efefef;
    background-image: url('/asset/DHK_LOGO_Pattern.PNG');
    background-blend-mode: overlay;
    background-repeat: repeat;
    background-size: contain;
    .SecondPage_Float_Container {
        height: 40vh;
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        /* height: 100%; */

        @media only screen and (max-width: 1100px) {
            flex-flow: wrap;
            justify-content: center;
            align-items: center;
        }

        .SlideLeft {
            animation-name: sldieLeft;
            animation-duration: 2s;
            @keyframes slideLeft {
                0% {
                    transform: translateX(-300px);
                }

                100% {
                    transform: translateX(0px);
                }
            }
        }

        .SecondPage_Float_Left {
            display: flex;
            float: left;
            width: 40%;
            align-items: center;
            min-width: 450px;
            transform: translateX(-300px);
            opacity: 0;
            ${props =>
                props.currentPage === 1
                    ? `
                    animation-name:slideLeft;
                    animation-duration:1s;
                     animation-fill-mode: forwards;
        `
                    : ``}
            @keyframes slideLeft {
                0% {
                    transform: translateX(-300px);
                    opacity: 0;
                }

                100% {
                    transform: translateX(0px);
                    opacity: 1;
                }
            }

            @media only screen and (min-width: 1100px) and (max-width: 1500px) {
                flex-flow: wrap;
            }
            @media only screen and (max-width: 1100px) {
                justify-content: center;
                display: inline-grid;
                justify-content: center;
                text-align: center;
                height: 160px;

                .SecondPage_Float_Left_Icons {
                }
            }
            @media only screen and (max-width: 500px) {
                height: 120px;
            }
            .SecondPage_Float_Left_Icons {
                font-size: 1.5em;
                margin-right: 30px;
                height: 100%;
                color: #ff8000;
                @media only screen and (max-width: 500px) {
                    font-size: 1.3em;
                }
            }
            h2 {
                font-size: 2.5em;
                line-height: 40px;
                font-family: KOTRA_BOLD-Bold;
                @media only screen and (max-width: 500px) {
                    font-size: 1.8em;
                }
            }
        }
        .SecondPage_Float_Right {
            float: right;
            width: 55%;
            line-height: 30px;
            font-family: ChosunSm;
            min-width: 450px;
            transform: translateX(300px);
            opacity: 0;
            ${props =>
                props.currentPage === 1
                    ? `
                    animation-name:slideRight;
                    animation-duration:1s;
                   animation-fill-mode: forwards;
        `
                    : ``}

            @keyframes slideRight {
                0% {
                    transform: translateX(300px);
                    opacity: 0;
                }

                100% {
                    transform: translateX(0px);
                    opacity: 1;
                }
            }

            @media only screen and (max-width: 1100px) {
                width: 100%;
            }
            @media only screen and (max-width: 500px) {
                min-width: auto;
                p {
                    width: 95%;
                    font-size: 0.7em;
                }
            }
        }
    }

    .SecondPage_Relative_Container {
        display: flex;
        width: 80%;
        height: 50vh;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: space-around;

        @media only screen and (max-width: 800px) {
            width: 100%;
        }
        @media only screen and (max-width: 500px) {
            min-width: 170px;
            justify-content: center;
            .first_cotainer {
                .first {
                    h2 {
                        font-size: 0.8em;
                    }
                }
            }
        }
        .first_cotainer {
            border: 1px solid lightgray;
            width: 22%;
            max-height: 90%;
            padding: 15px;
            background-color: #fff;
            min-width: 250px;
            border-radius: 5px;
            position: relative;
            font-family: kotra_bold-bold;

            @media only screen and (max-width: 500px) {
                min-width: 170px;
            }

            .Hover_Detail,
            .Hover_SubName {
                display: none;
            }
            :hover {
                cursor: pointer;

                .Hover_SubName {
                    display: block;
                    position: absolute;
                    color: white;
                    width: 100%;
                    height: 0%;
                    background-color: rgba(0, 0, 0, 0.8);
                    left: 0;
                    bottom: 0;
                    animation-name: slideUp;
                    animation-duration: 0.8s;
                    animation-fill-mode: forwards;
                    z-index: 10;
                    text-align: center;

                    h2 {
                        font-size: 1.5em;
                        @media only screen and (max-width: 500px) {
                            font-size: 0.9em;
                        }
                    }
                    .Hover_Detail {
                        display: block;
                        text-align: start;
                        margin-top: 10px;
                        padding-left: 10px;
                        padding-right: 10px;
                        font-family: ChosunSm;
                        line-height: 30px;
                        @media only screen and (max-width: 500px) {
                            font-size: 0.5em;
                            line-height: 20px;
                        }
                    }
                    ::after {
                        background-color: (rgba(0, 0, 0, 5));
                    }
                    @keyframes slideUp {
                        0% {
                            height: 0%;
                            opacity: 0;
                        }
                        100% {
                            height: 70%;
                            opacity: 1;
                        }
                    }
                }
            }
            .first {
                height: 100%;
                background-size: cover;
                .Main_Title_Text {
                    font-family: KOTRA_BOLD-Bold;
                }
                :hover {
                    background-color: black;
                }
            }
        }
    }
`;

const SecondPageMainPage = ({ currentPage }: NavigationMainPageProps) => {
    const [MachineData, setMachineData] = useState([
        {
            name: 'Dicing SAW',
            imgSrc: 'dicing.jpg',
            subTitle: '고속 회전 스핀들에 절단용 블레이드를 장착하여 웨이퍼등의 피절단물을 절단 또는 홈가공하는 장치입니다.',
        },
        {
            name: 'Laser SAW',
            imgSrc: 'laser.jpg',
            subTitle: '레이저광을 이용하여 웨이퍼등의 피가공물의 풀커팅, 하프커팅 또는 그루빙하는 장치입니다.',
        },
        {
            name: 'Grinder',
            imgSrc: 'grinder.jpg',
            subTitle: '피가공물을 얇게 연삭하는 장치입니다.',
        },
        {
            name: 'Blade & Wheel',
            imgSrc: 'blade.jpg',
            subTitle: '다양한 피가공물의 절단, 홈 형성등 [Kiru(절단)] 가공을 하는 제품입니다.',
        },
    ]);

    return (
        <SecondPageMainPageMainDivBox currentPage={currentPage}>
            <div style={{ height: '10vh' }}></div>
            <div className={`SecondPage_Float_Container ${currentPage === 1 ? 'animation_ON' : ''}`}>
                <div className="SecondPage_Float_Left">
                    <div className="SecondPage_Float_Left_Icons">
                        <h2>
                            <FaLightbulb></FaLightbulb>
                        </h2>
                    </div>
                    <div className="SecondPage_Float_Left_Text">
                        <h2>DHK SOLUTION</h2>
                        <h2>INTRODUCTION</h2>
                    </div>
                </div>
                <div className="SecondPage_Float_Right">
                    <p>
                        우수한 엔지니어와 영업망을 구축하여 반도체 제조공정의 <strong>Dicing</strong>, <strong>Grinding</strong>,{' '}
                        <strong>Polishing</strong>부분에 있어서 <strong>제조 장비</strong>, <strong>Blade & Wheel</strong> 및{' '}
                        <strong>Application</strong> 의 Total Solution을 제공하고 있으며 국내 반도체 산업의 발전과 고객 여러분의 경쟁력
                        향상에 일익을 담당하고 있습니다.
                    </p>
                </div>
            </div>
            {/* <div className="SecondPage_Relative_Container">
                <div className="con-box relative-con">
                    <div className="tit-box">
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
            </div> */}
            <div className="SecondPage_Relative_Container">
                {MachineData.map((list, i) => {
                    return (
                        <div className="first_cotainer">
                            <div className="first" style={{ backgroundImage: `url(/logo/${list.imgSrc})` }}>
                                <h2 className="Main_Title_Text">{list.name}</h2>
                                <div className="Hover_SubName">
                                    <h2>{list.name}</h2>
                                    <div className="Hover_Detail">
                                        <p>{list.subTitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* <div className="first" style={{ backgroundImage: 'url(/logo/dicing.jpg)' }}>
                    Dicing SAW
                </div>
                <div className="first">Laser SAW</div>
                <div className="first">Grinder</div>
                <div className="first">Blade & Wheel</div> */}
            </div>
        </SecondPageMainPageMainDivBox>
    );
};

export default SecondPageMainPage;
