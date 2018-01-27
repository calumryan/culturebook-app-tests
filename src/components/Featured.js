import React from 'react';
import ExhibitSample from './ExhibitSample';
import sampleExhibits from '../sample-exhibits';

class Featured extends React.Component {


    componentWillMount() {
        // this runs right before the <App> is rendered
        this.setState({
            exhibits: sampleExhibits
        })
    }

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
                            .map(key => <ExhibitSample index={key} key={key} details={this.state.exhibits[key]}  />)
                        }
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}

export default Featured;