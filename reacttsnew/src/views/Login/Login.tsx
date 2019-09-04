import * as React from 'react';
import { Component } from 'react';
export interface Props {

}

export interface State {
    userName: string
}

class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { userName: 'hui' };
    }
    render() {
        return (<div className="login_form">Login</div>);
    }
}

export default Login;