import React from 'react';
import Parent2 from "./Parent2";

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parent2: {},
            children1: {demo: 'goood', demo2: 'goood2', demo3: 'goood3'},
            children2: {},
            changeParent: '',
            changeChild: '',
        }
        this.nodeParent2 = null;
    }

    componentDidMount() {

        this.infoParent = {
            display: 'block',
            padding: '25px',
            background: '#4766FF',
            color: '#F6FAFF'
        }
        this.styleState = {
            background: '#FF7E9E',
            padding: '10px',
            margin: '10px'
        }
    }

    btnParent2 = () => {
        console.log('btnParent2');

    }

    btnChildren1 = () => {
        console.log('btnChildren1');
    }

    btnChildren2 = () => {
        console.log('btnChildren2');
        this.setState({
            children2: {children2: 'good morning'}
        });
        this.title = this.nodeParent2.state.title
        // console.log(this.nodeParent2.test())
    }

    changeParentChild = (e) => {
        const value = e.target.value;
        this.setState({
            changeParent: value
        })
    }

    valueObject = (obj) => {
        for (let [key, value] of Object.entries(obj)) {
            return (
                <p>{key} ---- {value}</p>
            )
        }
    }

    changeChild = (value) => {
        this.setState({
            changeChild: value
        });
    }

    render() {
        const {children1, children2, parent2, changeParent, changeChild} = this.state;
        return (
            <div>
                <div style={this.infoParent}>
                    <h4>This is {changeParent}</h4>
                    <p>title parent2: {changeChild}</p>
                    <div style={this.styleState}>Parent2: {this.valueObject(parent2)}</div>
                    <div style={this.styleState}>Children1: {this.valueObject(children1)}</div>
                    <div style={this.styleState}>Children2: {this.valueObject(children2)}</div>
                </div>
                <input type="text" onChange={this.changeParentChild}/>
                <button type='button' onClick={this.btnParent2}>Change parent 2</button>
                <button type='button' onClick={this.btnChildren1}>Change children 1</button>
                <button type='button' onClick={this.btnChildren2}>Change children 2</button>
                <hr/>
                <Parent2 ref={(node) => {
                    this.nodeParent2 = node
                }}
                         infomation1={children1}
                         infomation2={children2}
                         funct={this.valueObject}
                         changeParent2={changeParent}
                         changeChild2={this.changeChild}
                         {...this.state}
                />
                <hr/>
            </div>
        )
    }
}


export default Parent;
