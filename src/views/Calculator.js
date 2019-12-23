// 原文链接  https://github.com/ahfarmer/calculator

import React, { Component } from 'react';
import '../css/calculator.css';
import BtnPanel from '../components/calculator/BtnPanel';
import Display from '../components/calculator/Display';
import calculate from '../utils/calculatorC';
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: null,
            total: null,
            operation: null
        }
    }
    handleClick = buttonName => {
        console.log(buttonName)
        this.setState(calculate(this.state, buttonName));
    }
    render() {
        const { next, total } = this.state
        return (<div className="calculator">
            <Display value={next || total || '0'}></Display>
            <BtnPanel handleClick={this.handleClick}></BtnPanel>
        </div>);
    }
}

export default Calculator;
// const Calculator = () => {
//     const handleClick = buttonName => {
//         // console.log(buttonName)
//     }
//     return (<div className="calculator">
//         <Display></Display>
//         <BtnPanel handleClick={handleClick}></BtnPanel>
//     </div>);
// }

// export default Calculator;