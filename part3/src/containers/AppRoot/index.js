import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Wrapper from './Wrapper';
import ModalRouter from "../ModalRouter";
// import RootRouter from '../Router';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <Router>
                    <Route component={ModalRouter} />
                    {/*<Route component={RootRouter} />*/}
                </Router>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(App);
