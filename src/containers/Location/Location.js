import React, { Component, Fragment } from "react";

import { Grid, Row, Col } from "react-bootstrap";
import TitleBGImage from "../../components/TitleBGImage";
import MapWithAMarker from "../../components/GoogleMap";
import Paragraph from "../../components/Paragraph";

import { locationText } from "../../assets/text/text";
import img25 from "../../assets/images/img25.jpg";

const API_KEY = process.env.REACT_APP_GMAPS_API_KEY;

class Loc extends Component {
    render() {
        return (
            <Fragment>
                <TitleBGImage cardImage={img25}>
                    LOCATION
                </TitleBGImage>
                <Grid>
                    <Row>
                        <Col>
                            <Paragraph paragraphs={locationText} />
                            <MapWithAMarker
                                googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&v=3.exp&libraries=geometry,drawing,places"}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `600px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
        )
    }
};

export default Loc;