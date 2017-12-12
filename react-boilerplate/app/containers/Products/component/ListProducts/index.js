/**
 *
 * ListProducts
 *
 */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { urlServer } from 'utils/helper';
import Navbar from './Navbar';
import Link from './Link';
import Wrapper from './Wrapper';

const urlImages = `${urlServer}/image-products/`;

class ListProducts extends React.Component {

  getDetail = (id) => {
    this.props.history.push(`/products/${id}`);
  };

  renderProducts = (product, index) => (
    <div className="product-item" key={index} onClick={() => this.getDetail(product.id)}>
      <span>ID: {product.id}</span>
      <span>Name: {product.name}</span>
      <span>Desc: {product.description}</span>
      <span>Images: </span>
      <span>Price: {product.price}</span>
      <span>createdAt: {moment(product.createdAt).fromNow()}</span>
      <img src={urlImages + product.images} alt={product.name} />
    </div>
  );

  render() {
    const { listProducts } = this.props;
    return (
      <Wrapper>
        <Helmet>
          <title>List Products</title>
          <meta name="description" content="Description of Products"/>
        </Helmet>
        <Navbar>
          <Link to="/products/add">Add Products</Link>
        </Navbar>
        {
          listProducts.map((product, index) => (
            this.renderProducts(product, index)
          ))
        }
      </Wrapper>
    );
  }
}

ListProducts.propTypes = {
  history: PropTypes.object.isRequired,
  listProducts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

ListProducts.defaultProps = {
  history: {},
};

export default ListProducts;


