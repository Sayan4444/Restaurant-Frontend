import React from "react";

const renderTitle = (slug) => {
  let title = slug.split("-");
  title[title.length - 1] = `(${title[title.length - 1]})`;
  title = title.join(" ");
  return title;
};

const Header = ({ slug }) => {
  return (
    <div className='h-96 overflow-hidden'>
      <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
        <h1 className='text-7xl text-white capitalize text-shadow text-center'>
          {renderTitle(slug)}
        </h1>
      </div>
    </div>
  );
};

export default Header;
