import React, { Component } from "react";

import Heading from "../../components/Heading";

class About extends Component {
    render () {
        return (
            <React.Fragment>
                <Heading>
                    Welcome to Big Bang Boxing in Bundang, South Korea.
                </Heading>
                <Heading>
                    Canadian Owned and operated!
                </Heading>
            </React.Fragment>
        )
    }
};

export default About;