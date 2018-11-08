import React, { Component, Fragment } from "react";

import Heading from "../../components/Heading";
import Subtitle from "../../components/Subtitle";

import { locationText } from "../../assets/text/text";

class Loc extends Component {
    render () {
        return (
            <Fragment>
                <Heading>Location</Heading>
                <Subtitle>{ locationText }</Subtitle>
            </Fragment>
        )
    }
};

export default Loc;