import React,{useCallback,useState} from 'react';
 import CallbackChild from './CallbackChild';
const set = new Set();
const UseCallback = () => {
    const [num,setNum] = useState(1);
    const [val,setVal] = useState('');
    const callback =useCallback(()=>{
        // 我们可以看到，每次修改count，set.size就会+1，这说明useCallback依赖变量count，
        // count变更时会返回新的函数；而val变更时，set.size不会变，说明返回的是缓存的旧版本函数
        console.log(num)
        return num;
    },[num])
    set.add(callback)
    return ( <div>
        <h4>num {num}</h4>
        <h4>set.size{set.size}</h4>
        <div>
            <button onClick={()=>setNum(num+1)}>+</button>
            <input value={val} onChange={event=>setVal(event.target.value)}>
            </input>
        </div>
        <div>
            <h4>
            useCallback 在父子组件中的应用 
            </h4>
            <CallbackChild callback={callback}></CallbackChild>
        </div>
    </div> );
}
 
export default UseCallback;