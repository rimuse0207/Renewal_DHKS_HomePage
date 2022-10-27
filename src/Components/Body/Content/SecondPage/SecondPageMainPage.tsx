import React, { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import styled from 'styled-components';

const SecondPageMainPageMainDivBox = styled.div`
    height: 30vh;
    background-color: #efefef;
    .SecondPage_Float_Container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 100%;
        .SecondPage_Float_Left {
            display: flex;
            float: left;
            width: 40%;
            align-items: center;
            .SecondPage_Float_Left_Icons {
                font-size: 1.5em;
                margin-right: 30px;
                height: 100%;
                color: #ff8000;
            }
            h2 {
                font-size: 2.5em;
                line-height: 40px;
                font-family: KOTRA_BOLD-Bold;
            }
        }
        .SecondPage_Float_Right {
            float: right;
            width: 55%;
            line-height: 30px;
            font-family: ChosunSm;
        }
    }
`;

const SecondPageMainPage = () => {
    return (
        <SecondPageMainPageMainDivBox>
            <div className="SecondPage_Float_Container">
                <div className="SecondPage_Float_Left">
                    <div className="SecondPage_Float_Left_Icons">
                        <h2>
                            <FaLightbulb></FaLightbulb>
                        </h2>
                    </div>
                    <div className="SecondPage_Float_Left_Text">
                        <h2>DHKS</h2>
                        <h2>INTRODUCTION</h2>
                    </div>
                </div>
                <div className="SecondPage_Float_Right">
                    <p>
                        우수한 엔지니어와 영업망을 구축하여 반도체 제조공정의 Dicing, Grinding, Polishing부분에 있어서 제조 장비, Blade &
                        Wheel 및 Application 의 Total Solution을 제공하고 있으며 국내 반도체 산업의 발전과 고객 여러분의 경쟁력 향상에
                        일익을 담당하고 있습니다.
                    </p>
                </div>
            </div>
        </SecondPageMainPageMainDivBox>
    );
};

export default SecondPageMainPage;
