import React from 'react';
import Dropdown from '../components/Dropdown';
import DataCurrency from '../components/Dropdown/data'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: DataCurrency.currencies[0].name,
            currency: DataCurrency.currencies[0].code
        }
    }



    selectCurrency = (valueSelect) => {
        console.log(valueSelect.attributes)
        // valueSelect.forEach((item) => {
        //     console.log(item);
        // })
        // this.setState({
        //     country: valueSelect.name,
        //     currency: valueSelect.code,
        // })
    };

    render() {
        const {country, currency} = this.state;
        return (
            <div>
                <input type="text" onKeyDown={(e) => {
                    console.log(e);
                }} />
                <h1>{country} Home With Currency is {currency}</h1>
                <Dropdown currencies={DataCurrency.currencies} onSelectCurrency={this.selectCurrency} />
            </div>
        )
    }
}

export default Home