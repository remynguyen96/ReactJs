import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFood2} from '../actions'

class FoodList extends Component {

    createFoodListItems() {
        return this.props.foodLists.map(
            (eachFood) => {
                return (
                    <li key={eachFood.id} style={{marginRight: '20px'}}>
                        <h3 onClick={() => { this.props.selectedFood(eachFood) }}>
                            {eachFood.name}
                        </h3>
                        <img  width='100px' height='100px' src={eachFood.images} alt={eachFood.name} />
                    </li>
                )
            }
        )
    }

    render() {
        return (
            <ul style={{display: 'flex', justifyContent: 'center', listStyleType: 'none'}}>
                {this.createFoodListItems()}
            </ul>
        )
    };
}

function mapStateToProps(state) {
    return {
        foodLists: state.foods
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectedFood: selectFood2}, dispatch);
}

// const mapDispatchToProps2 = (dispatch) => {
//     return {
//         setName: (name) => {
//             dispatch({
//                 type: 'SETNAME',
//                 payload: name
//             })
//         }
//     }
// }

//Container Component Connect With Redux
const FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodContainer;