import React from 'react';
import Children1 from '../Children/Children1';


class Parent2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "This is Parent 2"
        }
    }

    test = () => {
        console.log('good test');
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value,
        })
        this.props.changeChild2(e.target.value);
    }

    render() {
        const {infomation1, infomation2, funct, changeParent2} = this.props;
        return (
            <div>
                <h4>title parent: {changeParent2}</h4>
                <h4>{this.state.title}</h4>
                <div>{funct(infomation1)}</div>
                <div>{funct(infomation2)}</div>
                <input type="text" onChange={this.changeTitle} />
                <h4>End Parent 2</h4>
                <hr/>
                <Children1 {...this.props}/>
            </div>
        )
    }
}


export default Parent2;
