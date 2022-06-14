import React from 'react';
import "./button.scss"

const Button = ({
    className,
    children,
    onClick,
    ...rest
}) => {

    return (
        <button
            onClick={onClick}
            className={`examarly-btn`}
            {...rest}
        >
            { children }
        </button>
    );

}

export default Button;
