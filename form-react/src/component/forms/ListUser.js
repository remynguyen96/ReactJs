import React from 'react';

export default class ListUser extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         infomation: []
    //     }
    // }

    styleList = {
        'width': '100%',
        display: 'flex',
        flexDirection: 'column',
    }

    styleInfo = {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '25px',
        borderBottom: '1px solid rgb(159, 159, 159)',
        paddingBottom: '15px',
    }

    styleSpan = {
        fontSize: '22px',
        fontWeight: 'bold',
    }

    styleUserInfo = {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '10px',
        borderBottom: '1px solid #b8b3b3',
        paddingBottom: '10px',
    }

    styleUser = {
        fontSize: '16px',
        fontWeight: '500',
    }

    styleModify = {
        fontSize: '20px',
        fontWeight: '500',
        color: '#FF524B',
        marginLeft: '-25px'
    }

    getApiMember = () => {
        const options = {
            methods: 'GET',
            // body: new FormData(document.getElementById('comment-form'))
            // body: JSON.stringify({
            //     email: document.getElementById('email').value,
            //     answer: document.getElementById('answer').value
            // })
            // mode: 'cors',
            headers: new Headers({
                'Cache-Control': 'max-age=3600',
                'Content-Type': 'application/json',
            }),
        };
        fetch('https://randomuser.me/api/?results=10', options)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // console.log(response.headers.get('Content-Type'));
                return response.json();
            })
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log('Request failed', err);
            });
    };


    removeUser = (key) => {
        this.props.removeInfo(key);
    }

    editUser = key => {
        this.props.editInfo(key);
    }


    render() {
        const listMember = this.props.listInfo.map((user) => {
            let Obj = {};
            Obj.name = user.name;
            Obj.password = user.password;
            Obj.email = user.email;
            return Obj;
        });
        return (
            <div style={this.styleList}>
                <div style={this.styleInfo}>
                    <span style={this.styleSpan}>ID</span>
                    <span style={this.styleSpan}>Name</span>
                    <span style={this.styleSpan}>Email</span>
                    <span style={this.styleSpan}>Password</span>
                    <span style={this.styleSpan}>Modified</span>
                </div>
                {
                    listMember.map((user, index) => {
                        return (
                            <div key={index} style={this.styleUserInfo}>
                                <span style={this.styleUser}>{index}</span>
                                <span style={this.styleUser}>{user.name}</span>
                                <span style={this.styleUser}>{user.email}</span>
                                <span style={this.styleUser}>{user.password}</span>
                                {/*<a onClick={this.getApiMember()} style={this.styleUser}>X</a>*/}
                                <a onClick={e => this.editUser(index)} style={this.styleModify}>Edit</a>
                                <a onClick={e => this.removeUser(index, e)} style={this.styleModify}>X</a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}