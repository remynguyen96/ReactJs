import React from 'react';
import {connect} from 'react-redux';

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
                        ? <Component {...props} />
                        : (
                            <Redirect to={{
                                pathname: '/redux-form/login',
                                state: {from: props.location}
                            }}/>
                        )
                }
            />
        )
    }
}


export default PrivateRoute;