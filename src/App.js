import "./App.css";
import Nav from "./js/Nav.js";
import Page1 from "./js/Page1.js";
import Page2 from "./js/Page2.js";
import Page3 from "./js/Page3.js";
import Page4 from "./js/Page4.js";
import Page5 from "./js/Page5.js";

function App() {
  return (
    <div className="container">
      <Nav />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
}

export default App;
