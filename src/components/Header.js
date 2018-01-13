import React from 'react';

const Header = (props) => {
    return (
        <header className="top">
            <h1>Culturebook</h1>
            <h2 className="tagline"><span>{props.tagline}</span></h2>
        </header>
    )
}

export default Header;