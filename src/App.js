import './App.css';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Registerpage from './pages/Registerpage';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/">
            <Registerpage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
