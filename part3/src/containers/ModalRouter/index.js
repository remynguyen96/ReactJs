import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Gallery from './Gallery';
import Home from './Home';
import Images from './Images';
import Modal from './Modal';

class ModalRouter extends Component {

    // constructor(props) {
    //     super(props);
    //     this.previousLocation = this.props.location;
    // }
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        const { location } = this.props;
        if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
            this.previousLocation = this.props.location;
        }
    }

    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        );
        return (
            <div className="div-switch">
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/gallery' component={Gallery} />
                    <Route path='/images/:id' component={Images} />
                </Switch>
                {isModal ? <Route path="/images/:id" component={Modal} /> : null}
            </div>
        )
    }
}
export default ModalRouter;


