import React from 'react';
import Header from './Header';

class App extends React.Component {

    render(){
        return (
            <div className="started">
                <div className="menu">
                    <Header tagline="Home" />
                    <a href="/profile/">Link to profile 🖼</a>
                </div>
            </div>
            
        )
    }
}

export default App;