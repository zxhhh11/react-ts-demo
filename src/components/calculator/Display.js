import React from 'react';
import propTypes from 'prop-types'
const Display = ({value}) => {
    return ( <div className="component-display">
      {value}
    </div> );
}
Display.propTypes={
    value:propTypes.string
}
export default Display;