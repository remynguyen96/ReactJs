import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {makeSelectorGuard} from '../selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

const AuthGuard = ({component: Component, ...rest, ...props}) => {
    const {infoGuard} = props;
    // console.log(infoGuard.toJS())
    return (
        <Route {...rest} render={props => (
                infoGuard.toJS().guard
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/router2/login',
                    state: {from: props.location}
                }} />
        )} />
    );
}

const mapStateToProps = createStructuredSelector({
    infoGuard: makeSelectorGuard(),
});

export default connect(mapStateToProps)(AuthGuard);