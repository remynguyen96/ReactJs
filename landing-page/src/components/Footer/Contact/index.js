import React, { Component } from 'react';
import WrapperContact from './Wrapper';


const InputValue = ({ className, onChange, type, text, value }) => (
    <div className="field">
      <label
          htmlFor={className}
          className="field-label"
      >
        {text}
      </label>
      <input
          type={type}
          name={className}
          id={className}
          className="field-input"
          value={value}
          onChange={onChange}
      />
    </div>
);
const TextareaValue = ({ className, onChange, text, value }) => (
    <div className="field">
      <label
          htmlFor={className}
          className="field-label"
      >
        {text}
      </label>
      <textarea
          name={className}
          id={className}
          className="field-textarea"
          onChange={onChange}
          cols="30"
          rows="10"
      >
        {value}
      </textarea>
    </div>
);

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  onChange = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, message, firstName, lastName, phone } = this.state;
    return (
      <WrapperContact>
        <form className="contact-us" onSubmit={this.onSubmit}>
          <InputValue
              type="text"
              text="First Name *"
              className="firstName"
              value={firstName}
              onChange={this.onChange}
          />
          <InputValue
              type="text"
              text="Last Name *"
              className="lastName"
              value={lastName}
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
          <TextareaValue
              text="Message"
              className="message"
              value={message}
              onChange={this.onChange}
          />
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </WrapperContact>
    );
  }
}

export default Contact;
