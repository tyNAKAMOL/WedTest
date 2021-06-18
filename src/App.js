 import {Switch,Route} from "react-router-dom";
 import Main from "./page/Main";

function App() {
  return (
    <Switch>
     <div>
     <Route path="/" component={Main}></Route>
     </div>
    </Switch>
  );
}

export default App;
