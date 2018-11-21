import React, { Component, Fragment } from "react";

import { Grid, Col, Row } from "react-bootstrap";
import TitleBGImage from "../../components/TitleBGImage";
import Paragraph from "../../components/Paragraph";
import CardWithImage from "../../components/CardWithImage";

import { contactText } from "../../assets/text/text";
import img14 from "../../assets/images/gallerySlider/img14.jpg";
import img24 from "../../assets/images/img24.jpg";


class Contact extends Component {
    render() {
        return (
            <Fragment>
                <TitleBGImage cardImage={img24}>
                    CONTACT US
               </TitleBGImage>
                <Grid>
                    <CardWithImage cardImage={img14}>
                        <Paragraph paragraphs={contactText} />
                        <p>Message us on Facebook: <a href="https://www.facebook.com/bigbangboxing/" target="blank">facebook.com/bigbangboxing</a></p>
                    </CardWithImage>
                </Grid>
            </Fragment>
        )
    }
};

export default Contact;