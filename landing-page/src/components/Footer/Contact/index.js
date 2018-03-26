import React, { Component } from 'react';
import WrapperContact from './Wrapper';

const InputValue = ({ className, onChange, type, text, value }) => (
    <div className="field">
      <input
          type={type}
          name={className}
          id={className}
          className="field-input"
          value={value}
          onChange={onChange}
          required="required"
      />
      <label
          htmlFor={className}
          className="field-label"
      >
        {text}
      </label>
      <span className="highlight"></span>
      <span className="bar"></span>
    </div>
);
const TextareaValue = ({ className, onChange, text, value }) => (
    <div className="field textarea">
      <textarea
          name={className}
          id={className}
          className="field-textarea"
          onChange={onChange}
          value={value}
          rows="4"
          required="required"
      >
      </textarea>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label
          htmlFor={className}
          className="field-label"
      >
        {text}
      </label>
    </div>
);

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      location: '',
      message: '',
    };
  }

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
  };

  render() {
    const { email, message, location, name, phone } = this.state;
    return (
      <WrapperContact>
        <form className="contact-us" onSubmit={this.onSubmit}>
          <InputValue
              type="text"
              text="Full Name *"
              className="name"
              value={name}
              onChange={this.onChange}
          />
          <InputValue
              type="email"
              text="Email *"
              className="email"
              value={email}
              onChange={this.onChange}
          />
          <InputValue
              type="tel"
              text="Telephone *"
              className="phone"
              value={phone}
              onChange={this.onChange}
          />
          <InputValue
              type="text"
              text="Location *"
              className="location"
              value={location}
              onChange={this.onChange}
          />
          <TextareaValue
              text="Message"
              className="message"
              value={message}
              onChange={this.onChange}
          />
          <button type="submit" className="btn btn-submit">Submit</button>
        </form>
      </WrapperContact>
    );
  }
}

export default Contact;
