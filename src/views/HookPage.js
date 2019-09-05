import React,{useEffect} from 'react';
import CountNumI from '../components/CountNumI';
import CountNumH from '../components/CountNumH';
import UseContext from '../components/UseContext';
import ReducerDemo from '../components/ReducerDemo';
import SimulationRedux from '../components/toRedux/SimulationRedux';
import GetData from '../components/asyncRequest/GetData';
import { Link } from "react-router-dom";
const HookPage = () => {
    
    return (<div>
        <div>
            <h2>类实现</h2>
            <CountNumI></CountNumI>
        </div>
        <div>
            <h2>react-hooks实现</h2>
            <CountNumH></CountNumH>
        </div>
        <div>
            <h2>Context实现</h2>
            <UseContext></UseContext>
        </div>
        <div>
            <h2>useReducer实现</h2>
            <ReducerDemo></ReducerDemo>
        </div>
        <div>
            <h2>useReducer 和 useContext实现redux</h2>
            <SimulationRedux></SimulationRedux>
        </div>

        <div>
            <h2>发起异步请求</h2>
            <GetData></GetData>
        </div>
    </div>);
}

export default HookPage;