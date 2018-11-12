import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "./CoachMessage.css";

const CoachMessage = (props) => {
    const coachImage = {
        backgroundImage: "url(" + props.thumbnailImage + ")"
    };
    console.log(typeof props.thumbnailImage)
    return(
        <Grid>
            <Row className="coachMessageContainer">
                <Col md={3}>
                    <div className="coachMessageImage" style={coachImage}></div>
                </Col>
                <Col md={9}>{props.children}</Col>
            </Row>
        </Grid>
    )
}

export default CoachMessage;