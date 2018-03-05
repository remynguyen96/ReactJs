import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
];


const Thumbnail = ({ color }) => (
    <div
        style={{
            width: 50,
            height: 50,
            background: color
        }}
    />
);

class Gallery extends Component {
    render() {
        return (
            <div>
                {
                    IMAGES.map((image) => (
                        <Link key={image.id} to={{pathname: `images/${image.id}`, state: {modal: true}}}>
                            <Thumbnail color={image.color} />
                            <h4>{image.title}</h4>
                        </Link>
                    ))
                }
            </div>
        );
    }
}
export default Gallery;
