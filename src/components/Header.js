import React from 'react';

class Header extends React.Component {

    render(){
        return (

            <div>
                <header id="header" className="header">
                    <a href="/" role="button" className="link-reset burger--sm" id="js-menu-1">
                        <img src="../images/culturebook-small.svg" alt="C" className="hero-logo" width="9" /></a>

                    <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

                    <label className="js-menu icon icon-chevron-small icon-chevron-down icon-black hamburger-label" htmlFor="hamburger" role="button" title="Menu toggle" aria-labelledby="menu">&rsaquo;</label>

                    <nav id="menu" className="menu">
                        <ul className="nav nav-pills">
                            <li><a href="/">Home</a></li>
                            <li><a href="/profile">Profile</a></li>
                        </ul>
                    </nav>


                </header>
            </div>

        )
    }
}

export default Header;