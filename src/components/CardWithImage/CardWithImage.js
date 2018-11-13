import React, { Component } from "react";

import { Col, Row } from "react-bootstrap";

import "./CardWithImage.css";

class CardWithImage extends Component {
    render() {
        const cardImage = {
            backgroundImage: "url(" + this.props.cardImage + ")"
        };
        if (this.props.imageLeft) {
            return (
                <Row>
                    <Col className="card-image-col" md={4}>
                        <div className="card-image" style={cardImage}></div>
                    </Col>
                    <Col className="card-content-container" md={8}>
                        <div className="card-content">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            );
        } else {
            return (
                <Row>
                    <Col className="card-content-container" md={8}>
                        <div className="card-content">
                            {this.props.children}
                        </div>
                    </Col>
                    <Col className="card-image-col" md={4}>
                        <div className="card-image" style={cardImage}></div>
                    </Col>
                </Row>
            );
        }
    }
}

export default CardWithImage;