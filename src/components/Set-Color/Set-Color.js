import React from 'react';

const SetColor = ({ text, value, setValue }) => {
    return (
        <div className='Input-Color-Container'>
            <div className='Input-Color__Info'>
                <p>{text}</p>
                <div className='Input-Color--Right'>
                    <input
                        type="color"
                        value={value}
                        onChange={setValue}
                    />
                    <input
                        type='text'
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>
        </div>
    )
};
export default SetColor
