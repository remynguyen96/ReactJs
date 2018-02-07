import React, {Component} from 'react';
import ContentPanel from "./ContentPanel";


class InternalPanel extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <ContentPanel />
                <footer>InterPanel.js</footer>
            </div>
        )
    }
};



export default InternalPanel;
