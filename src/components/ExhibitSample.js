import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import PropTypes from "prop-types";

class ExhibitSample extends React.Component {

    static propTypes = {
        history: PropTypes.object
    }

    loadExhibit(event) {
        event.preventDefault();

        // const exhibit = {
        //     name: this.props.details.name,
        //     museum: this.props.details.museum
        // }

        const profileView = {
            visible: true,
            name: this.props.details.name
        }

        this.props.callbackFromExhibit( profileView );
        this.props.history.push(`/exhibit/`);

    }

    render() {

        const { details } = this.props;

        return (
            <Router>
                <div className="featured featured-medium">
                <Link  to={{
                    pathname: `/exhibit/${details.path}`
                }} onClick={(e) => this.loadExhibit(e)}>
                    <div className="featured-container">
                        <div className="featured-image featured-medium-image" style={{ backgroundImage: `url(${details.image})` }}></div>
                        <div className="featured-info">
                            <div className="featured-info-header">{ details.museum }</div>
                            <h4>{ details.name }</h4>
                            <p>{ details.desc }</p>
                        </div>
                    </div>
                </Link>
                </div>
            </Router>

        )
    }
}

export default ExhibitSample;