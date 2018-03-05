import React, { Component } from 'react';
import {auth, getLoggedUser} from '../../AppRoot/actions';

class HomePage extends Component {
    render() {
        const { history } = this.props;
        return (
           <div>
               <h3>HomePage</h3>
               <button onClick={() => {
                   auth(false).subscribe(() => {
                       history.push('/app');
                       getLoggedUser(false);
                   });
               }}>Logout page</button>
           </div>
        );
    }
}
export default HomePage;
