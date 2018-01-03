import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

class PrivateRoute extends React.Component {
    render() {
        const {
            isAuthenticated,
            component: Component,
            ...props
        } = this.props;
        return (
            <Route
                {...props}
                render={props =>
                        isAuthenticated
                        ? ( <Component {...props} /> )
                        : (
                            <Redirect to={{
                                pathname: '/redux-form/login',
                                state: {from: props.location}
                            }} />
                          )
                }
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);