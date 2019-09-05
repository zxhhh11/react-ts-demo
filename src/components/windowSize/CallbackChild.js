import React,{useState,useEffect} from 'react';
const CallbackChild = ({callback}) => {
    const [num,setNum] = useState(()=>callback())
    useEffect(()=>{
        setNum(callback())
    },[callback])
    return ( <div>
        {num}
    </div> );
}
 
export default CallbackChild;