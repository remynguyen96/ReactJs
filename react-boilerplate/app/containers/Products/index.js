/**
 *
 * Products
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Route, Switch } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProducts, { makeSelectListProducts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
/**
 * @Description: Component
 */
import ListProducts from './component/ListProducts/Loadable';
import AddProducts from './component/AddProducts/Loadable';
import EditProducts from './component/EditProducts/Loadable';
import DetailProducts from './component/DetailProducts/Loadable';
import Wrapper from './Wrapper';

export class Products extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  addProduct = (productForm) => {
    // const imageUrl = URL.createObjectURL(productForm.images);
    // console.log(imageUrl);
    this.props.addProducts(productForm);
    this.props.router.history.push('/products');
  };

  deleteProduct = (id) => {
    this.props.router.history.push('/products');
    console.log(id);
  };

  editProduct = (id) => {
    this.props.router.history.push(`/products/edit/${id}`);
    console.log(id);
  };

  // componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  // }

  render() {
    const { listProducts } = this.props;
    return (
      <Wrapper>
        <Switch>
          <Route
            exact
            path="/products"
            render={({ history }) => (
              <ListProducts
                listProducts={listProducts}
                history={history}
              />
            )}
          />

          <Route
            path="/products/add"
            render={() => (
              <AddProducts
                onSubmitForm={this.addProduct}
              />
            )}
          />

          <Route
            path="/products/edit/:id"
            render={(props) => (
              <EditProducts router={{ ...props }} />
            )}
          />

          <Route
            path="/products/:id"
            render={({ match }) => (
              <DetailProducts
                match={match}
                listProducts={listProducts}
                deleteProduct={this.deleteProduct}
                editProduct={this.editProduct}
              />
            )}
          />
        </Switch>
      </Wrapper>
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

Products.defaultTypes = {
  router: {},
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  listProducts: makeSelectListProducts(),
});

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(actions.getProductsSuccess()),
    addProducts: (product) => dispatch(actions.addProduct(product)),
    // editProducts: (id) => dispatch(actions.editProduct(id)),
    // deleteProducts: (id) => dispatch(actions.addProduct(product)),
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

