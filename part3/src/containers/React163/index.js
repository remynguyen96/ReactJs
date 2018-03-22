import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContextApi from './ContextApi';
import ContextApi2 from './ContextApi2';
import RefApi from './RefApi';

class React163 extends React.PureComponent {
  render() {
    return (
        <div className="react163">
          <Switch>
            <Route exact path='/' component={RefApi} />
            <Route path='/context' component={ContextApi} />
            {/*recommend method 2*/}
            <Route path='/context2' component={ContextApi2} />
          </Switch>
        </div>
    )
  }
}

export default React163;
