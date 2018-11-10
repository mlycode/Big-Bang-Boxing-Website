import React, { Component, Fragment } from "react";

import Heading from "../../components/Heading";
import Subtitle from "../../components/Subtitle";

import { contactText } from "../../assets/text/text";
import fbIcon from "../../assets/images/F_icon.svg";

class Contact extends Component {
    render () {
        return (
            <Fragment>
                <Heading>Contact Us</Heading>
                <Subtitle>{ contactText }</Subtitle>
                <a href="https://www.facebook.com/bigbangboxing/" target="blank">
                <img src={fbIcon} alt="Our Facebook Page"/>
                </a>
            </Fragment>
        )
    }
};

export default Contact;