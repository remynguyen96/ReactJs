import React from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {makeSelectorGuard} from '../selectors';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { infomation } = this.props.guard.toJS();
        return (
            <div>
                <h2>WELCOME TO DASHBOARD !!!</h2>
                <h3>Hi <strong>{infomation.email}</strong></h3>
            </div>
        )
    }
}

Dashboard.propTypes = {

}

const mapStateToProp = createStructuredSelector({
    guard: makeSelectorGuard(),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProp, mapDispatchToProps)(Dashboard);
