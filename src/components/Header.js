import React from "react";

const Header = ( {text, type} ) => {
    return (
    <header className={type}>{text}</header>
    )
}

Header.defaultProps = {
    text: "Hola"
  };

export default Header;