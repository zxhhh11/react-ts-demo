import React,{useContext } from 'react';
import {ColorContext} from './Color';

const ShowArea = () => {
    const {color,size} = useContext(ColorContext);
    return ( <div style={{color:color}}>字体颜色为{color}+{size}</div> );
}
 
export default ShowArea;