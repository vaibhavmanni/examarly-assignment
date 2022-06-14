import React from 'react';
import "./tab.scss"

const Tab = ({
    className,
    id,
    children,
    onClick,
    ...rest
}) => {

    return (
        <div
            id={id}
            onClick={onClick}
            className={`examarly-tab ${className}`}
            {...rest}
        >
            { children }
        </div>
    );

}

export default Tab;
