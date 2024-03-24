import Character from "./charcter";
import Body from "./body";
import bgImage from './static/bg.webp';
import Full from "./full";
import { useState } from "react";

function App() {
  const [val, setVal] = useState(0);

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
    <div>
      <div style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', width: '100%' }}>
        <Body/>
      </div>
      <div className="bg-black">
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
          <div className="w-[26%] ml-4 h-full">
            <Full image={require(`./static/full/${val}.webp`)} name={characterNames[val]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
