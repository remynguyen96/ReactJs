import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
/**
 * @Description: Component
 */
const Component1 = () => <h2>Welcome Component 1</h2>;
const Component2 = ({routes}) => (
    <div>
        <h2>Welcome Component 2</h2>
        <ul>
            <li><Link to='/component2/category'>Category</Link></li>
            <li><Link to='/component2/products'>Products</Link></li>
        </ul>
        {
            routes.map((route, i) => (
                <RouteWithSub key={i} {...route} />
            ))
        }
    </div>
);
const Component3 = () => <h3>Welcome Component Category</h3>;
const Component4 = () => <h3>Welcome Component Products</h3>;
/**
 * @Description: Data Router
 */
const routes = [
    {
        path: '/component1',
        component: Component1
    },
    {
        path: '/component2',
        component: Component2,
        routes: [
            {
                path: '/component2/category',
                component: Component3
            },
            {
                path: '/component2/products',
                component: Component4
            }
        ]
    }
];

const RouteWithSub = (route) => {
    return (
        <Route path={route.path} render={props => (
            <route.component {...props} routes={route.routes}/>
        )}/>
    )
};
class ExambleRouter3 extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/component1'>Component 1</Link></li>
                        <li><Link to='/component2'>Component 2</Link></li>
                    </ul>
                    {
                        routes.map((route, i) => {
                            // console.log(route);
                            return (
                                <RouteWithSub {...route} key={i} />
                            )
                        })
                    }
                </div>
            </Router>
        )
    }
}

export default ExambleRouter3;