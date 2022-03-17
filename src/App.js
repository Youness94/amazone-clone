import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './layouts/header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import LoginCard from './components/loginCard'
import CreatAccount from './components/createAccount'

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>

            <Route path="/checkout">
            <Header/>
            <Checkout/>
            </Route>
            <Route path="/register">
              < CreatAccount/>
            </Route>
            <Route path="/login">
              < LoginCard/>
            </Route>

           
            <Route path="/">
            <Header/>
              < Home/>
            </Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
