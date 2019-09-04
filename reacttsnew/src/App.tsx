import React from 'react';
import Login from './views/Login/Login'
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './utils/history'
import Home from './views/Home/index'
const App: React.FC = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}></Route>
            <Route path={`${process.env.PUBLIC_URL}/`} component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
