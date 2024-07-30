import React from 'react';
import ReactStars from 'react-rating-stars-component';

const CustomReactStars = ({
    count = 5,
    value = 0,
    onChange,
    size = 24,
    activeColor = "#ffd700",
    edit = true,
}) => {
    const originalConsoleError = console.error;
    console.error = (message, ...args) => { // remove issus
        if (typeof message === 'string' && message.includes('defaultProps will be removed')) {
            return;
        }
        originalConsoleError.apply(console, [message, ...args])
    }   
    return (
        <ReactStars
            count={count}
            value={value}
            onChange={onChange}
            size={size}
            activeColor={activeColor}
            edit={edit}
        />
    );
};

export default CustomReactStars;
