/**
*
* ListProducts
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import moment from 'moment';


class ListProducts extends React.Component {

  constructor(props) {
    super(props);
  }

  getDetail = (product) => {
    console.log(product);
  }

  render() {
    const { listProducts } = this.props;
    return (
      <Wrapper>
        {
          listProducts.map((product, index) => (
            <div className="product-item" key={index} onClick={() => this.getDetail(product)} >
              <span>ID: {product.id}</span>
              <span>Name: {product.name}</span>
              <span>Desc: {product.description}</span>
              <span>Images: </span>
              <span>Price: {product.price}</span>
              <span>createdAt: {moment(product.createdAt).fromNow()}</span>
              <img src={product.images} alt={product.name} />
            </div>
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
