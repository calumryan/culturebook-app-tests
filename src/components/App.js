import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

    render(){
        return (
            <div className="started">
                <div className="menu-1">
                    <Header tagline="Home" />
                    <a href="/profile/">Link to profile 🖼</a>
                    <Footer />
                </div>
            </div>
            
        )
    }
}

export default App;