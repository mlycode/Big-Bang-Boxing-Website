import React, { Component } from "react";

import "./TitleBGImage.css";

class TitleBGImage extends Component {
    render() {
        const cardImage = {
            backgroundImage: "url(" + this.props.cardImage + ")"
        }
        return (
            <div className="title-bg-container" style={cardImage}>
                <h1>{this.props.children}</h1>
            </div>
        );
    }
};

export default TitleBGImage;