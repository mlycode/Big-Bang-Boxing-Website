import React, { Component, Fragment } from "react";

import Heading from "../../components/Heading";
import Subtitle from "../../components/Subtitle";
import MapWithAMarker from "../../components/GoogleMap";

import { locationText } from "../../assets/text/text";

const API_KEY = process.env.REACT_APP_GMAPS_API_KEY;

class Loc extends Component {
    render() {
        return (
            <Fragment>
                <Heading>Location</Heading>
                <Subtitle>{locationText}</Subtitle>
                <MapWithAMarker
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&v=3.exp&libraries=geometry,drawing,places"}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `600px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </Fragment>
        )
    }
};

export default Loc;