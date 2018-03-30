import React from 'react';
import PropTypes from "prop-types";

class ExhibitSample extends React.Component {


    render() {

        const { details } = this.props;

        return (
            <a onClick={this.props.openProfile} className="featured featured-medium" href={ `exhibit/${details.path}` }>
                <div className="featured-container">
                    <div className="featured-image featured-medium-image" style={{ backgroundImage: `url(${details.image})` }}></div>
                    <div className="featured-info">
                        <div className="featured-info-header">{ details.museum }</div>
                        <h4>{ details.name }</h4>
                        <p>{ details.desc }</p>
                    </div>
                </div>
            </a>
        )
    }
}

export default ExhibitSample;