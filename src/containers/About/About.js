import React, { Component, Fragment } from "react";

import Paragraph from "../../components/Paragraph";
import Quote from "../../components/Quote";
import CoachMessage from "../../components/CoachMessage";
import { welcomeText, coachMessageText } from "../../assets/text/text";
import coachJoeImg from "../../assets/images/gallery9.jpg";
import img4 from "../../assets/images/gallerySlider/gallery4.jpg";
import img7 from "../../assets/images/gallerySlider/gallery7.jpg";
import { Grid, Col, Row } from "react-bootstrap";
import TitleBGImage from "../../components/TitleBGImage";

class About extends Component {
    render() {
        return (
            <Fragment>
                <TitleBGImage cardImage={img4}>
                    ABOUT US
                </TitleBGImage>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Paragraph
                                paragraphs={welcomeText} />
                            <p>We welcome all ages and skill groups! Check out our <a href="https://www.facebook.com/bigbangboxing/" target="blank">Facebook page</a> for more information!</p>
                        </Col>
                    </Row>
                </Grid>
                <TitleBGImage cardImage={img7}>
                    OUR COACHES
                </TitleBGImage>
                <Grid>
                    <CoachMessage thumbnailImage={coachJoeImg}>
                        <h3>Coach Joe - Head Coach and Owner</h3>
                        <Paragraph paragraphs={coachMessageText} />
                        <Quote
                            quoteBody="Anyone can learn how to box. It's the best physical exercise that there is. People want to have fun while working out! they want to train martial arts! They want to get in better shape! Here, we do all of these things!"
                            quoteName="Coach Joe"
                        />
                    </CoachMessage>
                </Grid>
            </Fragment>
        )
    }
};

export default About;