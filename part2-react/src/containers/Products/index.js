import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from './Wrapper';
import ItemProduct from './components/ItemProduct'

class Products extends Component {
    render() {
        return (
            <Wrapper>
              <h2 className='title'>List All Products</h2>
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />

              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
            </Wrapper>
        )
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Products);


