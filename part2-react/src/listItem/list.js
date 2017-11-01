import React, {Component} from 'react'

//Start Component With UpperCase
function ListItem(props) {
    return <li>{props.value}</li>;
}

class AnimalsComponent extends Component {
    constructor(props) {
        super(props);
        this.listItems = props.toTalAnimals.map((animal, index) =>
                <ListItem key={animal} value={`${index.toString()}-${animal}`} />
        );
    }

    render() {
        return (
            <ul>
                {this.listItems}
            </ul>
        )
    }
}
export const animals = ['lion','tiger','dinosour','dog','cat','mouse'];
export default AnimalsComponent;