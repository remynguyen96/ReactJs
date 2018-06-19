import React, { PureComponent, Fragment } from 'react';
import { EmailComponent } from './EmailComponent';

const Button = ({ className, ...props }) => (
  <button className={`button ${className}`} {...props} />
);

Button.Tooltip = ({ className, ...props }) => (
  <span className={`tooltip ${className}`} {...props} />
);

const EmailView = ({ interval, email, handleChange }) => (
  <Fragment>
    <p>State interval: <strong>{interval}</strong></p>
    <label htmlFor="Email">Enter Email Here !</label>
    <input type="text" onChange={handleChange} value={email} />
  </Fragment>
);

class DerivedState extends PureComponent {
  render() {
    return (
      <div>
        <EmailComponent view={EmailView} />
        <Button className="my-specific-button">
          <Button.Tooltip role="img" aria-label="Panda" className="my-specific-tooltip">
            😁🐼
          </Button.Tooltip>
          Hover me
        </Button>
      </div>
    )
  }
}

export { DerivedState }
