import React from 'react';

const CubeInfoForRadius = ({ style }) => {
    const { TopLeft, TopRight, BottomLeft, BottomRight, BorderWidth, BorderStyle, BorderColor, BackgroundColor } = style;

    const info1 = `border-radius: ${TopLeft}px ${TopRight}px ${BottomRight}px ${BottomLeft}px;`
    const info2 = `-moz-border-radius: ${TopLeft}px ${TopRight}px ${BottomRight}px ${BottomLeft}px;`
    const info3 = `-webkit-border-radius: ${TopLeft}px ${TopRight}px ${BottomRight}px ${BottomLeft}px;`
    const info4 = `border: ${BorderWidth}px ${BorderStyle} ${BorderColor};`

    return (
        <div className='Cube-Info-Container'>
            <div
                className='Cube-Info'
                style={{
                    borderRadius: `${TopLeft}px ${TopRight}px ${BottomRight}px ${BottomLeft}px`,
                    backgroundColor: `${BackgroundColor}`,
                    border: `${BorderWidth}px ${BorderStyle} ${BorderColor}`
                }}
            >
                <p>
                    {info1}
                    <br />
                    {info2}
                    <br />
                    {info3}
                    <br />
                    {info4}
                </p>
            </div>
        </div>
    )
};
export default CubeInfoForRadius