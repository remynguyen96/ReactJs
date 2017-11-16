import React from 'react';
import {createSelector, createStructuredSelector} from 'reselect'
import {connect} from 'react-redux';
import Proptypes from 'prop-types'
import {requestTest, receiveTest, getPerson, setPerson} from './test-action';
import {makeSelectorTest, makeSelectorPerson} from './selectors';
import {fromJS, Map} from 'immutable';

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.request()
        const obj = Map({
            prop: 'test',
            prop2: 'test2',
            prop3: 'test3',
        });
        const obj2 = obj.set('prop', 'goodboy');
    }

    mapKey = (params) => {
        params.map((item) => {
            console.log(item);
        });
    }


    // static propsTypes = {
    // }
    
    render() {
        const {id, name, email, picture, phone} = this.props.listPerson;
        // console.log(this.props.listPerson)
        return (
            <div>
                <h4>Test Saga</h4>
                <input type="text" onChange={(event) => {
                    this.props.receive(event.target.value)
                }}/>
                <button type="button" onClick={() => this.props.request()}>Show Test</button>
                <hr/>
                <h4>{this.props.testState}</h4>
                <hr/>
                <h4>Test Saga Person</h4>
                <button type="button" onClick={() => this.props.setPerson()}>Fetch API Person</button>
                <ul>
                    {(this.props.listPerson && this.props.listPerson !== '') &&
                        (
                            <li>
                                <a href=''>{email}</a>
                                <p>Phone: {phone}</p>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

Test.propsTypes = {
    request: Proptypes.func,
    receive: Proptypes.func,
    setPerson: Proptypes.func,
    getPerson: Proptypes.func,
}

Test.defaultProps = {};

/**
 * @Description: Method 1
 */
// const makeSelector = createSelector(
//     state => state.test,
//     (testData) => testData,
// );
//
// const makeSelector2 = createSelector(
//     state => state.person,
//     (dataPerson) => dataPerson,
// );
//
// const mapStateToProps = state => ({
//     testState: makeSelector(state),
//     listPerson: makeSelector2(state),
// });

/**
 * @Description: Method2 use createStructuredSelector
 */
//get all methods in reducers
// const structuredSelector = createStructuredSelector({
//     result: (res) => {
//         return res;
//     },
// })
const mapStateToPropsOrther = createStructuredSelector({
    testState: makeSelectorTest(),
    listPerson: makeSelectorPerson(),
});

const mapDispatchToProps = dispatch => ({
    request: () => dispatch(requestTest()),
    receive: (test) => dispatch(receiveTest(test)),
    setPerson: () => dispatch(setPerson()),
    getPerson: (personData) => dispatch(getPerson(personData)),
});

/*const mapDispatchToProps = dispatch => {
  return {
     request: () => {},
     receive: () => {},
  }
};*/

export default connect(mapStateToPropsOrther, mapDispatchToProps)(Test);
