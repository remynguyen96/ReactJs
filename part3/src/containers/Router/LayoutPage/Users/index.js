import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import UserNav from '../../Menu/UserNav';
import AddUserPage from "./AddUserPage";
import BrowseUsersPage from "./BrowseUsersPage";

// Sub Layouts
// import BrowseUsersPage from '../pages/BrowseUsersPage'
// import AddUserPage from '../pages/AddUserPage'
// import UserProfilePage from '../pages/UserProfilePage'

const UserPage = ({ match }) => (
    <div className="user-sub-layout">
        <aside>
            <UserNav />
        </aside>
        <div className="primary-content">
            <Switch>
                <Route path={match.path} exact component={BrowseUsersPage} />
                <Route path={`${match.path}/add`} exact component={AddUserPage} />
                {/*<Route path={`${match.path}/:userId`}  component={UserProfilePage} />*/}
            </Switch>
        </div>
    </div>
)

export default UserPage;
