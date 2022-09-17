import React from "react";
import { Subheader, Paragraph, Header } from "./index";

const TextInfo = ({ header, subheader, text}) => {
    return (
        <>
        {
            header && header.length > 0 && (
                <Header>{header}</Header>
            )
        }
        {
            subheader && subheader.length > 0 && (
                <Subheader>{subheader}</Subheader>
            )
        }
        {
            text && text.length > 0 && (
                <Paragraph>{text}</Paragraph>
            )
        }
        </>
    )
};

export default TextInfo;