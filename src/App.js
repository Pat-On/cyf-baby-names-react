import "./App.css";

import SpanElement from "./spanElement";

const jsonData = require("../src/data/babyNamesData.json");
// const dataKids = JSON.parse(jsonData);

function App() {
  return (
    <div className="App">
      <SpanElement dataNames={jsonData} />
    </div>
  );
}

export default App;
