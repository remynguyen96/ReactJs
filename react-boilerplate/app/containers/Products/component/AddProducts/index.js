import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Banner from './banner.jpg';

class AddProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      images: {},
      price: '',
    };
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
  }

  uploadFile = (e) => {
    const file = e.target.files;
    if (file.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imgFile.src = reader.result;
      };
      reader.readAsDataURL(file[0]);
      this.setState({
        images: file[0],
      });
    }
  }

  render() {
    const { name, description, price } = this.state;
    return (
      <Wrapper onSubmit={(e) => this.onSubmitForm(e)}>
        <Helmet>
          <title>Add Products</title>
          <meta name="description" content="Description of Products" />
        </Helmet>
        <div>
          <label htmlFor="name">Name</label>
          <input autoComplete="off" type="text" onChange={(e) => this.onChangeInput(e)} value={name} name="name" id="name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input autoComplete="off" type="text" onChange={(e) => this.onChangeInput(e)} id="description" value={description} name="description" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" onChange={(e) => this.onChangeInput(e)} id="price" value={price} name="price" />
        </div>
        <div>
          <input type="file" onChange={(e) => this.uploadFile(e)} ref={(files) => this.inputFile = files} id="images" name="images" />
          <button type="button" className="upload" onClick={() => { this.inputFile.click(); }} >
            Upload File
          </button>
          <img ref={(images) => { this.imgFile = images; }} src={Banner} alt="images" style={{width: '90px', height: '90px', objectFit: 'cover' }} />
        </div>
        <div>
          <button type="submit" className="submit">Submit Form</button>
        </div>
      </Wrapper>
    );
  }
}

AddProducts.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

AddProducts.defaultTypes = {
  onSubmitForm: () => null,
};

export default AddProducts;
