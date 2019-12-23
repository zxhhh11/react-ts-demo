import React, { useReducer } from 'react';

const ReducerDemo = () => {
    const [{ count, color }, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return { ...state, count: state.count + 1 }
            case 'sub':
                return { ...state, count: state.count - 1 }
            case 'change':
                return { ...state, color: 'blue' }
            default:
                return state
        }
    }, { count: 0, color: 'red' })
    return (<div>
        <h6>现在的分数是{count}</h6>
        <h6>现在的颜色是{color}</h6>
        <button onClick={() => dispatch('add')}>Increment</button>
        <button onClick={() => dispatch('sub')}>Decrement</button>
        <button onClick={() => dispatch('change')}>Change color</button>

    </div>);
}

export default ReducerDemo;