import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Wrapper from './Wrapper';
import RootRouter from '../Router';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <RootRouter />
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(App);
