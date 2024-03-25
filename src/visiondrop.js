import React from 'react';
import './visiondrop.css';
function VisionDrop({ path }) {
  return (
    <div className="relative h-[3rem] w-[3rem] flex justify-center item-center">
      <div className="absolute  inset-0 overflow-hidden rounded-full border border-2">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white rounded-full animate-rays"></div>
      </div>
      <img className="rounded-full border border-2 h-12 w-12" src={path} alt="vision"/>
    </div>
  );
}

export default VisionDrop;
