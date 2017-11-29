/**
 *
 * ListProducts
 *
 */
import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Link from './Link';
import Content from './Content';

/**
 * @Description: Component
 */
import ListProducts from '../ListProducts/Loadable';
import AddProducts from '../AddProducts/Loadable';
import EditProducts from '../EditProducts/Loadable';
import DetailProducts from '../DetailProducts/Loadable';

function Products({ listProducts, onSubmitForm }) {
  return (
    <Router>
      <div>
        <Navbar>
          <Link to="/products/lists-products">List Products</Link>
          <Link to="/products/add">Add Products</Link>
          {/*<Link to="/products/edit/5">Edit Products</Link>*/}
        </Navbar>
        <Content>
          <Switch>

            <Route path="/products/lists-products" children={(props) => (
              <ListProducts
                listProducts={listProducts}
                router={{...props}}
              />
            )} />

            <Route path="/products/add" children={(props) => (
              <AddProducts
                router={{ ...props }}
                onSubmitForm={onSubmitForm}
              />
            )} />

            <Route path="/products/edit/:id" children={(props) => (
              <EditProducts router={{ ...props }} />
            )} />

            <Route path="/products/:id" children={(props) => (
              <DetailProducts router={{ ...props }} />
            )} />
            
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

Products.propTypes = {
  listProducts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};


export default Products;
