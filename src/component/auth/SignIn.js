import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email : '',
        password: '',
    }
    handleChange = (e) => {
        this.setState = ({
            [e.tarhet.id]: e.target.value
        })
    }
    handleChange = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <lable htmlFor="email">Email</lable>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <lable htmlFor="password">Password</lable>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink light-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn



