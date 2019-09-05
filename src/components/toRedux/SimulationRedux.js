import React, { useReducer } from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import Color from './Color'
const SimulationRedux = () => {
    return (<div>
        <Color>
            <ShowArea />
            <Buttons />
        </Color>
    </div>);
}

export default SimulationRedux;