import React from "react";

const Xvtext = ({ Title, Text , mode, Texts, name}) => {
    return (
        <div className={mode}>
            <h2 className="fontExtra">{Texts}</h2>
            <h2 className="fontName">{name}</h2>
        </div>
    )
}

Xvtext.defaultProps = {
    Text: "",
    Title: ""
  };

export default Xvtext;