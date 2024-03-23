import Character from "./charcter";
import Body from "./body";
function App() {
  return (
    <div className="App">
      <Body />
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
  );
}

export default App;
