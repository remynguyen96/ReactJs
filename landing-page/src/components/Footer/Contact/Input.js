import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validationStarted: false,
    };
  }

  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    validate: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
    value: '',
    name: '',
    required: false,
    validate: false,
    onChange: () => {},
  };

  componentWillMount() {
    this.observableInput = new Subject();
  }

  componentDidMount() {
    this.subscription = this.observableInput.pipe(
        debounceTime(300),
        distinctUntilChanged(),
    ).subscribe((value) => {
      this.startValidation();
      const { onChange, name } = this.props;
      onChange(name, value);
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  startValidation = () => {
    this.setState({ validationStarted: true });
  };

  render() {
    const {type, placeholder, name, className, required, value, validate} = this.props;
    let classValid;
    classValid = className && className;
    if (this.state.validationStarted) {
      classValid += validate ? ' valid' : ' invalid';
    }
    return (
        <Wrapper>
          <input type={type}
                 name={name}
                 className={classValid}
                 defaultValue={value}
                 required={required}
                 onChange={(e) => this.observableInput.next(e.target.value)}
                 autoComplete="off"
          />
        </Wrapper>
    )
  }
}

export default Input;
