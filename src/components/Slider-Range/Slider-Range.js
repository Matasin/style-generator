import React from 'react';

const SliderRange = ({ text, value, setValue, hidePX, minPX, maxPX, opacity }) => {
    return (
        <div className='Input-Slider-Container'>
            <div className='Input-Slider__Info'>
                <p>{text}</p>
                <div className='Input-Slider__Info--Right'>
                    <input
                        type='text'
                        value={value}
                        onChange={setValue}
                    />
                    {hidePX ? null : <span>px</span>}
                </div>
            </div>
            <input
                type='range'
                min={minPX ? minPX : -200}
                max={maxPX ? maxPX : 200}
                step={opacity && 0.01}
                value={value}
                onChange={setValue}
                className='Slider-Range'
            />
        </div>
    )
};
export default SliderRange
