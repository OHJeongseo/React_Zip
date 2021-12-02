import { BrowserRouter, Switch, Route } from "react-router-dom";
import BoardForm from "./BoardForm";
import BoardList from "./BoardList";
import BoardView from "./BoardView";
import Navigation from "./Navigation";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
    <Switch>
        <Route path="/" exact={true} component={BoardForm}/>
        <Route path="/input" component={BoardForm}/>
        <Route path="/list" component={BoardList}/>
        <Route path="/view/:num" component={BoardView}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
