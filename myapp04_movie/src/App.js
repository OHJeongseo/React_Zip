import './App.css';
import Movie from './components/Movie';
import Home from './routers/Home';
import About from './routers/About';
import Detail from './routers/Detail';
import MovieView from './routers/MovieView';
import {BrowserRouter, Switch, Route} from'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path='/movie-detail' component={Detail} />
        <Route path='/movie-view' component={MovieView} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
