import React, { useState } from 'react';

import '../../components/Slider-Range/Slider-Range'
import CubeInfoForRadius from '../../components/Cube-Info-For-Radius/Cube-Info-For-Radius'
import SliderRange from '../../components/Slider-Range/Slider-Range';
import SetColor from '../../components/Set-Color/Set-Color'
import InputOptions from '../../components/Input-Option/Input-Option'

const BorderRadius = () => {
    const [borderRadius, setBorderRadius] = useState({
        AllCorners: 10,
        TopLeft: 10,
        TopRight: 10,
        BottomLeft: 10,
        BottomRight: 10,

        BorderWidth: 0,

        BorderStyle: 'solid',
        BorderColor: '#000000',
        BackgroundColor: '#e7a61a',
    });
    const { AllCorners, TopLeft, TopRight, BottomLeft, BottomRight, BorderWidth, BorderStyle, BorderColor, BackgroundColor } = borderRadius;

    const arrayOfStyles = [
        'solid',
        'dotted',
        'dashed',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset',
        'none',
        'hidden',
    ]

    return (
        <div className='Border-Radius-Container'>
            <div>
                <SliderRange
                    text='All Corners'
                    minPX={'0'}
                    value={AllCorners}
                    setValue={(e) => setBorderRadius({
                        ...borderRadius,
                        AllCorners: e.target.value,
                        TopLeft: e.target.value,
                        TopRight: e.target.value,
                        BottomLeft: e.target.value,
                        BottomRight: e.target.value,
                    })}
                />
                <SliderRange
                    text='Top Left'
                    minPX={'0'}
                    value={TopLeft}
                    setValue={(e) => setBorderRadius({ ...borderRadius, TopLeft: e.target.value })}
                />
                <SliderRange
                    text='Top Right'
                    minPX={'0'}
                    value={TopRight}
                    setValue={(e) => setBorderRadius({ ...borderRadius, TopRight: e.target.value })}
                />
                <SliderRange
                    text='Bottom Left'
                    minPX={'0'}
                    value={BottomLeft}
                    setValue={(e) => setBorderRadius({ ...borderRadius, BottomLeft: e.target.value })}
                />
                <SliderRange
                    text='Bottom Right'
                    minPX={'0'}
                    value={BottomRight}
                    setValue={(e) => setBorderRadius({ ...borderRadius, BottomRight: e.target.value })}
                />
                <SliderRange
                    text='Border Width'
                    minPX={'0'}
                    value={BorderWidth}
                    setValue={(e) => setBorderRadius({ ...borderRadius, BorderWidth: e.target.value })}
                />
                <hr />

                <InputOptions
                    text='Border Style'
                    value={BorderStyle}
                    options={arrayOfStyles}
                    setValue={(e) => setBorderRadius({ ...borderRadius, BorderStyle: e.target.value })}
                />
                <SetColor
                    text='Border Color'
                    value={BorderColor}
                    setValue={(e) => setBorderRadius({ ...borderRadius, BorderColor: e.target.value })}
                />
                <SetColor
                    text='Background Color'
                    value={BackgroundColor}
                    setValue={(e) => setBorderRadius({ ...borderRadius, BackgroundColor: e.target.value })}
                />

            </div>

            <CubeInfoForRadius
                style={borderRadius}
            />
        </div>
    )
};
export default BorderRadius
