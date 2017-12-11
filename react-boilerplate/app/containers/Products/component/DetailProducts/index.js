import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment/moment";
import Wrapper from '../ListProducts/Wrapper';
import {urlServer} from 'utils/helper';

const urlImages = `${urlServer}/image-products/`;

class DetailProducts extends React.Component {

  constructor(props) {
    super(props);
    this.product = {};
  }

  componentDidMount() {
    this.styleEdit = {
      background: '#35a2ff',
      color: '#ffffff',
      padding: '8px 25px',
      height: '40px',
      alignSelf: 'center',
      cursor: 'pointer',
      marginLeft: '22px'
    }
    this.styleDelete = {...this.styleEdit, background: '#FF4251'};
    const {router, listProducts} = this.props;
    const idProduct = router.match.params.id;
    this.product = listProducts.find((product) => {
      if (product.id === parseInt(idProduct)) {
        return product;
      }
    });
    console.log(this.product);
  }


  editProduct = (id) => {

  };

  deleteProduct = (id) => {

  };


  render() {
    const product = this.product;
    return (
      <Wrapper>
        {/*<div className="product-item">*/}
          {/*<span>ID: {product.id}</span>*/}
          {/*<span>Name: {product.name}</span>*/}
          {/*<span>Desc: {product.description}</span>*/}
          {/*<span>Images: </span>*/}
          {/*<span>Price: {product.price}</span>*/}
          {/*<span>createdAt: {moment(product.createdAt).fromNow()}</span>*/}
          {/*<img src={urlImages + product.images} alt={product.name}/>*/}
          {/*<button type='button' style={this.styleEdit} onClick={() => this.editProduct(product.id)}>*/}
            {/*Edit*/}
          {/*</button>*/}
          {/*<button type='button' style={this.styleDelete} onClick={() => this.deleteProduct(product.id)}>*/}
            {/*Delete*/}
          {/*</button>*/}
        {/*</div>*/}
      </Wrapper>
    );
  }
}


DetailProducts.propTypes = {};

DetailProducts.defaultTypes = {};

export default DetailProducts;
