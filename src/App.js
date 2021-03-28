import "./App.css";

import SpanElement from "./spanElement";

const jsonData = require("../src/data/babyNamesData.json");
// const dataKids = JSON.parse(jsonData);

jsonData.sort((a, b) => {
  if (a.name[0] < b.name[0]) return -1;
  if (a.name[0] > b.name[0]) return 1;
  else return 0;
});

function App() {
  return (
    <div className="App">
      <SpanElement dataNames={jsonData} />
    </div>
  );
}

export default App;
