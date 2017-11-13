import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFood2, selectFood} from '../actions';
import { createStructuredSelector } from 'reselect';

class FoodList extends Component {

    createFoodListItems() {
        return this.props.foodLists.map((eachFood) => {
                return (
                    <li key={eachFood.id} style={{marginRight: '20px'}}>
                        <h3 onClick={() => { this.props.selectedFood(eachFood) }}>
                            {eachFood.name}
                        </h3>
                        <img  width='100px' height='100px' src={eachFood.images} alt={eachFood.name} />
                    </li>
                )
            })
    }

    render() {
        return (
            <ul style={{display: 'flex', justifyContent: 'center', listStyleType: 'none'}}>
                {this.createFoodListItems()}
              {/*  {
                    this.props.foodLists.map((eachFood) => {
                            return (
                                <li key={eachFood.id} style={{marginRight: '20px'}}>
                                    <h3 onClick={() => { this.props.selectedFood(eachFood) }}>
                                        {eachFood.name}
                                    </h3>
                                    <img  width='100px' height='100px' src={eachFood.images} alt={eachFood.name} />
                                </li>
                            )
                    })
                }*/}
            </ul>
        )
    };
}

// const mapStateToProps2 = createStructuredSelector({
//     foodLists:
// });

function mapStateToProps(state) {
    return {
        foodLists: state.foods
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectedFood: (food) => {
            dispatch(selectFood2(food))
        }
    }
    /**
     * @Description: Method2 use bindActionCreators;
     */
    // return bindActionCreators({selectedFood: selectFood2}, dispatch);
}


//Container Component Connect With Redux
const FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodContainer;