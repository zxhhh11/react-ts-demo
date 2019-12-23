import React, { useState, useRef,useEffect } from 'react';
import ChildUseMemo from '../components/ChildUseMemo';
import '../css/useMemoRef.css';
const UseMemoRef = () => {
    const [weiBo, setWeiBo] = useState("Wei Bo");
    const [sanPang, setSanPang] = useState("San Pang");
    const [text,setText] = useState("Peter hui")
    const ipt1 = useRef(null);
    const textRef = useRef()
    // 以为会把Ni Hao 字段存进来结果并没有
    // const ipt2 = useRef('Ni Hao')
    const  btnClick =()=>{
        // console.log(ipt1,'**********',ipt2)
        ipt1.current.value='hello WeiBo'
    }
    useEffect(()=>{
        textRef.current = text;
        console.log('textRef.current+ '+textRef.current)
    })
    return (<div className="use-memo-ref">
        <div>
            <h5>UseMemo</h5>
            <button onClick={() => setWeiBo(new Date().getTime() + ' Wei Bo')}>Wei Bo</button>
            <button onClick={() => setSanPang(new Date().getTime() + ' San Pang is so cute')}>San Pang</button>
            <ChildUseMemo name={weiBo}>{sanPang}</ChildUseMemo>
        </div>
        <div>
            <h5>UseRef</h5>
           {/* <div ref={ipt2}>dd</div> */}
            <input ref={ipt1} type="text"></input>
            <button onClick={btnClick}>在Input输入框 上展示文字</button>
        </div>
        <div>
            <h5>useRef 保存普通变量</h5>
            <input value={text} onChange={(e)=>{setText(e.target.value)}}></input>
        </div>
    </div>);
}



export default UseMemoRef;