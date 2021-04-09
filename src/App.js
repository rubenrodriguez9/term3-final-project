import logo from './logo.svg';
import './App.scss';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />


      </Router>
    </div>
  );
}

export default App;
