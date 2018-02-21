import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import {debounce} from '../../utils/helper';

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
        checked: PropTypes.bool,
        validate: PropTypes.bool,
        onChange: PropTypes.func,
        // refInput: PropTypes.func,
    };

    static defaultProps = {
        type: 'text',
        value: '',
        name: '',
        required: false,
        checked: false,
        validate: false,
        onChange: () => {},
        // refInput: () => {},
    };

    componentWillMount() {
        const { value } = this.props;
        if (value && value !== '') {
            this.startValidation();
        } else {
            this.prepareToValidate = debounce(this.startValidation, 250);
        }
    }

    // componentDidMount() {
    //     this.props.refInput(this.input);
    // }

    prepareToValidate = () => {};

    startValidation = () => {
        this.setState({ validationStarted: true });
    };

    changeValue = (e) => {
        const { value, name, checked } = e.target;
        const { onChange, type } = this.props;
        // this.startValidation();
        if (!this.state.validationStarted) {
            this.prepareToValidate();
        }
        type === 'checkbox' ? onChange(name, checked) : onChange(name, value);
    };

    blurValue = (e) => {
        if (!this.state.validationStarted) {
            this.prepareToValidate();
        }
    };

    render() {
        const {type, placeholder, name, className, required, value, checked, validate} = this.props;
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
                       placeholder={placeholder}
                       defaultValue={value}
                       defaultChecked={checked}
                       required={required}
                       onChange={this.changeValue}
                       onBlur={this.blurValue}
                       // ref={(input) => { this.input = input }}
                       autoComplete="off"
                />
            </Wrapper>
        )
    }
}

export default Input;
