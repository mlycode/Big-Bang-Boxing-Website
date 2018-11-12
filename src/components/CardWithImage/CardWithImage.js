import React, { Component } from "react";

import { Grid, Col, Row } from "react-bootstrap";

import "./CardWithImage.css";

class CardWithImage extends Component {
    render() {
        if (this.props.imageLeft) {
            return(
                <div className="card-with-image-container">
                    <Grid>
                        <Row>
                            <Col md={4}>
                                <img src={this.props.cardImage}/>
                            </Col>
                            <Col className="card-content" md={8}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Grid>
                </div>
            );
        } else {
            return(
                <div className="card-with-image-container">
                    <Grid>
                        <Row>
                            <Col className="card-content" md={8}>
                                {this.props.children}
                            </Col>
                            <Col md={4}>
                                <img src={this.props.cardImage}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            );
        }
    }
}

export default CardWithImage;