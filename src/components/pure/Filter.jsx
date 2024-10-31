// import React from 'react';
import PropTypes from 'prop-types';

//The filter will be a text indicating whether the filter is active or inactive. Click on the text to check the status.
export const Filter = ({ active, onClick, children }) => {

    if(active){
        return (<span className='active'>{ children }</span>)
    }

    return (
        <button 
            className='filter' 
            onClick={ (e) => {
                e.preventDefault();
                onClick();
            } }>
            { children }
        </button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};
