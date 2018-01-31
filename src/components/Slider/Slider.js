import React, { Component } from "react";
import "./Slider.css";

import Slider from "react-slick";

const slideMargin = {
  boxSizing: "border-box",
  border: "12px solid #fff"
};

class SimpleSlider extends Component {
  renderSlides() {
    return this.props.slides.map((slide, i) => (
      <div style={slideMargin} key={i}>
        {slide}
      </div>
    ));
  }

  render() {
    var settings = {
      dots: true,
      speed: 500,
      centerMode: true,
      centerPadding: "10px",
      slidesToShow: 1
    };
    return (
      <Slider className="Slider" {...settings}>
        {this.renderSlides()}
      </Slider>
    );
  }
}

export default SimpleSlider;
