import React from 'react';
import styled from 'styled-components';

const FivePageMainPageMainDivBox = styled.div`
    height: 100vh;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        background-image: linear-gradient(to right bottom, rgba(20, 20, 20, 0) 10%, rgba(20, 20, 20, 0.2) 100%),
            url('/asset/clyde-rs-4XbZCfU2Uoo-unsplash.jpg');
        background-size: cover;
        height: 100%;
        width: 100%;
        z-index: -1;
        opacity: 0.4;
    }

    .FivePage_Float_Container {
        display: flex;
        justify-content: space-between;
        padding: 160px 0;
        height: 100%;

        .FivePage_Center_Box {
            padding: 0;
            display: flex;
            width: 80%;
            align-items: center;
            margin: 0 auto;

            .FivePage_Float_Left {
                width: 50%;
                height: 90%;

                .FivePage_Float_Left_Wrap {
                    padding-left: 20px;
                    width: 100%;
                    padding-right: 20px;
                    display: flex;
                    align-items: space-around;
                    height: 100%;
                    flex-flow: wrap;
                    h2 {
                        width: 100%;
                        font-size: 3em;
                        font-weight: 800;
                        font-family: GangwonEduPowerExtraBoldA;
                    }
                    table {
                        font-family: GangwonEduPowerExtraBoldA;
                        border-spacing: 0;
                        width: 100%;
                        text-align: left;
                        font-size: 20px;

                        tbody {
                            th {
                                padding: 20px 50px 8px 0;
                            }
                            td {
                                white-space: nowrap;
                                position: relative;
                                .font_sub {
                                    position: absolute;
                                    width: 100%;
                                    right: 40px;
                                }
                            }
                        }
                    }
                }
            }

            .FivePage_Float_Right {
                width: 50%;

                height: 100%;
                img {
                    width: 100%;
                }
            }
        }
    }
`;

const FivePageMainPage = () => {
    return (
        <FivePageMainPageMainDivBox>
            {/* <div style={{ height: '20vh' }}></div> */}
            <div className="FivePage_Float_Container">
                <div className="FivePage_Center_Box">
                    <div className="FivePage_Float_Left">
                        <div className="FivePage_Float_Left_Wrap">
                            <div style={{ width: '100%' }}>
                                <h2>오시는 길</h2>
                            </div>
                            <div style={{ width: '100%' }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>회사명.</th>
                                            <td>디에이치케이솔루션(주)</td>
                                        </tr>
                                        <tr>
                                            <th>주소.</th>
                                            <td>
                                                경기도 성남시 분당구 판교로255번길 28
                                                <div
                                                    className="font_sub"
                                                    style={{ fontSize: '15px', textAlign: 'end', paddingRight: '20px' }}
                                                >
                                                    (삼평동, 디에이치케이솔루션빌딩)
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>대표전화.</th>
                                            <td>031{')'} 639-9000</td>
                                        </tr>
                                        <tr>
                                            <th>대표팩스.</th>
                                            <td>031{')'} 639-9035</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="FivePage_Float_Right">
                        <img src={'/asset/dhks_map.png'}></img>
                    </div>
                </div>
            </div>
        </FivePageMainPageMainDivBox>
    );
};

export default FivePageMainPage;
