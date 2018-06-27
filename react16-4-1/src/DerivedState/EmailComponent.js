import React, { PureComponent } from 'react';
import './Style.css';

class EmailComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = (event) => {
      this.setState({
        email: event.target.value,
      })
    };
    this.state = {
      email: this.props.email,
      interval: 0,
    }
  }
  
  componentDidMount() {
    this.handleInterval = setInterval(() => {
      this.setState(prevState => ({
        interval: prevState.interval + 1
      }));
    }, 1000);
  };
  
  componentWillUnmount() {
    clearInterval(this.handleInterval);
  };
  
  render() {
    const { interval, email } = this.state;
    return this.props.view({ interval, email, handleChange: this.handleChange });
  }
}

export { EmailComponent }
