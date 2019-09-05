import React, { Component } from 'react';
class CountNumI extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    countNumEvent = () => {
        let count = this.state.count
        this.setState({
            count: count + 1
        })
    }
    componentDidMount() {
        console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
    }
    componentDidUpdate() {
        console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
    }
    render() {
        return (<div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={this.countNumEvent}>Click me</button>
            <div>
                <h3>用class 方式为计数器添加生命周期</h3>
                <div>

                </div>
            </div>
        </div>);
    }
}

export default CountNumI;