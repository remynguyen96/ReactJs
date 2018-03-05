import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/gallery">Visit the Gallery</Link>
                <h2>Featured Images</h2>
                <ul>
                    <li>
                        <Link to="/images/2">Tomato</Link>
                    </li>
                    <li>
                        <Link to="/images/4">Crimson</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Home;
