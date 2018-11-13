import React, { Component } from "react";

import logo from "../../assets/images/logobig.jpg";
import Paragraph from "../../components/Paragraph";
import Quote from "../../components/Quote";
import CoachMessage from "../../components/CoachMessage";
import CardWithImage from "../../components/CardWithImage";
import { welcomeText, coachMessageText } from "../../assets/text/text";
import coachJoeImg from "../../assets/images/gallery9.jpg";
import { Grid, Col, Row } from "react-bootstrap";

import "./Home.css"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="homePageHeader">
                    <Grid>
                        <Row>
                            <Col md={4}>
                                <a href="https://www.facebook.com/bigbangboxing/" target="blank">
                                    <img className="homePageLargeLogo" src={logo} alt="Logo" />
                                </a>
                            </Col>
                            <Col md={8}>
                                <div className="homePageHeaderContent">
                                    <h1>Welcome to Big Bang Boxing</h1>
                                    <h3>Canadian Owned and Operated, Located in Jeongja, South Korea!</h3>
                                    <Paragraph
                                        paragraphs={welcomeText} />
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <Grid className="grid-content">
                    <CardWithImage cardImage={coachJoeImg}>
                        <h1>Our Coaches</h1>
                    </CardWithImage>
                    <CoachMessage thumbnailImage={coachJoeImg}>
                        <h3>Coach Joe - Head Coach and Owner</h3>
                        <Paragraph paragraphs={coachMessageText} />
                    </CoachMessage>
                    <CardWithImage cardImage={coachJoeImg} imageLeft>
                        <Quote
                            quoteBody="Anyone can learn how to box. It's the best physical exercise that there is. People want to have fun while working out! they want to train martial arts! They want to get in better shape! Here, we do all of these things!"
                            quoteName="Coach Joe"
                        />
                    </CardWithImage>
                    <CardWithImage cardImage={coachJoeImg}>
                        <h1>What People Say About Us</h1>
                    </CardWithImage>
                </Grid>
                
            </React.Fragment>
        )
    }
};

export default Home;