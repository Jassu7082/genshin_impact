import Character from "./charcter";
import Body from "./body";
import bgImage from './static/bg.webp';
import Full from "./full";
import { useState } from "react";

function App() {
  const [val, setVal] = useState(0);

  const fullImages = [
    require('./static/full/0.webp'),
    require('./static/full/1.webp'),
    require('./static/full/2.webp'),
    require('./static/full/3.webp'),
    require('./static/full/4.webp'),
    require('./static/full/5.webp'),
    require('./static/full/6.webp'),
    require('./static/full/7.webp'),
    require('./static/full/8.webp'),
    require('./static/full/9.webp'),
    require('./static/full/10.webp'),
    require('./static/full/11.webp'),
    require('./static/full/12.webp'),
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
            {[...Array(13).keys()].map((index) => (
              <Character
                key={index}
                name={`Character ${index}`}
                image={require(`./static/${index}.png`)}
                onMouseEnter={() => handleCharacterHover(index)}
              />
            ))}
          </div>
          <div className="w-[26%] ml-4 h-full">
            <Full image={fullImages[val]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
