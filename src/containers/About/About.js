import React, { Component } from "react";

import Heading from "../../components/Heading";
import Body from "../../components/Body";
import Quote from "../../components/Quote";

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
                <Quote 
                quoteBody="Anyone can learn how to box. It's the best physical exercise that there is. People want to have fun while working out! they want to train martial arts! They want to get in better shape! Here, we do all of these things!"
                quoteName="Coach Joe"/>
            </div>
        )
    }
};

export default About;