import React from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>WELCOME TO DASHBOARD !!!</h2>
            </div>
        )
    }
}

Dashboard.propTypes = {

}

const mapStateToProp = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProp, mapDispatchToProps)(Dashboard);
