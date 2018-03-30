import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';
import WrapperContact from './Wrapper';
import { YoutubeApi } from "../../../utils/youtube-api";

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
      <Roll right cascade>
        <label
            htmlFor={className}
            className="field-label"
        >
          {text}
        </label>
        <span className="highlight"></span>
        <span className="bar"></span>
      </Roll>
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

  componentDidMount() {
    const settings = {
      videoId: 'Sd2S_dVOwq4',
      element: this.elPlayer,
    };
    YoutubeApi(settings);
  }

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { email, location, name, phone } = this.state;
    return (
      <WrapperContact>
        <div className="contact-intro">
          <div className="contact-video" ref={(ref) => { this.elPlayer = ref }}></div>
          <a href='#link' target="_blank" className="contact-link">Link mở tài khoản mua giấy phép</a>
        </div>
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
          <Roll right cascade>
            <button type="submit" className="btn btn-submit">Submit</button>
          </Roll>
        </form>
      </WrapperContact>
    );
  }
}

export default Contact;
