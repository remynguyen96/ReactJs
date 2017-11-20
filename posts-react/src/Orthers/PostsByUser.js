import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';


let count = 0;
class PostsByUser extends React.Component {
    render() {
        // console.log(`PostsByUser render ${++count}`);
        return (
            <div>
                <h3>Posts</h3>
                <ul>
                    {this.props.posts.map(x =>
                        <li key={x.id}>
                            {`${x.title} - ${x.user.first} ${x.user.last}`}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const makeGetPosts =  () => createSelector(
    (state, props) => props.user,
    (state) => state.postsById,
    (state) => state.userById,
    (state) => state.postListing,
    (userId, posts, users, listing) =>
        listing
            .filter(id => posts[id].author === userId)
            .map(id => {
               const post = posts[id];
               return {...post, user: users[post.author]}
            }),
)

const mapStateToProps = () => {
    const getPosts = makeGetPosts();
    return (state, ownProps) => ({
        posts: getPosts(state, ownProps)
    });
};

export default connect(mapStateToProps)(PostsByUser);

