import React from "react";
import PropTypes from "prop-types";

import "./Paragraph.css";

const Paragraph = ({ paragraphs }) => {
    return(
        <div className="Paragraph">
            {paragraphs.map((para, i) => <p key={i}>{para}</p>)}
        </div>
    )
};

Paragraph.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Paragraph;