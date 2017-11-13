import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        weather: state.weather,
        form: state.formReducers
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators ,dispatch)
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;
