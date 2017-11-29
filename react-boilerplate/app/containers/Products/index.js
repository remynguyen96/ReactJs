/**
 *
 * Products
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
import makeSelectProducts, { makeSelectListProducts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import ProductsComponent from './component/Products/Loadable';

export class Products extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.getListProducts();
  }

  render() {
    console.log(this.props.listProducts);
    return (
      <div>
        <Helmet>
          <title>Products</title>
          <meta name="description" content="Description of Products" />
        </Helmet>
        <ProductsComponent />
      </div>
    );
  }
}

Products.propTypes = {
  getListProducts: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  listProducts: makeSelectListProducts(),
});

function mapDispatchToProps(dispatch) {
  return {
    getListProducts: () => dispatch(actions.getProduct()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'products', reducer });
const withSaga = injectSaga({ key: 'products', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Products);
