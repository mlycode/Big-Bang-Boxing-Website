import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";

import "./ImageSlider.css";

export class ImageSlider extends Component {
    render() {
        const { imgArr } = this.props;
        return (
            <div>
                <Carousel>
                    {imgArr.map((img, i) =>
                        <Carousel.Item key={i}>
                            <img width={900} height={500} alt="gallery" src={img} />
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        );
    }
}

ImageSlider.propTypes = {
    imgArr: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default ImageSlider;