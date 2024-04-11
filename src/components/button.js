import React, { useState } from 'react';

function clickButton() {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
      setClicked(!clicked);
    };

    return (
        <button
          onClick={handleClick}
          className={`flex flex-row justify-start items-center bg-${clicked ? 'red' : 'gray'}-0 hover:bg-red-500 hover:text-white w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg`}
        >
          Click Me
        </button>
      );
};