import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ExhibitSample from './ExhibitSample';
import Profile from './Profile';
import sampleExhibits from '../sample-exhibits';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storeStateFromExhibit: false
        };
    }

    state = {
        exhibits: {}
    }

    exhibitIntoView = exhibit => {

        // 1. take a copy of the existing state
        const exhibits = { ...this.state.exhibits };

        // 2. add in exhibit
        const timestamp = Date.now();
        exhibits[`exhibit-${timestamp}`] = exhibit;

        // 3. set the new exhibits object
        this.setState({ exhibits: exhibits });

    }

    callback = ( stateFromExhibit ) => {

        this.setState({
            storeStateFromExhibit: stateFromExhibit.visible,
            storeExhibitName: stateFromExhibit.name
        });

    }

    componentWillMount() {
        // this runs right before the <App> is rendered
        this.setState({
            exhibits: sampleExhibits
        })
    }

    render(){
        return (
            <div className="started">

                <Header tagline="Home" />
                <div className={"featured-exhibits " + (this.state.storeStateFromExhibit ? 'featured-exhibits--show' : 'featured-exhibits--hidden')}>
                    <div className="c-main">
                        <section>
                            <h3>Highlighted exhibits</h3>
                            <div className="featured__slider">
                            {
                                Object
                                .keys(this.state.exhibits)
                                .map(key => <ExhibitSample callbackFromExhibit={this.callback} exhibitIntoView={this.exhibitIntoView} index={key} key={key} details={this.state.exhibits[key]} />)
                            }
                            </div>
                        </section>
                    </div>
                    <div className="c-exhibit">
                        <Profile sendSelection={this.state.storeExhibitName} />
                    </div>
                 </div>
                <Footer />

            </div>

        )
    }
}

export default App;