import React, { Component } from "react";

import Heading from "../../components/Heading";
import Body from "../../components/Body";

class About extends Component {
    render () {
        return (
            <div>
                <Heading>
                    Welcome to Big Bang Boxing in Bundang, South Korea.
                </Heading>
                <Heading>
                    Canadian Owned and operated!
                </Heading>
                <Body 
                paragraphOne="Big Bang Boxing was established in xxxx and has a strong focus on introducing newcomers to the sport of boxing along with developing professional boxers' careers."
                paragraphTwo="Currently, we have several professional fighters training out of our gym, along with a multitude of younger and older students who want to learn how to box." />
            </div>
        )
    }
};

export default About;