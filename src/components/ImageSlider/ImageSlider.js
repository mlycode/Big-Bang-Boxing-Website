import React, { Component } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const {imgArr} = this.props;
        return (
            <Slider {...settings}>
                {imgArr.map((img, i) => 
                <div key={i} >
                    <img src={img} alt="image"/>
                </div>
                )}
            </Slider>
        );
    }
}

ImageSlider.propTypes = {
    imgArr: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default ImageSlider;