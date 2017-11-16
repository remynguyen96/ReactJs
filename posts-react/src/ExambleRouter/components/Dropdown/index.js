import React from 'react';
import Proptypes from 'prop-types';
import Option from './Option'
import Select from './Select';

const Dropdown = ({currencies, onSelectCurrency}) => {
    return (
        <Select onChange={(e) => onSelectCurrency(e.target)}>
            {currencies.map(currency => {
                const {code, name} = currency;
                return (
                        <Option key={code} data-code={code} value={code}>{name}</Option>
                )
            })}
        </Select>
    )
}

Dropdown.propTypes = {
    currencies: Proptypes.array.isRequired,
    onSelectCurrency: Proptypes.func.isRequired
}

Dropdown.defaultProps = {
    currencies: [],
}

export default Dropdown;