import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationMainPageMainDivBox = styled.div<{ currentPage: number }>`
    height: 100px;
    position: fixed;
    top: 0px;
    z-index: 100;
    width: 100%;
    background-color: ${props => (props.currentPage !== 0 ? '#fff' : '')};
    .Navigation_Main_Hover_Container {
        display: none;
    }

    :hover {
        background-color: #fff;
        transition: background-color 0.5s;

        .MenuBar_Menu_Cotent_Container {
            /* width: calc(90% - 300px); */
            height: 100%;
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: black !important;
                .Main_Nav_Title_Lists {
                    min-width: 100px;
                    a {
                        color: black;
                    }
                    :hover {
                        a {
                            border-bottom: 5px solid #304d9a;
                        }
                        color: #304d9a;
                        cursor: pointer;
                    }
                }
            }
        }

        .Navigation_Main_Hover_Container {
            background-color: #efefef;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            animation-duration: 0.5s;
            animation-name: slidein;
            @keyframes slidein {
                from {
                    opacity: 0;
                    height: 0%;
                }

                to {
                    opacity: 1;
                    height: 100%;
                }
            }
            .MenuBar_Logo_Container {
                width: 200px;
                text-align: center;
                padding-top: 20px;
                img {
                    width: 130px;
                }
            }
            .MenuBar_Menu_Cotent_Container {
                /* width: calc(90% - 300px); */
                width: 33%;
                height: 100%;
                font-family: GangwonEduPowerExtraBoldA;
                ul {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    color: black !important;

                    li {
                        min-width: 100px;
                        width: 100%;
                        text-align: center;
                        font-size: 1em;
                        font-weight: bolder;
                        height: 100%;
                        display: flex;
                        flex-flow: wrap;
                        padding-top: 5px;
                        a {
                            width: 100%;
                            display: block;
                            margin-top: 5px;
                            margin-bottom: 5px;
                            color: black;
                            :hover {
                                color: #304d9a;
                                position: relative;

                                ::after {
                                    content: '';
                                    position: absolute;
                                    left: 0px;
                                    top: 10px;
                                    width: 100%;
                                    height: 10px;
                                    background: linear-gradient(to top, #304d9a 20%, transparent 20%);
                                }
                            }
                        }
                        :hover {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }

    .Navigation_Main_Container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .MenuBar_Logo_Container {
            width: 200px;
            text-align: center;
            padding-top: 20px;
            img {
                width: 120px;
            }
        }
        .MenuBar_Menu_Cotent_Container {
            /* width: calc(90% - 300px); */
            width: 33%;

            height: 100%;
            font-family: GangwonEduPowerExtraBoldA;
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: ${props => (props.currentPage === 0 ? '#fff' : 'black')};

                li {
                    min-width: 100px;
                    width: 100%;
                    text-align: center;
                    font-size: 1.2em;
                    font-weight: bolder;
                    height: 100%;

                    a {
                        display: flex;
                        align-items: center;
                        height: 100%;
                        justify-content: center;
                        color: ${props => (props.currentPage === 0 ? '#fff' : 'black')};
                    }
                }
            }
        }
    }
`;

export type NavigationMainPageProps = {
    currentPage: number;
};

const NavigationMainPage = ({ currentPage }: NavigationMainPageProps) => {
    console.log(currentPage);
    return (
        <NavigationMainPageMainDivBox currentPage={currentPage}>
            <div className="Navigation_Main_Container">
                <div className="MenuBar_Logo_Container">
                    <Link to="/">
                        <img src={'/logo/DHKS.png'}></img>
                    </Link>
                </div>
                <div className="MenuBar_Menu_Cotent_Container">
                    <ul>
                        <li className="Main_Nav_Title_Lists">
                            <Link to="/Company/Intro">회사소개</Link>
                            <span className="hover_line"></span>
                        </li>
                        <li className="Main_Nav_Title_Lists">
                            <a>제품소개</a>
                            <span className="hover_line"></span>
                        </li>

                        <li className="Main_Nav_Title_Lists">
                            <a>고객지원</a>
                            <span className="hover_line"></span>
                        </li>
                        <li className="Main_Nav_Title_Lists">
                            <a>채용공고</a>
                            <span className="hover_line"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Navigation_Main_Hover_Container">
                <div className="MenuBar_Logo_Container"></div>
                <div className="MenuBar_Menu_Cotent_Container">
                    <ul>
                        <li>
                            <Link to="/Company/Intro">인사말</Link>
                            <a>연혁</a>
                            <a>오시는길</a>
                        </li>
                        <li>
                            <a>제품소개</a>
                        </li>

                        <li>
                            <a>부문별담당자</a>
                            <a>공지사항</a>
                        </li>
                        <li>
                            <a>채용공고</a>
                        </li>
                    </ul>
                </div>
            </div>
        </NavigationMainPageMainDivBox>
    );
};

export default NavigationMainPage;
