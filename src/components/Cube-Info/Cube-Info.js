import React from 'react';
import './Cube-Info.css'

const CubeInfo = ({ style }) => {
    const { HorizontalLength, VerticalLength, BlurRadius, SpreadRadius, ShadowColor, BackgroundColor, BoxColor, Opacity } = style;

    const info = `box-shadow: ${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(0,0,0,${Opacity})`;
    console.log(BoxColor)
    return (
        <div
            className='Cube-Info'
            style={{
                boxShadow: `${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(0,0,0,${Opacity})`,
                backgroundColor: `${BoxColor}`
            }}
        >
            <p>{info}</p>
        </div>
    )
};
export default CubeInfo