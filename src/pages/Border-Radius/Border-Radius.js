import React, { useState } from 'react';

const BorderRadius = () => {
    const [borderRadius, setBorderRadius] = useState({
        AllCorners: 10,
        TopLeft: 10,
        TopRight: 10,
        BottomLeft: 10,
        BottomRight: 10,
        BorderWidth: 0,
        BorderStyle: 'solid',
    });
    return (
        <div>BorderRadius</div>
    )
};
export default BorderRadius