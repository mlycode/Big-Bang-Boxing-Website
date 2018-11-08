import React, { Component, Fragment } from "react";

import Heading from "../../components/Heading";
import Subtitle from "../../components/Subtitle";

import { contactText } from "../../assets/text/text";

class Contact extends Component {
    render () {
        return (
            <Fragment>
                <Heading>Contact Us</Heading>
                <Subtitle>{ contactText }</Subtitle>
            </Fragment>
        )
    }
};

export default Contact;