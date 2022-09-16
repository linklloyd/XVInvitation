import React from "react";

const Info = ({ Title, Text , mode, Texts, name}) => {
    return (
        <div className={mode}>
            <h1>{Title}</h1>
            <p>{Text}</p>

        </div>
    )
}

Info.defaultProps = {
    Text: "",
    Title: ""
  };

export default Info;