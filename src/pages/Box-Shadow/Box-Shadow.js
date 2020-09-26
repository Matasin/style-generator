import React, { useState } from 'react';

import '../../components/Slider-Range/Slider-Range'
import CubeInfo from '../../components/Cube-Info/Cube-Info'
import SliderRange from '../../components/Slider-Range/Slider-Range';

const BoxShadow = () => {
    const [boxShadow, setBoxShadow] = useState({
        HorizontalLength: 10,
        VerticalLength: 10,
        BlurRadius: 5,
        SpreadRadius: 10,

        ShadowColor: '#000000',
        BackgroundColor: '255, 255, 255',
        BoxColor: '#e7a61a',

        Opacity: 0.75,
    });
    const { HorizontalLength, VerticalLength, BlurRadius, SpreadRadius, Opacity } = boxShadow;

    return (
        <div className='Box-Shadow-Container'>
            <div>
                <SliderRange
                    text='Horizontal Length'
                    value={HorizontalLength}
                    setValue={(e) => setBoxShadow({ ...boxShadow, HorizontalLength: e.target.value })}
                />
                <SliderRange
                    text='Vertical Length'
                    value={VerticalLength}
                    setValue={(e) => setBoxShadow({ ...boxShadow, VerticalLength: e.target.value })}
                />
                <SliderRange
                    text='Blur Radius'
                    value={BlurRadius}
                    setValue={(e) => setBoxShadow({ ...boxShadow, BlurRadius: e.target.value })}
                />
                <SliderRange
                    text='Spread Radius'
                    value={SpreadRadius}
                    setValue={(e) => setBoxShadow({ ...boxShadow, SpreadRadius: e.target.value })}
                />
                <SliderRange
                    text='Opacity'
                    value={Opacity}
                    scope={true}
                    setValue={(e) => setBoxShadow({ ...boxShadow, Opacity: e.target.value })}
                />
            </div>

            <CubeInfo
                style={boxShadow}
            />
        </div>
    )
};
export default BoxShadow
