import React from 'react';

const ImagePreview = ({ imageData }) => {
  return (
    <>
      <img
        src={imageData}
        alt="Emergency submitted"
        className='w-full h-full md:w-md md:h-md rounded-lg'
      />
    </>

  );
};

export default ImagePreview;
