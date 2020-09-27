import React from 'react';
import './Cube-Info.css'

const CubeInfo = ({ style }) => {
    const { HorizontalLength, VerticalLength, BlurRadius, SpreadRadius, ShadowColor, BackgroundColor, BoxColor, Opacity } = style;

    // const hexToRgbA = (hex) => {
    //     var c;
    //     if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    //         c= hex.substring(1).split('');
    //         if(c.length=== 3){
    //             c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    //         }
    //         c= '0x'+c.join('');
    //         return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    //     }
    //     throw new Error('Bad Hex');
    // }
    // const ShadowColorRGBA = hexToRgbA(ShadowColor).replace('rgba(','').replace(')','');

    const info1 = `-webkit-box-shadow: ${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(0,0,0,${Opacity})`;
    const info2 = `-moz-box-shadow:  ${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(0,0,0,${Opacity})`;
    const info3 = `box-shadow: ${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(0,0,0,${Opacity})`;

    return (
        <div className='Cube-Info-Container'
            style={{ backgroundColor: `${BackgroundColor}` }}
        >
            <div
                className='Cube-Info'
                style={{
                    boxShadow: `${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(0,0,0,${Opacity})`,
                    backgroundColor: `${BoxColor}`
                }}
            >
                <p>
                    {info1}
                    <br />
                    {info2}
                    <br />
                    {info3}
                </p>
            </div>
        </div>
    )
};
export default CubeInfo