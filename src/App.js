import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Chord from "./page/Chord";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/chord" component={Chord} />
    </Switch>
  );
}

export default App;
