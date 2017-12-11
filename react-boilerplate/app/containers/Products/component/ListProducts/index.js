/**
 *
 * ListProducts
 *
 */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {Redirect, withRouter, Route} from 'react-router-dom';

import Wrapper from './Wrapper';
import {urlServer} from 'utils/helper';
const urlImages = `${urlServer}/image-products/`;


class ListProducts extends React.Component {

  constructor(props) {
    super(props);
  }

  renderProducts = (product, index) => {
    return (
      <div className="product-item" key={index} onClick={() => this.getDetail(product.id)}>
        <span>ID: {product.id}</span>
        <span>Name: {product.name}</span>
        <span>Desc: {product.description}</span>
        <span>Images: </span>
        <span>Price: {product.price}</span>
        <span>createdAt: {moment(product.createdAt).fromNow()}</span>
        <img src={urlImages + product.images} alt={product.name}/>
      </div>
    );
  }

  getDetail = (id) => {
    this.props.history.push(`/products/${id}`);
  }

  render() {
    const {listProducts} = this.props;
    return (
      <Wrapper>
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
  listProducts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default ListProducts;


