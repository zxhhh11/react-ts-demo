import React, { useState,useCallback,useEffect } from 'react';
const UseWinSize = () => {
    const [size, SetSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    const onResize = useCallback(() => {
        SetSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])
    useEffect(()=>{
        window.addEventListener('resize',onResize)

        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])
    return size;
}

export default UseWinSize;