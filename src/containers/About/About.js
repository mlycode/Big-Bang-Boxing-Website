import React, { Component } from "react";

import Heading from "../../components/Heading";
import Quote from "../../components/Quote";
import Paragraph from "../../components/Paragraph";

import { welcomeText, coachMessageText } from "../../assets/text/text";

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
                <Paragraph
                    paragraphs={welcomeText}
                />
                <Heading>
                    A Message from the Head Coach and Owner
                </Heading>
                <Quote 
                    quoteBody="Anyone can learn how to box. It's the best physical exercise that there is. People want to have fun while working out! they want to train martial arts! They want to get in better shape! Here, we do all of these things!"
                    quoteName="Coach Joe"
                />
                <Paragraph 
                    paragraphs={coachMessageText}
                />
            </div>
        )
    }
};

export default About;