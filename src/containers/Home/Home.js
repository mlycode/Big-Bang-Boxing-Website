import React, { Component } from "react";

import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import logo from "../../assets/images/logobig.jpg";
import Paragraph from "../../components/Paragraph";
import { welcomeText, coachMessageText } from "../../assets/text/text";
import { Jumbotron, Grid, Col, Row } from "react-bootstrap";

import "./Home.css"

class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="homePageHeader">
                    <Grid>
                        <Row>
                            <Col md={4}>
                                <a href="https://www.facebook.com/bigbangboxing/" target="blank">
                                    <img className="homePageLargeLogo" src={logo} alt="Logo"/>
                                </a>
                            </Col>
                            <Col md={8}>
                                <div className="homePageHeaderContent">
                                    <h1>Welcome to Big Bang Boxing</h1>
                                    <h3>Canadian Owned and Operated, Located in Jeongja, South Korea!</h3>
                                    <Paragraph 
                                        paragraphs={welcomeText}/>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <Grid>
                    <h1>A Message from our Coaches</h1>
                    <Paragraph 
                        paragraphs={coachMessageText}/>
                </Grid>
            </React.Fragment>
        )
    }
};

export default Home;