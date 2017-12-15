/**
 *
 * Users
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUsers from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Users extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      checkValue: false,
    };
  }

  changeInput = (event) => {
    // const regx = /^[0-9]+\.$/g;
    const { value } = event.target;
    // this.setState({ checkValue: false });
    // if (event.keyCode === 190 || event.which === 190) {
    //   this.setState({ checkValue: true });
    // }
    console.log(value);
    this.setState({ inputValue: value });
  };

  blurInput = (event) => {
    console.log(event.target);
    console.log(event.target.scrollTop);
    // console.log(event.target.value);
    // if (this.state.checkValue) {
    //   event.target.value += '.0';
    // }
  };


  render() {
    return (
      <div>
        <Helmet>
          <title>Users</title>
          <meta name="description" content="Description of Users" />
        </Helmet>
        <input
          type="number"
          value={this.state.inputValue}
          style={{ width: '220px', border: '1px solid black' }}
          onChange={this.changeInput}
          // onKeyUp={this.changeInput}
          onBlur={this.blurInput}
        />
      </div>
    );
  }
}

Users.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'users', reducer });
const withSaga = injectSaga({ key: 'users', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Users);
