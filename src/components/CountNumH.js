import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// let isshow =true
const CountNumH = () => {
  const [count, setCount] = useState(0);
  //react hooks 必须按顺序调用 即不可以使用if else
  // if(isshow){
  // const [num,setNum] = useState(12);
  // }
  const [num, setNum] = useState(12);
  useEffect(() => {
    console.log(`useEffect, you clicked ${count} times`)
    document.title = `You clicked ${count} times`
    return () => { console.log(`==========================`) }
  }, [count])
  return (<div>
    <h2>useState</h2>
    <p>You clicked {count} times</p>
    <button onClick={() => { setCount(count + 1) }}>Hooks Increase</button>
    <button onClick={() => { if (count > 0) { setCount(count - 1) } }}>Hooks Decrease</button>

    <div>
      <h2>Router Page useEffect Part</h2>
      <Router>
        <ul>
          <li><Link to="/">Link</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={List}></Route>
      </Router>
    </div>
  </div>);
}

export default CountNumH;

function Index() {
  useEffect(() => {
    console.log(`welcome to index page`);
    return console.log(`leave from index page`);
  }, [12])
  return <h2>this is a index page</h2>
}
function List() {
  useEffect(() => {
    console.log(`welcome to list page`);
    function getData() {
      console.log('componentWillUnMount ')
    }
    return () => {
      /**一下两行代码都会在组件被销毁的componentWillUnMount钩子中调用**/
      console.log('取消订阅')
      getData()
    };
    // useEffect 第二个参数为空 即只在componentDidMount生命周期中调用
    //若[]中输入一状态变量 如输入count 变量 则只有count 变化 该useEffect中的函数才会被调用
  }, [])
  return <div>
    <h2>this is a list page</h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
}
