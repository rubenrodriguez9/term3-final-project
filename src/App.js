import './App.css';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MainPage from './pages/MainPage/MainPage'
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Kanji from './pages/Kanji/Kanji';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={MainPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/study" component={Kanji} />




      </Router>
    </div>
  );
}

export default App;
