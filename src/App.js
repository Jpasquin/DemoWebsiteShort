import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import GetStarted from './components/pages/GetStarted';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component = {Home}/>
        <Route path='/getstarted' exact component = {GetStarted}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
