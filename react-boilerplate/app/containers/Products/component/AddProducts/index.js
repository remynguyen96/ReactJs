import React from 'react';
import Wrapper from './Wrapper';
import BtnUpload from './BtnUpload';
import PropTypes from 'prop-types';

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
    if(file.length > 0) {
      this.setState({
        images: file[0],
      })
    }
  }

  render() {
    const { name, description, price } = this.state;
    return (
      <Wrapper onSubmit={(e) => this.onSubmitForm(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input autoComplete='off' type="text" onChange={(e) => this.onChangeInput(e)} value={name} name='name' id='name'/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" onChange={(e) => this.onChangeInput(e)} id='description' value={description} name='description' />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" onChange={(e) => this.onChangeInput(e)} id='price' value={price} name='price' />
        </div>
        <div>
          <input type="file" onChange={(e) => this.uploadFile(e)} ref={(files) => this.inputFile = files} id="images" name='images' />
          <BtnUpload dom={this.inputFile} />
        </div>
        <div>
          <button type='submit' className="submit">Submit Form</button>
        </div>
      </Wrapper>
    );
  }
}

AddProducts.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default AddProducts;
