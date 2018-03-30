import React from 'react';
import ExhibitSample from './ExhibitSample';
import sampleExhibits from '../sample-exhibits';

class Featured extends React.Component {

    // constructor() {
    //     super();
    //     // Bind function to 'this'
    //     this.openProfile = this.openProfile.bind(this);
    // }

    componentWillMount() {
        // this runs right before the <App> is rendered
        this.setState({
            exhibits: sampleExhibits
        })
    }

    // static propTypes = {
    //     history: PropTypes.object
    // }

    // openProfile = (event) => {
    //     event.preventDefault();

    //     // Find this object
    //     const exhibitPathname = this.props;

    //     // Router to page
    //     console.log(exhibitPathname);
    //     //this.props.history.push(`/exhibits/${exhibitPathname}`);
    // }

    render(){
        return (

            <div className="featured-exhibits">
                <div className="c-main">
                    <section>
                        <h3>Highlighted exhibits</h3>
                        <div className="featured__slider">
                        {
                            Object
                            .keys(this.state.exhibits)
                            .map(key => <ExhibitSample exFunc={this.exFunc} index={key} key={key} details={this.state.exhibits[key]} />)
                        }
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}

export default Featured;