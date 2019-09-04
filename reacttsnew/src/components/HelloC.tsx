import * as React from 'react';
import { Component } from 'react';
export interface Props {
    name:string,
    enthusiasmLevel:number
}
 
export interface State {
    
}
 
class HelloC extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }
     getExclamationMarks=(numChars: number)=> {
        return Array(numChars + 1).join('!')
    }
    render() { 
        const {name,enthusiasmLevel} = this.props
        if (enthusiasmLevel < 0) {
            throw new Error('You could be a little more enthusiastic. :D')
        }
        return ( <div className="helloc">
            HelloC {name+this.getExclamationMarks(enthusiasmLevel)}
        </div> );
    }
}
 
export default HelloC;