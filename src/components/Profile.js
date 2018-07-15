import React from 'react';
import ProfileTabs from './ProfileTabs';
import Header from './Header';
import Footer from './Footer';

class Profile extends React.Component {



    render() {
        return (
            <div>
                <Header tagline="Home" />
                <main>
                    <div className="container-fluid">

                        <article className="exhibit">
                            <div className="row">
                                <div className="col-sm-4 exhibit-feature">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oasthouse_at_Cherry_Tree_Farm%2C_Frittenden.jpg/600px-Oasthouse_at_Cherry_Tree_Farm%2C_Frittenden.jpg" alt="Frittenden" width="600" />
                                </div>
                                <div className="col-sm-8 exhibit-content">
                                    <ProfileTabs sendSelection={this.props.sendSelection} />
                                </div>
                            </div>
                        </article>

                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Profile;