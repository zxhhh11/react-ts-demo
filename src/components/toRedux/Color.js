import React,{createContext,useReducer} from 'react';
import { conditionalExpression } from '@babel/types';

export const ColorContext = createContext({});
export const UPDATE_COLOR='UPDATE_COLOR';

const reducer=(state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return {...state,color:action.color}
            default:
            return state
    }
}
const Color = (props) => {
    //props 相当于子组件 
    // console.log(props)
    const [{color,size},dispatch]=useReducer(reducer,{color:'blue',size:17})
    return ( <ColorContext.Provider value={{color,size,dispatch}}>
    {props.children}
    </ColorContext.Provider> );
}
 
export default Color;