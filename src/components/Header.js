import React from 'react';

class Header extends React.Component {

    render(){
        return (

            <div>
                <header id="header" className="header">
                    <a href="/" role="button" className="link-reset burger--sm" id="js-menu-1">
                        <img src="../images/culturebook-small.svg" alt="C" className="hero-logo" width="9" /> <i className="js-menu icon icon-chevron-small icon-chevron-down icon-black">&rsaquo;</i></a>
                </header>
            </div>

        )
    }
}

export default Header;