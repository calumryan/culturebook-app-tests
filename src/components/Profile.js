import React from 'react';
import ProfileTabs from './ProfileTabs';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <article className="exhibit">
                    <div className="row">
                        <div className="col-sm-4 exhibit-feature">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Oasthouse_at_Cherry_Tree_Farm%2C_Frittenden.jpg/600px-Oasthouse_at_Cherry_Tree_Farm%2C_Frittenden.jpg" alt="Frittenden" width="600" />
                        </div>
                        <div className="col-sm-8">
                            <h1>Example exhibit</h1>
                            <ProfileTabs />
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Profile;