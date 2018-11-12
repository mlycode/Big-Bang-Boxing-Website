import React, { Component } from "react";

import Heading from "../../components/Heading";

import Paragraph from "../../components/Paragraph";

import { welcomeText, coachMessageText } from "../../assets/text/text";
import img9 from "../../assets/images/gallerySlider/gallery9.jpg";

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
                <img src={img9} alt="Head Coach"/>
               
                <Paragraph 
                    paragraphs={coachMessageText}
                />
            </div>
        )
    }
};

export default About;