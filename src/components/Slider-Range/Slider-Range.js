import React from 'react';
import './Slider-Range.css'

const SliderRange = ({ text, value, setValue, scope }) => {
    return (
        <div className='Slider-Range'>
            <div className='Slider-Range__Info'>
                <p>{text}</p>
                <input
                    type='text'
                    value={scope ? value : `${value}px`}
                    onChange={setValue}
                />
            </div>
            <input
                type='range'
                min={scope ? 0 : -200}
                step={scope && 0.01}
                max={scope ? 1 : 200}
                value={value}
                onChange={setValue}
                className='Slider-Range__Slider'
            />
        </div>
    )
};
export default SliderRange
