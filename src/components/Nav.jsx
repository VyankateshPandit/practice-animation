import React from 'react';
import LeftIcon from '../../assets/backarrow.svg';
import RightIcon from '../../assets/bookmark.svg';

const Nav = () => {
  return (
    <div className='flex h-14 px-4 py-3 justify-between items-center text-[#323232]'>
      <img src={LeftIcon} alt="Back" className="w-6 h-6" />
      <p className='font-gt text-brandGrey-500 text-heading-lg'>IELTS</p>
      <img src={RightIcon} alt="Bookmark" className="w-6 h-6" />
    </div>
  );
};

export default Nav;
