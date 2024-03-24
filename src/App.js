import Character from "./charcter";
import Body from "./body";
import bgImage from './static/bg.webp';
import Full from "./full";
import { useState } from "react";
function App() {
  const [val,setval]=useState(0);
  return (
    <div>
    <div  style={{ backgroundImage: `url(${bgImage})`,  backgroundRepeat: 'no-repeat', width: '100%' }}>
      <Body/>
    </div>
      <div className="bg-black">
      <h1 className="text-white text-6xl text-center p-6">My Characters</h1>
      <div className="flex">

      <div className="grid grid-cols-4 gap-4 w-[70%] ">
      <Character  name="Kazuha" image={require("./static/0.png")} />
      <Character  name="Diluc" image={require("./static/1.png")} />
      <Character  name="Jean" image={require("./static/2.png")} />
      <Character  name="Tartaglia" image={require("./static/3.png")} />
      <Character  name="Scaramouche" image={require("./static/4.png")} />
      <Character  name="Nahida" image={require("./static/5.png")} />
      <Character  name="Arataki Itto" image={require("./static/6.png")} />
      <Character  name="Hu Tao" image={require("./static/7.png")} />
      <Character  name="Mona" image={require("./static/8.png")} />
      <Character  name="Kamisato Ayaka" image={require("./static/9.png")} />
      <Character  name="Raiden Shogun" image={require("./static/10.png")} />
      <Character  name="Yoimiya" image={require("./static/11.png")} />
      <Character  name="Zhongli" image={require("./static/12.png")} />
      </div>
      <div className="w-[26%] ml-4 h-full">
       
        <Full  image={require(`./static/full/${val}.webp`)}/>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;
