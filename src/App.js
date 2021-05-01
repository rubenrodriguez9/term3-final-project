import './App.css';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MainPage from './pages/MainPage/MainPage'
import Grade1 from './pages/Grade1/Grade1'
import Grade2 from './pages/Grade2/Grade2'
import Grade3 from './pages/Grade3/Grade3'
import Grade4 from './pages/Grade4/Grade4'
import Grade5 from './pages/Grade5/Grade5'
import Grade6 from './pages/Grade6/Grade6'
import Grade7 from './pages/Grade7/Grade7'
import Grade8 from './pages/Grade8/Grade8'
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
        <Route exact path="/grade-1" component={Grade1} />
        <Route exact path="/grade-2" component={Grade2} />
        <Route exact path="/grade-3" component={Grade3} />
        <Route exact path="/grade-4" component={Grade4} />
        <Route exact path="/grade-5" component={Grade5} />
        <Route exact path="/grade-6" component={Grade6} />
        <Route exact path="/grade-7" component={Grade7} />
        <Route exact path="/grade-8" component={Grade8} />




      </Router>
    </div>
  );
}

export default App;
