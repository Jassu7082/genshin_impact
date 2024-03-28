import Character from "./charcter";
import Body from "./body";
import bgImage from './static/bg.webp';
import Full from "./full";
import { useState } from "react";
import VisionDrop from "./visiondrop";
import anemo from './static/vision/anemo.jpg';
import pyro from './static/vision/pyro.jpg';
import hydro from './static/vision/hydro.jpg';
import cryo from './static/vision/cryo.jpg';
import electro from './static/vision/electro.jpg';
import dendro from './static/vision/dendro.jpg';
import geo from './static/vision/geo.jpg';
import Slider from "./slider";

function App() {
  const [val, setVal] = useState(0);
  const vision = [
    anemo,
    pyro,
    anemo,
    hydro,
    anemo,
    dendro,
    geo,
    pyro,
    hydro,
    cryo,
    electro,
    pyro,
    geo
  ];
  
  const characterNames = [
    "Kazuha",
    "Diluc",
    "Jean",
    "Tartaglia",
    "Scaramouche",
    "Nahida",
    "Arataki Itto",
    "Hu Tao",
    "Mona",
    "Kamisato Ayaka",
    "Raiden Shogun",
    "Yoimiya",
    "Zhongli"
  ];

  const handleCharacterHover = (value) => {
    setVal(value);
  };

  return (
    <div className=" bg-black">
      <Slider />
      <div  style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', width: '100%' }}>
        <Body/>
      </div>
      <div className="bg-black ">
        <h1 className="text-white text-6xl text-center p-6">My Characters</h1>
        <div className="flex">
          <div className="grid grid-cols-4 gap-4 w-[70%] ">
            {characterNames.map((name, index) => (
              <Character
                key={index}
                name={name}
                image={require(`./static/${index}.png`)}
                onMouseEnter={() => handleCharacterHover(index)}
              />
            ))}
          </div>
          <div className="w-[26%] ml-4 h-full relative " id="vision-drop-parent">
            <div>
            <Full image={require(`./static/full/${val}.webp`)} name={characterNames[val]} />
            </div>
            <div className="flex justify-center items-center m-4">
            <VisionDrop path={vision[val]} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
