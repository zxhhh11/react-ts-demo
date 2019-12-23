import React,{useEffect} from 'react';
import CountNumI from '../components/CountNumI';
import CountNumH from '../components/CountNumH';
import UseContext from '../components/UseContext';
import ReducerDemo from '../components/ReducerDemo';
import SimulationRedux from '../components/toRedux/SimulationRedux';
import GetData from '../components/asyncRequest/GetData';
import '../css/hookPage.css';
import { Link } from "react-router-dom";
const HookPage = () => {
    
    return (<div className="hook-page">
        <div>
            <h5>1、类实现</h5>
            <CountNumI></CountNumI>
        </div>
        <div>
            <h5>2、react-hooks实现(useState)</h5>
            <CountNumH></CountNumH>
        </div>
        <div>
            <h5>3、Context实现</h5>
            <UseContext></UseContext>
        </div>
        <div>
            <h5>4、useReducer实现</h5>
            <ReducerDemo></ReducerDemo>
        </div>
        <div>
            <h5>5、useReducer 和 useContext实现redux</h5>
            <SimulationRedux></SimulationRedux>
        </div>

        <div>
            <h5>6、发起异步请求</h5>
            <GetData></GetData>
        </div>
    </div>);
}

export default HookPage;