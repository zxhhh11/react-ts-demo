import * as React from 'react';
import M1Part from './M1Part';
import M2Part from './M2Part';
import M3Part from './M3Part';
import {  Route, Switch,Redirect } from 'react-router-dom';
export interface Props {
    
}
 
export interface State {
    
}
 
class Module1 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return ( <div className="module1">Module1
        <Switch>

            <Route path={`${process.env.PUBLIC_URL}/module1/m1part`} component={M1Part}></Route>
            <Route path={`${process.env.PUBLIC_URL}/module1/m2part`} component={M2Part}></Route>
            <Route path={`${process.env.PUBLIC_URL}/module1/m3part`} component={M3Part}></Route>
            <Redirect path={`${process.env.PUBLIC_URL}/module1`} to={`${process.env.PUBLIC_URL}/module1/m1part`}></Redirect>
        </Switch>
        
        </div> );
    }
}
 
export default Module1;