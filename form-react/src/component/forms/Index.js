import React from 'react'
// import update from 'react-addons-update';
import UserFormComponent from "./UserForm";
import ListUser from "./ListUser";

export default class FormsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            notify: false,
            message: '',
            status: false,
        }
    }

    saveInfo = info => {
        /**
         * @Description: Methods 1
         **/
        // this.setState({
        //     data: [...this.state.data, info]
        // })
        /**
         * @Description: Methods 2
         **/
        this.setState(preState => ({
            data: preState.data.concat(info),
            status: true,
            message: 'Congratulation ! Register member successful !',
        }));
        /**
         * @Description: Methods 3
         **/
        // this.setState(preState => ({
        //     data: update(preState.data, {$push: [info]})
        // }));
    }

    removeInfo = key => {
        this.setState(preState => ({
            data: preState.data.filter((value, index) => index !== key),
            notify: false,
            // status: false,
            // message: 'Delete successful !',
        }));
    }

    editInfo = key => {
        this.infoDetail = this.state.data.find((value, index) => {
            return index === key;
        });
        this.removeInfo(key);
    }

    stateNotify = status => {
        this.setState({
            notify: status,
        });
    }

    render() {
        return (
            <div>
                <UserFormComponent
                    notify={this.state.notify}
                    updateNotify={status => this.stateNotify(status)}
                    messageNotify={this.state.message}
                    statusNotify={this.state.status}
                    info={submission => this.saveInfo(submission)}
                    editInfo={this.infoDetail}
                />
                {/*<UserFormComponent notify={this.state.notify} info={submission => this.saveInfo(submission)}/>*/}
                <hr/>
                <ListUser
                    listInfo={this.state.data}
                    removeInfo={key => this.removeInfo(key)}
                    editInfo={key => this.editInfo(key)}
                />
            </div>
        )
    }
}