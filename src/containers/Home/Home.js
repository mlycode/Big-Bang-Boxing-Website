import React, { Component } from "react";

import logo from "../../assets/images/logobig.jpg";
import { Grid, Col, Row } from "react-bootstrap";

import "./Home.css"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="homePageHeader">
                    <Grid>
                        <Row>
                            <Col md={1}></Col>
                            <Col md={10}>
                                <div className="homePageHeaderContent">
                                    <h1>BIG BANG BOXING</h1>
                                    <h3>Canadian Owned and Operated, Located in Jeongja, South Korea!</h3>
                                </div>
                            </Col>
                            <Col md={1}></Col>
                        </Row>
                        <Row>
                            <Col md={4}></Col>
                            <Col md={4}>
                                <a href="https://www.facebook.com/bigbangboxing/" target="blank">
                                    <img className="homePageLargeLogo" src={logo} alt="Logo" />
                                </a>
                            </Col>
                            <Col md={4}></Col>
                        </Row>
                    </Grid>
                </div>


            </React.Fragment>
        )
    }
};

export default Home;