import React from 'react';

export default class Notify extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    styleNotify = {
        width: '420px',
        margin: '0 auto',
        marginBottom: '-12px',
        textAlign: 'center',
        textTransform: 'Capitalize',
    }

    styleError = {
        background: '#FF524B',
        color: '#fff',
        padding: '12px',
        borderRadius: '4px',
    };

    styleSuccess = {
        background: '#68FF63',
        color: '#fff',
        padding: '12px',
        borderRadius: '4px',
    }

    render() {
        let err = <p style={this.styleError}>{this.props.message}</p>;
        let success = <p style={this.styleSuccess}>{this.props.message}</p>;
        return (
            <div style={this.styleNotify}>
                {this.props.status ? success : err}
            </div>
        );
    }
}
