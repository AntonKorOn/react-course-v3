// import Starter from "./tutorial/03-conditional-rendering/starter/07-user-challenge";
// import Final from "./tutorial/03-conditional-rendering/final/07-user-challenge";

import Navbar from "./tutorial/04-project-structure/starter/Navbar";
// import About from "./tutorial/04-project-structure/starter/Pages/About";
// import Home from "./tutorial/04-project-structure/starter/Pages/Home";
import {Home, About} from "./tutorial/04-project-structure/starter/Pages";

function App() {
  return (
    <div className="container">
      <h2>Advanced React</h2>
      <h2>Starter</h2>
      {/* <Starter /> */}

      <Navbar />
      <Home />
      <About />

      <br />
      <br />
      <br />

      <h2>Final</h2>

      {/* <Final /> */}
    </div>
  );
}

export default App;
