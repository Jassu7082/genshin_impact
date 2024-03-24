import React from 'react';

const Body = () => {
  return (
    <div className='text-white'>
      <div className='flex pl-10 pt-[2rem]'>
        <img className='h-10 w-10 border  rounded-full' src={require('./static/0.png')} alt='Kazuha' />
        <p class="text-4xl pl-2 text-white">Jassu</p>
      </div>
      <div>

        <h4>Asia Server</h4>
        <h4>AR 58</h4>
        <div class="flex shadow-sm">
          <p class="py-1 justify-center items-center indent-2 rounded-s-lg focus:outline-none">
            UID846329903
          </p>
          <button
            class="py-1 rounded-e-lg text-white bg-green-300 flex justify-center items-center w-10 h-10"
            onClick={() => { navigator.clipboard.writeText('846329903') }} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="pointer-events-none"
            >
              <rect width="24" height="24"></rect>
              <rect
                x="4"
                y="8"
                width="12"
                height="12"
                rx="1"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></rect>
              <path
                d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="2 2"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className='text-white text-center'>
        <h2 className='text-2xl m-[2rem] '>Summary</h2>
        <div className=" flex justify-center item-center ">

          <div className=" flex grid grid-cols-3 gap-16 w-[80%] border border-2  rounded-lg p-8 m-8">
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