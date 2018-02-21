import React from 'react';

class Cat extends React.Component {
    render() {
        const {mouse} = this.props;
        return (
            <div>
                <img style={{ position: 'absolute', left: mouse.x, top: mouse.y }} src={'https://cms-assets.tutsplus.com/uploads/users/107/posts/28695/image/26-kitten-illustration.jpg'} alt="cat" height="120" height="120" />
            </div>
        );
    }
}

export default Cat;