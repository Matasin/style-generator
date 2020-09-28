import React, { useState } from 'react';

import '../../components/Slider-Range/Slider-Range'
import CubeInfoForShadow from '../../components/Cube-Info-For-Shadow/Cube-Info-For-Shadow'
import SliderRange from '../../components/Slider-Range/Slider-Range';
import SetColor from '../../components/Set-Color/Set-Color'

const BoxShadow = () => {
    const [boxShadow, setBoxShadow] = useState({
        HorizontalLength: 10,
        VerticalLength: 10,
        BlurRadius: 5,
        SpreadRadius: 0,

        ShadowColor: '#000000',
        BackgroundColor: '#ffffff',

        BoxColor: '#E7A61A',
        Opacity: 0.75,

        Inset: false,
    });
    const { HorizontalLength, VerticalLength, BlurRadius, SpreadRadius, Opacity, ShadowColor, BackgroundColor, BoxColor, Inset } = boxShadow;

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
                    minPX={'0'}
                    maxPX={300}
                    setValue={(e) => setBoxShadow({ ...boxShadow, BlurRadius: e.target.value })}
                />
                <SliderRange
                    text='Spread Radius'
                    value={SpreadRadius}
                    setValue={(e) => setBoxShadow({ ...boxShadow, SpreadRadius: e.target.value })}
                />
                <hr />

                <SetColor
                    text='Shadow Color'
                    value={ShadowColor}
                    setValue={(e) => setBoxShadow({ ...boxShadow, ShadowColor: e.target.value })}
                />
                <SetColor
                    text='Background Color'
                    value={BackgroundColor}
                    setValue={(e) => setBoxShadow({ ...boxShadow, BackgroundColor: e.target.value })}
                />
                <SetColor
                    text='Box Color'
                    value={BoxColor}
                    setValue={(e) => setBoxShadow({ ...boxShadow, BoxColor: e.target.value })}
                />

                <hr />
                <SliderRange
                    text='Opacity'
                    value={Opacity}
                    minPX={'0'}
                    maxPX={1}
                    opacity={true}
                    hidePX={true}
                    setValue={(e) => setBoxShadow({ ...boxShadow, Opacity: e.target.value })}
                />

                <label>Outline</label>
                <label className="switch">
                    <input type="checkbox" />
                    <span
                        className="slider round"
                        onClick={() => setBoxShadow({ ...boxShadow, Inset: !Inset })}
                    ></span>
                </label>
                <label>Inset</label>
            </div>

            <CubeInfoForShadow
                style={boxShadow}
            />
        </div>
    )
};
export default BoxShadow
