import React from 'react';
import styled from 'styled-components';

const CeoIntroMainPageMainDivBox = styled.div`
    .Intro_Ceo_Container {
        width: 100%;
        height: 100%;
        ::after {
            clear: both;
            content: '';
            display: block;
        }
        .Image_Container {
            width: 50%;
            float: left;
            padding: 50px;
            img {
                width: 100%;
            }
        }
        .Text_Container {
            width: 50%;
            height: 100%;
            float: right;
            display: flex;
            flex-wrap: wrap;
            padding: 50px;
            h2,
            p {
                display: block;
                width: 100%;
                margin-top: 20px;
                margin-bottom: 20px;
                white-space: pre-wrap;
                letter-spacing: 0.1em;
            }
            h2 {
                font-size: 2em;
            }
            p {
                font-family: ChosunSm;
                line-height: 30px;
                font-weight: 500;
            }
        }
    }
`;

const CeoIntroMainPage = () => {
    return (
        <CeoIntroMainPageMainDivBox>
            <div className="Intro_Ceo_Container">
                <div className="Image_Container">
                    <img src={'/asset/rnd_07_B.jpg'}></img>
                </div>

                <div className="Text_Container">
                    <h2>고객의 행복을 실현시켜드리는 DHK</h2>
                    <p>
                        안녕하십니까?
                        <br />
                        폐사의 홈페이지를 방문해주신 모든 분들께 감사의 말씀을 드립니다.
                    </p>
                    <p>
                        고객여러분의 사랑과 성원에 힘입어 2006년 일본 DISCO사의 출자 법인으로 새롭게 출발한 폐사는 고객감동을 최우선 목표로
                        전 임직원이 체계적인 고객관리 시스템을 개발하고 기술력 및 서비스 능력 향상을 위하여 최선을 다하고 있으며 이를
                        바탕으로 고객의 만족을 넘어 고객 감동을 실현하기 위하여 노력하고 있습니다.
                    </p>
                    <p>
                        저희 DHK는 우수한 엔지니어와 영업망을 구축하여 반도체 제조공정의 Dicing, Grinding, Polishing 부분에 있어서 제조방비,
                        Blade & Wheel 및 Application 의Total Solution 을 제공고 있으며 국내 반도체 산업의 발전과 고객 여러분의 경쟁력 향상에
                        일익을 담당하고 있습니다. 앞으로도 지속적 관심과 애정을 부탁드리고, 저를 비롯한 모든 임직원은 고객 만족과 가치
                        창조를 위하여 최선을 다하며{' '}
                        <span style={{ color: 'blue', fontWeight: 'bold' }}>
                            {"'"}고객의 행복을 실현시켜드리는 DHK{"'"}
                        </span>
                        가 되도록 노력하겠습니다. 감사합니다.
                    </p>
                    <p>
                        대표이사 <strong>최</strong> <strong>명</strong> <strong>배</strong>
                    </p>
                </div>
            </div>
        </CeoIntroMainPageMainDivBox>
    );
};

export default CeoIntroMainPage;
