import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoggedUser } from '../AppRoot/actions';

class AuthorizedRoute extends Component {

    componentWillMount() {
        getLoggedUser(false);
    }

    render() {
        const { component: Component, pending, logged, ...rest } = this.props;
        return (
            <Route {...rest} render={props => {
                if (pending) return (<div>Loading ....</div>);
                return logged
                    ? <Component {...props} />
                    : <Redirect to='/auth/login' />
            // : <Redirect to={{
            //         pathname: '/auth/login2222',
            //         state: {from: props.location},
            //     }}/>
            }}/>
        );
    }
}

const mapStateToProps = ({ loggedUserState }) => ({
    pending: loggedUserState.toJS().pending,
    logged: loggedUserState.toJS().logged,
});


export default connect(mapStateToProps)(AuthorizedRoute);
