import logo from "./logo.svg";

import ComponentA, { ComponentB } from "./component/componentA"; //ctrl+space
import Persons from "./component/data1";
import Forms from "./component/forms";

function App() {
  return (
    <div className="App">
      <h1>Hello react app</h1>
      {/* <ComponentB />
      <Persons /> */}
      <Forms />
    </div>
  );
}

export default App;
