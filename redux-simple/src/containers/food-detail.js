import React from 'react';
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

class FoodDetail extends React.Component {
    render() {
        if(!this.props.activeFood) {
            return (<h2 style={{display:'block',textAlign:'center',color: '#FF524B'}}>
                Select A Food !!!</h2>
            )
        }
        return (
            <div>
                <p>ID: {this.props.activeFood.id}</p>
                <p>Name: {this.props.activeFood.name}</p>
                <p>Created Date: {this.props.activeFood.created_date}</p>
                <img src={this.props.activeFood.images ? this.props.activeFood.images : ''} alt=""/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeFood: state.activeFood
    }
}
// function mapDispatchToProps() {
//
// }
const FoodDetailContainer = connect(mapStateToProps)(FoodDetail);
export default FoodDetailContainer;
