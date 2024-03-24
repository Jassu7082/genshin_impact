import React from 'react';

const Body = () => {
  return (
    <div className='text-white'>
      <div className='flex pl-10 pt-[2rem] justify-center item-center p-8 gap-4'>
        <img className='h-20 w-20 border  rounded-full' src={require('./static/0.png')} alt='Kazuha' />
        <h1 className='text-6xl text-white'>Jassu</h1>
      </div>
      <div className='flex justify-center text-2xl gap-8'>
        <h4>Asia Server</h4>
        <h4>AR 58</h4>
        <h4>UID846329903</h4>   
      </div>

      <div className='text-white text-center'>
        <h2 className='text-2xl m-[2rem] '>Summary</h2>
        <div className=" flex justify-center item-center ">

          <div className=" flex grid grid-cols-3 gap-16 w-[80%] border border-2  rounded-lg p-4 m-2">
            <div>
              <h3>588</h3>
              <h6>Days Active</h6>
            </div>
            <div>
              <h3>772</h3>
              <h6>Achievements</h6>
            </div>
            <div>
              <h3>55</h3>
              <h6>Characters</h6>
            </div>
            <div>
              <h3>66</h3>
              <h6>Anemoculi</h6>
            </div>
            <div>
              <h3>131</h3>
              <h6>Geoculi</h6>
            </div>
            <div>
              <h3>181</h3>
              <h6>Electroculi</h6>
            </div>
            <div>
              <h3>47</h3>
              <h6>Domains Unlocked</h6>
            </div>
            <div>
              <h3>149</h3>
              <h6>Luxurious Chests Opened</h6>
            </div>
            <div>
              <h3>376</h3>
              <h6>Precious Chests Opened</h6>
            </div>
            <div>
              <h3>89</h3>
              <h6>Remarkable Chests Opened</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;