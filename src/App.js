import React from 'react';
import { HashRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import './App.css';
import HookPage from './views/HookPage';
import DragPic from './views/DragPic';
import Calculator from './views/Calculator';
import UseMemoRef from './views/UseMemoRef';
import GetWindowSize from './views/GetWindowSize';
// import { history } from './utils/history';
import NoFound from './views/NoFound';
function App() {
  return (
    <div className="App">
      help me
      <Router>
        <div className="link">
          <Link to={`${process.env.PUBLIC_URL}/hook`}>Hooks</Link>
          <Link to={`${process.env.PUBLIC_URL}/drag`}>Dragging</Link>
          <Link to={`${process.env.PUBLIC_URL}/calculator`}>Calculator</Link>
          <Link to={`${process.env.PUBLIC_URL}/useMemo`}>UseMemo/Ref</Link>
          <Link to={`${process.env.PUBLIC_URL}/sizeWin`}>Resize Window</Link>
          <div>
            Hello World
        </div>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/hook`} exact component={HookPage}></Route>
            <Route path={`${process.env.PUBLIC_URL}/drag`} exact component={DragPic}></Route>
            <Route path={`${process.env.PUBLIC_URL}/calculator`} exact component={Calculator}></Route>
            <Route path={`${process.env.PUBLIC_URL}/useMemo`} exact component={UseMemoRef}></Route>
            <Route path={`${process.env.PUBLIC_URL}/sizeWin`} exact component={GetWindowSize}></Route>
            <Redirect path={`${process.env.PUBLIC_URL}/`} exact to={`${process.env.PUBLIC_URL}/useMemo`}></Redirect>
         
            <Route path={`${process.env.PUBLIC_URL}/404`} component={NoFound}></Route>
            <Redirect path={`${process.env.PUBLIC_URL}/*`} to={`${process.env.PUBLIC_URL}/404`}></Redirect>
         
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;

