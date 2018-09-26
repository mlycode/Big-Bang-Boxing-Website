import React, { Component } from "react";

import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <Title>Big Bang Boxing</Title>
                <Subtitle>Located in Jeongja, South Korea!</Subtitle>
            </React.Fragment>
        )
    }
};

export default Home;