import React, { useState } from 'react';
import NavigationMainPage from '../Navigation/NavigationMainPage';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import CeoIntroMainPage from './CeoIntroMainPage';

const IntroMainPageMainDivBox = styled.div`
    .MainImage {
        height: 55vh;
        position: relative;
        overflow: hidden;
        h2 {
            font-size: 2em;
            color: #fff;
            text-align: center;
            line-height: 60vh;
            text-shadow: 2px 2px 5px rgb(0 0 0 / 50%);
        }
        ::after {
            content: '';
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/asset/bb.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: fixed;
            overflow: hidden;
            z-index: -1;
            /* transition: transform 5000ms ease-in-out; */

            animation-name: scaleOn;
            animation-duration: 2s;
            animation-fill-mode: forwards;

            @keyframes scaleOn {
                0% {
                    transform: scale(1.1, 1.1) rotate(0.002deg);
                }
                100% {
                    transform: scale(1, 1) rotate(0.002deg);
                }
            }
        }
    }
    .Side_Menu_Container {
        text-align: center;
        width: 100%;
        height: 77px;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
        .Side_Menu_Area {
            max-width: 1300px;
            margin: 0px auto;
            ul {
                display: flex;
                justify-content: center;
                .Select {
                    position: relative;
                    a {
                        span {
                            color: #368;
                            font-weight: bold;
                        }
                    }
                    ::before {
                        content: '';
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 90%;
                        border: 1px solid black;
                        background-color: #368;
                        margin: 0 auto;
                    }
                }

                li {
                    position: relative;
                    :hover {
                        ::before {
                            content: '';
                            position: absolute;
                            bottom: 0px;
                            left: 0px;
                            width: 100%;
                            border: 1px solid black;
                            background-color: #368;
                        }
                    }
                    :not(:first-child)::after {
                        content: '';
                        width: 5px;
                        height: 5px;
                        background-color: #c0c0c0;
                        position: absolute;
                        left: 0;
                        top: 50%;
                        margin-top: -2.5px;
                        border-radius: 50%;
                    }
                    a {
                        display: block;
                        display: table;
                        position: relative;
                        width: 100%;
                        height: 77px;
                        line-height: 1.2;
                        color: #4f4f4f;
                        font-size: 19px;
                        letter-spacing: -0.5px;
                        font-weight: 400;
                        padding: 0 30px;
                        word-break: keep-all;
                        -webkit-transition: all 0.4s;
                        transition: all 0.4s;
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                        span {
                            display: table-cell;
                            vertical-align: middle;
                            padding: 0 25px;
                        }
                    }
                }
            }
        }
    }

    .Intro_Ceo_Container {
    }
`;

type UseParamsTypes = {
    Page_Label: string;
};

const IntroMainPage = () => {
    const { Page_Label } = useParams<UseParamsTypes>();

    const [MenuBarStatus, setMenuBarStatus] = useState([
        {
            label: 'Intro',
            value: '인사말',
        },
        {
            label: 'History',
            value: '연혁',
        },
        {
            label: 'Map',
            value: '오시는 길',
        },
    ]);

    return (
        <IntroMainPageMainDivBox>
            <NavigationMainPage currentPage={2}></NavigationMainPage>
            <div className="MainImage">
                <h2>
                    {MenuBarStatus.map((list, i) => {
                        return <h2>{Page_Label === list.label ? list.value : ''}</h2>;
                    })}
                </h2>
            </div>
            <div className="Side_Menu_Container">
                <div className="Side_Menu_Area">
                    <ul>
                        {MenuBarStatus.map((list, i) => {
                            return (
                                <li className={Page_Label === list.label ? 'Select' : ''}>
                                    <Link to={`/Company/${list.label}`}>
                                        <span>{list.value}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <CeoIntroMainPage></CeoIntroMainPage>
        </IntroMainPageMainDivBox>
    );
};

export default IntroMainPage;
