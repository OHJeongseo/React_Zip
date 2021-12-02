import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Switch, Route} from'react-router-dom';
import About from './routers/About';
import Home from './routers/Home';
import Index from './routers/Index';
import Detail from './routers/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/list" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/index" component={Index}/>
        <Route path="/detail" component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
