import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from './Wrapper';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../containers/Products';

class Homepage extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <Products />
                <Footer />
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);


