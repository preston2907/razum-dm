import React, { Component } from "react";
import Slider from "react-slick";
import SliderArrow from '../slider-arrows/slider-arrows'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default class MultipleItems extends Component {
  render() {
    function SampleNextArrow(props) {
      const { className, onClick } = props;
      return <SliderArrow className={className} onClick={onClick} />

    }

    function SamplePrevArrow(props) {
      const { className, onClick } = props;
      return <SliderArrow className={className} onClick={onClick} />
    }

    const { elems, title } = this.props;

    // Desktop view
    let forInfinitiDesktop = false;
    if (elems.length > 3) {
      forInfinitiDesktop = true
    }
    const styleNamePC = title + ' desktop';
    const settingsPC = {
      dots: false,
      infinite: forInfinitiDesktop,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: styleNamePC
    };

    // Mobile View
    let forInfinitiMobile = false;
    if (elems.length > 2) {
      forInfinitiMobile = true
    }
    let showNumber = 2;
    if (elems.length === 1) {
      showNumber = 1;
    } 
    const styleNameMob = title + ' mobile';
    const settingsMob = {
      dots: false,
      infinite: forInfinitiMobile,
      speed: 500,
      slidesToShow: showNumber,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: styleNameMob
    };
    return (
      <>
        <Slider className={styleNamePC} {...settingsPC}>
          {elems}
        </Slider>
        <Slider className={styleNameMob} {...settingsMob}>
          {elems}
        </Slider>
      </>

    );
  }
}
