import React from 'react';

import './Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="form-login">
                <div className="group">
                    <label for="username">E-Mail</label>
                    <input type="text" id="username" placeholder="Insert your e-mail" />
                </div>
            </div>
        );
    }
}

export default Login;