import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

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
    };

    static defaultProps = {
        type: 'text',
        value: '',
        name: '',
        required: false,
        checked: false,
        validate: false,
        onChange: () => {},
    };

    componentWillMount() {
        if (this.props.value) {
            this.startValidation();
        }
    }

    startValidation = () => {
        this.setState({ validationStarted: true });
    };

    changeValue = (e) => {
        const { value, name, checked } = e.target;
        const { onChange, type } = this.props;
        type === 'checkbox' ? onChange(name, checked) : onChange(name, value);
    };

    render() {
        const {type, placeholder, name, className, required, value, checked, validate} = this.props;
        let classValid = className;
        if (this.state.validationStartedk) {
            classValid = (validate) ? `${className} dirty valid` : `${className} dirty invalid`;
        };
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
                       autoComplete="off"
                />
            </Wrapper>
        )
    }
}

export default Input;
