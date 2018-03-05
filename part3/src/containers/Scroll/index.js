import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
// import {CSSTransition, Transition, TransitionGroup} from 'react-transition-group';

class ScrollRouter extends Component {

    render() {
        return (
            <div className="div-scroll">
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        )
    }
}
export default ScrollRouter;


