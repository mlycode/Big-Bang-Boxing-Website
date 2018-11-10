import React, { Component, Fragment } from "react";

import Heading from "../../components/Heading";
import ImageSlider from "../../components/ImageSlider";

import img1 from "../../assets/images/gallerySlider/gallery1.jpg";
import img2 from "../../assets/images/gallerySlider/gallery2.jpg";
import img4 from "../../assets/images/gallerySlider/gallery4.jpg";
import img5 from "../../assets/images/gallerySlider/gallery5.jpg";
import img6 from "../../assets/images/gallerySlider/gallery6.jpg";
import img7 from "../../assets/images/gallerySlider/gallery7.jpg";
import img8 from "../../assets/images/gallerySlider/gallery8.jpg";
import img9 from "../../assets/images/gallerySlider/gallery9.jpg";
import img11 from "../../assets/images/gallerySlider/gallery11.jpg";
import img12 from "../../assets/images/gallerySlider/gallery12.jpg";


class Gallery extends Component {
    render () {
        const images = [img1, img2, img4, img5, img6, img7, img8, img9, img11, img12];
        return (
            <Fragment>
                <Heading>Our Members Having Fun and Winning Tournaments!</Heading>
                <ImageSlider imgArr = {images}/>
            </Fragment>
        )
    }
};

export default Gallery;