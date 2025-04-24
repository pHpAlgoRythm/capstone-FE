import React from 'react';

const ImagePreview = ({ imageData }) => {
  return (
    <div className="flex flex-col items-start gap-2 relative z-10 w-[300px] h-[300px]">

     
        <img
          src={imageData}
          alt="Emergency submitted"
          className='w-full -h-full'
         />
      </div>
    
  );
};

export default ImagePreview;
