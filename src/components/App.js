import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

    render(){
        return (
            <div className="started">

                <Header tagline="Home" />
                <div className="c-main">
                    <section>
                    <a href="/profile/">Link to profile 🖼</a>
                    </section>
                </div>
                <Footer />

            </div>
            
        )
    }
}

export default App;