import React from "react";

const Header = ( {text} ) => {
    return (
    <header className="textHeader">{text}</header>
    )
}

Header.defaultProps = {
    text: "Hola"
  };

export default Header;