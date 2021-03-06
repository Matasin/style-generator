import React from 'react';

const CubeInfoForShadow = ({ style }) => {
    const { HorizontalLength, VerticalLength, BlurRadius, SpreadRadius, ShadowColor, BackgroundColor, BoxColor, Opacity, Inset } = style;
    
    const hexToRgbA = (hex) => {
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length=== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
        }
        return hex
    }
    const ShadowColorRGB = hexToRgbA(ShadowColor).replace('rgba(','').replace(')','');

    const info1 = `-webkit-box-shadow: ${Inset ? 'inset' : ''} ${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(${ShadowColorRGB},${Opacity});`;
    const info2 = `-moz-box-shadow: ${Inset ? 'inset' : ''} ${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(${ShadowColorRGB},${Opacity});`;
    const info3 = `box-shadow: ${Inset ? 'inset' : ''} ${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(${ShadowColorRGB},${Opacity});`;

    return (
        <div className='Cube-Info-Container'
            style={{ backgroundColor: `${BackgroundColor}` }}
        >
            <div
                className='Cube-Info'
                style={{
                    boxShadow: `${Inset ? 'inset' : ''} ${HorizontalLength}px ${VerticalLength}px ${BlurRadius}px ${SpreadRadius}px rgba(${ShadowColorRGB},${Opacity})`,
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
export default CubeInfoForShadow