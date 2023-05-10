import React from "react";

const Images = ({ images }) => {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
        {images.length} photos
      </h1>
      <div className='flex flex-wrap'>
        {images.map((image, index) => (
          <img
            className='w-56 h-44 mr-1 mb-1'
            src={image}
            alt='images of restaurants'
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
