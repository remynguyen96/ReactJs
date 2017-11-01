import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Counter from './Counter/counter'
// import App from './App';
// import Auth from "./Auth/auth";
// import MailConfirm from "./Auth/auth";
// import registerServiceWorker from './registerServiceWorker';
// import  ListAnimals, {animals} from './listItem/list';
// import Forms from './Form';
// import Specialization, {ComponentDown, ComponentUp} from "./specialization";
import Emitter from './EventEmitter';

class IndexRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            isOn: true,
        };
        this.toggleBtn2 = this.toggleBtn2.bind(this);
    }

    incrementNumber() {
        this.setState(
            (prevState, props) => ({
                seconds: prevState.seconds + 1
            })
        );
    }

    componentDidMount() {
        this.time = setInterval(() => this.incrementNumber(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    /**
     * @Description: Method 1
     **/
     toggleBtn2() {
        this.setState(preState => ({
            isOn: !preState.isOn
        }));
    }
    /**
     * @Description: Method 2
     **/
     // toggleBtn = () => {
     //    this.setState(preState => ({
     //        isOn: !preState.isOn
     //    }));
     // };

    handlerEmiiter = (event) => {
        this.title = event.target.value;
    }

    reviewGood = () => {

    }

    render() {
        return (
            <div className='root'>
                {/*<h1 className="title">What's Going On Guys {this.state.isOn ? 'On' : 'Off'}</h1>*/}
                {/*<button className='btn' onClick={this.toggleBtn2}>Toggle Button {this.state.seconds}</button>*/}
                {/*<App />*/}
                {/*<Counter />*/}
                {/*<Auth />*/}
                {/*<MailConfirm newMessages={['goodjob', 'hey']}/>*/}
                {/*<ListAnimals toTalAnimals={animals} />*/}
                {/*<Forms />*/}
                {/*<Specialization up={<ComponentUp />} down={<ComponentDown />}>*/}
                {/*<Specialization up={<ComponentUp />} down={<ComponentDown />}>*/}
                    {/*<h2>Good Friend, This Is A Child Composition</h2>*/}
                {/*</Specialization>*/}
                <input type="text" onChange={this.handlerEmiiter}/>
                <Emitter title={this.title} review={this.reviewGood} />
            </div>
        )
    }
}
ReactDOM.render(<IndexRoot />, document.getElementById('root'));
// registerServiceWorker();
