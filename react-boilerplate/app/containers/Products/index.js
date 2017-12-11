/**
 *
 * Products
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProducts, {makeSelectListProducts} from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
/**
 * @Description: Component
 */
import ListProducts from './component/ListProducts/Loadable';
import AddProducts from './component/AddProducts/Loadable';
import EditProducts from './component/EditProducts/Loadable';
import DetailProducts from './component/DetailProducts/Loadable';


import Navbar from './Navbar';
import Link from './Link';
import Content from './Content';

export class Products extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  componentDidMount() {
    this.props.getProducts();
    // this.props.router.history.push('/products/lists-products');
  }

  submitForm = (dataForm) => {
    // const files = dataForm.images;
    // const imageUrl = URL.createObjectURL(files);
    // console.log(imageUrl);
    this.props.addProducts(dataForm);
    // this.props.router.history.push('/');
    // this.props.router.history.push('/products/lists-products');
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  render() {
    const {listProducts, router} = this.props;
    return (
      <Router>
           <div>
             <Helmet>
               <title>Products</title>
               <meta name="description" content="Description of Products"/>
             </Helmet>

             <Navbar>
               <Link to="/products/add">Add Products</Link>
             </Navbar>
             <ListProducts
               listProducts={listProducts}
               history={router.history}
             />

             <Content>
               <Switch>
                 <Route exact path="/products/add" render={({history}) => {
                   // console.log(history);
                   return (
                     <AddProducts
                       router={{history}}
                     />
                   )
                 }}/>

                 <Route  path="/products/:id" children={(props) => {
                   return (
                     <DetailProducts
                       router={{...props}}
                       listProducts={listProducts}
                     />
                   )
                 }}/>

                 <Route exact path="/products/edit/:id" children={(props) => (
                   <EditProducts router={{...props}}/>
                 )}/>
                 {/*<Route path="" render={() => (<h1>Not Found </h1>)}/>*/}
               </Switch>
             </Content>

           </div>
      </Router>
    );
  }
}

Products.propTypes = {
  router: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
  addProducts: PropTypes.func.isRequired,
  listProducts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  listProducts: makeSelectListProducts(),
});

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(actions.getProductsSuccess()),
    addProducts: (product) => dispatch(actions.addProduct(product)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'products', reducer});
const withSaga = injectSaga({key: 'products', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Products);

