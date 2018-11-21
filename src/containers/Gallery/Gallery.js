import React, { Component, Fragment } from "react";

import TitleBGImage from "../../components/TitleBGImage";
import ImageSlider from "../../components/ImageSlider";
import titleImage from "../../assets/images/img-ring.jpg";

import img1 from "../../assets/images/gallerySlider/gallery1.jpg";
import img2 from "../../assets/images/gallerySlider/gallery2.jpg";
import img4 from "../../assets/images/gallerySlider/gallery4.jpg";
import img5 from "../../assets/images/gallerySlider/gallery5.jpg";
import img7 from "../../assets/images/gallerySlider/gallery7.jpg";
import img8 from "../../assets/images/gallerySlider/gallery8.jpg";
import img11 from "../../assets/images/gallerySlider/gallery11.jpg";
import img12 from "../../assets/images/gallerySlider/gallery12.jpg";
import img15 from "../../assets/images/gallerySlider/img15.jpg";
import img16 from "../../assets/images/gallerySlider/img16.jpg";
import img17 from "../../assets/images/gallerySlider/img17.jpg";
import img18 from "../../assets/images/gallerySlider/img18.jpg";
import img19 from "../../assets/images/gallerySlider/img19.jpg";
import img20 from "../../assets/images/gallerySlider/img20.jpg";
import img21 from "../../assets/images/gallerySlider/img21.jpg";
import img22 from "../../assets/images/gallerySlider/img22.jpg";
import img23 from "../../assets/images/gallerySlider/img23.jpg";

class Gallery extends Component {
    render() {
        const images = [img1, img2, img4, img5, img7, img8, img11, img12, img15, img16, img17, img18, img19, img20, img21, img22, img23];
        return (
            <Fragment>
                <TitleBGImage cardImage={titleImage}>
                    Us Having Fun and Winning Tournaments!
                </TitleBGImage>
                <ImageSlider imgArr={images} />
            </Fragment>
        )
    }
};

export default Gallery;