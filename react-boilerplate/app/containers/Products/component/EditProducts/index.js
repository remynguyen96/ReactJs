import React from 'react';
import PropTypes from 'prop-types';
import { urlServer } from 'utils/helper';
import ErrorBoundary from '../ErrorBoundary';
import Wrapper from './Wrapper';

const urlImages = `${urlServer}/image-products/`;

class EditProducts extends React.Component {


  render() {
    const { match, listProducts, changeInput, submitEdit, uploadFile } = this.props;
    const { id } = match.params;
    const product = listProducts.find((prod) => prod.id === parseInt(id, 10));
    if (!product) {
      return null;
    }
    const { name, price, images, description } = product;
    return (
      <ErrorBoundary>
        <Wrapper>
          <div className="part">
            <label htmlFor="name">ID</label>
            <span>{id}</span>
          </div>
          <div className="part">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" defaultValue={name} onChange={changeInput} />
          </div>
          <div className="part">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" defaultValue={description} onChange={changeInput} />
          </div>
          <div className="part">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" defaultValue={price} onChange={changeInput} />
          </div>
          <div className="part">
            <label htmlFor="image">Image</label>
            <input type="file" ref={(ref) => (this.inputFile = ref)} onChange={(e) => uploadFile(e, this.imgFile)} />
            <img ref={(ref) => (this.imgFile = ref)} src={urlImages + images} alt={name} />
            <button type="button" onClick={() => this.inputFile.click()} className="btn btn-file">Upload</button>
          </div>
          <div className="part">
            <button onClick={(e) => submitEdit(e, parseInt(id, 10))} type="submit" className="btn btn-submit">Submit Edit</button>
          </div>
        </Wrapper>
      </ErrorBoundary>
    );
  }

}

EditProducts.propTypes = {
  match: PropTypes.object.isRequired,
  listProducts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  changeInput: PropTypes.func,
  uploadFile: PropTypes.func,
  submitEdit: PropTypes.func,
}

EditProducts.defaultProps = {
  match: {},
  listProducts: null,
  changeInput: () => null,
  uploadFile: () => null,
  submitEdit: () => null,
}

export default EditProducts;
