import React from 'react';
import classNames from 'classnames';
import './FirstPageMainPage.scss';
import { SlidesDataTypes } from './FirstPageMainPageTypes';
import styled from 'styled-components';

const FirstPageMainPageMainDivBox = styled.div`
    /* .Slider_Container {
        width: 80%;

        height: 70vh;
        background: #fff;
        opacity: 0.1;
        position: absolute;
        border-radius: 5px;
    } */
    .slider__slide-subheading {
        @media only screen and (min-width: 800px) and (max-width: 1100px) {
            font-size: 20px;
        }
        @media only screen and (max-width: 800px) {
            font-size: 10px;
        }
    }
    .slider__slide-heading {
        @media only screen and (min-width: 800px) and (max-width: 1100px) {
            font-size: 60px;
        }

        @media only screen and (max-width: 800px) {
            font-size: 30px;
        }
    }
    .slider__slide-subheading {
        position: relative;
        .subMainTitle {
            font-size: 10px;
            position: absolute;
            top: 0px;
        }
    }
`;

type FirstPageMainPagePropsTypes = {
    slides: SlidesDataTypes[];
    PageOverNowCheck: boolean;
};

type FirstPageMainPageStateTypes = {
    activeSlide: number;
    prevSlide: number;
    sliderReady: boolean;
};

class FirstPageMainPage extends React.Component<FirstPageMainPagePropsTypes, FirstPageMainPageStateTypes> {
    IMAGE_PARTS: number;
    changeTO: any;
    AUTOCHANGE_TIME: number;

    constructor(props: FirstPageMainPagePropsTypes) {
        super(props);

        this.IMAGE_PARTS = 4;

        this.changeTO = null;
        this.AUTOCHANGE_TIME = 6000;

        this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }

    componentWillUnmount() {
        window.clearTimeout(this.changeTO);
    }

    componentDidMount() {
        this.runAutochangeTO();

        setTimeout(() => {
            this.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
    }

    runAutochangeTO() {
        this.changeTO = setTimeout(() => {
            this.changeSlides(1);
            this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
    }

    changeSlides(change: number) {
        window.clearTimeout(this.changeTO);
        const { length } = this.props.slides;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide });

        this.runAutochangeTO();
    }

    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state;
        return (
            <FirstPageMainPageMainDivBox className={classNames('slider', { 's--ready': sliderReady })}>
                {/* <p className="slider__top-heading">DHKS</p> */}
                <div className="slider__slides">
                    {this.props.slides.map((slide, index) => (
                        <div
                            className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                            key={slide.city}
                        >
                            <div className="slider__slide-content">
                                <div className="Slider_Container"></div>
                                {/* <h3 className="slider__slide-subheading">
                                    {slide.country}
                                    {index === 0 ? <></> : <span className="subMainTitle">{'(주)'}</span>}
                                </h3> */}
                                <h2 className="slider__slide-heading">
                                    {slide.city.split('').map(l => (
                                        <span>{l}</span>
                                    ))}
                                    {index === 0 ? <span className="subMainTitle">{'(주)'}</span> : <></>}
                                </h2>
                            </div>
                            <div className="slider__slide-parts">
                                {[...Array(this.IMAGE_PARTS).fill(1)].map((x, i) => (
                                    <div className="slider__slide-part" key={i}>
                                        <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider__control" onClick={() => this.changeSlides(-1)} />
                <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
            </FirstPageMainPageMainDivBox>
        );
    }
}

export default FirstPageMainPage;
