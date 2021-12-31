import React from 'react';

const ImageItem = ({ src, handleImage }) => {
  return (
    <div className="slider-item" onClick={handleImage.bind(null, src)}>
      <img src={src} alt="" />
    </div>
  );
};

export default ImageItem;
