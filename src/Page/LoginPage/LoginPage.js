import React, { Component } from 'react'

export default class LoginPage extends Component {
    state = {
        username: 'alice',
        password: '123'
    }
    handleOnChangeLogin = (event) => {
        console.log('event ', event.target.name)
        let { value, name } = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <h1>LoginPage</h1>
                <div className="form-group">
                    <label htmlFor />
                    <input type="text"
                        onChange={this.handleOnChangeLogin}
                        value={this.state.username}
                        name='username'
                        id
                        className="UserName"
                        placeholder='UserName' />
                </div>
                <div className="form-group">
                    <label htmlFor />
                    <input type="text" 
                    onChange={this.handleOnChangeLogin}
                    value={this.state.password} name='password' id className="Password" placeholder='Password' />
                </div>
            </div>
        )
    }
}
