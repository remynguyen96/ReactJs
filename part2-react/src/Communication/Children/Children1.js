import React from 'react';
import Proptypes from 'prop-types';
import Children2 from './Children2';

class Children1 extends React.Component {

     static propsTypes = {

     }

    constructor(props) {
        super(props);
    }


    render() {
        // console.log(this.props)
        return (
            <TestCompositon>
                <h4>This is Children 1</h4>
                <div>
                    {/*{this.props.infomation1}*/}
                </div>
                <div>
                    {/*{this.props.infomation2}*/}
                </div>
                <h4>End Children 1</h4>
                <hr/>
                <Children2 />
            </TestCompositon>
        )
    }
}

function FancyBorder(props) {
    return (
        <div style={{padding: '10px', background: props.bg, color: props.color}}>
            {props.children}
        </div>
    );
}

function TestCompositon(props) {
    return (
        <FancyBorder bg="#5FFF71" color="#ffffff">
            <h1 className="Dialog-title">
                Welcome Children 1
            </h1>
            {props.children}
        </FancyBorder>
    )
}

// Children1.propsTypes = { };

export default Children1;