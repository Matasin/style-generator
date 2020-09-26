import React from 'react';
import './Area.css'

const Area = (props) => (
    <div className='Area'>
        <div className='Area__Content'>
            {props.children}
        </div>
    </div>
);
export default Area