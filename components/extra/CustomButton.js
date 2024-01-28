import React from 'react';

const CustomButton = ({title , bgColor}) => {
  return (
    <button className={`bg-${bgColor} hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`}>
      {title}
    </button>
  );
};

export default CustomButton;
