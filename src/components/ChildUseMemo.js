import React,{useMemo} from 'react';
const ChildUseMemo = ({ name, children }) => {
    function ChangeWeiBo(name) {
        console.log(name+4)
        console.log(name, children, "7")
        return name + " is a little dog"
    }
    
    // 每次点击按钮都会触发事件执行 
    // const actionWeiBo = ChangeWeiBo(name)
    // 只有当name 值变化 即点击Wei Bo 按钮才会触发
     const actionWeiBo = useMemo(()=>ChangeWeiBo(name),[name])
    return (<>
        <div>{actionWeiBo}</div>
        <div>{children}</div>
    </>);
}

export default ChildUseMemo;