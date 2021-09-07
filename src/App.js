import "./App.css";
import Buttonchange1 from "./Buttonchange1";
import Buttonchange2 from "./Buttonchange2";
import GetRestapi from "./GetRestapi";

import Fcomponent from "./Fcomponent";
import Ccomponent from "./Ccomponent";
import Cfoorm from "./Cfoorm";
import "./stylesNew.css";

import Ccomp from "./Ccomp";
import Fcomp from "./Fcomp";
import Fncomp from "./Fcomp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent name="Bogdan" />
        <Fcomponent />
        <Cfoorm />
        <Ccomp />
        <Fcomp />
        <Fncomp />
        <Buttonchange1 />
        <Buttonchange2 />
        <GetRestapi /> {/* Koktailid API */}
      </header>
    </div>
  );
}

export default App;
