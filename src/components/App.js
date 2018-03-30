import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Featured from './Featured';
import Profile from './Profile';
import ExhibitSample from './ExhibitSample';
import sampleExhibits from '../sample-exhibits';

class App extends React.Component {

    constructor() {
        super();
        // Bind function to 'this'
        this.openProfile = this.openProfile.bind(this);
    }

    state = {
        exhibits: {}
    }

    loadExhibit = (key) => {
        console.log('Load profile');

        // Copy state
        const selection = { ...this.state.selection };

        // Add to or update selection
        selection[key] = selection[key] +1 || 1;

        // Set state to update view
        this.setState({ selection });

    }

    openProfile = (event) => {
        event.preventDefault();

        // Find this object
        const exhibitPathname = this;

        // Router to page
        console.log(exhibitPathname);
        //this.props.history.push(`/exhibits/${exhibitPathname}`);

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
                <div className="c-main">
                    <section>
                    <a href="/profile/">Link to profile 🖼</a>
                    </section>
                </div>

                <div className="featured-exhibits">
                    <div className="c-main">
                        <section>
                            <h3>Highlighted exhibits</h3>
                            <div className="featured__slider">
                            {
                                Object
                                .keys(this.state.exhibits)
                                .map(key => <ExhibitSample openProfile={this.openProfile} index={key} key={key} details={this.state.exhibits[key]} />)
                            }
                            </div>
                        </section>
                    </div>
                 </div>
                 <Profile />
                <Footer />

            </div>

        )
    }
}

export default App;