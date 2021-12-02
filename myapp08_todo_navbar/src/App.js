import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import TodoForm from './TodoForm';
import TodoView from './TodoView';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/list" component={Home}/>
        <Route path="/input" component={TodoForm}/>
        <Route path="/view/:num" component={TodoView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
