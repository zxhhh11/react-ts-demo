import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();
const StatusContext = createContext();
const UseContext = () => {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(true);
    return (<div>
        <p>You clicked {count} times</p>
        <button onClick={() => { setCount(count + 1) }}>Hooks Increase</button>
        <button onClick={() => { setStatus(!status) }}>{status ? 'isShow' : 'isHide'}</button>
        <CountContext.Provider value={count}>
            <StatusContext.Provider value={status}>
                <Counter></Counter>
            </StatusContext.Provider>
        </CountContext.Provider>
    </div>);
}

export default UseContext;

function Counter() {
    // const count = useContext(CountContext);
    // 第一层子组件  获取传递值得方法一 这个获取多个值时页面会比较乱
    return <div>
        <CountContext.Consumer>
            {count => <i>{count}</i>}
        </CountContext.Consumer>
        <CountChild></CountChild>
        <StatusContext.Consumer>
            {status => <h6>{status ? 'isShow' : 'isHide'}第一层子组件传递多变量</h6>}
        </StatusContext.Consumer>
    </div>
}

function CountChild() {
    //第二层子组件  获取传递值得方法二 这个获取多个值时页面会比较清晰 代码量较少
    const status = useContext(StatusContext)
    const count = useContext(CountContext);
    return <div>
        <h6>{count}深层子组件{status ? 'isShow' : 'isHide'}</h6>
    </div>
}