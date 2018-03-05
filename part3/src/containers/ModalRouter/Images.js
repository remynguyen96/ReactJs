import React, { Component } from 'react';
import {IMAGES} from "./Gallery";

export const Image = ({ color }) => (
    <div
        style={{
            width: "100%",
            height: 400,
            background: color
        }}
    />
);

class Images extends Component {
    render() {
        const { match } = this.props;
        const image = IMAGES[parseInt(match.params.id, 10)];
        if (!image) {
            return <div>Image not found</div>;
        }
        return (
            <div>
                <h1>{image.title}</h1>
                <Image color={image.color} />
            </div>
        );
    }
}
export default Images;
