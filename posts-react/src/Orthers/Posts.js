import React from 'react';
import {createSelector, createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

let count = 0;

class Posts extends React.Component {
    render() {
        console.log(`Posts render ${++count}`);
        return (
            <div>
                <h3>Post (file Posts.js)</h3>
                <ul>
                    {/*{this.props.posts.map(x => {
                        return (
                            <li key={x.id}>{`${x.title} - ${x.user.first} ${x.user.last}`}</li>
                        )
                    })}*/}
                      {/*method 2*/}
                    {/*{JSON.stringify(this.props.posts, null, 2)}*/}
                    {this.props.posts.map(posts => {
                        return (
                            <li key={posts.id}>{`${posts.title} - ${posts.user.first} ${posts.user.last}`}</li>
                        )
                    })}


                </ul>
            </div>
        )
    }
}

const getListing = createSelector(
    state => state.postsById,
    state => state.userById,
    state => state.postListing,
    (posts, users, listing) => listing.map(id => {
        const post = posts[id];
        return {...post, user: users[post.author]}
    })
);


const mapToStateProps = (state) => {
    return {
        posts: getListing(state),
    }
}



/**
 * @Description: method2 use createStructuredSelector
 */


const structuredSelector = createStructuredSelector({
    //get all methods in reducers
    result: (res) => {
        return res.postListing;
        // return postList.map(id => {
        //     const post = postId[id];
        //     return {...post, user: users[post.author]}
        // });
    },
    posts: (res) => {
        return res.postListing.map(id => {
            const post = res.postsById[id];
            return {...post, user: res.userById[post.author]}
        })
    }
});


//default without reselect

// const mapToStateProps2 = (state) => {
//     const posts = state.postsById;
//     const users = state.userById;
//     const listing = state.postListing;
//     return {
//         posts: listing.map(id => {
//             const post = posts[id];
//             return {...post, user: users[post.author]}
//         })
//     }
// }

export default connect(structuredSelector)(Posts);
