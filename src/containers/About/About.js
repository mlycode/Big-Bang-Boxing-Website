import React, { Component } from "react";

import Paragraph from "../../components/Paragraph";
import Quote from "../../components/Quote";
import CoachMessage from "../../components/CoachMessage";
import CardWithImage from "../../components/CardWithImage";
import { welcomeText, coachMessageText } from "../../assets/text/text";
import coachJoeImg from "../../assets/images/gallery9.jpg";
import { Grid, Col, Row } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Grid className="grid-content">
                <CardWithImage cardImage={coachJoeImg} imageLeft>
                    <h1>About Us</h1>
                </CardWithImage>
                <Row>
                    <Col xs={12}>
                        <Paragraph
                            paragraphs={welcomeText} />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}><div className="fb-page" data-href="https://www.facebook.com/bigbangboxing/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/bigbangboxing/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/bigbangboxing/">Big Bang Boxing 빅뱅복싱</a></blockquote></div></Col>
                    <Col md={4}></Col>
                </Row>
                <CardWithImage cardImage={coachJoeImg}>
                    <h1>Our Coaches</h1>
                </CardWithImage>
                <CoachMessage thumbnailImage={coachJoeImg}>
                    <h3>Coach Joe - Head Coach and Owner</h3>
                    <Paragraph paragraphs={coachMessageText} />
                    <Quote
                        quoteBody="Anyone can learn how to box. It's the best physical exercise that there is. People want to have fun while working out! they want to train martial arts! They want to get in better shape! Here, we do all of these things!"
                        quoteName="Coach Joe"
                    />
                </CoachMessage>
            </Grid>
        )
    }
};

export default About;