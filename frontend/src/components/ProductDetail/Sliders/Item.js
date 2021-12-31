import React from 'react';

const Item = ({ src, handleImage }) => {
    return (
        <div className="slider-item" onClick={handleImage.bind(null, src)}>
            <img src={src} alt="" />
        </div>
    );
};

export default Item;