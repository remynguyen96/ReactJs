/**
 *
 * Products
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProducts, {makeSelectListProducts} from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
/**
 * @Description: Component
 */
import ProductsComponent from './component/Products/Loadable';

export class Products extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
    // this.props.router.history.push('/products/lists-products');
  }

  submitForm = (dataForm) => {
    // const demo = {
    //   createdAt: "2017-11-29T03:11:54.000Z",
    //   description: "YEPPPPPPP",
    //   images: "http://lorempixel.com/640/480/fashion",
    //   name: "CHEESEAAAAAA",
    //   price: 670,
    //   updatedAt: "2017-11-29T03:11:54.000Z",
    // };
    // this.props.addProducts(dataForm);
    // this.props.router.history.push('/');
    this.props.router.history.push('/products/lists-products');
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  render() {
    const {listProducts} = this.props;
    return (
      <div>
        <Helmet>
          <title>Products</title>
          <meta name="description" content="Description of Products"/>
        </Helmet>
        <ProductsComponent
          listProducts={listProducts}
          onSubmitForm={this.submitForm}
        />
      </div>
    );
  }
}

Products.propTypes = {
  router: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
  addProducts: PropTypes.func.isRequired,
  listProducts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  listProducts: makeSelectListProducts(),
});

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(actions.getProductsSuccess()),
    addProducts: (product) => dispatch(actions.addProduct(product)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'products', reducer});
const withSaga = injectSaga({key: 'products', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Products);

