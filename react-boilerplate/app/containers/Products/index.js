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
import EditProducts from "./component/EditProducts/Loadable";
import DetailProducts from './component/DetailProducts/Loadable';
import Wrapper from './Wrapper';

export class Products extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      images: {},
      price: "",
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  /*
   * @Description: Add Product
   */
  addProduct = (productForm) => {
    // const imageUrl = URL.createObjectURL(productForm.images);
    // console.log(imageUrl);
    this.props.addProducts(productForm);
    this.props.router.history.push("/products");
  };
  /*
   * @Description: Delete Product
   */
  deleteProduct = (id) => {
    this.props.router.history.push("/products");
    this.props.deleteProducts(id);
  };
  /*
   * @Description: Edit Product
   */
  editProduct = (id) => {
    this.props.router.history.push(`/products/edit/${id}`);
  };

  changeInput = ({ target }) => {
    const { value, id } = target;
    this.setState({
      [id] : value,
    });
  }

  uploadFile = ({ target }, img) => {
    const { files } = target;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        img.src = reader.result;
      };
      reader.readAsDataURL(files[0]);
      this.setState({
        images: files[0],
      });
    }
  }

  infoUpdate = (data) => {
    // for (let [key, value] of Object.entries(data)) {
    //
    // }
    // this.setState(data);
  }

  submitEdit = (event, id) => {
    event.preventDefault();
    this.props.editProducts(id, this.state);
    // this.props.router.history.push(`/products/${id}`);
  }

  // componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  // }

  render() {
    const { listProducts } = this.props;
    return (
      <Wrapper>
        {listProducts && (
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
              render={({ match }) => (
                <EditProducts
                  match={match}
                  listProducts={listProducts}
                  infoUpdate={this.infoUpdate}
                  uploadFile={this.uploadFile}
                  changeInput={this.changeInput}
                  submitEdit={this.submitEdit}
                />
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
        )}
      </Wrapper>
    );
  }
}

Products.propTypes = {
  router: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
  addProducts: PropTypes.func.isRequired,
  deleteProducts: PropTypes.func,
  editProducts: PropTypes.func,
  listProducts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

Products.defaultTypes = {
  router: {},
  deleteProducts: () => null,
  editProducts: () => null,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  listProducts: makeSelectListProducts(),
});

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(actions.getProductsSuccess()),
    addProducts: (product) => dispatch(actions.addProduct(product)),
    editProducts: (id, product) => dispatch(actions.editProduct(id, product)),
    deleteProducts: (id) => dispatch(actions.deleteProduct(id)),
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

