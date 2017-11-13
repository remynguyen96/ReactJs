import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import Posts from './Posts';
import PostsByUser from './PostsByUser';
import Test from './Test/test'

const initial = store.getState();

class ReselectRedux extends React.Component {
    render() {
        return (
            <div>
                <h1>Reselect Redux</h1>
                <Posts />
                <Counter />
                <h2>User 1</h2>
                <PostsByUser user={'user-1'} />
                <h2>User 2</h2>
                <PostsByUser user={'user-2'} />
                <h2>User 3</h2>
                <PostsByUser user={'user-3'} />
                {/*<pre>{JSON.stringify(initial, null, 2)}</pre>*/}
                <hr/>
                <Test />
            </div>
        )
    }
}
export default () => (
    <Provider store={store}>
        <ReselectRedux />
    </Provider>
);