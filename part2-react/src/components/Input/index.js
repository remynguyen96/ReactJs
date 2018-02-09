import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

class Input extends Component {

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
        onChange: PropTypes.func,
    };

    static defaultProps = {
        type: 'text',
        name: '',
        required: false,
        checked: false,
        onChange: () => {},
    };

    changeValue = (e) => {
        const { value, name, checked } = e.target;
        const { onChange, type } = this.props;
        type === 'checkbox' ? onChange(name, checked) : onChange(name, value);
    };

    render() {
        const {type, placeholder, name, className, required, value, checked} = this.props;
        return (
            <Wrapper>
                <input type={type}
                       name={name}
                       className={className}
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
