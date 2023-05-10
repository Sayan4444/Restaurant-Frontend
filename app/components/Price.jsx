import React from "react";

const Price = ({ price }) => {
  if (price === "CHEAP")
    return (
      <>
        <span className='font-normal'>$$</span>{" "}
        <span className='text-gray-400'>$$</span>
      </>
    );
  else if (price === "REGULAR")
    return (
      <>
        <span className='font-normal'>$$$</span>{" "}
        <span className='text-gray-400'>$</span>
      </>
    );
  else
    return (
      <>
        <span className='font-normal'>$$$$</span>
      </>
    );
};

export default Price;
