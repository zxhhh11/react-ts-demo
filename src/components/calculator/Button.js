import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
    
    const handleClick = () => {
        props.clickHandler(props.name)
    }
    const classNames = ["component-button ", props.orange ? "orange " : "", props.wide ? "wide" : ""]
    return (<div className={classNames.join('').trim()}>
        <button className="calculator-menu" onClick={handleClick}>{props.name}</button>
    </div>);
}
Button.propTypes = {
    name: propTypes.string,
    orange: propTypes.bool,
    wide: propTypes.bool,
    clickHandler: propTypes.func
}
export default Button;