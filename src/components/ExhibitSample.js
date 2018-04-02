import React from 'react';

class ExhibitSample extends React.Component {

    loadExhibit(event) {
        event.preventDefault();

        // const exhibit = {
        //     name: this.props.details.name,
        //     museum: this.props.details.museum
        // }

        //console.log(exhibit.name);

        const profileView = {
            visible: true,
            name: this.props.details.name
        }

        this.props.callbackFromExhibit( profileView );

    }

    render() {

        const { details } = this.props;

        return (
            <a className="featured featured-medium" onClick={(e) => this.loadExhibit(e)} href={ `exhibit/${details.path}` }>
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