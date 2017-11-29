/**
 *
 * ListProducts
 *
 */
import React from 'react';
// import styled from 'styled-components';
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


function Products() {
  return (
    <Router>
      <div>
        <Navbar>
          <Link to="/products/lists-products">List Products</Link>
          <Link to="/products/add-products">Add Products</Link>
        </Navbar>
        <Content>
          <Switch>
            <Route exact path="/products/lists-products" children={(props) => (
              <ListProducts router={{ ...props }} />
            )} />
            <Route path="/products/add-products" children={(props) => (
              <AddProducts router={{ ...props }} />
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

Products.propTypes = {};

export default Products;
