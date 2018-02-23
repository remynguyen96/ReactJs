import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderNav from "../Menu/HeaderNav";
import ProductsPage from "./ProductsPage";
import UserPage from "./Users";
import HomePage from "./HomePage";

class PrimaryLayout extends Component {
    render() {
        const { match } = this.props;
        // console.log(this.props);
        return (
           <div>
               <HeaderNav />
               <main>
                   <Switch>
                       <Route path={`${match.path}`} exact component={HomePage} />
                       <Route path={`${match.path}/users`} component={UserPage} />
                       <Route path={`${match.path}/products`} component={ProductsPage} />
                       <Redirect to={`${match.url}`} />
                   </Switch>
               </main>
           </div>
        );
    }
}
export default PrimaryLayout;
