import React, { Component } from "react";

import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import logo from "../../assets/images/logosmall.jpg";

class Home extends Component {
    render () {
        const logoStyle = {
            borderRadius: "50%",
            width: "260px",
            height: "260px",
            border: "4px solid white",
            marginTop: "40px",
            padding: "0"
        }
        return (
            <React.Fragment>
                <Title>Big Bang Boxing</Title>
                <Subtitle>Located in Jeongja, South Korea!</Subtitle>
                <a href="https://www.facebook.com/bigbangboxing/" target="blank">
                    <img style={logoStyle} src={logo} alt="Logo"/>
                </a>
            </React.Fragment>
        )
    }
};

export default Home;