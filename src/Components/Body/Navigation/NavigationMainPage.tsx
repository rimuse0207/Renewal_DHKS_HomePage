import React from 'react';
import styled from 'styled-components';

const NavigationMainPageMainDivBox = styled.div<{ currentPage: number }>`
    height: 100px;
    position: fixed;
    top: 0px;
    z-index: 100;
    width: 100%;

    .Navigation_Main_Hover_Container {
        display: none;
    }

    :hover {
        background-color: #fff;
        transition: background-color 0.5s;

        .MenuBar_Menu_Cotent_Container {
            width: calc(90% - 300px);
            height: 100%;
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: black !important;
                li {
                    min-width: 100px;
                    :hover {
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
                width: 300px;
                text-align: center;
                padding-top: 20px;
                img {
                    width: 130px;
                }
            }
            .MenuBar_Menu_Cotent_Container {
                width: calc(90% - 300px);
                height: 100%;
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

                        a {
                            display: block;
                            margin-top: 5px;
                            margin-bottom: 5px;
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
        .MenuBar_Logo_Container {
            width: 300px;
            text-align: center;
            padding-top: 20px;
            img {
                width: 150px;
            }
        }
        .MenuBar_Menu_Cotent_Container {
            width: calc(90% - 300px);
            height: 100%;
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
                    <img src={'/logo/DHKS.png'}></img>
                </div>
                <div className="MenuBar_Menu_Cotent_Container">
                    <ul>
                        <li>
                            <a>회사소개</a>
                            <span className="hover_line"></span>
                        </li>
                        <li>
                            <a>제품소개</a>
                            <span className="hover_line"></span>
                        </li>
                        <li>
                            <a>자료실</a>
                            <span className="hover_line"></span>
                        </li>
                        <li>
                            <a>고객지원</a>
                            <span className="hover_line"></span>
                        </li>
                        <li>
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
                            <a>인사말</a>
                            <a>연혁</a>
                            <a>오시는길</a>
                        </li>
                        <li>
                            <a>제품소개</a>
                        </li>
                        <li>
                            <a>자료실</a>
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
